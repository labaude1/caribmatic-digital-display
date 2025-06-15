
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const RealizationsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const filters = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'retail', label: 'Commerce' },
    { id: 'automotive', label: 'Automobile' },
    { id: 'events', label: 'Événementiel' },
    { id: 'public', label: 'Secteur public' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Centre Commercial La Galleria',
      category: 'retail',
      zone: 'Fort-de-France',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      description: 'Campagne de promotion des soldes d\'été avec impact mesurable sur la fréquentation',
      results: '+30% fréquentation',
    },
    {
      id: 2,
      title: 'Concession Automobile Peugeot',
      category: 'automotive',
      zone: 'Le Lamentin',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      description: 'Lancement du nouveau modèle 308 avec campagne digitale interactive',
      results: '+25% ventes',
    },
    {
      id: 3,
      title: 'Festival de Jazz de Martinique',
      category: 'events',
      zone: 'Martinique',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      description: 'Promotion de l\'événement culturel majeur de l\'île',
      results: '+50% notoriété',
    },
    {
      id: 4,
      title: 'Campagne Sécurité Routière',
      category: 'public',
      zone: 'Île entière',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
      description: 'Sensibilisation aux dangers de la route pendant les fêtes',
      results: '-15% accidents',
    },
    {
      id: 5,
      title: 'Hypermarché Carrefour',
      category: 'retail',
      zone: 'Schoelcher',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
      description: 'Promotion des produits locaux et circuits courts',
      results: '+20% CA produits locaux',
    },
    {
      id: 6,
      title: 'Collectivité de Martinique',
      category: 'public',
      zone: 'Fort-de-France',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      description: 'Communication sur les aides aux entreprises locales',
      results: '+35% demandes d\'aide',
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
          title="Portfolio Interactif"
          highlight="Portfolio"
          description="Explorez nos réalisations par secteur d'activité et découvrez l'impact concret de nos campagnes"
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
            <Card key={project.id} className="card-interactive bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white rounded-lg px-3 py-1">
                    {project.zone}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-semibold text-lg">
                    {project.results}
                  </span>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold">
                    Voir détails →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RealizationsGallery;
