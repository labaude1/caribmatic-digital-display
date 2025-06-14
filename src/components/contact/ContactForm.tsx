
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Send, Shield } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  gdprConsent: boolean;
  newsletterConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    gdprConsent: false,
    newsletterConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string | boolean) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'firstName':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          newErrors.firstName = 'Le prénom doit contenir au moins 2 caractères';
        } else {
          delete newErrors.firstName;
        }
        break;
      case 'lastName':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          newErrors.lastName = 'Le nom doit contenir au moins 2 caractères';
        } else {
          delete newErrors.lastName;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || (typeof value === 'string' && !emailRegex.test(value))) {
          newErrors.email = 'Veuillez entrer une adresse email valide';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        const phoneRegex = /^(?:\+596|0596|596)[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2}$/;
        if (value && typeof value === 'string' && !phoneRegex.test(value.replace(/\s/g, ''))) {
          newErrors.phone = 'Format: 0596 XX XX XX ou +596 XX XX XX';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'message':
        if (!value || (typeof value === 'string' && value.trim().length < 10)) {
          newErrors.message = 'Le message doit contenir au moins 10 caractères';
        } else {
          delete newErrors.message;
        }
        break;
      case 'gdprConsent':
        if (!value) {
          newErrors.gdprConsent = 'Vous devez accepter le traitement de vos données';
        } else {
          delete newErrors.gdprConsent;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (key !== 'phone' && key !== 'company' && key !== 'newsletterConsent') {
        validateField(key, formData[key as keyof FormData]);
      }
    });

    if (Object.keys(errors).length > 0) {
      toast.error('Veuillez corriger les erreurs du formulaire');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        gdprConsent: false,
        newsletterConsent: false,
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={errors.firstName ? 'border-red-500' : ''}
            required
          />
          {errors.firstName && (
            <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={errors.lastName ? 'border-red-500' : ''}
            required
          />
          {errors.lastName && (
            <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={errors.email ? 'border-red-500' : ''}
            required
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="0596 XX XX XX"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Company and Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Entreprise</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="subject">Sujet</Label>
          <Select onValueChange={(value) => handleInputChange('subject', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez un sujet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="information">Demande d'information</SelectItem>
              <SelectItem value="support">Support technique</SelectItem>
              <SelectItem value="partnership">Partenariat</SelectItem>
              <SelectItem value="complaint">Réclamation</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre demande en détail..."
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={errors.message ? 'border-red-500' : ''}
          required
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Consent Checkboxes */}
      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="gdprConsent"
            checked={formData.gdprConsent}
            onCheckedChange={(checked) => handleInputChange('gdprConsent', !!checked)}
            className={errors.gdprConsent ? 'border-red-500' : ''}
          />
          <Label htmlFor="gdprConsent" className="text-sm leading-relaxed">
            J'accepte que mes données personnelles soient traitées pour répondre à ma demande. *
            <br />
            <span className="text-gray-600 text-xs">
              Conformément au RGPD, vous pouvez exercer vos droits en nous contactant.
            </span>
          </Label>
        </div>
        {errors.gdprConsent && (
          <p className="text-sm text-red-600">{errors.gdprConsent}</p>
        )}

        <div className="flex items-start space-x-2">
          <Checkbox
            id="newsletterConsent"
            checked={formData.newsletterConsent}
            onCheckedChange={(checked) => handleInputChange('newsletterConsent', !!checked)}
          />
          <Label htmlFor="newsletterConsent" className="text-sm">
            Je souhaite recevoir des informations sur vos services et actualités.
          </Label>
        </div>
      </div>

      {/* reCAPTCHA Notice */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Shield className="h-4 w-4" />
        <span>Ce formulaire est protégé par reCAPTCHA</span>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            <span>Envoi en cours...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Send className="h-4 w-4" />
            <span>Envoyer le message</span>
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
