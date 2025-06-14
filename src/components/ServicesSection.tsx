
import React from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Camera, Palette, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Écrans LED Publicitaires',
      description: 'Écrans LED haute définition 6m² dans les zones à fort trafic de la Martinique',
      features: ['Full HD 1920x1080', 'Luminosité 5000 nits', 'Visibilité 24h/24'],
    },
    {
      icon: Palette,
      title: 'Création Publicitaire',
      description: 'Conception graphique et vidéo adaptée aux écrans LED extérieurs',
      features: ['Motion design', 'Formats optimisés', 'Messages impactants'],
    },
    {
      icon: Camera,
      title: 'Production Vidéo',
      description: 'Réalisation de contenus vidéo professionnels pour vos campagnes',
      features: ['Tournage HD', 'Montage professionnel', 'Effets spéciaux'],
    },
    {
      icon: BarChart,
      title: 'Analyse & Reporting',
      description: 'Mesure de performance et statistiques détaillées de vos campagnes',
      features: ['Audience mesurée', 'ROI calculé', 'Rapports détaillés'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-red-600">Services</span> d'Affichage Digital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une offre complète pour maximiser l'impact de votre communication outdoor en Martinique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  En savoir plus
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
