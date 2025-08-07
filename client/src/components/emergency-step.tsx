import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

interface EmergencyStepProps {
  stepNumber: string | number;
  title: string;
  description: string;
  bgColor: string;
  imageAlt?: string;
}

export function EmergencyStep({ 
  stepNumber, 
  title, 
  description, 
  bgColor, 
  imageAlt 
}: EmergencyStepProps) {
  return (
    <Card className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl border-0 shadow-sm">
      <div className={`${bgColor} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0`}>
        <span data-testid={`step-number-${stepNumber}`}>{stepNumber}</span>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-2" data-testid={`step-title-${stepNumber}`}>
          {title}
        </h4>
        <p className="text-gray-700 text-sm mb-3" data-testid={`step-description-${stepNumber}`}>
          {description}
        </p>
        {/* Image placeholder */}
        <div 
          className="bg-gray-200 rounded-lg h-24 flex items-center justify-center mb-2"
          data-testid={`step-image-${stepNumber}`}
        >
          <ImageIcon className="text-gray-400 h-8 w-8" />
          <span className="ml-2 text-gray-500 text-sm">
            {imageAlt || `Step ${stepNumber} Image`}
          </span>
        </div>
      </div>
    </Card>
  );
}
