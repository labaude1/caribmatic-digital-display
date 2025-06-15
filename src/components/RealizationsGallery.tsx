
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import OptimizedImage from '@/components/OptimizedImage';

const RealizationsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const filters = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'retail', label: 'Commerce' },
    { id: 'automotive', label: 'Automobile' },
    { id: 'events', label: 'Événementiel' },
    { id: 'public', label: 'Secteur public' },
    { id: 'hospitality', label: 'Hôtellerie' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Écran LED Boulevard Général de Gaulle',
      category: 'retail',
      zone: 'Fort-de-France',
      location: 'Boulevard Général de Gaulle',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      description: 'Installation d\'un écran LED 6m² sur l\'axe principal de Fort-de-France, générant plus de 25 000 passages quotidiens',
      results: '+30% visibilité',
      duration: '3 semaines',
      clientType: 'Centres commerciaux',
      impact: '25 000 passages/jour'
    },
    {
      id: 2,
      title: 'Écran LED Zone Commerciale Génipa',
      category: 'automotive',
      zone: 'Le Lamentin',
      location: 'Zone Commerciale Génipa',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      description: 'Écran stratégiquement placé dans la zone commerciale la plus fréquentée du Lamentin',
      results: '+40% notoriété',
      duration: '2 semaines',
      clientType: 'Concessionnaires auto',
      impact: '18 000 passages/jour'
    },
    {
      id: 3,
      title: 'Écran LED Rond-Point Gondeau',
      category: 'events',
      zone: 'Le Lamentin',
      location: 'Rond-Point Gondeau',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      description: 'Position premium au rond-point Gondeau, carrefour stratégique entre Nord et Sud de l\'île',
      results: '+60% engagement',
      duration: '4 semaines',
      clientType: 'Événements culturels',
      impact: '22 000 passages/jour'
    },
    {
      id: 4,
      title: 'Écran LED Route de Redoute',
      category: 'public',
      zone: 'Fort-de-France',
      location: 'Route de Redoute',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
      description: 'Écran positionné sur la route de Redoute, axe majeur vers les communes du Nord',
      results: '+45% impact',
      duration: '3 semaines',
      clientType: 'Institutions publiques',
      impact: '20 000 passages/jour'
    },
    {
      id: 5,
      title: 'Écran LED Centre-Ville Schoelcher',
      category: 'retail',
      zone: 'Schoelcher',
      location: 'Centre-Ville Schoelcher',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
      description: 'Installation au cœur de Schoelcher, touchant une population résidentielle et estudiantine',
      results: '+35% fréquentation',
      duration: '2 semaines',
      clientType: 'Commerces locaux',
      impact: '15 000 passages/jour'
    },
    {
      id: 6,
      title: 'Écran LED Zones d\'Activités Manhity',
      category: 'hospitality',
      zone: 'Le Lamentin',
      location: 'Zones d\'Activités Manhity',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      description: 'Écran desservant les zones d\'activités économiques et les entreprises du Lamentin',
      results: '+50% notoriété B2B',
      duration: '3 semaines',
      clientType: 'Hôtels & Restaurants',
      impact: '12 000 passages/jour'
    },
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section background="light" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      <div className="relative z-10">
        <SectionHeader
          title="Nos Implantations d'Écrans LED en Martinique"
          highlight="Implantations"
          description="Découvrez nos 5 écrans LED 6m² positionnés aux emplacements les plus stratégiques de la Martinique"
        />

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
                activeFilter === filter.id 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-interactive bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={`Écran LED Caribmatic - ${project.title}`}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white rounded-lg px-3 py-1 font-semibold">
                    {project.zone}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/70 text-white rounded-lg px-3 py-1 text-sm">
                    {project.impact}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-red-600 font-semibold mb-3">
                  📍 {project.location}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Clientèle cible:</span>
                    <span className="font-medium text-gray-700">{project.clientType}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-bold text-lg">
                      {project.results}
                    </span>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold">
                      Voir détails →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Votre campagne sur nos écrans premium ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bénéficiez de la visibilité maximale avec nos emplacements stratégiques. 
            Plus de 100 000 personnes voient nos écrans chaque jour.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default RealizationsGallery;
