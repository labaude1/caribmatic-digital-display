
import React, { useState } from 'react';
import { MapPin, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Zone {
  id: string;
  name: string;
  location: string;
  description: string;
  traffic: string;
  peakHours: string;
  coordinates: [number, number];
}

interface ImplantationsMapProps {
  zones: Zone[];
  onZoneClick: (zoneId: string) => void;
}

const ImplantationsMap = ({ zones, onZoneClick }: ImplantationsMapProps) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const handleZoneClick = (zone: Zone) => {
    setSelectedZone(zone);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Map Area */}
        <div className="lg:col-span-2 relative">
          <div className="h-96 lg:h-[600px] bg-gradient-to-br from-blue-100 via-green-100 to-blue-50 relative overflow-hidden">
            {/* Martinique Outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Simplified Martinique shape */}
                <svg viewBox="0 0 200 300" className="w-full h-full opacity-20">
                  <path
                    d="M100 20 C120 25, 140 40, 150 60 L155 80 C160 100, 155 120, 150 140 L145 160 C140 180, 130 200, 120 220 L110 240 C100 260, 90 270, 80 280 L70 290 L60 285 C50 280, 45 270, 40 260 L35 240 C30 220, 35 200, 40 180 L45 160 C50 140, 55 120, 60 100 L65 80 C70 60, 80 40, 90 30 L100 20 Z"
                    fill="currentColor"
                    className="text-green-200"
                  />
                </svg>
                
                {/* Zone Markers */}
                {zones.map((zone, index) => (
                  <button
                    key={zone.id}
                    onClick={() => handleZoneClick(zone)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                      selectedZone?.id === zone.id 
                        ? 'z-20 scale-110' 
                        : 'z-10 hover:z-15'
                    }`}
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 12)}%`
                    }}
                  >
                    <div className={`relative ${
                      selectedZone?.id === zone.id 
                        ? 'animate-pulse' 
                        : ''
                    }`}>
                      <MapPin className={`h-8 w-8 ${
                        selectedZone?.id === zone.id 
                          ? 'text-red-700' 
                          : 'text-red-600'
                      } drop-shadow-lg`} />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <div className={`text-xs font-medium px-2 py-1 rounded ${
                          selectedZone?.id === zone.id 
                            ? 'bg-red-600 text-white' 
                            : 'bg-white text-gray-700 border'
                        } shadow-lg`}>
                          {zone.name.replace('Zone ', '')}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <h4 className="font-semibold text-sm text-gray-900 mb-2">Légende</h4>
              <div className="flex items-center text-xs text-gray-600">
                <MapPin className="h-4 w-4 text-red-600 mr-2" />
                Écrans LED CARIBMATIC
              </div>
            </div>
            
            {/* Map Info */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-xs text-gray-600">
                <div className="font-semibold">Martinique</div>
                <div>5 implantations stratégiques</div>
              </div>
            </div>
          </div>
        </div>

        {/* Zone Details Panel */}
        <div className="bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Détails de l'implantation
          </h3>
          
          {selectedZone ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{selectedZone.name}</CardTitle>
                <CardDescription>{selectedZone.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{selectedZone.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      Trafic quotidien
                    </span>
                    <span className="font-semibold text-red-600">{selectedZone.traffic}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Heures de pointe
                    </span>
                    <span className="text-sm font-medium">{selectedZone.peakHours}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => onZoneClick(selectedZone.id)}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Voir les détails
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-8">
              <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-sm">
                Cliquez sur un marqueur pour afficher les détails de l'implantation
              </p>
            </div>
          )}
          
          {/* Quick Stats */}
          <div className="mt-6 space-y-3">
            <h4 className="font-semibold text-gray-900">Statistiques globales</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white rounded p-3 text-center">
                <div className="text-2xl font-bold text-red-600">92K+</div>
                <div className="text-xs text-gray-600">Personnes/jour</div>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-xs text-gray-600">Diffusion continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplantationsMap;
