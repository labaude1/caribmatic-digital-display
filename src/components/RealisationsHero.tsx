
import React from 'react';
import { Award, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RealisationsHero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="text-red-200">Réalisations</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Découvrez comment nos solutions d'affichage digital ont transformé 
            la communication de nos clients en Martinique
          </p>
          <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold">
            Voir nos projets
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-red-100">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">+40%</div>
            <div className="text-red-100">Augmentation visibilité</div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">100K+</div>
            <div className="text-red-100">Personnes atteintes/jour</div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-red-100">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealisationsHero;
