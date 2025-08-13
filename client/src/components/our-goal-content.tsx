import { useLanguage } from "@/hooks";

export function OurGoalContent() {
  const { translations } = useLanguage();

  return (
    <>
      <div className="space-y-4 text-gray-700">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-semibold text-red-800 mb-2" data-testid="text-mission-title">
            {translations.ourMission}
          </h3>
          <p className="text-red-700 text-sm leading-relaxed" data-testid="text-mission-description">
            {translations.missionDescription}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2" data-testid="text-why-108-title">
            {translations.why108}
          </h3>
          <p className="text-blue-700 text-sm leading-relaxed" data-testid="text-why-108-description">
            {translations.why108Description}
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2" data-testid="text-offline-first-title">
            {translations.offlineFirst}
          </h3>
          <p className="text-green-700 text-sm leading-relaxed" data-testid="text-offline-first-description">
            {translations.offlineFirstDescription}
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 mb-2" data-testid="text-multilingual-title">
            {translations.multilingualSupport}
          </h3>
          <p className="text-purple-700 text-sm leading-relaxed" data-testid="text-multilingual-description">
            {translations.multilingualDescription}
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2" data-testid="text-rural-focus-title">
            {translations.ruralFocus}
          </h3>
          <p className="text-yellow-700 text-sm leading-relaxed" data-testid="text-rural-focus-description">
            {translations.ruralFocusDescription}
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2" data-testid="text-community-title">
            {translations.communityDriven}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed" data-testid="text-community-description">
            {translations.communityDescription}
          </p>
        </div>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500" data-testid="text-disclaimer">
            {translations.disclaimer}
          </p>
        </div>
      </div>
    </>
  );
}