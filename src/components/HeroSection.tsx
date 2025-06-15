
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Monitor } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import Section from '@/components/Section';

const HeroSection = () => {
  return (
    <Section 
      id="accueil" 
      background="gradient-dark" 
      className="relative min-h-screen flex items-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full text-white">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-balance">
            Leader de l'<span className="text-red-400">Affichage Digital</span> en Martinique
          </h1>
          
          <p className="text-large mb-8 text-gray-200">
            5 écrans LED 6m² dans les zones stratégiques de la Martinique
            <br />
            <span className="text-red-400 font-semibold">Votre message vu par 50 000+ personnes/jour</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="btn-primary text-lg">
              Obtenir un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button className="btn-secondary bg-transparent text-lg">
              Voir nos Implantations
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Key Stats avec le nouveau composant */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              icon={Monitor}
              value="5"
              label="Écrans LED 6m²"
              variant="inverse"
            />
            
            <MetricCard
              icon={() => <span className="text-2xl font-bold">73%</span>}
              value="Mémorisation"
              label="Taux de rappel"
              variant="inverse"
            />
            
            <MetricCard
              icon={() => <span className="text-xl font-bold">576</span>}
              value="Diffusions/jour"
              label="Par écran"
              variant="inverse"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
