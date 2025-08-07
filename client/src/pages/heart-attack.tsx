import { Activity, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmergencyHeader } from "@/components/emergency-header";
import { EmergencyStep } from "@/components/emergency-step";
import { useLanguage } from "@/hooks/use-language";
import { callEmergency } from "@/lib/pwa";

export default function HeartAttack() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    callEmergency('112');
  };

  const steps = [
    {
      title: translations.callEmergency,
      description: "Call 112 immediately. Don't wait for symptoms to improve."
    },
    {
      title: translations.giveAspirin,
      description: "Chew 1 adult aspirin (325mg) unless allergic. Don't give to children."
    },
    {
      title: translations.stayCalmRest,
      description: "Keep person calm, seated, and comfortable. Loosen tight clothing."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <EmergencyHeader
          title={translations.heartAttack}
          subtitle="दिल का दौरा - तुरंत मदद"
          bgColor="bg-[hsl(var(--emergency-yellow))]"
          bgColorHover="bg-[hsl(var(--emergency-yellow-hover))]"
          icon={<Activity className="h-12 w-12" />}
          emergencyType="heart-attack"
        />

        <div className="p-6">
          {/* Warning Signs */}
          <div className="bg-yellow-50 border-l-4 border-[hsl(var(--emergency-yellow))] p-4 rounded mb-6">
            <h3 className="font-bold text-[hsl(var(--emergency-yellow))] mb-2" data-testid="text-warning-signs">
              {translations.warningSigns}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Chest pain or discomfort</li>
              <li>• Pain in arms, neck, jaw, back</li>
              <li>• Shortness of breath</li>
              <li>• Cold sweats, nausea</li>
            </ul>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <EmergencyStep
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                bgColor="bg-[hsl(var(--emergency-yellow))]"
                imageAlt={`Heart Attack Step ${index + 1}`}
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
          </div>
        </div>
      </Card>
    </div>
  );
}
