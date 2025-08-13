import { useState, useEffect } from "react";
import {
  Language,
  getTranslation,
  Translations,
  availableLanguages,
} from "@/lib/translations-clean";

const LANGUAGE_STORAGE_KEY = "emergency-app-language";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return (saved as Language) || "en";
  });

  const [translations, setTranslations] = useState<Translations>(() =>
    getTranslation(language),
  );

  useEffect(() => {
    // Persist choice
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    // Load translations for the current language
    const t = getTranslation(language);
    setTranslations(t);

    // ---- DEBUG LOGS (to verify data inside WebView) ----
    try {
      console.log("[LANG DEBUG] language =", language);
      console.log("[LANG DEBUG] ourGoalTitle =", t?.ourGoalTitle ?? null);
      console.log(
        "[LANG DEBUG] ourGoalProblem1 preview =",
        t?.ourGoalProblem1 ? t.ourGoalProblem1.slice(0, 80) : null,
      );
    } catch (e) {
      console.log("[LANG DEBUG] error while logging:", e);
    }
    // ----------------------------------------------------
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    console.log(
      "useLanguage: Changing language from",
      language,
      "to",
      newLanguage,
    );
    setLanguage(newLanguage);
    const t = getTranslation(newLanguage);
    setTranslations(t);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    console.log("useLanguage: Language changed to", newLanguage);
  };

  return {
    language,
    translations,
    changeLanguage,
    availableLanguages,
  };
}
