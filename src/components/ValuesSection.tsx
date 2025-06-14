
import React from 'react';
import { Lightbulb, Leaf, Heart, Shield } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies LED pour offrir une qualité d\'affichage exceptionnelle adaptée au climat tropical.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Leaf,
      title: 'Écologie',
      description: 'Notre engagement environnemental se traduit par des écrans basse consommation et un bilan carbone maîtrisé de 76t CO2e.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Entreprise 100% martiniquaise, nous privilégions les relations humaines et la compréhension des enjeux locaux.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Nos installations sont conçues pour résister aux conditions tropicales avec un taux de disponibilité de 99,2%.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="valeurs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ces valeurs guident chacune de nos décisions et nourrissent notre engagement 
            envers une communication responsable et efficace en Martinique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${value.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Démocratiser l'affichage digital en Martinique en proposant des solutions innovantes, 
              écologiques et accessibles à tous les acteurs économiques de l'île, 
              tout en préservant la beauté de notre environnement caribéen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
