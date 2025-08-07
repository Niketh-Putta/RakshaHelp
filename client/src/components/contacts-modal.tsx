import { useState, useEffect } from 'react';
import { X, Phone, Plus, Trash2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';

interface Contact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
  const { translations } = useLanguage();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    relationship: ''
  });

  // Load contacts from localStorage on mount
  useEffect(() => {
    const savedContacts = localStorage.getItem('emergency-contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Save contacts to localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem('emergency-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      const contact: Contact = {
        id: Date.now().toString(),
        ...newContact
      };
      setContacts([...contacts, contact]);
      setNewContact({ name: '', phone: '', relationship: '' });
      setIsAddingContact(false);
    }
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleCallContact = (phone: string) => {
    if (confirm(`Call ${phone}?`)) {
      window.location.href = `tel:${phone}`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
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
          {/* Add Contact Form */}
          {isAddingContact ? (
            <Card className="mb-6 border-blue-200">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
                      {translations.contactName}
                    </Label>
                    <Input
                      id="contact-name"
                      value={newContact.name}
                      onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                      className="mt-1"
                      placeholder={translations.contactName}
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">
                      {translations.contactPhone}
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={newContact.phone}
                      onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                      className="mt-1"
                      placeholder="+91 98765 43210"
                      data-testid="input-contact-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-relationship" className="text-sm font-medium text-gray-700">
                      {translations.relationship}
                    </Label>
                    <Input
                      id="contact-relationship"
                      value={newContact.relationship}
                      onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
                      className="mt-1"
                      placeholder="Family, Friend, Doctor..."
                      data-testid="input-contact-relationship"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      onClick={handleAddContact}
                      disabled={!newContact.name || !newContact.phone}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      data-testid="button-save-contact"
                    >
                      {translations.save}
                    </Button>
                    <Button
                      onClick={() => {
                        setIsAddingContact(false);
                        setNewContact({ name: '', phone: '', relationship: '' });
                      }}
                      variant="outline"
                      className="flex-1"
                      data-testid="button-cancel-contact"
                    >
                      {translations.cancel}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Button
              onClick={() => setIsAddingContact(true)}
              className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
              data-testid="button-add-contact"
            >
              <Plus className="mr-2 h-5 w-5" />
              {translations.addContact}
            </Button>
          )}

          {/* Contacts List */}
          {contacts.length === 0 ? (
            <div className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500" data-testid="text-no-contacts">
                {translations.noContacts}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <Card key={contact.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900" data-testid={`contact-name-${contact.id}`}>
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600" data-testid={`contact-phone-${contact.id}`}>
                          {contact.phone}
                        </p>
                        {contact.relationship && (
                          <p className="text-xs text-gray-500 mt-1" data-testid={`contact-relationship-${contact.id}`}>
                            {contact.relationship}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleCallContact(contact.phone)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          data-testid={`button-call-${contact.id}`}
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteContact(contact.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:bg-red-50 hover:text-red-700"
                          data-testid={`button-delete-${contact.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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