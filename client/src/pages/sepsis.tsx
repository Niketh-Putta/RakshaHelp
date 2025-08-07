import { Link } from "wouter";
import { ArrowLeft, Phone, Thermometer, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

export default function Sepsis() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    window.location.href = "tel:112";
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-md min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 bg-white rounded-2xl p-4 shadow-sm">
        <Link href="/">
          <Button variant="ghost" size="sm" className="p-2" data-testid="button-back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex items-center space-x-3">
          <Thermometer className="h-8 w-8 text-[hsl(var(--emergency-purple))]" />
          <h1 className="text-xl font-bold text-[hsl(var(--emergency-purple))]" data-testid="text-page-title">
            {translations.sepsis}
          </h1>
        </div>
        <div className="w-10" />
      </header>

      {/* Warning Signs */}
      <Card className="mb-6 border-[hsl(var(--emergency-purple))] border-2">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-[hsl(var(--emergency-purple))] mr-2" />
            <h2 className="text-lg font-bold text-[hsl(var(--emergency-purple))]" data-testid="text-warning-signs-title">
              {translations.warningSigns}
            </h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-purple))] mr-2">•</span>
              <span>{translations.feverOrLowTemp}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-purple))] mr-2">•</span>
              <span>{translations.fastHeartRateBreathing}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-purple))] mr-2">•</span>
              <span>{translations.confusionDrowsiness}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-purple))] mr-2">•</span>
              <span>{translations.paleColdSkin}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-purple))] mr-2">•</span>
              <span>{translations.infectionSymptoms}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 px-2">{translations.stepByStepActions}</h2>
        
        {/* Step 1 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-purple))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-purple))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">{translations.callEmergency}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.mentionSymptomsInfection}
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Phone + thermometer or infection symbol]</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-purple))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-purple))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg">{translations.layPersonFlat}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.keepLyingWarm}
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Person lying under blanket]</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-purple))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-purple))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg">{translations.dontGiveFoodMeds}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.avoidUnlessInstructed}
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Crossed-out pill or food]</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-purple))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-purple))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="font-bold text-lg">{translations.monitorVitalSigns}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.checkBreathingSkinAlertness}
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Face with pale skin, visible breath]</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Call Button - Sticky */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <Button
          onClick={handleCallEmergency}
          className="w-full bg-[hsl(var(--emergency-purple))] hover:bg-[hsl(var(--emergency-purple-hover))] text-white py-6 text-lg font-bold rounded-2xl shadow-lg"
          data-testid="button-emergency-call"
        >
          <Phone className="mr-2 h-6 w-6" />
          {translations.call112Now}
        </Button>
        <p className="text-center text-xs text-gray-600 mt-2">
          {translations.saySepsis}
        </p>
      </div>

      {/* Bottom padding for sticky button */}
      <div className="h-24"></div>
    </div>
  );
}