
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Monitor, 
  Image as ImageIcon, 
  Zap, 
  DollarSign,
  Eye,
  BarChart,
  Clock,
  Target,
  TrendingUp,
  Wifi
} from 'lucide-react';

const Comparatifs = () => {
  const [selectedComparison, setSelectedComparison] = useState('digital-vs-traditionnel');

  const comparisons = {
    'digital-vs-traditionnel': {
      title: 'Affichage Digital vs Traditionnel',
      description: 'Comparaison complète entre supports numériques et statiques'
    },
    'led-vs-lcd': {
      title: 'Écrans LED vs LCD',
      description: 'Technologies d\'affichage : avantages et inconvénients'
    },
    'indoor-vs-outdoor': {
      title: 'DOOH Indoor vs Outdoor',
      description: 'Stratégies intérieur vs extérieur en Martinique'
    }
  };

  const digitalVsTraditional = [
    {
      critere: 'Flexibilité du contenu',
      digital: { score: 5, description: 'Changement instantané, contenu dynamique' },
      traditionnel: { score: 1, description: 'Impression fixe, changement coûteux' }
    },
    {
      critere: 'Coût d\'exploitation',
      digital: { score: 4, description: 'Amortissement rapide, pas d\'impression' },
      traditionnel: { score: 2, description: 'Coûts récurrents d\'impression et collage' }
    },
    {
      critere: 'Impact visuel',
      digital: { score: 5, description: 'Couleurs vives, animations, vidéos' },
      traditionnel: { score: 3, description: 'Qualité limitée par l\'impression' }
    },
    {
      critere: 'Ciblage temporel',
      digital: { score: 5, description: 'Programmation horaire automatique' },
      traditionnel: { score: 1, description: 'Message unique 24h/24' }
    },
    {
      critere: 'Mesure d\'audience',
      digital: { score: 5, description: 'Analytics en temps réel' },
      traditionnel: { score: 2, description: 'Estimations approximatives' }
    },
    {
      critere: 'Résistance climatique',
      digital: { score: 4, description: 'Robuste mais nécessite maintenance' },
      traditionnel: { score: 3, description: 'Dégradation progressive' }
    }
  ];

  const ledVsLcd = [
    {
      critere: 'Luminosité extérieure',
      led: { score: 5, description: '6500+ nits, visible en plein soleil' },
      lcd: { score: 2, description: '500-1000 nits, limité à l\'intérieur' }
    },
    {
      critere: 'Durée de vie',
      led: { score: 5, description: '100,000 heures minimum' },
      lcd: { score: 3, description: '30,000-50,000 heures' }
    },
    {
      critere: 'Consommation énergétique',
      led: { score: 4, description: 'Efficacité énergétique élevée' },
      lcd: { score: 3, description: 'Consommation plus élevée' }
    },
    {
      critere: 'Taille d\'écran',
      led: { score: 5, description: 'Modulaire, tailles illimitées' },
      lcd: { score: 2, description: 'Limité par la fabrication' }
    },
    {
      critere: 'Coût initial',
      led: { score: 2, description: 'Investissement initial élevé' },
      lcd: { score: 4, description: 'Coût d\'entrée plus accessible' }
    },
    {
      critere: 'Maintenance',
      led: { score: 4, description: 'Modules remplaçables individuellement' },
      lcd: { score: 2, description: 'Remplacement complet nécessaire' }
    }
  ];

  const ScoreDisplay = ({ score }: { score: number }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < score ? 'bg-green-500' : 'bg-gray-200'
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-medium">{score}/5</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Comparatif Affichage Digital vs Traditionnel - Guide Complet 2024"
        description="Comparaison détaillée affichage digital DOOH vs traditionnel : ROI, efficacité, coûts. Guide expert écrans LED vs LCD, indoor vs outdoor en Martinique."
        keywords="comparatif affichage digital, DOOH vs traditionnel, écran LED vs LCD, affichage indoor outdoor, panneau publicitaire numérique, efficacité affichage digital"
        canonicalUrl="https://caribmatic.mq/comparatifs"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-blue-200 text-blue-800 mb-6">
              Analyses Comparatives
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comparatifs Affichage Digital
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Analyses détaillées pour vous aider à choisir la meilleure solution 
              d'affichage publicitaire en Martinique
            </p>
          </div>
        </section>

        {/* Comparison Selector */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={selectedComparison} onValueChange={setSelectedComparison}>
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
                <TabsTrigger value="digital-vs-traditionnel" className="text-center">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Digital vs Traditionnel
                  </div>
                </TabsTrigger>
                <TabsTrigger value="led-vs-lcd" className="text-center">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    LED vs LCD
                  </div>
                </TabsTrigger>
                <TabsTrigger value="indoor-vs-outdoor" className="text-center">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Indoor vs Outdoor
                  </div>
                </TabsTrigger>
              </TabsList>

              {/* Digital vs Traditionnel */}
              <TabsContent value="digital-vs-traditionnel">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Affichage Digital vs Traditionnel
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Comparaison complète entre l'affichage numérique DOOH et les supports traditionnels 
                      pour optimiser votre stratégie publicitaire en Martinique
                    </p>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-800">
                          <Monitor className="h-6 w-6" />
                          Affichage Digital (DOOH)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>Contenu dynamique et interactif</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>Ciblage temporel précis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>Mesure d'impact en temps réel</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>ROI mesurable et optimisable</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 bg-orange-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-800">
                          <ImageIcon className="h-6 w-6" />
                          Affichage Traditionnel
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-orange-600" />
                            <span>Coût initial plus faible</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-orange-600" />
                            <span>Simplicité de mise en œuvre</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Contenu statique uniquement</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Mesure d'impact approximative</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Detailed Comparison Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Comparaison Détaillée par Critères</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-semibold">Critère</th>
                              <th className="text-center py-3 px-4 font-semibold text-green-600">Digital</th>
                              <th className="text-center py-3 px-4 font-semibold text-orange-600">Traditionnel</th>
                            </tr>
                          </thead>
                          <tbody>
                            {digitalVsTraditional.map((item, index) => (
                              <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">{item.critere}</td>
                                <td className="py-4 px-4 text-center">
                                  <div className="space-y-2">
                                    <ScoreDisplay score={item.digital.score} />
                                    <p className="text-sm text-gray-600">{item.digital.description}</p>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-center">
                                  <div className="space-y-2">
                                    <ScoreDisplay score={item.traditionnel.score} />
                                    <p className="text-sm text-gray-600">{item.traditionnel.description}</p>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* LED vs LCD */}
              <TabsContent value="led-vs-lcd">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Écrans LED vs LCD
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Choisir la bonne technologie d'affichage selon vos besoins, 
                      votre budget et l'environnement d'installation
                    </p>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Comparaison Technique LED vs LCD</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-semibold">Critère</th>
                              <th className="text-center py-3 px-4 font-semibold text-blue-600">LED</th>
                              <th className="text-center py-3 px-4 font-semibold text-purple-600">LCD</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ledVsLcd.map((item, index) => (
                              <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium">{item.critere}</td>
                                <td className="py-4 px-4 text-center">
                                  <div className="space-y-2">
                                    <ScoreDisplay score={item.led.score} />
                                    <p className="text-sm text-gray-600">{item.led.description}</p>
                                  </div>
                                </td>
                                <td className="py-4 px-4 text-center">
                                  <div className="space-y-2">
                                    <ScoreDisplay score={item.lcd.score} />
                                    <p className="text-sm text-gray-600">{item.lcd.description}</p>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Indoor vs Outdoor */}
              <TabsContent value="indoor-vs-outdoor">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      DOOH Indoor vs Outdoor
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Stratégies d'affichage intérieur et extérieur adaptées 
                      au contexte martiniquais
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Monitor className="h-6 w-6 text-blue-600" />
                          DOOH Indoor
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Avantages :</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Environnement contrôlé</li>
                              <li>• Audience captive</li>
                              <li>• Interactivité possible</li>
                              <li>• Maintenance facilitée</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Lieux stratégiques :</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Centres commerciaux</li>
                              <li>• Aéroport Aimé Césaire</li>
                              <li>• Cliniques et hôpitaux</li>
                              <li>• Banques et administrations</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Eye className="h-6 w-6 text-green-600" />
                          DOOH Outdoor
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Avantages :</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Portée maximale</li>
                              <li>• Visibilité 24h/24</li>
                              <li>• Impact sur mobilité</li>
                              <li>• Notoriété de marque</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Zones privilégiées :</h4>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Axes routiers principaux</li>
                              <li>• Centres-villes</li>
                              <li>• Zones commerciales</li>
                              <li>• Fronts de mer touristiques</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'Aide pour Choisir ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nos experts analysent vos besoins et vous recommandent 
              la solution d'affichage la plus adaptée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium">
                Consultation Gratuite
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium">
                Télécharger le Guide
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Comparatifs;
