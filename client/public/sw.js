const CACHE_NAME = 'emergency-aid-v1';
const urlsToCache = [
  '/',
  '/cardiac-arrest',
  '/stroke', 
  '/heart-attack',
  '/sepsis',
  '/manifest.json'
];

// Install service worker and cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle background sync for emergency logs
self.addEventListener('sync', (event) => {
  if (event.tag === 'emergency-log-sync') {
    event.waitUntil(
      // Sync emergency logs when connection is restored
      syncEmergencyLogs()
    );
  }
});

async function syncEmergencyLogs() {
  try {
    const logs = JSON.parse(localStorage.getItem('emergency-logs') || '[]');
    if (logs.length > 0) {
      // Here you would send logs to your analytics endpoint
      console.log('Syncing emergency logs:', logs);
      // Clear synced logs
      localStorage.setItem('emergency-logs', '[]');
    }
  } catch (error) {
    console.error('Failed to sync emergency logs:', error);
  }
}

// Handle push notifications for emergency alerts
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Emergency alert',
    icon: '/manifest-icon-192.png',
    badge: '/manifest-icon-96.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Emergency Guide'
      },
      {
        action: 'call',
        title: 'Call 112'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Emergency First Aid', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'call') {
    // Open dialer for emergency call
    event.waitUntil(
      clients.openWindow('tel:112')
    );
  } else {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
