import { Brain, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmergencyHeader } from "@/components/emergency-header";
import { EmergencyStep } from "@/components/emergency-step";
import { useLanguage } from "@/hooks/use-language";
import { callEmergency } from "@/lib/pwa";

export default function Stroke() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    callEmergency('112');
  };

  const handleFindHospital = () => {
    alert('Hospital locator functionality - to be implemented');
  };

  const fastSteps = [
    {
      letter: "F",
      title: translations.faceDrooping,
      description: "Ask person to smile. Is one side drooping?"
    },
    {
      letter: "A", 
      title: translations.armWeakness,
      description: "Ask to raise both arms. Does one drift down?"
    },
    {
      letter: "S",
      title: translations.speechDifficulty,
      description: "Ask to repeat simple phrase. Slurred speech?"
    },
    {
      letter: "T",
      title: translations.timeToCall,
      description: "If any signs present, note time & call 112"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <EmergencyHeader
          title={translations.stroke}
          subtitle="आघात - तुरंत पहचानें"
          bgColor="bg-[hsl(var(--emergency-orange))]"
          bgColorHover="bg-[hsl(var(--emergency-orange-hover))]"
          icon={<Brain className="h-12 w-12" />}
          emergencyType="stroke"
        />

        <div className="p-6">
          {/* FAST Test */}
          <div className="bg-orange-50 border-l-4 border-[hsl(var(--emergency-orange))] p-4 rounded mb-6">
            <h3 className="font-bold text-[hsl(var(--emergency-orange))] mb-2" data-testid="text-fast-test">
              {translations.fastTest}
            </h3>
            <p className="text-sm text-gray-700">
              Quick stroke identification method
            </p>
          </div>

          <div className="space-y-4">
            {fastSteps.map((step, index) => (
              <EmergencyStep
                key={index}
                stepNumber={step.letter}
                title={step.title}
                description={step.description}
                bgColor="bg-[hsl(var(--emergency-orange))]"
                imageAlt={`FAST ${step.letter} test`}
              />
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
