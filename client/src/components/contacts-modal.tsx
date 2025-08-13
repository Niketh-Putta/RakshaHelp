import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks';
import { ContactsContent } from '@/components/contacts-content';



interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
  const { translations } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gray-100 px-6 py-4 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold text-gray-800" data-testid="text-contacts-title">
            {translations.emergencyContacts}
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-gray-200"
            data-testid="button-close-modal"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <ContactsContent />
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-6 py-4">
          <Button
            onClick={onClose}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white"
            data-testid="button-close-contacts"
          >
            {translations.cancel}
          </Button>
        </div>
      </div>
    </div>
  );
}