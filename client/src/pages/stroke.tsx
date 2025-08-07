import { Link } from "wouter";
import { ArrowLeft, Phone, Brain, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

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
            Stroke
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
              Warning Signs (Use FAST)
            </h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>Face</strong> drooping on one side</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>Arm</strong> weakness</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>Speech</strong> difficulty</span>
            </li>
            <li className="flex items-start">
              <span className="text-[hsl(var(--emergency-orange))] mr-2">•</span>
              <span><strong>Time</strong> to act fast</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 px-2">Step-by-Step Actions</h2>
        
        {/* Step 1 */}
        <Card className="border-l-4 border-l-[hsl(var(--emergency-orange))]">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="bg-[hsl(var(--emergency-orange))] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg">Call Emergency</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              Dial 112 as soon as any stroke signs appear.
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Someone on phone with concern]</p>
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
              <h3 className="font-bold text-lg">FAST Test</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              Ask person to smile, raise both arms, and speak a sentence.
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Icons showing smile, raised arms, speech]</p>
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
              <h3 className="font-bold text-lg">Keep Person Calm</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              Lay them on one side with head slightly elevated.
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Person lying on side with pillow]</p>
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
              <h3 className="font-bold text-lg">Don't give food or drink</h3>
            </div>
            <p className="font-semibold text-gray-800 mb-2">
              May cause choking.
            </p>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs text-gray-600">[Image: Crossed-out spoon or water icon]</p>
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
          CALL 112 NOW
        </Button>
        <p className="text-center text-xs text-gray-600 mt-2">
          Say: "Possible stroke – face drooping and speech slurred."
        </p>
      </div>

      {/* Bottom padding for sticky button */}
      <div className="h-24"></div>
    </div>
  );
}