
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'La Galleria - Campagne Soldes d\'Été',
      client: 'Centre Commercial La Galleria',
      duration: '3 semaines',
      budget: '15 000€',
      challenge: 'Augmenter la fréquentation pendant la période des soldes d\'été dans un contexte de concurrence accrue.',
      solution: 'Campagne d\'affichage dynamique avec contenu adaptatif selon les heures de pointe et ciblage démographique.',
      results: [
        { metric: 'Fréquentation', value: '+30%', icon: Users },
        { metric: 'Chiffre d\'affaires', value: '+22%', icon: TrendingUp },
        { metric: 'Temps de visite', value: '+15%', icon: Clock },
        { metric: 'Taux de conversion', value: '+18%', icon: Target },
      ],
      testimonial: '"Les résultats ont dépassé toutes nos attentes. L\'affichage digital nous a permis de nous démarquer de la concurrence."',
      clientName: 'Marie-Claire Dubois, Directrice Marketing',
    },
    {
      id: 2,
      title: 'Peugeot - Lancement 308',
      client: 'Concession Peugeot Le Lamentin',
      duration: '4 semaines',
      budget: '20 000€',
      challenge: 'Lancer efficacement le nouveau modèle Peugeot 308 sur le marché martiniquais.',
      solution: 'Campagne multi-écrans avec contenu interactif et intégration des réseaux sociaux pour amplifier l\'impact.',
      results: [
        { metric: 'Ventes', value: '+25%', icon: TrendingUp },
        { metric: 'Essais', value: '+40%', icon: Users },
        { metric: 'Notoriété', value: '+35%', icon: Target },
        { metric: 'Engagement social', value: '+60%', icon: Clock },
      ],
      testimonial: '"Une campagne qui a parfaitement capturé l\'attention de notre clientèle cible. Résultats exceptionnels !"',
      clientName: 'Jean-Luc Martin, Directeur Commercial',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Études de Cas <span className="text-red-600">Détaillées</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plongez dans nos projets phares et découvrez comment nous avons relevé 
            les défis de nos clients avec des résultats mesurables
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Contenu textuel */}
              <div className="lg:w-1/2">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{study.client}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>Durée: {study.duration}</span>
                        <span>Budget: {study.budget}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Défi</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <blockquote className="text-gray-700 italic mb-3">
                          {study.testimonial}
                        </blockquote>
                        <cite className="text-sm text-gray-600 font-medium">
                          — {study.clientName}
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Métriques */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-6">
                  {study.results.map((result, idx) => {
                    const IconComponent = result.icon;
                    return (
                      <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-red-600" />
                          </div>
                          <div className="text-3xl font-bold text-gray-900 mb-2">
                            {result.value}
                          </div>
                          <div className="text-gray-600">
                            {result.metric}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            Demander une étude personnalisée
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
