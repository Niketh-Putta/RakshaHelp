import { Link } from "wouter";
import { ArrowLeft, Phone, Brain, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import emergencyCall112Img from '/src/assets/emergency-call-112-standard.png';
import strokeFastTestImg from '/src/assets/stroke-fast-test.png';
import strokeRecoveryPositionImg from '/src/assets/stroke-recovery-position.png';
import strokeNoFoodDrinkImg from '/src/assets/stroke-no-food-drink.png';

export default function Stroke() {
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
          <Brain className="h-8 w-8 text-[hsl(var(--emergency-orange))]" />
          <h1 className="text-xl font-bold text-[hsl(var(--emergency-orange))]" data-testid="text-page-title">
            {translations.stroke}
          </h1>
        </div>
        <div className="w-10" />
      </header>

      {/* Warning Signs */}
      <Card className="mb-6 border-[hsl(var(--emergency-orange))] border-2">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-[hsl(var(--emergency-orange))] mr-2" />
            <h2 className="text-lg font-bold text-[hsl(var(--emergency-orange))]" data-testid="text-warning-signs-title">
              {translations.warningSigns} (Use FAST)
            </h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>{translations.faceDrooping}</strong> {translations.faceDroopingOneSide}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>{translations.armWeakness}</strong> {translations.armWeaknessText}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>{translations.speechDifficulty}</strong> {translations.speechDifficultyText}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>{translations.timeToCall}</strong> {translations.timeToActFast}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 px-2">{translations.stepByStepActions}</h2>
        
        {/* Step 1 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-orange))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-orange))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">{translations.callEmergency}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.dialAsSoonAsStroke}
            </p>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <img 
                src={emergencyCall112Img} 
                alt="Emergency services call 112 - India emergency response logo" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-orange-600">Call 112 immediately - India's national emergency number</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-orange))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-orange))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg">{translations.fastTest}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.askPersonSmileArms}
            </p>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <img 
                src={strokeFastTestImg} 
                alt="FAST stroke test - Face drooping, Arm weakness, Speech difficulties, Time to call" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-orange-600">FAST test: Face, Arms, Speech, Time - Remember, recognize and act fast</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-orange))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-orange))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg">{translations.stayCalmRest}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.layOnSideElevated}
            </p>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <img 
                src={strokeRecoveryPositionImg} 
                alt="Recovery position - Person lying on side with hand under chin, leg bent for support" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-orange-600">Recovery position: Hand under chin to keep mouth open, leg bent to support position</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-orange))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-orange))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="font-bold text-lg">{translations.dontGiveFoodDrink}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.mayCauseChoking}
            </p>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <img 
                src={strokeNoFoodDrinkImg} 
                alt="No food or drinks - Prohibition symbol over hamburger and drink" 
                className="w-full h-32 object-contain rounded mb-2"
              />
              <p className="text-xs text-orange-600">Do not give food or drinks - May cause choking in stroke patients</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Call Button - Sticky */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <Button
          onClick={handleCallEmergency}
          className="w-full bg-[hsl(var(--emergency-orange))] hover:bg-[hsl(var(--emergency-orange-hover))] text-white py-6 text-lg font-bold rounded-2xl shadow-lg"
          data-testid="button-emergency-call"
        >
          <Phone className="mr-2 h-6 w-6" />
          {translations.call112Now}
        </Button>
        <p className="text-center text-xs text-gray-600 mt-2">
          {translations.sayStroke}
        </p>
      </div>

      {/* Bottom padding for sticky button */}
      <div className="h-24"></div>
    </div>
  );
}