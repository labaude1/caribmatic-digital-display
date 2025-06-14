
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, Lightbulb, Target, BarChart } from 'lucide-react';

const Glossaire = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    {
      term: 'DOOH',
      definition: 'Digital Out-of-Home. Affichage publicitaire numérique en extérieur utilisant écrans LED, LCD ou projecteurs.',
      category: 'Technologie',
      examples: 'Écrans LED en façade, panneaux digitaux dans les transports'
    },
    {
      term: 'CPM',
      definition: 'Coût Pour Mille impressions. Indicateur clé mesurant le coût pour 1000 affichages publicitaires.',
      category: 'Mesure',
      examples: 'CPM de 12€ = 12€ pour 1000 personnes exposées à la publicité'
    },
    {
      term: 'DSP',
      definition: 'Demand Side Platform. Plateforme permettant l\'achat automatisé d\'espaces publicitaires digitaux.',
      category: 'Technologie',
      examples: 'Achat programmatique d\'emplacements DOOH via algorithmes'
    },
    {
      term: 'Reach',
      definition: 'Portée. Nombre de personnes uniques exposées à une campagne publicitaire sur une période donnée.',
      category: 'Mesure',
      examples: 'Reach de 50 000 = 50 000 personnes différentes ont vu la publicité'
    },
    {
      term: 'Fréquence',
      definition: 'Nombre moyen d\'expositions d\'une même personne à une publicité pendant la campagne.',
      category: 'Mesure',
      examples: 'Fréquence de 3.2 = chaque personne a vu la pub 3.2 fois en moyenne'
    },
    {
      term: 'GRP',
      definition: 'Gross Rating Point. Indicateur combinant reach et fréquence (GRP = Reach × Fréquence).',
      category: 'Mesure',
      examples: '100 GRP = 25% de reach × 4 de fréquence'
    },
    {
      term: 'CTR',
      definition: 'Click-Through Rate. Taux de clic pour les campagnes digitales interactives.',
      category: 'Performance',
      examples: 'CTR de 2.8% = 28 clics pour 1000 affichages'
    },
    {
      term: 'Attribution',
      definition: 'Méthode de mesure attribuant les conversions aux différents points de contact publicitaires.',
      category: 'Analytics',
      examples: 'Attribution last-click, first-click ou multi-touch'
    },
    {
      term: 'Programmatique',
      definition: 'Achat automatisé d\'espaces publicitaires via algorithmes et enchères en temps réel.',
      category: 'Technologie',
      examples: 'Achat automatique selon audience, météo, heure'
    },
    {
      term: 'Géofencing',
      definition: 'Ciblage publicitaire basé sur la géolocalisation dans un périmètre défini.',
      category: 'Ciblage',
      examples: 'Publicité restaurant dans un rayon de 2km'
    },
    {
      term: 'Dynamic Creative',
      definition: 'Contenu publicitaire qui s\'adapte automatiquement selon contexte, audience ou données externes.',
      category: 'Créatif',
      examples: 'Prix promotion variables selon stock temps réel'
    },
    {
      term: 'Impression',
      definition: 'Une exposition publicitaire comptabilisée. Une personne qui voit une publicité = 1 impression.',
      category: 'Mesure',
      examples: '1 million d\'impressions = 1 million de vues de la publicité'
    },
    {
      term: 'OTS',
      definition: 'Opportunity To See. Occasion de voir une publicité, équivalent à une impression.',
      category: 'Mesure',
      examples: 'Nombre d\'OTS = nombre de passages devant un panneau'
    },
    {
      term: 'Slot',
      definition: 'Créneau temporel d\'affichage sur un écran digital. Durée déterminée pour diffuser une publicité.',
      category: 'Diffusion',
      examples: 'Slot de 15 secondes toutes les 2 minutes'
    },
    {
      term: 'Loop',
      definition: 'Cycle de diffusion répétant plusieurs publicités dans un ordre prédéfini.',
      category: 'Diffusion',
      examples: 'Loop de 5 minutes avec 10 publicités de 30 secondes'
    },
    {
      term: 'Dayparting',
      definition: 'Segmentation temporelle permettant de diffuser différents contenus selon l\'heure de la journée.',
      category: 'Planning',
      examples: 'Menu petit-déjeuner le matin, dîner le soir'
    },
    {
      term: 'ROI',
      definition: 'Return On Investment. Retour sur investissement mesurant la rentabilité d\'une campagne.',
      category: 'Performance',
      examples: 'ROI 250% = 2,5€ de retour pour 1€ investi'
    },
    {
      term: 'ROAS',
      definition: 'Return On Advertising Spend. Chiffre d\'affaires généré pour chaque euro dépensé en publicité.',
      category: 'Performance',
      examples: 'ROAS 4:1 = 4€ de CA pour 1€ de pub'
    },
    {
      term: 'Viewability',
      definition: 'Pourcentage de publicités effectivement visibles par l\'audience (seuil minimum de visibilité).',
      category: 'Mesure',
      examples: 'Viewability 85% = 85% des affichages réellement vus'
    },
    {
      term: 'Conversion',
      definition: 'Action désirée réalisée par un prospect suite à l\'exposition publicitaire.',
      category: 'Performance',
      examples: 'Achat, inscription newsletter, demande de devis'
    }
  ];

  const categories = [...new Set(glossaryTerms.map(term => term.category))];

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technologie': return <Target className="h-5 w-5 text-blue-600" />;
      case 'Mesure': return <BarChart className="h-5 w-5 text-green-600" />;
      case 'Performance': return <Lightbulb className="h-5 w-5 text-purple-600" />;
      case 'Analytics': return <BarChart className="h-5 w-5 text-red-600" />;
      case 'Ciblage': return <Target className="h-5 w-5 text-orange-600" />;
      case 'Créatif': return <Lightbulb className="h-5 w-5 text-pink-600" />;
      case 'Diffusion': return <Target className="h-5 w-5 text-teal-600" />;
      case 'Planning': return <BarChart className="h-5 w-5 text-indigo-600" />;
      default: return <BookOpen className="h-5 w-5 text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technologie': return 'bg-blue-100 text-blue-800';
      case 'Mesure': return 'bg-green-100 text-green-800';
      case 'Performance': return 'bg-purple-100 text-purple-800';
      case 'Analytics': return 'bg-red-100 text-red-800';
      case 'Ciblage': return 'bg-orange-100 text-orange-800';
      case 'Créatif': return 'bg-pink-100 text-pink-800';
      case 'Diffusion': return 'bg-teal-100 text-teal-800';
      case 'Planning': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Glossaire Affichage Digital DOOH - Définitions Techniques Marketing"
        description="Dictionnaire complet des termes techniques de l'affichage digital : DOOH, CPM, programmatique, reach, attribution. Définitions expertes marketing outdoor."
        keywords="glossaire affichage digital, définitions DOOH, termes techniques marketing, CPM reach fréquence, programmatique, vocabulaire publicité digitale"
        canonicalUrl="https://caribmatic.mq/glossaire"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-indigo-200 text-indigo-800 mb-6">
              Référence Technique
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Glossaire de l'Affichage Digital
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Dictionnaire complet des termes techniques du DOOH, analytics, 
              programmatique et mesure de performance
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Rechercher un terme... (ex: CPM, DOOH, reach)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-lg py-3"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-gray-600">Catégories :</span>
              {categories.map(category => (
                <Badge key={category} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTerms.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(item.category)}
                        <span className="text-xl font-bold text-gray-900">
                          {item.term}
                        </span>
                      </div>
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.definition}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-800 mb-1">
                        Exemple d'usage :
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {item.examples}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucun terme trouvé
                </h3>
                <p className="text-gray-500">
                  Essayez avec d'autres mots-clés ou parcourez toutes les définitions
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                  Ressources Complémentaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Guides Techniques</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/guide-dooh" className="text-indigo-600 hover:underline">Guide Complet DOOH</a></li>
                      <li>• <a href="/comparatifs" className="text-indigo-600 hover:underline">Comparatifs Technologies</a></li>
                      <li>• <a href="/etudes-marche" className="text-indigo-600 hover:underline">Études de Marché</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Outils Pratiques</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <a href="/resources" className="text-indigo-600 hover:underline">Calculateur ROI</a></li>
                      <li>• <a href="/resources" className="text-indigo-600 hover:underline">Simulateur Campagne</a></li>
                      <li>• <a href="/contact" className="text-indigo-600 hover:underline">Consultation Expert</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'Éclaircissements ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Nos experts vous expliquent tous les aspects techniques 
              de l'affichage digital en langage simple
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium">
                <BookOpen className="mr-2 h-5 w-5 inline" />
                Formation Personnalisée
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-medium">
                <Target className="mr-2 h-5 w-5 inline" />
                Consultation Technique
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Glossaire;
