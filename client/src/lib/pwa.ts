// client/src/lib/pwa.ts

// Guarded SW registration — skips inside Android WebView or ?nosw=1
export const registerServiceWorker = async () => {
  if (!("serviceWorker" in navigator)) return;

  // Detect Android WebView or explicit ?nosw=1 param
  const ua = navigator.userAgent.toLowerCase();
  const isAndroidWebView =
    ua.includes("wv") || (ua.includes("android") && !ua.includes("chrome/"));
  const urlHasNoSW =
    new URL(window.location.href).searchParams.get("nosw") === "1";

  if (isAndroidWebView || urlHasNoSW) {
    console.log("[PWA] SW disabled in WebView");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      updateViaCache: "none",
    });
    console.log("Service Worker registered successfully:", registration);
    return registration;
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
};

export const callEmergency = (number: string) => {
  try {
    const phoneUrl = `tel:${number}`;

    // Method 1: Direct window.location redirect
    if (window.location) {
      window.location.href = phoneUrl;
      return;
    }

    // Method 2: Hidden link fallback
    const link = document.createElement("a");
    link.href = phoneUrl;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to initiate phone call:", error);
    try {
      // Method 3: window.open fallback
      window.open(`tel:${number}`, "_self");
    } catch (fallbackError) {
      // Method 4: Show alert as last resort
      alert(`Please call emergency services: ${number}`);
    }
  }
};

export const playAudioInstructions = (
  language: string,
  emergencyType: string,
) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(
      `Playing audio instructions for ${emergencyType} in ${language}`,
    );
    utterance.lang = language === "hi" ? "hi-IN" : "en-US";
    speechSynthesis.speak(utterance);
  } else {
    alert(`Audio instructions for ${emergencyType} would play in ${language}`);
  }
};

export const logEmergencyAccess = (emergencyType: string, language: string) => {
  const logData = {
    emergencyType,
    language,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  const logs = JSON.parse(localStorage.getItem("emergency-logs") || "[]");
  logs.push(logData);
  localStorage.setItem("emergency-logs", JSON.stringify(logs));

  console.log("Emergency access logged:", logData);
};

// Init PWA with guard
export async function initPWA() {
  try {
    if (typeof registerServiceWorker === "function") {
      await registerServiceWorker();
      return;
    }

    // fallback direct registration (still guarded)
    if ("serviceWorker" in navigator) {
      const ua = navigator.userAgent.toLowerCase();
      const isAndroidWebView =
        ua.includes("wv") ||
        (ua.includes("android") && !ua.includes("chrome/"));
      const urlHasNoSW =
        new URL(window.location.href).searchParams.get("nosw") === "1";

      if (isAndroidWebView || urlHasNoSW) {
        console.log("[PWA] SW disabled in WebView");
        return;
      }

      const reg = await navigator.serviceWorker.register("/sw.js", {
        updateViaCache: "none",
      });
      reg.update().catch(() => {});
      if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!(window as any).__reloadedBySW) {
          (window as any).__reloadedBySW = true;
          location.reload();
        }
      });
    }
  } catch (e) {
    console.error("initPWA failed:", e);
  }
}
