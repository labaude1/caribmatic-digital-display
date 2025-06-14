
import React from 'react';
import { MapPin, Users, Car } from 'lucide-react';

const ImplantationsSection = () => {
  const implantations = [
    {
      zone: 'Fort-de-France Centre',
      location: 'Rond-point de la Savane',
      audience: '25,000',
      type: 'Zone commerciale',
      description: 'Cœur économique de la Martinique, passage obligé vers le centre-ville',
    },
    {
      zone: 'Lamentin',
      location: 'Avenue Maurice Bishop',
      audience: '18,000',
      type: 'Zone résidentielle',
      description: 'Axe principal reliant l\'aéroport au centre de l\'île',
    },
    {
      zone: 'Schoelcher',
      location: 'Route de la Folie',
      audience: '15,000',
      type: 'Zone universitaire',
      description: 'Campus universitaire et zone résidentielle dynamique',
    },
    {
      zone: 'Ducos',
      location: 'Zone industrielle',
      audience: '12,000',
      type: 'Zone industrielle',
      description: 'Hub logistique et industriel de la Martinique',
    },
    {
      zone: 'Le Robert',
      location: 'Centre-ville',
      audience: '8,000',
      type: 'Zone touristique',
      description: 'Destination prisée des touristes et résidents du nord',
    },
  ];

  return (
    <section id="implantations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-red-600">Implantations</span> Stratégiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5 écrans LED positionnés dans les zones à plus fort trafic de la Martinique
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-gray-600">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-red-600" />
                <p className="text-lg font-semibold">Carte Interactive des Implantations</p>
                <p className="text-sm">5 zones stratégiques couvrant toute la Martinique</p>
              </div>
            </div>
          </div>
        </div>

        {/* Implantations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {implantations.map((implantation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {implantation.zone}
                </h3>
                <MapPin className="h-5 w-5 text-red-600" />
              </div>

              <p className="text-gray-600 mb-4">{implantation.location}</p>
              <p className="text-sm text-gray-500 mb-4">{implantation.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    Audience/jour
                  </span>
                  <span className="font-semibold text-red-600">
                    {implantation.audience}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm text-gray-600">
                    <Car className="h-4 w-4 mr-1" />
                    Type de zone
                  </span>
                  <span className="text-sm font-medium">
                    {implantation.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-600 text-white rounded-lg p-6 inline-block">
            <div className="text-3xl font-bold mb-2">78,000+</div>
            <div className="text-lg">Personnes touchées quotidiennement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantationsSection;
