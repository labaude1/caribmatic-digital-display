
import React from 'react';
import { ArrowRight, MapPin, Monitor, Eye, RotateCcw } from 'lucide-react';
import StandardHero from './StandardHero';

const HeroSection = () => {
  const handleGetQuote = () => {
    console.log('Devis gratuit clicked');
    // Navigation vers le formulaire de contact
  };

  const handleViewLocations = () => {
    console.log('Voir implantations clicked');
    // Navigation vers la page implantations
  };

  return (
    <StandardHero
      title="Leader de l'"
      highlight="Affichage Digital"
      subtitle="en Martinique"
      description="5 écrans LED 6m² dans les zones stratégiques de la Martinique. Votre message vu par 50 000+ personnes/jour avec un taux de mémorisation exceptionnel de 73%."
      primaryCTA={{
        text: "Obtenir un Devis Gratuit",
        icon: ArrowRight,
        onClick: handleGetQuote
      }}
      secondaryCTA={{
        text: "Voir nos Implantations",
        icon: MapPin,
        onClick: handleViewLocations
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
    />
  );
};

export default HeroSection;
