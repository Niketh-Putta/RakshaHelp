// sw.js
// ---- VERSION: bump this every deploy to invalidate old caches ----
const SW_VERSION = "v3.0.0";
const STATIC_CACHE = `static-${SW_VERSION}`;

// Precache only essential shell if you truly need it offline.
// Keep this list small; don't put your whole site here.
const PRECACHE_URLS = [
  "/", // HTML shell (optional — network-first below will still fetch it)
  "/manifest.json",
  "/manifest-icon-192.png",
  "/manifest-icon-96.png",
];

// -------------------- Install & Activate --------------------
self.addEventListener("install", (event) => {
  self.skipWaiting(); // activate new SW ASAP
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {}),
  );
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== STATIC_CACHE).map((k) => caches.delete(k)),
        ),
      ),
  );
});

// -------------------- Fetch strategy --------------------
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const accept = req.headers.get("accept") || "";
  const dest = req.destination;

  // Treat navigations/HTML as network-first
  const isHTML = dest === "document" || accept.includes("text/html");

  if (isHTML) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Stale-while-revalidate for static assets
  if (["script", "style", "font", "image", "audio", "video"].includes(dest)) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // default fallback: try cache, then network
  event.respondWith(caches.match(req).then((r) => r || fetch(req)));
});

async function networkFirst(req) {
  try {
    const res = await fetch(req, { cache: "no-store" });
    const cache = await caches.open(STATIC_CACHE);
    cache.put(req, res.clone());
    return res;
  } catch (e) {
    const cached = await caches.match(req);
    if (cached) return cached;
    // Optional: return an offline fallback page instead
    return new Response("You are offline.", {
      status: 503,
      statusText: "Offline",
    });
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(req);

  const fetchPromise = fetch(req)
    .then((res) => {
      // avoid caching opaque/failed responses
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    })
    .catch(() => cached || Promise.reject(e));

  return cached || fetchPromise;
}

// -------------------- Background Sync (placeholder) --------------------
// NOTE: localStorage is NOT available in service workers.
// Use IndexedDB if you need to queue logs and send them later.
self.addEventListener("sync", (event) => {
  if (event.tag === "emergency-log-sync") {
    event.waitUntil(syncEmergencyLogs());
  }
});

async function syncEmergencyLogs() {
  // TODO: read from IndexedDB and POST to your endpoint, then delete.
  // This is just a stub so the SW doesn’t throw.
  return Promise.resolve();
}

// -------------------- Push & notification clicks --------------------
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "Emergency alert",
    icon: "/manifest-icon-192.png",
    badge: "/manifest-icon-96.png",
    vibrate: [200, 100, 200],
    requireInteraction: true,
    actions: [
      { action: "view", title: "View Emergency Guide" },
      { action: "call", title: "Call 112" },
    ],
  };
  event.waitUntil(
    self.registration.showNotification("Emergency First Aid", options),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.action === "call" ? "tel:112" : "/";
  event.waitUntil(clients.openWindow(url));
});
