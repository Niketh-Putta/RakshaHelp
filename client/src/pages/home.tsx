import { Heart, Brain, Activity, Droplets, Phone, Users, Wifi, Target, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSelector } from "@/components/language-selector";
import { ContactsModal } from "@/components/contacts-modal";
import { useLanguage } from "@/hooks/use-language";
import { callEmergency, logEmergencyAccess } from "@/lib/pwa";
import { Link } from "wouter";
import { useState } from "react";

export default function Home() {
  const { translations } = useLanguage();
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isOurGoalModalOpen, setIsOurGoalModalOpen] = useState(false);

  const handleEmergencyClick = (type: string) => {
    logEmergencyAccess(type, translations.language || 'en');
  };

  const handleCallEmergency = () => {
    callEmergency('112');
  };

  const handleShowContacts = () => {
    setIsContactsModalOpen(true);
  };

  const handleShowOurGoal = () => {
    setIsOurGoalModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      {/* Header with Language Selector */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-testid="text-app-title">
          {translations.appTitle}
        </h1>
        <p className="text-sm text-gray-600 mb-4" data-testid="text-app-subtitle">
          {translations.appSubtitle}
        </p>
        
        <LanguageSelector />
      </header>

      {/* Emergency Buttons Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Cardiac Arrest Button */}
        <Link href="/cardiac-arrest">
          <Button
            onClick={() => handleEmergencyClick('cardiac-arrest')}
            className="emergency-button bg-[hsl(var(--emergency-red))] hover:bg-[hsl(var(--emergency-red-hover))] text-white p-6 rounded-2xl shadow-lg w-full h-auto min-h-[120px] touch-target"
            data-testid="button-cardiac-arrest"
          >
            <div className="text-center">
              <Heart className="h-10 w-10 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-1 emergency-text">
                {translations.cardiacArrest}
              </h3>
            </div>
          </Button>
        </Link>

        {/* Stroke Button */}
        <Link href="/stroke">
          <Button
            onClick={() => handleEmergencyClick('stroke')}
            className="emergency-button bg-[hsl(var(--emergency-orange))] hover:bg-[hsl(var(--emergency-orange-hover))] text-white p-6 rounded-2xl shadow-lg w-full h-auto min-h-[120px] touch-target"
            data-testid="button-stroke"
          >
            <div className="text-center">
              <Brain className="h-10 w-10 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-1 emergency-text">
                {translations.stroke}
              </h3>
            </div>
          </Button>
        </Link>

        {/* Heart Attack Button */}
        <Link href="/heart-attack">
          <Button
            onClick={() => handleEmergencyClick('heart-attack')}
            className="emergency-button bg-[hsl(var(--emergency-yellow))] hover:bg-[hsl(var(--emergency-yellow-hover))] text-white p-6 rounded-2xl shadow-lg w-full h-auto min-h-[120px] touch-target"
            data-testid="button-heart-attack"
          >
            <div className="text-center">
              <Activity className="h-10 w-10 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-1 emergency-text">
                {translations.heartAttack}
              </h3>
            </div>
          </Button>
        </Link>

        {/* Severe Bleeding Button */}
        <Link href="/severe-bleeding">
          <Button
            onClick={() => handleEmergencyClick('severe-bleeding')}
            className="emergency-button bg-[hsl(var(--emergency-blue))] hover:bg-[hsl(var(--emergency-blue-hover))] text-white p-6 rounded-2xl shadow-lg w-full h-auto min-h-[120px] touch-target"
            data-testid="button-severe-bleeding"
          >
            <div className="text-center">
              <Droplets className="h-10 w-10 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-1 emergency-text">
                {translations.severeBleeding}
              </h3>
            </div>
          </Button>
        </Link>
      </div>

      {/* Emergency Contacts Quick Access */}
      <Card className="bg-white rounded-2xl shadow-md mb-6">
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3 text-center" data-testid="text-emergency-contacts">
            <Phone className="text-[hsl(var(--emergency-green))] mr-2 inline-block h-5 w-5" />
            {translations.emergencyContacts}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleCallEmergency}
              className="bg-[hsl(var(--emergency-green))] hover:bg-[hsl(var(--emergency-green-hover))] text-white py-3 px-4 rounded-xl font-semibold text-sm transform active:scale-95 transition-all touch-target"
              data-testid="button-call-112"
            >
              <Phone className="mr-2 h-4 w-4" />
              {translations.call112}
            </Button>
            <Button
              onClick={handleShowContacts}
              className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-semibold text-sm transform active:scale-95 transition-all touch-target"
              data-testid="button-contacts"
            >
              <Users className="mr-2 h-4 w-4" />
              {translations.contacts}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Offline Status Indicator */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center offline-ready text-white px-4 py-2 rounded-full text-sm">
          <Wifi className="mr-2 h-4 w-4" />
          <span data-testid="text-offline-status">
            {translations.worksOffline}
          </span>
        </div>
      </div>

      {/* Our Goal Button */}
      <div className="text-center mb-6">
        <Button
          onClick={handleShowOurGoal}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold text-sm transform active:scale-95 transition-all touch-target"
          data-testid="button-our-goal"
        >
          <Target className="mr-2 h-4 w-4" />
          Our Goal
        </Button>
      </div>

      {/* Contacts Modal */}
      <ContactsModal 
        isOpen={isContactsModalOpen} 
        onClose={() => setIsContactsModalOpen(false)} 
      />

      {/* Our Goal Modal */}
      {isOurGoalModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" data-testid="modal-our-goal">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white rounded-t-2xl border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-indigo-600 flex items-center">
                <Target className="mr-3 h-6 w-6" />
                Our Goal
              </h2>
              <Button
                onClick={() => setIsOurGoalModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
                data-testid="button-close-our-goal"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="p-6 text-gray-800 leading-relaxed">
              <div className="space-y-6">
                <p className="text-lg">
                  Every year, <strong>millions of lives are lost in India</strong> due to sudden medical emergencies like cardiac arrest, heart attack, stroke, and severe bleeding.
                </p>
                
                <p className="text-lg">
                  In many cases, death occurs before medical help arrives — not because the condition was untreatable, but because <strong>no one nearby knew what to do in those first critical minutes</strong>.
                </p>
                
                <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
                  <h3 className="text-xl font-bold text-indigo-700 mb-3">Our mission is simple:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <span><strong>Empower every family</strong> to have at least one person who can give life-saving first aid.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <span>Provide <strong>clear, quick, and reliable guidance</strong> during emergencies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <span><strong>Bridge the gap in healthcare access</strong>, especially in rural areas where hospitals and trained professionals are far away.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                  <p className="text-lg font-semibold text-green-800">
                    With the right knowledge at the right time, <strong>countless lives can be saved</strong>.
                  </p>
                  <p className="text-lg text-green-700 mt-2">
                    This app is here to make that possible — <strong>one person, one family, one village at a time</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
