import { Link } from "wouter";
import { ArrowLeft, Phone, Heart, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks";
// Using public path reference for build compatibility - only emergency call changed from 112 to 108
const emergencyCall108Img = '/images/emergency-call-108.png';
import chestCompressionImg from '@/assets/chest-compression-technique.png';
import aedPlacementImg from '@/assets/aed-placement.png';
import cprContinuousImg from '@/assets/cpr-continuous.png';

export default function CardiacArrest() {
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
          <Heart className="h-8 w-8 text-[hsl(var(--emergency-red))]" />
          <h1 className="text-xl font-bold text-[hsl(var(--emergency-red))]" data-testid="text-page-title">
            {translations.cardiacArrest}
          </h1>
        </div>
        <div className="w-10" />
      </header>

      {/* Warning Signs */}
      <Card className="mb-6 border-[hsl(var(--emergency-red))] border-2">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-[hsl(var(--emergency-red))] mr-2" />
            <h2 className="text-lg font-bold text-[hsl(var(--emergency-red))]" data-testid="text-warning-signs-title">
              {translations.warningSigns}
            </h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-red))] mr-2">•</span>
              <span>{translations.suddenCollapse}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-red))] mr-2">•</span>
              <span>{translations.noPulseBreathing}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-red))] mr-2">•</span>
              <span>{translations.lossOfConsciousness}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-red))] mr-2">•</span>
              <span>{translations.gaspingSeizureLike}</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-red))] mr-2">•</span>
              <span>{translations.noResponse}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 px-2">{translations.stepByStepActions}</h2>
        
        {/* Step 1 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-red))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-red))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">{translations.callEmergency}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.dialImmediately}
            </p>
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <img 
                src={emergencyCall108Img} 
                alt="Emergency services call 108 - India emergency response logo" 
                className="w-full h-40 object-contain rounded mb-2"
              />
              <p className="text-xs text-red-600">Call 108 immediately - India's national emergency number</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-red))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-red))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg">{translations.startChestCompressions}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.pushHardFast100120}
            </p>
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <img 
                src={chestCompressionImg} 
                alt="Proper chest compression techniques - hand positioning and depth" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-red-600">Push 5-6cm deep, 100-120 per minute</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-red))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-red))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg">{translations.useAEDIfAvailable}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.followAEDPrompts}
            </p>
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <img 
                src={aedPlacementImg} 
                alt="AED (Automated External Defibrillator) with pad placement on patient" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-red-600">Follow AED voice prompts - continue compressions between shocks</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-red))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-red))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="font-bold text-lg">{translations.continueCPR}</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              {translations.dontStopCompressions}
            </p>
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <img 
                src={cprContinuousImg} 
                alt="Healthcare professional performing CPR chest compressions on patient" 
                className="w-full h-48 object-contain rounded mb-2"
              />
              <p className="text-xs text-red-600">Keep going until help arrives</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Call Button - Sticky */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
        <Button
          onClick={handleCallEmergency}
          className="w-full bg-[hsl(var(--emergency-red))] hover:bg-[hsl(var(--emergency-red-hover))] text-white py-6 text-lg font-bold rounded-2xl shadow-lg"
          data-testid="button-emergency-call"
        >
          <Phone className="mr-2 h-6 w-6" />
          {translations.call112Now}
        </Button>
        <p className="text-center text-xs text-gray-600 mt-2">
          {translations.sayCardiacArrest}
        </p>
      </div>

        {/* Bottom padding for sticky button */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}