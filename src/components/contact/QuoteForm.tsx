
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Calculator, FileText } from 'lucide-react';

interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  zones: string[];
  duration: string;
  budget: string;
  campaignType: string;
  description: string;
  gdprConsent: boolean;
}

const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    zones: [],
    duration: '',
    budget: '',
    campaignType: '',
    description: '',
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const zones = [
    { id: 'fort-de-france', name: 'Fort-de-France Centre' },
    { id: 'lamentin', name: 'Le Lamentin - Zone Commerciale' },
    { id: 'schoelcher', name: 'Schoelcher - Front de Mer' },
    { id: 'ducos', name: 'Ducos - Zone Industrielle' },
    { id: 'robert', name: 'Le Robert - Centre Ville' },
  ];

  const handleZoneChange = (zoneId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        zones: [...prev.zones, zoneId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        zones: prev.zones.filter(id => id !== zoneId)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast.error('Vous devez accepter le traitement de vos données');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Demande de devis envoyée ! Nous vous recontacterons sous 24h avec une proposition personnalisée.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        zones: [],
        duration: '',
        budget: '',
        campaignType: '',
        description: '',
        gdprConsent: false,
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="quote-firstName">Prénom *</Label>
          <Input
            id="quote-firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="quote-lastName">Nom *</Label>
          <Input
            id="quote-lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="quote-email">Email *</Label>
          <Input
            id="quote-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="quote-phone">Téléphone *</Label>
          <Input
            id="quote-phone"
            type="tel"
            placeholder="0596 XX XX XX"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="quote-company">Entreprise</Label>
        <Input
          id="quote-company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
        />
      </div>

      {/* Campaign Details */}
      <div>
        <Label className="text-base font-semibold">Zones d'affichage souhaitées *</Label>
        <div className="mt-2 space-y-2">
          {zones.map(zone => (
            <div key={zone.id} className="flex items-center space-x-2">
              <Checkbox
                id={`zone-${zone.id}`}
                checked={formData.zones.includes(zone.id)}
                onCheckedChange={(checked) => handleZoneChange(zone.id, !!checked)}
              />
              <Label htmlFor={`zone-${zone.id}`} className="text-sm">
                {zone.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="duration">Durée de campagne *</Label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, duration: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez la durée" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-week">1 semaine</SelectItem>
              <SelectItem value="2-weeks">2 semaines</SelectItem>
              <SelectItem value="1-month">1 mois</SelectItem>
              <SelectItem value="3-months">3 mois</SelectItem>
              <SelectItem value="6-months">6 mois</SelectItem>
              <SelectItem value="1-year">1 an</SelectItem>
              <SelectItem value="custom">Autre durée</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="budget">Budget approximatif</Label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez votre budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500-1000">500 € - 1 000 €</SelectItem>
              <SelectItem value="1000-2500">1 000 € - 2 500 €</SelectItem>
              <SelectItem value="2500-5000">2 500 € - 5 000 €</SelectItem>
              <SelectItem value="5000-10000">5 000 € - 10 000 €</SelectItem>
              <SelectItem value="10000+">Plus de 10 000 €</SelectItem>
              <SelectItem value="to-discuss">À discuter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="campaignType">Type de campagne</Label>
        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, campaignType: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Quel est l'objectif de votre campagne ?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="brand-awareness">Notoriété de marque</SelectItem>
            <SelectItem value="product-launch">Lancement de produit</SelectItem>
            <SelectItem value="event-promotion">Promotion d'événement</SelectItem>
            <SelectItem value="sales-promotion">Promotion commerciale</SelectItem>
            <SelectItem value="recruitment">Recrutement</SelectItem>
            <SelectItem value="institutional">Communication institutionnelle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="quote-description">Description du projet</Label>
        <Textarea
          id="quote-description"
          rows={4}
          placeholder="Décrivez votre projet, vos objectifs, votre cible, etc."
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="quote-gdpr"
          checked={formData.gdprConsent}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gdprConsent: !!checked }))}
        />
        <Label htmlFor="quote-gdpr" className="text-sm leading-relaxed">
          J'accepte que mes données personnelles soient traitées pour établir un devis personnalisé. *
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || !formData.gdprConsent}
        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            <span>Envoi en cours...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Calculator className="h-4 w-4" />
            <span>Demander un devis gratuit</span>
          </div>
        )}
      </Button>

      <div className="text-center text-sm text-gray-600">
        <FileText className="h-4 w-4 inline mr-1" />
        Réponse sous 24h avec devis personnalisé
      </div>
    </form>
  );
};

export default QuoteForm;
