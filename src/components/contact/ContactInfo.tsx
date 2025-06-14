
import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Nos Coordonnées
        </h2>
        
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Téléphone</h3>
              <p className="text-gray-600">
                <a href="tel:+596XXXXXX" className="hover:text-red-600 transition-colors">
                  +596 XX XX XX
                </a>
              </p>
              <p className="text-sm text-gray-500">Appel gratuit depuis la Martinique</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@caribmatic.mq" className="hover:text-red-600 transition-colors">
                  contact@caribmatic.mq
                </a>
              </p>
              <p className="text-sm text-gray-500">Réponse sous 24h</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Adresse</h3>
              <address className="text-gray-600 not-italic">
                Zone Industrielle<br />
                97232 Le Lamentin<br />
                Martinique
              </address>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Horaires</h3>
              <div className="text-gray-600 space-y-1">
                <p>Lundi - Vendredi : 8h00 - 17h00</p>
                <p>Samedi : Sur rendez-vous</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nos Garanties</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Données protégées (RGPD)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Devis gratuit sans engagement</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Réponse sous 24h garantie</span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h4 className="font-semibold text-red-800 mb-2">Urgence technique</h4>
        <p className="text-red-700 text-sm mb-2">
          Problème avec votre campagne en cours ?
        </p>
        <a 
          href="tel:+596XXXXXX" 
          className="text-red-600 font-medium hover:text-red-800 transition-colors"
        >
          +596 XX XX XX (24h/7j)
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
