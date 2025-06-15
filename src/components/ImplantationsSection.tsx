
import React from 'react';
import { MapPin, Users, Car } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import MetricCard from '@/components/MetricCard';

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
    <Section id="implantations" background="light">
      <SectionHeader
        title="Nos Implantations Stratégiques"
        highlight="Implantations"
        description="5 écrans LED positionnés dans les zones à plus fort trafic de la Martinique"
      />

      {/* Map Placeholder */}
      <div className="mb-16">
        <div className="card-elevated p-8 text-center">
          <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mb-4">
            <div className="text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-red-600" />
              <p className="text-lg font-semibold">Carte Interactive des Implantations</p>
              <p className="text-sm">5 zones stratégiques couvrant toute la Martinique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Implantations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {implantations.map((implantation, index) => (
          <div
            key={index}
            className="card-interactive p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {implantation.zone}
              </h3>
              <MapPin className="h-6 w-6 text-red-600" />
            </div>

            <p className="text-red-600 font-medium mb-4">{implantation.location}</p>
            <p className="text-gray-600 mb-6">{implantation.description}</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  Audience/jour
                </span>
                <span className="font-bold text-red-600 text-lg">
                  {implantation.audience}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600">
                  <Car className="h-5 w-5 mr-2" />
                  Type de zone
                </span>
                <span className="font-medium text-gray-900">
                  {implantation.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <MetricCard
          icon={Users}
          value="78,000+"
          label="Personnes touchées quotidiennement"
          variant="highlight"
          className="inline-block"
        />
      </div>
    </Section>
  );
};

export default ImplantationsSection;
