
import React from 'react';
import { Award, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MetricCard from '@/components/MetricCard';
import Section from '@/components/Section';

const RealisationsHero = () => {
  return (
    <Section background="gradient-dark" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 w-full text-white">
        <div className="max-w-5xl">
          <h1 className="mb-6 text-balance leading-tight">
            Nos <span className="text-red-400">Réalisations</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed">
            Découvrez comment nos solutions d'affichage digital ont transformé 
            la communication de nos clients en Martinique
            <br />
            <span className="text-red-300 font-semibold">Plus de 500 campagnes réussies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="btn-primary text-lg px-8 py-4">
              Voir nos projets
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <MetricCard
              icon={Award}
              value="50+"
              label="Projets réalisés"
              variant="inverse"
            />
            
            <MetricCard
              icon={TrendingUp}
              value="+40%"
              label="Augmentation visibilité"
              variant="inverse"
            />
            
            <MetricCard
              icon={Users}
              value="100K+"
              label="Personnes atteintes/jour"
              variant="inverse"
            />
            
            <MetricCard
              icon={Target}
              value="95%"
              label="Satisfaction client"
              variant="inverse"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RealisationsHero;
