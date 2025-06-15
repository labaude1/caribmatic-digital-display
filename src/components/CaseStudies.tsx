
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: 'Campagne Centre Commercial - Écran Bd Général de Gaulle',
      client: 'Galerie Marchande Fort-de-France',
      duration: '4 semaines',
      budget: '12 000€',
      location: 'Boulevard Général de Gaulle, Fort-de-France',
      challenge: 'Augmenter la fréquentation du centre commercial pendant la période de soldes d\'été dans un contexte de concurrence forte avec les centres périphériques.',
      solution: 'Campagne d\'affichage dynamique sur notre écran LED 6m² avec messages adaptés selon les heures (promotions matinales, animations après-midi) et ciblage des flux de circulation.',
      results: [
        { metric: 'Fréquentation', value: '+28%', icon: Users },
        { metric: 'Chiffre d\'affaires', value: '+22%', icon: TrendingUp },
        { metric: 'Durée de visite', value: '+35%', icon: Clock },
        { metric: 'Taux de conversion', value: '+18%', icon: Target },
      ],
      testimonial: '"L\'emplacement de l\'écran Caribmatic sur le Boulevard Général de Gaulle nous a permis de toucher efficacement notre clientèle cible. Les résultats ont dépassé nos attentes."',
      clientName: 'Marie-Claire Destouches, Directrice Marketing',
      passagesJour: '25 000 passages/jour'
    },
    {
      id: 2,
      title: 'Lancement Automobile - Écran Zone Génipa',
      client: 'Peugeot Martinique',
      duration: '3 semaines',
      budget: '15 000€',
      location: 'Zone Commerciale Génipa, Le Lamentin',
      challenge: 'Lancer efficacement le nouveau modèle Peugeot 308 auprès de la clientèle martiniquaise et générer du trafic en concession.',
      solution: 'Campagne multi-créatifs sur notre écran LED Zone Génipa avec visuels dynamiques du véhicule, offres spéciales et intégration QR code pour prendre rendez-vous.',
      results: [
        { metric: 'Essais programmés', value: '+45%', icon: Users },
        { metric: 'Ventes', value: '+32%', icon: TrendingUp },
        { metric: 'Notoriété spontanée', value: '+28%', icon: Target },
        { metric: 'Trafic concession', value: '+40%', icon: Clock },
      ],
      testimonial: '"La visibilité offerte par l\'écran Caribmatic en Zone Génipa a été décisive pour le succès du lancement. Un ROI exceptionnel !"',
      clientName: 'Jean-Luc Morin, Directeur Commercial Peugeot Martinique',
      passagesJour: '18 000 passages/jour'
    },
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Études de Cas <span className="text-red-600">Caribmatic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos écrans LED premium ont généré des résultats concrets 
            pour nos clients martiniquais
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
                      <p className="text-lg text-gray-600 mb-2">{study.client}</p>
                      <p className="text-sm text-red-600 font-semibold mb-4">📍 {study.location}</p>
                      <div className="flex gap-4 text-sm text-gray-500 mb-2">
                        <span>Durée: {study.duration}</span>
                        <span>Budget: {study.budget}</span>
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        👁️ {study.passagesJour}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Défi</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution Caribmatic</h4>
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
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
            onClick={handleContactClick}
          >
            Demander une étude personnalisée
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
