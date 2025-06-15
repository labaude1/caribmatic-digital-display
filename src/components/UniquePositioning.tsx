
import React from 'react';
import { Star, MapPin, Zap, Users, Award, TrendingUp } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import MetricCard from '@/components/MetricCard';

const UniquePositioning = () => {
  const advantages = [
    {
      icon: MapPin,
      title: 'Connaissance Locale',
      description: 'Seule entreprise 100% martiniquaise du secteur, nous maîtrisons parfaitement les spécificités locales.',
      stats: '6 ans d\'expertise locale'
    },
    {
      icon: Zap,
      title: 'Technologie Tropicale',
      description: 'Nos écrans sont spécialement adaptés au climat caribéen avec une résistance renforcée.',
      stats: '99,2% de disponibilité'
    },
    {
      icon: Users,
      title: 'Service de Proximité',
      description: 'Support technique local 24/7 et équipe dédiée basée en Martinique.',
      stats: '15 experts locaux'
    },
    {
      icon: Award,
      title: 'Innovation Écologique',
      description: 'Pionniers de l\'affichage solaire en Martinique avec un bilan carbone maîtrisé.',
      stats: '76t CO2e seulement'
    }
  ];

  return (
    <Section id="positionnement" background="dark" className="text-white">
      <SectionHeader
        title="Notre Différence Caribmatic"
        description="Leader incontesté de l'affichage digital en Martinique, nous combinons expertise locale et innovation technologique pour des résultats exceptionnels."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {advantages.map((advantage, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <advantage.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{advantage.description}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 inline-block border border-white/20">
                <span className="text-red-300 font-semibold">{advantage.stats}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <MetricCard
          icon={Star}
          value="#1"
          label="Leader du Marché"
          description="Seule entreprise spécialisée en affichage LED 6m² en Martinique"
          variant="inverse"
        />
        
        <MetricCard
          icon={Zap}
          value="5x"
          label="Plus Écologique"
          description="Consommation énergétique 5 fois inférieure aux panneaux traditionnels"
          variant="inverse"
        />
        
        <MetricCard
          icon={Users}
          value="100%"
          label="Local"
          description="Entreprise et équipe entièrement basées en Martinique"
          variant="inverse"
        />
      </div>

      {/* Market Position */}
      <div className="card-interactive bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 shadow-xl text-white">
        <div className="text-center">
          <TrendingUp className="h-12 w-12 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            L'Entreprise Affichage Martinique de Référence
          </h3>
          <p className="text-red-100 text-lg mb-8 leading-relaxed">
            Avec plus de 80% de parts de marché sur l'affichage LED grand format, 
            Caribmatic s'impose comme le partenaire incontournable des entreprises martiniquaises.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-red-100">Campagnes réalisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-red-100">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5M+</div>
              <div className="text-red-100">Impressions mensuelles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-red-100">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UniquePositioning;
