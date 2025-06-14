
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  BarChart, 
  PieChart, 
  DollarSign, 
  Users, 
  MapPin,
  Calendar,
  Download,
  Target,
  Smartphone,
  Globe,
  ShoppingBag
} from 'lucide-react';

const EtudesMarche = () => {
  const marketData = {
    totalMarket: '15.2M€',
    digitalGrowth: '+25%',
    doohShare: '18%',
    keyPlayers: 5
  };

  const sectors = [
    {
      name: 'Tourisme & Hôtellerie',
      percentage: 35,
      growth: '+30%',
      color: 'bg-blue-500',
      description: 'Secteur moteur avec forte saisonnalité'
    },
    {
      name: 'Grande Distribution',
      percentage: 25,
      growth: '+15%',
      color: 'bg-green-500',
      description: 'Investissements soutenus en communication'
    },
    {
      name: 'Automobile',
      percentage: 20,
      growth: '+20%',
      color: 'bg-red-500',
      description: 'Marché en forte expansion'
    },
    {
      name: 'Services & Banques',
      percentage: 12,
      growth: '+10%',
      color: 'bg-purple-500',
      description: 'Digitalisation des communications'
    },
    {
      name: 'Autres',
      percentage: 8,
      growth: '+5%',
      color: 'bg-gray-500',
      description: 'Secteurs émergents'
    }
  ];

  const trends2025 = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: 'Convergence Mobile-DOOH',
      description: 'Intégration croissante entre affichage digital et applications mobiles',
      impact: 'Fort',
      timeline: 'Q2 2025'
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Ciblage IA Avancé',
      description: 'Intelligence artificielle pour optimisation temps réel',
      impact: 'Très Fort',
      timeline: 'Q3 2025'
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: 'Contenu Géolocalisé',
      description: 'Personnalisation basée sur données de géolocalisation',
      impact: 'Moyen',
      timeline: 'Q1 2025'
    },
    {
      icon: <BarChart className="h-8 w-8 text-red-600" />,
      title: 'Attribution Multi-Touch',
      description: 'Mesure d\'impact sur parcours client complet',
      impact: 'Fort',
      timeline: 'Q4 2025'
    }
  ];

  const downloadReport = () => {
    // Simulation d'un téléchargement
    console.log('Téléchargement du rapport...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Étude de Marché Affichage Digital Martinique 2025 - Tendances DOOH"
        description="Analyse complète du marché publicitaire martiniquais : croissance digital +25%, secteurs porteurs, perspectives 2025. Rapport expert affichage outdoor."
        keywords="étude marché affichage digital, DOOH martinique 2025, tendances communication outdoor, marché publicitaire antilles, croissance affichage numérique"
        canonicalUrl="https://caribmatic.mq/etudes-marche"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-purple-200 text-purple-800 mb-6">
              Rapport 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Étude de Marché Communication Outdoor Antilles 2025
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Analyse approfondie du marché publicitaire martiniquais : 
              tendances digitales, secteurs porteurs et perspectives d'avenir
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={downloadReport}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger l'Étude Complète
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Présentation Webinaire
              </Button>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vue d'Ensemble du Marché 2024
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Le marché publicitaire martiniquais connaît une transformation digitale accélérée, 
                portée par l'adoption croissante des technologies DOOH
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{marketData.totalMarket}</div>
                  <p className="text-gray-600">Marché publicitaire total</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{marketData.digitalGrowth}</div>
                  <p className="text-gray-600">Croissance digital annuelle</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{marketData.doohShare}</div>
                  <p className="text-gray-600">Part du DOOH</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{marketData.keyPlayers}</div>
                  <p className="text-gray-600">Acteurs principaux</p>
                </CardContent>
              </Card>
            </div>

            {/* Market Analysis */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-6 w-6" />
                  Répartition par Secteurs d'Activité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {sectors.map((sector, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded ${sector.color}`}></div>
                          <span className="font-medium">{sector.name}</span>
                          <Badge variant="secondary">{sector.growth}</Badge>
                        </div>
                        <span className="text-lg font-bold">{sector.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${sector.color}`}
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{sector.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Analyse Sectorielle Détaillée
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6 text-blue-600" />
                    Tourisme & Hôtellerie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Part de marché</span>
                      <span className="font-bold text-blue-600">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Croissance 2024</span>
                      <span className="font-bold text-green-600">+30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget moyen campagne</span>
                      <span className="font-bold">15K€</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Secteur leader avec forte saisonnalité. Investissements concentrés 
                      sur la période décembre-avril et juillet-août.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-green-600" />
                    Grande Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Part de marché</span>
                      <span className="font-bold text-blue-600">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Croissance 2024</span>
                      <span className="font-bold text-green-600">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget moyen campagne</span>
                      <span className="font-bold">8K€</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Investissements réguliers avec pics lors des opérations commerciales. 
                      Adoption rapide du digital pour la flexibilité.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Trends */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tendances et Perspectives 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les innovations technologiques qui transformeront le paysage 
                de l'affichage digital en Martinique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trends2025.map((trend, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {trend.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {trend.title}
                          </h3>
                          <div className="flex flex-col items-end gap-1">
                            <Badge variant={trend.impact === 'Très Fort' ? 'default' : 'secondary'}>
                              {trend.impact}
                            </Badge>
                            <span className="text-xs text-gray-500">{trend.timeline}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">
                          {trend.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Insights Clés de l'Étude</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <h3>Points Saillants 2024-2025</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Croissance soutenue :</strong> Le marché digital croît de 25% par an, 
                      soit 3 fois plus rapidement que l'affichage traditionnel
                    </li>
                    <li>
                      <strong>Concentration géographique :</strong> 70% des investissements 
                      se concentrent sur Fort-de-France et la zone Lamentin
                    </li>
                    <li>
                      <strong>Saisonnalité marquée :</strong> Les budgets publicitaires varient 
                      de +40% entre haute et basse saison touristique
                    </li>
                    <li>
                      <strong>Émergence du programmatique :</strong> 15% des achats DOOH 
                      s'effectuent déjà via des plateformes automatisées
                    </li>
                    <li>
                      <strong>ROI supérieur :</strong> L'affichage digital génère en moyenne 
                      un ROI 2,3 fois supérieur aux supports traditionnels
                    </li>
                  </ul>

                  <h3>Recommandations Stratégiques</h3>
                  <p>
                    Pour les annonceurs souhaitant optimiser leur présence en Martinique, 
                    nous recommandons une approche mixte combinant DOOH premium sur les axes 
                    principaux et ciblage digital précis selon les objectifs de campagne.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accédez à l'Étude Complète
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Téléchargez le rapport complet avec données détaillées, 
              analyses sectorielles et prévisions 2025-2027
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={downloadReport}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Rapport PDF Gratuit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                <Users className="mr-2 h-5 w-5" />
                Consultation Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EtudesMarche;
