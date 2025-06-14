
import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactMap = () => {
  const handleDirections = () => {
    const address = "Zone Industrielle, 97232 Le Lamentin, Martinique";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Plan d'Accès
        </h2>
        
        {/* Map Container */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.5!2d-61.0242!3d14.6415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzI5LjQiTiA2McKwMDEnMjcuMSJX!5e0!3m2!1sfr!2smq!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Caribmatic - Zone Industrielle Le Lamentin"
            />
          </div>
          
          {/* Map Overlay */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Caribmatic</p>
                <p className="text-gray-600 text-xs">Zone Industrielle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Actions */}
        <div className="flex gap-3 mt-4">
          <Button
            onClick={handleDirections}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Navigation className="h-4 w-4" />
            <span>Itinéraire</span>
          </Button>
          
          <Button
            onClick={() => window.open('https://goo.gl/maps/example', '_blank')}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Voir dans Maps</span>
          </Button>
        </div>
      </div>

      {/* Access Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">Comment nous trouver</h3>
        <div className="text-blue-800 text-sm space-y-2">
          <p>• Depuis Fort-de-France : Prendre la D1 direction Le Lamentin</p>
          <p>• Sortie "Zone Industrielle" après le rond-point</p>
          <p>• Notre bâtiment se trouve à 200m sur votre droite</p>
          <p>• Parking gratuit disponible devant l'entrée</p>
        </div>
      </div>

      {/* Nearby Landmarks */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Points de repère</h4>
        <div className="text-gray-700 text-sm space-y-1">
          <p>• À côté de l'hypermarché Carrefour</p>
          <p>• Face à la station-service Total</p>
          <p>• À 5 min de l'aéroport Aimé Césaire</p>
        </div>
      </div>

      {/* Parking Info */}
      <div className="flex items-start space-x-3 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="bg-green-100 p-2 rounded-full">
          <MapPin className="h-4 w-4 text-green-600" />
        </div>
        <div>
          <h4 className="font-semibold text-green-800">Stationnement gratuit</h4>
          <p className="text-green-700 text-sm">
            Places disponibles devant nos bureaux. Accès handicapé.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
