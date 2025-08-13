import { ArrowLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks";
import { useLocation } from "wouter";
import { OurGoalContent } from "@/components/our-goal-content";

export default function GoalPage() {
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
            <Target className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600" data-testid="text-page-title">
              {translations.ourGoal}
            </h1>
          </div>
          <div className="w-10" />
        </header>

        {/* Content */}
        <Card className="bg-white rounded-2xl shadow-md">
          <CardContent className="p-6">
            <OurGoalContent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}