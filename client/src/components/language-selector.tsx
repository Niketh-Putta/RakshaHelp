import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Language } from "@/lib/translations";

export function LanguageSelector() {
  const { language, changeLanguage, availableLanguages, translations } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(language);

  const handleLanguageChange = () => {
    console.log('Changing language to:', selectedLanguage);
    changeLanguage(selectedLanguage);
    console.log('Language changed - new translations loaded');
    
    // Force a re-render by updating the component state
    setTimeout(() => {
      console.log('Current language after change:', selectedLanguage);
    }, 100);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mb-6">
      <Globe className="text-gray-600 h-5 w-5" />
      <select 
        value={selectedLanguage} 
        onChange={(e) => {
          console.log('Selected language:', e.target.value);
          setSelectedLanguage(e.target.value as Language);
        }}
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-auto min-w-[180px]"
        data-testid="language-selector"
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code} data-testid={`language-option-${lang.code}`}>
            {lang.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleLanguageChange}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg flex items-center space-x-1 font-medium"
        data-testid="language-change-button"
      >
        <Check className="h-4 w-4" />
        <span>Apply</span>
      </button>
    </div>
  );
}
