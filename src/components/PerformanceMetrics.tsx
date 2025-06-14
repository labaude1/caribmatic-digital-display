
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Brain, ShoppingCart, TrendingUp, Users, Target } from 'lucide-react';

const PerformanceMetrics = () => {
  const metrics = [
    {
      title: 'Taux de Mémorisation',
      value: '78%',
      description: 'des personnes se souviennent de nos messages après 24h',
      icon: Brain,
      color: 'bg-blue-500',
    },
    {
      title: 'Visibilité Garantie',
      value: '100K+',
      description: 'impressions quotidiennes sur nos écrans',
      icon: Eye,
      color: 'bg-green-500',
    },
    {
      title: 'Impact Business',
      value: '+32%',
      description: 'augmentation moyenne du CA de nos clients',
      icon: TrendingUp,
      color: 'bg-red-500',
    },
    {
      title: 'Engagement Client',
      value: '85%',
      description: 'de taux d\'action après exposition',
      icon: Target,
      color: 'bg-purple-500',
    },
    {
      title: 'Conversion',
      value: '+28%',
      description: 'de taux de conversion en magasin',
      icon: ShoppingCart,
      color: 'bg-orange-500',
    },
    {
      title: 'Portée Démographique',
      value: '25-65',
      description: 'ans, coeur de cible atteint efficacement',
      icon: Users,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Métriques de <span className="text-red-500">Performance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des résultats mesurables qui prouvent l'efficacité de nos solutions d'affichage digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`${metric.color} rounded-lg p-2`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-white">
                      {metric.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Section comparative */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Caribmatic vs <span className="text-red-500">Affichage Traditionnel</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-red-400 mb-2">5x</div>
                <div className="text-white font-semibold mb-2">Plus d'Impact</div>
                <div className="text-gray-300 text-sm">
                  Comparé aux panneaux statiques traditionnels
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-red-400 mb-2">3x</div>
                <div className="text-white font-semibold mb-2">Plus de Mémorisation</div>
                <div className="text-gray-300 text-sm">
                  Messages dynamiques vs affichage fixe
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-white font-semibold mb-2">Visibilité Continue</div>
                <div className="text-gray-300 text-sm">
                  Éclairage LED haute luminosité
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
