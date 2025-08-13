import { X, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks';

interface OurGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OurGoalModal({ isOpen, onClose }: OurGoalModalProps) {
  const { translations } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          .our-goal-modal-text {
            color: #1f2937 !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
          .our-goal-modal-text * {
            color: inherit !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
          .our-goal-modal-title {
            color: #1f2937 !important;
            font-weight: 700 !important;
          }
          .our-goal-modal-content {
            background-color: #ffffff !important;
            color: #374151 !important;
          }
        `
      }} />
      <Card className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl our-goal-modal-content">
        <CardContent className="p-6 our-goal-modal-text">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-blue-600" />
              <h2 
                className="text-2xl font-bold text-gray-800 our-goal-modal-title" 
                data-testid="text-our-goal-title"
                style={{ color: '#1f2937 !important', fontWeight: '700' }}
              >
                {translations.ourGoal || "Our Goal"}
              </h2>
            </div>
            <Button
              onClick={onClose}
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              data-testid="button-close-our-goal"
            >
              <X className="h-5 w-5 text-gray-600" />
            </Button>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed our-goal-modal-text">
            {/* Problem Statement */}
            <div className="space-y-3">
              <p 
                className="text-base our-goal-modal-text" 
                style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6' }}
              >
                {translations.ourGoalProblem1 || "Every year, millions of lives are lost in India due to sudden medical emergencies like cardiac arrest, heart attack, stroke, and severe bleeding."}
              </p>
              
              <p 
                className="text-base our-goal-modal-text" 
                style={{ color: '#374151', fontSize: '16px', lineHeight: '1.6' }}
              >
                {translations.ourGoalProblem2 || "In many cases, death occurs before medical help arrives — not because the condition was untreatable, but because no one nearby knew what to do in those first critical minutes."}
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-blue-50 p-4 rounded-xl" style={{ backgroundColor: '#eff6ff', padding: '16px', borderRadius: '12px' }}>
              <h3 
                className="text-lg font-bold text-blue-800 mb-3 flex items-center our-goal-modal-text" 
                style={{ color: '#1e40af', fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}
              >
                <Target className="h-5 w-5 mr-2" style={{ color: '#1e40af' }} />
                {translations.ourGoalMissionTitle || "Our mission is simple:"}
              </h3>
              
              <ul className="space-y-3 text-blue-900" style={{ listStyle: 'none', padding: 0 }}>
                <li className="flex items-start space-x-2" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span className="text-blue-600 font-bold" style={{ color: '#2563eb', fontWeight: '700', fontSize: '16px' }}>•</span>
                  <span className="our-goal-modal-text" style={{ color: '#1e3a8a', fontSize: '15px', lineHeight: '1.5' }}>
                    {translations.ourGoalMission1 || "Empower every family to have at least one person who can give life-saving first aid."}
                  </span>
                </li>
                
                <li className="flex items-start space-x-2" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span className="text-blue-600 font-bold" style={{ color: '#2563eb', fontWeight: '700', fontSize: '16px' }}>•</span>
                  <span className="our-goal-modal-text" style={{ color: '#1e3a8a', fontSize: '15px', lineHeight: '1.5' }}>
                    {translations.ourGoalMission2 || "Provide clear, quick, and reliable guidance during emergencies."}
                  </span>
                </li>
                
                <li className="flex items-start space-x-2" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span className="text-blue-600 font-bold" style={{ color: '#2563eb', fontWeight: '700', fontSize: '16px' }}>•</span>
                  <span className="our-goal-modal-text" style={{ color: '#1e3a8a', fontSize: '15px', lineHeight: '1.5' }}>
                    {translations.ourGoalMission3 || "Bridge the gap in healthcare access, especially in rural areas where hospitals and trained professionals are far away."}
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision Statement */}
            <div className="bg-green-50 p-4 rounded-xl" style={{ backgroundColor: '#f0fdf4', padding: '16px', borderRadius: '12px' }}>
              <p 
                className="text-green-900 font-medium our-goal-modal-text" 
                style={{ color: '#14532d', fontSize: '16px', fontWeight: '500', lineHeight: '1.6' }}
              >
                {translations.ourGoalVision || "With the right knowledge at the right time, countless lives can be saved. This app is here to make that possible — one person, one family, one village at a time."}
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-4" style={{ textAlign: 'center', paddingTop: '16px' }}>
              <p 
                className="text-sm text-gray-600 italic our-goal-modal-text" 
                style={{ color: '#4b5563', fontSize: '14px', fontStyle: 'italic', lineHeight: '1.5' }}
              >
                {translations.ourGoalCallToAction || "Together, we can turn ordinary people into life-savers."}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
              data-testid="button-close-our-goal-bottom"
            >
              {translations.close || "Close"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}