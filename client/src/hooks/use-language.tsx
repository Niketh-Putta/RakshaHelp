import { useState, useEffect } from 'react';
import { Language, getTranslation, Translations } from '@/lib/translations';

const LANGUAGE_STORAGE_KEY = 'emergency-app-language';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return (saved as Language) || 'en';
  });

  const [translations, setTranslations] = useState<Translations>(() => 
    getTranslation(language)
  );

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    setTranslations(getTranslation(language));
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return {
    language,
    translations,
    changeLanguage,
    availableLanguages: [
      // Indian Languages
      { code: 'en', name: '🇺🇸 English' },
      { code: 'hi', name: '🇮🇳 हिंदी (Hindi)' },
      { code: 'bn', name: '🇮🇳 বাংলা (Bengali)' },
      { code: 'ta', name: '🇮🇳 தமிழ் (Tamil)' },
      { code: 'te', name: '🇮🇳 తెలుగు (Telugu)' },
      { code: 'mr', name: '🇮🇳 मराठी (Marathi)' },
      { code: 'kn', name: '🇮🇳 ಕನ್ನಡ (Kannada)' },
      { code: 'ml', name: '🇮🇳 മലയാളം (Malayalam)' },
      { code: 'gu', name: '🇮🇳 ગુજરાતી (Gujarati)' },
      { code: 'pa', name: '🇮🇳 ਪੰਜਾਬੀ (Punjabi)' },
      { code: 'or', name: '🇮🇳 ଓଡ଼ିଆ (Odia)' },
      { code: 'as', name: '🇮🇳 অসমীয়া (Assamese)' },
      { code: 'ur', name: '🇵🇰 اردو (Urdu)' },
      // European Languages
      { code: 'es', name: '🇪🇸 Español (Spanish)' },
      { code: 'fr', name: '🇫🇷 Français (French)' },
      { code: 'de', name: '🇩🇪 Deutsch (German)' },
      { code: 'it', name: '🇮🇹 Italiano (Italian)' },
      { code: 'pt', name: '🇵🇹 Português (Portuguese)' },
      { code: 'ru', name: '🇷🇺 Русский (Russian)' },
      // Asian Languages
      { code: 'zh', name: '🇨🇳 中文 (Chinese)' },
      { code: 'ja', name: '🇯🇵 日本語 (Japanese)' },
      { code: 'ko', name: '🇰🇷 한국어 (Korean)' },
      { code: 'ar', name: '🇸🇦 العربية (Arabic)' }
    ] as { code: Language; name: string }[]
  };
}
