import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function LanguageSelector() {
  const { language, changeLanguage, availableLanguages, translations } = useLanguage();

  return (
    <div className="flex justify-center items-center space-x-2 mb-6">
      <Globe className="text-gray-600 h-5 w-5" />
      <select 
        value={language} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-auto min-w-[180px]"
        data-testid="language-selector"
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code} data-testid={`language-option-${lang.code}`}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
