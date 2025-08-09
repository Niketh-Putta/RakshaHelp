import { Heart, Brain, Activity, Droplets, Phone, Users, Wifi } from "lucide-react";
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

  const handleEmergencyClick = (type: string) => {
    logEmergencyAccess(type, translations.language || 'en');
  };

  const handleCallEmergency = () => {
    callEmergency('112');
  };

  const handleShowContacts = () => {
    setIsContactsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-md flex-1 flex flex-col justify-center">
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
      <div className="text-center">
        <div className="inline-flex items-center offline-ready text-white px-4 py-2 rounded-full text-sm">
          <Wifi className="mr-2 h-4 w-4" />
          <span data-testid="text-offline-status">
            {translations.worksOffline}
          </span>
        </div>
      </div>

        {/* Contacts Modal */}
        <ContactsModal 
          isOpen={isContactsModalOpen} 
          onClose={() => setIsContactsModalOpen(false)} 
        />
      </div>
    </div>
  );
}
