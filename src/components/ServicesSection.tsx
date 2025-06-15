
import React from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Camera, Palette, BarChart } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

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
    <Section id="services" background="light" className="relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100/50"></div>
      
      <div className="relative z-10">
        <SectionHeader
          title="Nos Services d'Affichage Digital"
          highlight="Services"
          description="Une offre complète pour maximiser l'impact de votre communication outdoor en Martinique"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 rounded-lg transition-all duration-200">
                  En savoir plus
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
