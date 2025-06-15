
import React from 'react';
import { ArrowRight, MapPin, Monitor } from 'lucide-react';
import StandardHero from './StandardHero';

const HeroSection = () => {
  return (
    <StandardHero
      title="Leader de l'"
      highlight="Affichage Digital"
      subtitle="en Martinique"
      description="5 écrans LED 6m² dans les zones stratégiques de la Martinique. Votre message vu par 50 000+ personnes/jour avec un taux de mémorisation exceptionnel de 73%."
      primaryCTA={{
        text: "Obtenir un Devis Gratuit",
        icon: ArrowRight
      }}
      secondaryCTA={{
        text: "Voir nos Implantations",
        icon: MapPin
      }}
      stats={[
        {
          icon: Monitor,
          value: "5",
          label: "Écrans LED 6m²",
          description: "Positionnement stratégique"
        },
        {
          icon: ({ className }) => (
            <span className={`${className} text-white font-bold text-lg`}>73%</span>
          ),
          value: "Mémorisation",
          label: "Taux de rappel",
          description: "Performance exceptionnelle"
        },
        {
          icon: ({ className }) => (
            <span className={`${className} text-white font-bold text-sm`}>576</span>
          ),
          value: "Diffusions/jour",
          label: "Par écran",
          description: "Visibilité maximale"
        }
      ]}
      variant="gradient"
      backgroundClass="from-gray-900 via-red-900 to-black"
    />
  );
};

export default HeroSection;
