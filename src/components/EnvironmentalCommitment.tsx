
import React from 'react';
import { Leaf, Zap, Recycle, BarChart3, TreePine, Sun } from 'lucide-react';

const EnvironmentalCommitment = () => {
  const commitments = [
    {
      icon: Zap,
      title: 'Énergie Renouvelable',
      stat: '100%',
      description: 'Nos écrans fonctionnent à l\'énergie solaire pendant 8h/jour'
    },
    {
      icon: BarChart3,
      title: 'Bilan Carbone',
      stat: '76t CO2e',
      description: 'Émissions annuelles maîtrisées et compensées à 50%'
    },
    {
      icon: Recycle,
      title: 'Recyclage',
      stat: '95%',
      description: 'De nos composants électroniques sont recyclés en fin de vie'
    },
    {
      icon: TreePine,
      title: 'Compensation',
      stat: '500',
      description: 'Arbres plantés en Martinique depuis notre création'
    }
  ];

  return (
    <section id="environnement" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-green-600 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Engagement Environnemental
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            En tant qu'entreprise caribéenne, nous avons une responsabilité particulière 
            envers la préservation de notre écosystème insulaire unique.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{item.stat}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Sun className="h-8 w-8 text-yellow-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Énergie Solaire</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Nos écrans LED nouvelle génération intègrent des panneaux solaires haute performance 
              spécialement conçus pour le climat tropical martiniquais.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Autonomie énergétique de 8h/jour en moyenne
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Réduction de 60% de la consommation électrique
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Batterie de stockage pour continuité nocturne
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Démarche Éco-responsable</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Notre approche globale intègre tous les aspects environnementaux, 
              de la conception à la fin de vie de nos équipements.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Composants LED basse consommation certifiés
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Programme de recyclage en partenariat local
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Maintenance préventive pour allonger la durée de vie
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Notre Objectif 2025</h3>
          <p className="text-xl mb-6">
            Atteindre la neutralité carbone et devenir la première entreprise d'affichage 
            100% autonome en énergie renouvelable en Martinique.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold">Bilan carbone actuel : 76t CO2e/an</p>
            <p className="text-sm opacity-90">Objectif 2025 : 0t CO2e/an</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalCommitment;
