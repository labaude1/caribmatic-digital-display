
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Monitor } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Leader de l'<span className="text-red-500">Affichage Digital</span> en Martinique
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200">
            5 écrans LED 6m² dans les zones stratégiques de la Martinique
            <br />
            <span className="text-red-400">Votre message vu par 50 000+ personnes/jour</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            >
              Obtenir un Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              Voir nos Implantations
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-gray-300">Écrans LED 6m²</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">73%</span>
              </div>
              <div>
                <div className="text-2xl font-bold">Mémorisation</div>
                <div className="text-gray-300">Taux de rappel</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">576</span>
              </div>
              <div>
                <div className="text-2xl font-bold">Diffusions/jour</div>
                <div className="text-gray-300">Par écran</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
