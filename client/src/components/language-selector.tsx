import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/use-language";

export function LanguageSelector() {
  const { language, changeLanguage, availableLanguages, translations } = useLanguage();

  return (
    <div className="flex justify-center items-center space-x-2 mb-6">
      <Globe className="text-gray-600 h-5 w-5" />
      <Select value={language} onValueChange={changeLanguage} data-testid="language-selector">
        <SelectTrigger className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-auto min-w-[180px]">
          <SelectValue placeholder={translations.language} />
        </SelectTrigger>
        <SelectContent>
          {availableLanguages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} data-testid={`language-option-${lang.code}`}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
