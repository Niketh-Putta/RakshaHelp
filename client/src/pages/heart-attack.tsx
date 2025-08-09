import { Link } from "wouter";
import { ArrowLeft, Phone, Activity, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks";
import emergencyCall112Img from '/src/assets/emergency-call-112-standard.png';
import heartAttackAspirinImg from '/src/assets/heart-attack-aspirin.png';
import heartAttackWPositionImg from '/src/assets/heart-attack-w-position.png';
import heartAttackMonitorVitalsImg from '/src/assets/heart-attack-monitor-vitals.png';

export default function HeartAttack() {
  const { translations } = useLanguage();

  const handleCallEmergency = () => {
    try {
      window.location.href = "tel:112";
    } catch (error) {
      console.error('Failed to initiate phone call:', error);
      // Fallback
      window.open("tel:112");
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
          <Activity className="h-8 w-8 text-[hsl(var(--emergency-yellow))]" />
          <h1 className="text-xl font-bold text-[hsl(var(--emergency-yellow))]" data-testid="text-page-title">
            {translations.heartAttack}
          </h1>
        </div>
        <div className="w-10" />
      </header>

      {/* Warning Signs */}
      <Card className="mb-6 border-[hsl(var(--emergency-yellow))] border-2">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-[hsl(var(--emergency-yellow))] mr-2" />
            <h2 className="text-lg font-bold text-[hsl(var(--emergency-yellow))]" data-testid="text-warning-signs-title">
              {translations.warningSigns}
            </h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-yellow))] mr-2">•</span>
              <span>{translations.chestPainPressure}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-yellow))] mr-2">•</span>
              <span>{translations.painInArmsNeckJaw}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-yellow))] mr-2">•</span>
              <span>{translations.shortnessOfBreath}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-yellow))] mr-2">•</span>
              <span>{translations.coldSweatNausea}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 px-2">{translations.stepByStepActions}</h2>
        
        {/* Step 1 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-yellow))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-yellow))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">{translations.callEmergency}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.dialRightAway}
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <img 
                src={emergencyCall112Img} 
                alt="Emergency services call 112 - India emergency response logo" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-yellow-600">Call 112 immediately - India's national emergency number</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-yellow))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-yellow))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg">{translations.giveAspirin}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.chewAspirinUnlessAllergic}
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <img 
                src={heartAttackAspirinImg} 
                alt="Aspirin medication box - Give aspirin for heart attack" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-yellow-600">Give aspirin if available - Chew slowly unless allergic</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-yellow))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-yellow))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg">Get them in W Position</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              Seat patient on floor in W position - knees bent, back supported against wall if possible
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <img 
                src={heartAttackWPositionImg} 
                alt="Person seated on floor in W position - Heart attack recovery position" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-yellow-600">Seat patient on floor in W position - Knees bent, back supported</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-yellow))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-yellow))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="font-bold text-lg">{translations.monitorVitalSigns}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.readyToStartCPR}
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <img 
                src={heartAttackMonitorVitalsImg} 
                alt="Healthcare professional monitoring patient's vital signs" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-yellow-600">Monitor breathing and pulse - Be ready to start CPR if needed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Call Button - Sticky */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <Button
          onClick={handleCallEmergency}
          className="w-full bg-[hsl(var(--emergency-yellow))] hover:bg-[hsl(var(--emergency-yellow-hover))] text-white py-6 text-lg font-bold rounded-2xl shadow-lg"
          data-testid="button-emergency-call"
        >
          <Phone className="mr-2 h-6 w-6" />
          {translations.call112Now}
        </Button>
        <p className="text-center text-xs text-gray-600 mt-2">
          {translations.sayHeartAttack}
        </p>
      </div>

        {/* Bottom padding for sticky button */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}