
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const comparisons = [
    {
      title: 'Centre Commercial La Galleria',
      subtitle: 'Transformation de la communication',
      before: {
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
        label: 'Avant',
        description: 'Affichage statique traditionnel, faible impact visuel',
        metrics: 'Fréquentation: 5000 visiteurs/jour'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
        label: 'Après',
        description: 'Écran LED 6m² avec contenu dynamique et interactif',
        metrics: 'Fréquentation: 6500 visiteurs/jour (+30%)'
      }
    },
    {
      title: 'Concession Automobile',
      subtitle: 'Modernisation de la vitrine digitale',
      before: {
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
        label: 'Avant',
        description: 'Panneaux fixes peu attractifs pour la clientèle',
        metrics: 'Essais: 45 par mois'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
        label: 'Après',
        description: 'Affichage digital avec démonstrations vidéo des véhicules',
        metrics: 'Essais: 63 par mois (+40%)'
      }
    },
    {
      title: 'Campagne Événementielle',
      subtitle: 'Amplification de l\'impact communication',
      before: {
        image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop',
        label: 'Avant',
        description: 'Communication traditionnelle limitée dans le temps',
        metrics: 'Notoriété: 25% de la population'
      },
      after: {
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
        label: 'Après',
        description: 'Campagne digitale multi-écrans avec countdown dynamique',
        metrics: 'Notoriété: 62% de la population (+148%)'
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comparisons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comparisons.length) % comparisons.length);
  };

  const currentComparison = comparisons[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avant / <span className="text-red-600">Après</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualisez la transformation concrète de nos installations et l'impact 
            mesurable sur les performances de nos clients
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* En-tête de comparaison */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentComparison.title}
            </h3>
            <p className="text-lg text-gray-600">
              {currentComparison.subtitle}
            </p>
          </div>

          {/* Comparaison Avant/Après */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Avant */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={currentComparison.before.image}
                  alt="Avant transformation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentComparison.before.label}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {currentComparison.before.description}
                </p>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-700">
                    {currentComparison.before.metrics}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Après */}
            <Card className="overflow-hidden border-2 border-red-200">
              <div className="relative">
                <img
                  src={currentComparison.after.image}
                  alt="Après transformation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentComparison.after.label}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {currentComparison.after.description}
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm font-semibold text-red-700">
                    {currentComparison.after.metrics}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="border-gray-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="border-gray-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Transformez votre communication
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
