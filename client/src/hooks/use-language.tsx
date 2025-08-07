import { useState, useEffect } from 'react';
import { Language, getTranslation, Translations, availableLanguages } from '@/lib/translations-clean';

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
    console.log('useLanguage: Changing language from', language, 'to', newLanguage);
    setLanguage(newLanguage);
    setTranslations(getTranslation(newLanguage));
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    console.log('useLanguage: Language changed to', newLanguage);
  };

  return {
    language,
    translations,
    changeLanguage,
    availableLanguages
  };
}
