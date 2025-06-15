
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
    <Section id="services">
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
              className="card-interactive gradient-surface p-6"
            >
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="mb-3">
                {service.title}
              </h3>
              
              <p className="text-secondary mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="w-full btn-secondary">
                En savoir plus
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesSection;
