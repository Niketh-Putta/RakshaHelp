import { Heart, Brain, Activity, Droplets, Phone, Users, Wifi, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSelector } from "@/components/language-selector";
import { ContactsModal } from "@/components/contacts-modal";
import { useLanguage } from "@/hooks";
import { callEmergency, logEmergencyAccess } from "@/lib/pwa";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Home() {
  const { translations } = useLanguage();
  const [, setLocation] = useLocation();
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);

  const handleEmergencyClick = (type: string) => {
    logEmergencyAccess(type, translations.language || 'en');
  };

  const handleCallEmergency = () => {
    callEmergency('108');
  };

  const openContacts = () => {
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
    const isWebView = /wv|AndroidWebView|; wv\)|Crosswalk|Version\/\d+\.\d+ Chrome\/\d+\.\\d+ Mobile/i.test(navigator.userAgent);
    
    if (isSmallScreen || isWebView) {
      setLocation('/contacts');
    } else {
      setIsContactsModalOpen(true);
    }
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
            className="emergency-button bg-[hsl(var(--emergency-red))] hover:bg-[hsl(var(--emergency-red-hover))] text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full h-auto min-h-[100px] sm:min-h-[120px] touch-target"
            data-testid="button-cardiac-arrest"
          >
            <div className="text-center">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-bold text-sm sm:text-lg mb-1 emergency-text leading-tight">
                {translations.cardiacArrest}
              </h3>
            </div>
          </Button>
        </Link>

        {/* Stroke Button */}
        <Link href="/stroke">
          <Button
            onClick={() => handleEmergencyClick('stroke')}
            className="emergency-button bg-[hsl(var(--emergency-orange))] hover:bg-[hsl(var(--emergency-orange-hover))] text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full h-auto min-h-[100px] sm:min-h-[120px] touch-target"
            data-testid="button-stroke"
          >
            <div className="text-center">
              <Brain className="h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-bold text-sm sm:text-lg mb-1 emergency-text leading-tight">
                {translations.stroke}
              </h3>
            </div>
          </Button>
        </Link>

        {/* Heart Attack Button */}
        <Link href="/heart-attack">
          <Button
            onClick={() => handleEmergencyClick('heart-attack')}
            className="emergency-button bg-[hsl(var(--emergency-yellow))] hover:bg-[hsl(var(--emergency-yellow-hover))] text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full h-auto min-h-[100px] sm:min-h-[120px] touch-target"
            data-testid="button-heart-attack"
          >
            <div className="text-center">
              <Activity className="h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-bold text-sm sm:text-lg mb-1 emergency-text leading-tight">
                {translations.heartAttack}
              </h3>
            </div>
          </Button>
        </Link>

        {/* Severe Bleeding Button */}
        <Link href="/severe-bleeding">
          <Button
            onClick={() => handleEmergencyClick('severe-bleeding')}
            className="emergency-button bg-[hsl(var(--emergency-blue))] hover:bg-[hsl(var(--emergency-blue-hover))] text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full h-auto min-h-[100px] sm:min-h-[120px] touch-target"
            data-testid="button-severe-bleeding"
          >
            <div className="text-center">
              <Droplets className="h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-bold text-sm sm:text-lg mb-1 emergency-text leading-tight">
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
              className="bg-[hsl(var(--emergency-green))] hover:bg-[hsl(var(--emergency-green-hover))] text-white py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm transform active:scale-95 transition-all touch-target"
              data-testid="button-call-108"
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              {translations.call112}
            </Button>
            <Button
              onClick={openContacts}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm transform active:scale-95 transition-all touch-target"
              data-testid="button-contacts"
            >
              <Users className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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

      {/* Our Goal Section - Inline */}
      <Card className="mb-6" data-testid="section-our-goal">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              {translations.ourGoal || "Our Goal"}
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {/* Problem Statement */}
            <div className="space-y-3">
              <p className="text-base">
                Every year, <strong>millions of lives are lost</strong> in India due to sudden medical emergencies like <strong>cardiac arrest</strong>, <strong>heart attack</strong>, <strong>stroke</strong>, and <strong>severe bleeding</strong>.
              </p>
              
              <p className="text-base">
                In many cases, death occurs <strong>before medical help arrives</strong> — not because the condition was untreatable, but because <strong>no one nearby knew what to do</strong> in those <strong>first critical minutes</strong>.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                {translations.ourGoalMissionTitle || "Our mission is simple:"}
              </h3>
              
              <ul className="space-y-3 text-blue-900" data-testid="our-goal-points">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Empower every family</strong> to have at least one person who can give <strong>life-saving first aid</strong>.</span>
                </li>
                
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Provide <strong>clear, quick, and reliable guidance</strong> during emergencies.</span>
                </li>
                
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Bridge the gap in healthcare access</strong>, especially in <strong>rural areas</strong> where hospitals and trained professionals are far away.</span>
                </li>
              </ul>
            </div>

            {/* Vision Statement */}
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-green-900 font-medium">
                With the <strong>right knowledge at the right time</strong>, <strong>countless lives can be saved</strong>. This app is here to make that possible — <strong>one person, one family, one village at a time</strong>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 italic">
                Together, we can turn <strong>ordinary people into life-savers</strong>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>



        {/* Contacts Modal */}
        <ContactsModal 
          isOpen={isContactsModalOpen} 
          onClose={() => setIsContactsModalOpen(false)} 
        />


      </div>
    </div>
  );
}
