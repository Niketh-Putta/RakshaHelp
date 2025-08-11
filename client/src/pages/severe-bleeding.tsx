import { Link } from "wouter";
import { ArrowLeft, Phone, Droplets, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks";

// Import severe bleeding images
// Using public path reference for build compatibility - only emergency call changed from 112 to 108
const emergencyCall108Img = '/images/emergency-call-108.png';
import severeBleedingApplyPressureImg from "@/assets/severe-bleeding-apply-pressure.png";
import severeBleedingElevateLimbImg from "@/assets/severe-bleeding-elevate-limb.png";
import severeBleedingDoNotRemoveClothImg from "@/assets/severe-bleeding-do-not-remove-cloth.png";
import severeBleedingLayDownImg from "@/assets/severe-bleeding-lay-down.png";

export default function SevereBleeding() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    try {
      window.location.href = "tel:108";
    } catch (error) {
      console.error('Failed to initiate phone call:', error);
      // Fallback
      window.open("tel:108");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-md flex-1 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 bg-white rounded-2xl p-4 shadow-sm">
        <Link href="/">
          <Button variant="ghost" size="sm" className="p-2" data-testid="button-back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex items-center space-x-3">
          <Droplets className="h-8 w-8 text-[hsl(var(--emergency-blue))]" />
          <h1 className="text-xl font-bold text-[hsl(var(--emergency-blue))]" data-testid="text-page-title">
            {translations.severeBleeding}
          </h1>
        </div>
        <div className="w-10" />
      </header>

      {/* Warning Signs */}
      <Card className="mb-6 border-[hsl(var(--emergency-blue))] border-2">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-[hsl(var(--emergency-blue))] mr-2" />
            <h2 className="text-lg font-bold text-[hsl(var(--emergency-blue))]" data-testid="text-warning-signs-title">
              {translations.warningSigns}
            </h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-blue))] mr-2">•</span>
              <span>{translations.bloodFlowingHeavily}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-blue))] mr-2">•</span>
              <span>{translations.bloodSoakingThroughClothing}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-blue))] mr-2">•</span>
              <span>{translations.spurtingBlood}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-blue))] mr-2">•</span>
              <span>{translations.personBecomingPaleWeak}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-blue))] mr-2">•</span>
              <span>{translations.uncontrolledBleedingAfter10Min}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 px-2">{translations.stepByStepActions}</h2>
        
        {/* Step 1 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-blue))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-blue))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">{translations.callEmergency}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.dialImmediatelyIfSevereBleeding}
            </p>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <img 
                src={emergencyCall108Img} 
                alt="Emergency services call 108 - India emergency response logo" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-blue-600">Call 108 immediately - India's national emergency number</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-blue))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-blue))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg">{translations.applyFirmPressure}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.useCleanClothGauzeHand}
            </p>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <img 
                src={severeBleedingApplyPressureImg} 
                alt="Hands applying direct pressure to bleeding wound on arm" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-blue-600">Apply firm direct pressure with clean cloth or hands</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-blue))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-blue))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg">{translations.elevateLimbIfPossible}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.raiseBleedingArmLegAboveHeart}
            </p>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <img 
                src={severeBleedingElevateLimbImg} 
                alt="Person with elevated injured arm wrapped in bandage" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-blue-600">Elevate the injured limb above heart level if possible</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-blue))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-blue))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="font-bold text-lg">{translations.doNotRemoveCloth}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.addMoreLayersDontRemoveOriginal}
            </p>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <img 
                src={severeBleedingDoNotRemoveClothImg} 
                alt="Layered bandages on wound showing proper technique" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-blue-600">Add more layers if blood soaks through, don't remove original cloth</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-blue))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-blue))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </div>
              <h3 className="font-bold text-lg">{translations.keepPersonCalmStill}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              Lay them down if feeling dizzy or weak. Keep the injured limb elevated while lying down. Cover with blanket if pale or cold.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <img 
                src={severeBleedingLayDownImg} 
                alt="Person lying down with helper providing care and elevated injured limb" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-blue-600">Lay person down with injured limb kept elevated above heart level</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Call Button - Sticky */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <Button
          onClick={handleCallEmergency}
          className="w-full bg-[hsl(var(--emergency-blue))] hover:bg-[hsl(var(--emergency-blue-hover))] text-white py-6 text-lg font-bold rounded-2xl shadow-lg"
          data-testid="button-emergency-call"
        >
          <Phone className="mr-2 h-6 w-6" />
          {translations.call112Now}
        </Button>
        <p className="text-center text-xs text-gray-600 mt-2">
          {translations.saySevereBleeding}
        </p>
      </div>

        {/* Bottom padding for sticky button */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}