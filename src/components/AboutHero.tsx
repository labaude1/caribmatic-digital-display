
import React from 'react';
import { Monitor, MapPin, Users, Award } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            À propos de <span className="text-red-200">Caribmatic</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
            Leader de l'affichage digital en Martinique depuis 2018, 
            nous révolutionnons la communication outdoor dans les Antilles.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="h-6 w-6 text-red-200" />
            <span className="text-lg text-red-100">Entreprise affichage Martinique certifiée</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="text-red-100">Écrans LED 6m²</div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">15</div>
            <div className="text-red-100">Experts dédiés</div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-red-100">Années d'expertise</div>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-red-100">Martinique</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
