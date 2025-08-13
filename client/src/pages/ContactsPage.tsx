import { ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks";
import { useLocation } from "wouter";
import { ContactsContent } from "@/components/contacts-content";

export default function ContactsPage() {
  const { translations } = useLanguage();
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-2xl flex-1">
        {/* Header */}
        <header className="flex items-center justify-between mb-6 bg-white rounded-2xl p-4 shadow-sm">
          <Button 
            onClick={handleBack}
            variant="ghost" 
            size="sm" 
            className="p-2" 
            aria-label="Go back"
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-gray-600" />
            <h1 className="text-xl font-bold text-gray-600" data-testid="text-page-title">
              {translations.emergencyContacts}
            </h1>
          </div>
          <div className="w-10" />
        </header>

        {/* Content */}
        <Card className="bg-white rounded-2xl shadow-md">
          <CardContent className="p-6">
            <ContactsContent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}