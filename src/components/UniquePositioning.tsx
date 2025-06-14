
import React from 'react';
import { Star, MapPin, Zap, Users, Award, TrendingUp } from 'lucide-react';

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
    <section id="positionnement" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-12 w-12 text-yellow-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Notre Différence Caribmatic
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leader incontesté de l'affichage digital en Martinique, 
            nous combinons expertise locale et innovation technologique pour des résultats exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-red-600 rounded-lg p-4 flex-shrink-0">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300 mb-3">{advantage.description}</p>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 inline-block">
                    <span className="text-yellow-400 font-semibold">{advantage.stats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Analysis */}
        <div className="bg-white bg-opacity-10 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Pourquoi Choisir Caribmatic ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">#1</div>
              <h4 className="text-lg font-semibold mb-2">Leader du Marché</h4>
              <p className="text-gray-300 text-sm">
                Seule entreprise spécialisée en affichage LED 6m² en Martinique
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5x</div>
              <h4 className="text-lg font-semibold mb-2">Plus Écologique</h4>
              <p className="text-gray-300 text-sm">
                Consommation énergétique 5 fois inférieure aux panneaux traditionnels
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <h4 className="text-lg font-semibold mb-2">Local</h4>
              <p className="text-gray-300 text-sm">
                Entreprise et équipe entièrement basées en Martinique
              </p>
            </div>
          </div>
        </div>

        {/* Market Position */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 shadow-xl">
            <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              L'Entreprise Affichage Martinique de Référence
            </h3>
            <p className="text-red-100 text-lg mb-6">
              Avec plus de 80% de parts de marché sur l'affichage LED grand format, 
              Caribmatic s'impose comme le partenaire incontournable des entreprises martiniquaises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-red-100 text-sm">Campagnes réalisées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-red-100 text-sm">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5M+</div>
                <div className="text-red-100 text-sm">Impressions mensuelles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-red-100 text-sm">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniquePositioning;
