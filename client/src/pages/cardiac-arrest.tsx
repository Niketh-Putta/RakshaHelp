import { Heart, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmergencyHeader } from "@/components/emergency-header";
import { EmergencyStep } from "@/components/emergency-step";
import { useLanguage } from "@/hooks/use-language";
import { callEmergency } from "@/lib/pwa";

export default function CardiacArrest() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    callEmergency('112');
  };

  const handleFindAED = () => {
    alert('AED locator functionality - to be implemented');
  };

  const steps = [
    {
      title: translations.checkResponsiveness,
      description: "Shake shoulders and shout \"Are you okay?\" Check for breathing."
    },
    {
      title: translations.positionHands,
      description: "Place heel of one hand on center of chest, between nipples. Place other hand on top."
    },
    {
      title: translations.pushHardFast,
      description: "Push at least 2 inches deep. 100-120 compressions per minute. Let chest return completely."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <EmergencyHeader
          title={translations.cardiacArrest}
          subtitle="हृदयगति रोकना - तत्काल कार्रवाई"
          bgColor="bg-[hsl(var(--emergency-red))]"
          bgColorHover="bg-[hsl(var(--emergency-red-hover))]"
          icon={<Heart className="h-12 w-12" />}
          emergencyType="cardiac-arrest"
        />

        {/* Steps Container */}
        <div className="p-6">
          {/* Emergency Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <EmergencyStep
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                bgColor="bg-[hsl(var(--emergency-red))]"
                imageAlt={`CPR Step ${index + 1}`}
              />
            ))}
          </div>

          {/* Emergency Action Buttons */}
          <div className="mt-8 space-y-3">
            <Button
              onClick={handleCallEmergency}
              className="w-full bg-[hsl(var(--emergency-green))] hover:bg-[hsl(var(--emergency-green-hover))] text-white py-4 rounded-xl font-bold text-xl transform active:scale-95 transition-all touch-target"
              data-testid="button-call-emergency"
            >
              <Phone className="mr-3 h-6 w-6" />
              {translations.call112Now}
            </Button>
            <Button
              onClick={handleFindAED}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transform active:scale-95 transition-all touch-target"
              data-testid="button-find-aed"
            >
              <MapPin className="mr-2 h-5 w-5" />
              {translations.findAED}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
