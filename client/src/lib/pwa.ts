export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

export const callEmergency = (number: string) => {
  if (confirm(`Call emergency number ${number}?`)) {
    window.location.href = `tel:${number}`;
  }
};

export const playAudioInstructions = (language: string, emergencyType: string) => {
  // This would implement Web Speech API or audio file playback
  // For now, we'll use browser's speech synthesis
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(
      `Playing audio instructions for ${emergencyType} in ${language}`
    );
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
    speechSynthesis.speak(utterance);
  } else {
    alert(`Audio instructions for ${emergencyType} would play in ${language}`);
  }
};

export const logEmergencyAccess = (emergencyType: string, language: string) => {
  // Log emergency screen access for analytics
  const logData = {
    emergencyType,
    language,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };
  
  // Store locally for offline analysis
  const logs = JSON.parse(localStorage.getItem('emergency-logs') || '[]');
  logs.push(logData);
  localStorage.setItem('emergency-logs', JSON.stringify(logs));
  
  console.log('Emergency access logged:', logData);
};
