
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Monitor, Eye, Zap } from 'lucide-react';
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
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full text-white">
        <div className="max-w-5xl">
          <h1 className="mb-6 text-balance leading-tight">
            Leader de l'<span className="text-red-400">Affichage Digital</span> en Martinique
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed">
            5 écrans LED 6m² dans les zones stratégiques de la Martinique
            <br />
            <span className="text-red-300 font-semibold">Votre message vu par 50 000+ personnes/jour</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="btn-primary text-lg px-8 py-4">
              Obtenir un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Voir nos Implantations
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Key Stats harmonisées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard
              icon={Monitor}
              value="5"
              label="Écrans LED"
              description="6m² chacun"
              variant="inverse"
            />
            
            <MetricCard
              icon={Eye}
              value="73%"
              label="Mémorisation"
              description="Taux de rappel publicitaire"
              variant="inverse"
            />
            
            <MetricCard
              icon={Zap}
              value="576"
              label="Diffusions"
              description="Par jour et par écran"
              variant="inverse"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
