
import React from 'react';
import { Zap, BarChart3, Recycle } from 'lucide-react';
import StandardSection from './StandardSection';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: BarChart3,
      percentage: '73%',
      title: 'Mémorisation',
      description: 'Taux de mémorisation publicitaire exceptionnellement élevé comparé aux supports traditionnels',
    },
    {
      icon: Zap,
      percentage: '576',
      title: 'Diffusions/jour',
      description: 'Chaque message publicitaire est diffusé 576 fois par jour pour une visibilité maximale',
    },
    {
      icon: Recycle,
      percentage: '0',
      title: 'Déchet',
      description: 'Solution 100% écologique sans production de déchets papier ou plastique',
    },
  ];

  return (
    <StandardSection
      title="Pourquoi Choisir l'"
      highlight="Affichage Digital"
      subtitle="L'affichage digital révolutionne la communication outdoor avec des performances inégalées et un impact environnemental positif"
      variant="gray"
      padding="xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => {
          const IconComponent = advantage.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconComponent className="h-8 w-8 text-red-600" />
              </div>
              
              <div className="text-4xl font-bold text-red-600 mb-2">
                {advantage.percentage}
                {advantage.title === 'Mémorisation' && '%'}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          );
        })}
      </div>
    </StandardSection>
  );
};

export default AdvantagesSection;
