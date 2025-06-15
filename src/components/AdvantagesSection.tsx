
import React from 'react';
import { Zap, BarChart3, Recycle } from 'lucide-react';
import StandardSection from './StandardSection';
import StandardCard from './StandardCard';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: BarChart3,
      percentage: '73%',
      title: 'Mémorisation Exceptionnelle',
      description: 'Taux de mémorisation publicitaire remarquablement élevé grâce à la technologie LED haute définition et au positionnement stratégique de nos écrans.',
    },
    {
      icon: Zap,
      percentage: '576',
      title: 'Diffusions Quotidiennes',
      description: 'Votre message publicitaire bénéficie d\'une exposition maximale avec 576 diffusions par jour, garantissant une visibilité optimale auprès de votre audience cible.',
    },
    {
      icon: Recycle,
      percentage: '0%',
      title: 'Impact Environnemental',
      description: 'Solution 100% écologique et durable sans production de déchets papier ou plastique, contribuant à la préservation de notre environnement martiniquais.',
    },
  ];

  return (
    <StandardSection
      title="L'Excellence de l'"
      highlight="Affichage Digital Premium"
      subtitle="Révolutionnez votre communication avec des performances inégalées et un impact environnemental positif grâce à notre technologie d'avant-garde"
      variant="gray"
      padding="xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {advantages.map((advantage, index) => (
          <StandardCard
            key={index}
            icon={advantage.icon}
            iconBg="bg-gradient-to-br from-red-50 via-red-100 to-red-200"
            iconColor="text-red-600"
            title={advantage.title}
            description={advantage.description}
            value={advantage.percentage}
            variant="stats"
            className="transform hover:scale-105"
          />
        ))}
      </div>
    </StandardSection>
  );
};

export default AdvantagesSection;
