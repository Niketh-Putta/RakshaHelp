// file: src/components/our-goal-modal.tsx
import { X, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks";

interface OurGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OurGoalModal({ isOpen, onClose }: OurGoalModalProps) {
  const { translations } = useLanguage();

  if (!isOpen) return null;

  // Fallback text so the modal always shows readable content.
  const title = translations?.ourGoal || "Our Goal";
  const closeLabel = translations?.close || "Close";

  // Prefer an array from i18n (e.g., translations.ourGoalPoints),
  // otherwise use individual keys or final hardcoded defaults.
  const pointsFromArray: string[] | undefined = (translations as any)
    ?.ourGoalPoints;
  const pointsFromKeys = [
    (translations as any)?.ourGoalPoint1,
    (translations as any)?.ourGoalPoint2,
    (translations as any)?.ourGoalPoint3,
    (translations as any)?.ourGoalPoint4,
    (translations as any)?.ourGoalPoint5,
  ].filter(Boolean) as string[];

  const fallbackPoints = [
    "Provide simple, life‑saving guidance for rural India.",
    "Work offline and load fast on low connectivity.",
    "Keep the app free and privacy‑respecting.",
    "Connect users quickly to emergency services.",
    "Support multiple Indian languages.",
  ];

  const points: string[] =
    (Array.isArray(pointsFromArray) &&
      pointsFromArray.length > 0 &&
      pointsFromArray) ||
    (pointsFromKeys.length > 0 && pointsFromKeys) ||
    fallbackPoints;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="our-goal-title"
    >
      <Card className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-blue-600" />
              <h2
                id="our-goal-title"
                className="text-2xl font-bold text-gray-800"
                data-testid="text-our-goal-title"
              >
                {title}
              </h2>
            </div>
            <Button
              onClick={onClose}
              aria-label="Close"
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              data-testid="button-close-our-goal"
            >
              <X className="h-5 w-5 text-gray-600" />
            </Button>
          </div>

          {/* Content (always visible text, never placeholders) */}
          <ul className="space-y-3 text-gray-800" data-testid="our-goal-points">
            {points.map((p, i) => (
              <li key={i} className="rounded-xl border p-3 leading-relaxed">
                {p}
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
              data-testid="button-close-our-goal-bottom"
            >
              {closeLabel}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
