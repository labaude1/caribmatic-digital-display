
import React from 'react';
import { ArrowRight, MapPin, Monitor, Eye, RotateCcw } from 'lucide-react';
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
          icon: Eye,
          value: "73%",
          label: "Mémorisation",
          description: "Performance exceptionnelle"
        },
        {
          icon: RotateCcw,
          value: "576",
          label: "Diffusions/jour",
          description: "Visibilité maximale"
        }
      ]}
      variant="gradient"
      backgroundClass="from-gray-900 via-red-900 to-black"
    />
  );
};

export default HeroSection;
