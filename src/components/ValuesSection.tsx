
import React from 'react';
import { Lightbulb, Leaf, Heart, Shield } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import MetricCard from '@/components/MetricCard';

const ValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies LED pour offrir une qualité d\'affichage exceptionnelle adaptée au climat tropical.',
    },
    {
      icon: Leaf,
      title: 'Écologie',
      description: 'Notre engagement environnemental se traduit par des écrans basse consommation et un bilan carbone maîtrisé de 76t CO2e.',
    },
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Entreprise 100% martiniquaise, nous privilégions les relations humaines et la compréhension des enjeux locaux.',
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Nos installations sont conçues pour résister aux conditions tropicales avec un taux de disponibilité de 99,2%.',
    }
  ];

  return (
    <Section id="valeurs" background="light" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      <div className="relative z-10">
        <SectionHeader
          title="Nos Valeurs Fondamentales"
          description="Ces valeurs guident chacune de nos décisions et nourrissent notre engagement envers une communication responsable et efficace en Martinique."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <MetricCard
              key={index}
              icon={value.icon}
              value=""
              label={value.title}
              description={value.description}
              variant="default"
            />
          ))}
        </div>

        <div className="card-interactive p-8 text-center bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Démocratiser l'affichage digital en Martinique en proposant des solutions innovantes, 
            écologiques et accessibles à tous les acteurs économiques de l'île, 
            tout en préservant la beauté de notre environnement caribéen.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ValuesSection;
