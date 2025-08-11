import { X, Target, Heart, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface OurGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OurGoalModal({ isOpen, onClose }: OurGoalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800" data-testid="text-our-goal-title">
                Our Goal
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
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {/* Problem Statement */}
            <div className="space-y-3">
              <p className="text-base">
                Every year, <strong className="text-red-600">millions of lives are lost in India</strong> due to sudden medical emergencies like cardiac arrest, heart attack, stroke, and severe bleeding.
              </p>
              
              <p className="text-base">
                In many cases, death occurs before medical help arrives — not because the condition was untreatable, but because <strong className="text-orange-600">no one nearby knew what to do in those first critical minutes.</strong>
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Our mission is simple:
              </h3>
              
              <ul className="space-y-3 text-blue-900">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Empower every family</strong> to have at least one person who can give life-saving first aid.</span>
                </li>
                
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Provide clear, quick, and reliable guidance</strong> during emergencies.</span>
                </li>
                
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Bridge the gap in healthcare access,</strong> especially in rural areas where hospitals and trained professionals are far away.</span>
                </li>
              </ul>
            </div>

            {/* Vision Statement */}
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-green-600" />
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-green-900 font-medium">
                With the right knowledge at the right time, <strong className="text-green-700">countless lives can be saved.</strong> This app is here to make that possible — <em>one person, one family, one village at a time.</em>
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 italic">
                Together, we can turn ordinary people into life-savers.
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
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}