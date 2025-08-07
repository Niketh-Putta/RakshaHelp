import { ArrowLeft, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playAudioInstructions } from "@/lib/pwa";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

interface EmergencyHeaderProps {
  title: string;
  subtitle: string;
  bgColor: string;
  bgColorHover: string;
  icon: React.ReactNode;
  emergencyType: string;
}

export function EmergencyHeader({ 
  title, 
  subtitle, 
  bgColor, 
  bgColorHover, 
  icon, 
  emergencyType 
}: EmergencyHeaderProps) {
  const { language, translations } = useLanguage();

  const handlePlayAudio = () => {
    playAudioInstructions(language, emergencyType);
  };

  return (
    <>
      {/* Header */}
      <div className={`${bgColor} text-white p-6 text-center relative`}>
        <Link href="/" data-testid="back-to-home">
          <Button 
            variant="ghost" 
            size="icon"
            className={`absolute top-4 left-4 text-white hover:${bgColorHover} p-2 rounded-full`}
            data-testid="button-back"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <div className="text-5xl mb-3">
          {icon}
        </div>
        <h2 className="text-2xl font-bold emergency-text" data-testid={`text-title-${emergencyType}`}>
          {title}
        </h2>
        <p className="text-sm opacity-90 mt-2" data-testid={`text-subtitle-${emergencyType}`}>
          {subtitle}
        </p>
      </div>

      {/* Audio Button */}
      <div className="p-6">
        <Button 
          onClick={handlePlayAudio}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transform active:scale-95 transition-all touch-target"
          data-testid="button-play-audio"
        >
          <Volume2 className="mr-3 h-5 w-5" />
          <span>{translations.playAudio}</span>
        </Button>
      </div>
    </>
  );
}
