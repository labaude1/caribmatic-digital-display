
import React from 'react';
import { Zap, BarChart3, Recycle } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import MetricCard from '@/components/MetricCard';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: BarChart3,
      value: '73%',
      title: 'Mémorisation',
      description: 'Taux de mémorisation publicitaire exceptionnellement élevé comparé aux supports traditionnels',
    },
    {
      icon: Zap,
      value: '576',
      title: 'Diffusions/jour',
      description: 'Chaque message publicitaire est diffusé 576 fois par jour pour une visibilité maximale',
    },
    {
      icon: Recycle,
      value: '100%',
      title: 'Écologique',
      description: 'Solution 100% écologique sans production de déchets papier ou plastique',
    },
  ];

  return (
    <Section background="white" className="relative">
      {/* Subtle gradient overlay for visual continuity */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      <div className="relative z-10">
        <SectionHeader
          title="Pourquoi Choisir l'Affichage Digital ?"
          highlight="Affichage Digital"
          description="L'affichage digital révolutionne la communication outdoor avec des performances inégalées"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <MetricCard
              key={index}
              icon={advantage.icon}
              value={advantage.value}
              label={advantage.title}
              description={advantage.description}
              variant="highlight"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AdvantagesSection;
