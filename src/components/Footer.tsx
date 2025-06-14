
import React from 'react';
import { Monitor, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">
                CARIB<span className="text-red-500">MATIC</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leader de l'affichage digital en Martinique. 5 écrans LED 6m² positionnés 
              stratégiquement pour maximiser la visibilité de votre message publicitaire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">0596 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">contact@caribmatic.mq</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <span className="text-gray-300">
                  Zone Industrielle<br />
                  97232 Le Lamentin<br />
                  Martinique
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-gray-300 hover:text-red-500 transition-colors">
                Nos Services
              </a>
              <a href="#implantations" className="block text-gray-300 hover:text-red-500 transition-colors">
                Implantations
              </a>
              <a href="#realisations" className="block text-gray-300 hover:text-red-500 transition-colors">
                Réalisations
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-red-500 transition-colors">
                Devis Gratuit
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Caribmatic. Tous droits réservés.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
