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
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'हिंदी (Hindi)' },
      { code: 'bn', name: 'বাংলা (Bengali)' },
      { code: 'ta', name: 'தமிழ் (Tamil)' },
      { code: 'te', name: 'తెలుగు (Telugu)' },
      { code: 'mr', name: 'मराठी (Marathi)' }
    ] as { code: Language; name: string }[]
  };
}
