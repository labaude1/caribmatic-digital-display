
import React from 'react';
import { Calendar, Lightbulb, Target, Rocket } from 'lucide-react';

const CompanyHistory = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Fondation',
      description: 'Création de Caribmatic avec la vision de moderniser l\'affichage publicitaire en Martinique.',
      icon: Lightbulb
    },
    {
      year: '2019',
      title: 'Premier écran',
      description: 'Installation du premier écran LED 6m² au Lamentin, marquant le début de notre révolution digitale.',
      icon: Rocket
    },
    {
      year: '2021',
      title: 'Expansion',
      description: 'Déploiement de 3 écrans supplémentaires dans les zones stratégiques de l\'île.',
      icon: Target
    },
    {
      year: '2024',
      title: 'Leadership',
      description: 'Position de leader confirmée avec 5 écrans et une approche éco-responsable innovante.',
      icon: Calendar
    }
  ];

  return (
    <section id="histoire" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis 2018, Caribmatic écrit l'histoire de l'affichage digital en Martinique, 
            avec une vision claire : démocratiser la communication moderne pour tous.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={milestone.year} className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className={`flex items-center mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`bg-red-100 rounded-full p-3 ${isEven ? 'ml-4' : 'mr-4'}`}>
                          <Icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="text-2xl font-bold text-red-600">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
