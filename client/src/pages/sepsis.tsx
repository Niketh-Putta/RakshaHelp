import { Thermometer, Phone, MapPin, Heart, Activity, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmergencyHeader } from "@/components/emergency-header";
import { EmergencyStep } from "@/components/emergency-step";
import { useLanguage } from "@/hooks/use-language";
import { callEmergency } from "@/lib/pwa";

export default function Sepsis() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    callEmergency('112');
  };

  const handleFindHospital = () => {
    alert('Hospital locator functionality - to be implemented');
  };

  const dangerSigns = [
    {
      icon: <Thermometer className="h-4 w-4" />,
      title: translations.highFever,
      description: "Temperature above 101°F (38.3°C) or below 96°F (35.5°C)"
    },
    {
      icon: <Heart className="h-4 w-4" />,
      title: translations.fastHeartRate,
      description: "Heart rate over 90 beats per minute"
    },
    {
      icon: <Activity className="h-4 w-4" />,
      title: translations.breathingProblems,
      description: "Rapid breathing, shortness of breath"
    },
    {
      icon: <Brain className="h-4 w-4" />,
      title: translations.confusion,
      description: "Disorientation, difficulty thinking clearly"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <EmergencyHeader
          title={translations.sepsis}
          subtitle="सेप्सिस - संक्रमण की चेतावनी"
          bgColor="bg-[hsl(var(--emergency-purple))]"
          bgColorHover="bg-[hsl(var(--emergency-purple-hover))]"
          icon={<Thermometer className="h-12 w-12" />}
          emergencyType="sepsis"
        />

        <div className="p-6">
          {/* Danger Signs */}
          <div className="bg-purple-50 border-l-4 border-[hsl(var(--emergency-purple))] p-4 rounded mb-6">
            <h3 className="font-bold text-[hsl(var(--emergency-purple))] mb-2" data-testid="text-danger-signs">
              {translations.dangerSigns}
            </h3>
            <p className="text-sm text-gray-700">
              Sepsis can be deadly. Look for these warning signs:
            </p>
          </div>

          <div className="space-y-4">
            {dangerSigns.map((sign, index) => (
              <Card key={index} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border-0 shadow-sm">
                <div className="bg-[hsl(var(--emergency-purple))] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {sign.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1" data-testid={`danger-sign-title-${index}`}>
                    {sign.title}
                  </h4>
                  <p className="text-sm text-gray-700" data-testid={`danger-sign-description-${index}`}>
                    {sign.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <Button
              onClick={handleCallEmergency}
              className="w-full bg-[hsl(var(--emergency-green))] hover:bg-[hsl(var(--emergency-green-hover))] text-white py-4 rounded-xl font-bold text-xl touch-target"
              data-testid="button-call-emergency"
            >
              <Phone className="mr-3 h-6 w-6" />
              {translations.call112Now}
            </Button>
            <Button
              onClick={handleFindHospital}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold touch-target"
              data-testid="button-find-hospital"
            >
              <MapPin className="mr-2 h-5 w-5" />
              {translations.findHospital}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
