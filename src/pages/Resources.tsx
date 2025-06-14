
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ROICalculator from '@/components/resources/ROICalculator';
import CampaignSimulator from '@/components/resources/CampaignSimulator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  BarChart, 
  Download, 
  FileText, 
  Target,
  TrendingUp,
  DollarSign,
  Eye,
  Clock,
  Users
} from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('calculators');

  const resources = [
    {
      title: 'Guide Tarification DOOH 2024',
      description: 'Grille tarifaire complète pour l\'affichage digital en Martinique',
      type: 'PDF',
      size: '2.1 MB',
      downloads: '1,247',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Checklist Lancement Campagne',
      description: 'Liste de vérification pour optimiser vos campagnes DOOH',
      type: 'PDF',
      size: '850 KB',
      downloads: '892',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'Modèle Cahier des Charges',
      description: 'Template pour spécifier vos besoins d\'affichage digital',
      type: 'DOCX',
      size: '1.3 MB',
      downloads: '654',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Étude de Cas Restaurant',
      description: 'Retour d\'expérience détaillé avec résultats mesurés',
      type: 'PDF',
      size: '3.2 MB',
      downloads: '543',
      icon: <BarChart className="h-6 w-6" />
    }
  ];

  const benchmarks = [
    {
      metric: 'CPM Moyen',
      value: '12€',
      description: 'Coût pour 1000 impressions',
      trend: '+5%',
      icon: <DollarSign className="h-8 w-8 text-green-600" />
    },
    {
      metric: 'CTR DOOH',
      value: '2.8%',
      description: 'Taux de clic moyen',
      trend: '+12%',
      icon: <Eye className="h-8 w-8 text-blue-600" />
    },
    {
      metric: 'Temps d\'Attention',
      value: '6.2s',
      description: 'Durée moyenne d\'observation',
      trend: '+8%',
      icon: <Clock className="h-8 w-8 text-purple-600" />
    },
    {
      metric: 'Reach Quotidien',
      value: '15K',
      description: 'Personnes touchées par écran',
      trend: '+15%',
      icon: <Users className="h-8 w-8 text-red-600" />
    }
  ];

  const downloadResource = (title: string) => {
    console.log(`Téléchargement de : ${title}`);
    // Simulation du téléchargement
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Ressources Affichage Digital - Calculateurs ROI, Simulateurs, Guides"
        description="Outils gratuits pour l'affichage digital : calculateur ROI DOOH, simulateur de campagne, guides tarifaires, benchmarks sectoriels. Ressources expertes Martinique."
        keywords="calculateur ROI affichage digital, simulateur campagne DOOH, guide tarification, benchmarks affichage, outils marketing digital, ressources DOOH"
        canonicalUrl="https://caribmatic.mq/resources"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-green-200 text-green-800 mb-6">
              Outils Gratuits
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ressources & Calculateurs DOOH
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Outils professionnels pour optimiser vos investissements en affichage digital : 
              calculateurs ROI, simulateurs de campagne et guides experts
            </p>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
                <TabsTrigger value="calculators" className="text-center">
                  <div className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Calculateurs
                  </div>
                </TabsTrigger>
                <TabsTrigger value="downloads" className="text-center">
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Téléchargements
                  </div>
                </TabsTrigger>
                <TabsTrigger value="benchmarks" className="text-center">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    Benchmarks
                  </div>
                </TabsTrigger>
              </TabsList>

              {/* Calculators Tab */}
              <TabsContent value="calculators">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Calculateurs Professionnels
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Estimez précisément le retour sur investissement et l'impact 
                      de vos campagnes d'affichage digital
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-green-600" />
                          Calculateur ROI DOOH
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ROICalculator />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-6 w-6 text-blue-600" />
                          Simulateur de Campagne
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CampaignSimulator />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Downloads Tab */}
              <TabsContent value="downloads">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Guides et Ressources
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Téléchargez nos guides experts pour optimiser vos campagnes 
                      d'affichage digital en Martinique
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg">
                              {resource.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-2">
                                {resource.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3">
                                {resource.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                  <Badge variant="secondary">{resource.type}</Badge>
                                  <span>{resource.size}</span>
                                  <span>{resource.downloads} téléchargements</span>
                                </div>
                                <Button 
                                  size="sm"
                                  onClick={() => downloadResource(resource.title)}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <Download className="h-4 w-4 mr-1" />
                                  Télécharger
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Benchmarks Tab */}
              <TabsContent value="benchmarks">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Benchmarks Sectoriels
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Données de performance moyennes du marché martiniquais 
                      pour évaluer vos campagnes
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benchmarks.map((benchmark, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="pt-6">
                          <div className="flex justify-center mb-4">
                            {benchmark.icon}
                          </div>
                          <div className="text-3xl font-bold text-gray-900 mb-2">
                            {benchmark.value}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {benchmark.metric}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {benchmark.description}
                          </p>
                          <div className="flex items-center justify-center gap-1">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-green-600 font-medium text-sm">
                              {benchmark.trend} vs 2023
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Méthodologie des Benchmarks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        <p className="text-gray-700">
                          Ces données sont collectées sur un échantillon représentatif de 50+ campagnes 
                          DOOH réalisées en Martinique entre janvier et décembre 2024. Les métriques incluent 
                          tous secteurs confondus avec pondération selon le volume d'investissement.
                        </p>
                        <ul className="text-gray-700 mt-4 space-y-1">
                          <li>• Source : Campagnes Caribmatic + partenaires réseau</li>
                          <li>• Période : Janvier - Décembre 2024</li>
                          <li>• Échantillon : 50+ campagnes, 15M€ d'investissements</li>
                          <li>• Mise à jour : Trimestrielle</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'Aide Personnalisée ?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Nos experts analysent vos objectifs et vous proposent 
              la stratégie DOOH la plus adaptée à votre business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3">
                <Target className="mr-2 h-5 w-5" />
                Consultation Gratuite
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                <Calculator className="mr-2 h-5 w-5" />
                Devis Personnalisé
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
