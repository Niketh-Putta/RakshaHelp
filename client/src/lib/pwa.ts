// client/src/lib/pwa.ts

export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registered successfully:", registration);
      return registration;
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  }
};

export const callEmergency = (number: string) => {
  try {
    window.location.href = `tel:${number}`;
  } catch (error) {
    console.error("Failed to initiate phone call:", error);
    window.open(`tel:${number}`);
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
