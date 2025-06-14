
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-red-600">Interactif</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos réalisations par secteur d'activité et découvrez l'impact concret de nos campagnes
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">
                    {project.zone}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-semibold">
                    {project.results}
                  </span>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    Voir détails →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealizationsGallery;
