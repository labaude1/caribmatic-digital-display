
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Users, Clock, Car, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ImplantationsMap from '@/components/ImplantationsMap';
import ZoneReservationForm from '@/components/ZoneReservationForm';

const Implantations = () => {
  const zones = [
    {
      id: 'californie',
      name: 'Zone Californie',
      location: 'Lamentin - Avenue Maurice Bishop',
      description: 'Position stratégique sur l\'axe principal reliant l\'aéroport au centre de l\'île',
      traffic: '18,000',
      audience: 'Résidents, voyageurs, professionnels',
      visibility: 'Très élevée - carrefour majeur',
      access: 'Accès direct depuis RN5, parking disponible',
      peakHours: '7h-9h / 17h-19h',
      demographics: 'Mixte : 25-55 ans, CSP+',
      image: '/placeholder.svg',
      coordinates: [14.5994, -61.0037]
    },
    {
      id: 'mangles-acajou',
      name: 'Zone Mangles Acajou',
      location: 'Fort-de-France - Rond-point Mangles Acajou',
      description: 'Carrefour névralgique entre Fort-de-France et les communes du sud',
      traffic: '25,000',
      audience: 'Travailleurs, résidents, étudiants',
      visibility: 'Maximale - passage obligé',
      access: 'Intersection RN1/RN6, transports en commun',
      peakHours: '6h30-9h / 16h30-19h',
      demographics: 'Actifs : 20-60 ans, toutes CSP',
      image: '/placeholder.svg',
      coordinates: [14.5755, -61.0692]
    },
    {
      id: 'lezarde',
      name: 'Zone Lézarde',
      location: 'Lamentin - Pont de la Lézarde',
      description: 'Point de passage incontournable vers le sud de la Martinique',
      traffic: '22,000',
      audience: 'Touristes, résidents du sud, professionnels',
      visibility: 'Élevée - axe touristique majeur',
      access: 'RN5 direction sud, aire de repos proche',
      peakHours: '8h-10h / 17h-20h',
      demographics: 'Mixte : 25-65 ans, vacanciers',
      image: '/placeholder.svg',
      coordinates: [14.5833, -60.9833]
    },
    {
      id: 'ducos-champigny',
      name: 'Zone Ducos Champigny',
      location: 'Ducos - Zone Industrielle Champigny',
      description: 'Hub logistique et industriel, forte concentration d\'entreprises',
      traffic: '12,000',
      audience: 'Professionnels, employés industriels',
      visibility: 'Ciblée - zone d\'activité',
      access: 'Zone industrielle, parking entreprises',
      peakHours: '6h-8h / 16h-18h',
      demographics: 'Professionnels : 25-55 ans',
      image: '/placeholder.svg',
      coordinates: [14.5667, -60.9167]
    },
    {
      id: 'place-armes',
      name: 'Place d\'Armes',
      location: 'Fort-de-France - Centre Historique',
      description: 'Cœur historique et commercial de la capitale martiniquaise',
      traffic: '15,000',
      audience: 'Touristes, commerçants, habitants centre-ville',
      visibility: 'Premium - centre historique',
      access: 'Centre-ville piéton, parking Savane',
      peakHours: '9h-12h / 14h-18h',
      demographics: 'Touristes et locaux : 20-70 ans',
      image: '/placeholder.svg',
      coordinates: [14.6037, -61.0731]
    }
  ];

  const scrollToZone = (zoneId: string) => {
    const element = document.getElementById(zoneId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Écrans LED dans les <span className="text-red-600">Zones Stratégiques</span> de Martinique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            5 implantations premium positionnées sur les axes à plus fort trafic pour une visibilité maximale de votre message publicitaire
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="h-5 w-5 mr-2" />
              92,000+ personnes/jour
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <MapPin className="h-5 w-5 mr-2" />
              5 zones stratégiques
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Clock className="h-5 w-5 mr-2" />
              Diffusion 24h/24
            </Badge>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cartographie de nos <span className="text-red-600">Implantations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez l'emplacement stratégique de nos écrans LED sur les principaux axes de circulation de la Martinique
            </p>
          </div>
          
          <ImplantationsMap zones={zones} onZoneClick={scrollToZone} />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {zones.map((zone) => (
              <Button
                key={zone.id}
                variant="outline"
                onClick={() => scrollToZone(zone.id)}
                className="p-3 text-sm"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {zone.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {zones.map((zone, index) => (
              <div key={zone.id} id={zone.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {zone.name}
                    </h2>
                    <h3 className="text-xl text-red-600 font-semibold mb-4">
                      {zone.location}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{zone.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center">
                            <Users className="h-5 w-5 mr-2 text-red-600" />
                            Trafic Quotidien
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-red-600">{zone.traffic}</p>
                          <p className="text-sm text-gray-600">véhicules/jour</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-red-600" />
                            Heures de Pointe
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-semibold">{zone.peakHours}</p>
                          <p className="text-sm text-gray-600">Trafic maximum</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Badge className="mr-3 mt-1">Audience</Badge>
                        <p className="text-gray-700">{zone.audience}</p>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mr-3 mt-1">Visibilité</Badge>
                        <p className="text-gray-700">{zone.visibility}</p>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mr-3 mt-1">Accès</Badge>
                        <p className="text-gray-700">{zone.access}</p>
                      </div>
                      <div className="flex items-start">
                        <Badge className="mr-3 mt-1">Démographie</Badge>
                        <p className="text-gray-700">{zone.demographics}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={zone.image}
                        alt={`Implantation ${zone.name} - ${zone.location}`}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center">
                          <Camera className="h-5 w-5 mr-2" />
                          <span className="text-sm font-medium">Vue de l'emplacement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Réservez votre <span className="text-red-600">Emplacement</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la zone stratégique qui correspond le mieux à vos objectifs marketing et obtenez un devis personnalisé
            </p>
          </div>
          
          <ZoneReservationForm zones={zones} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Implantations;
