
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  MonitorSpeaker, 
  Target, 
  TrendingUp, 
  Users, 
  MapPin,
  Clock,
  DollarSign,
  BarChart,
  Shield,
  Zap,
  Eye
} from 'lucide-react';

const GuideDooh = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction au DOOH', level: 1 },
    { id: 'definition', title: 'Qu\'est-ce que l\'affichage digital extérieur ?', level: 2 },
    { id: 'evolution', title: 'Évolution de l\'affichage publicitaire', level: 2 },
    { id: 'technologies', title: 'Technologies et équipements', level: 1 },
    { id: 'led-screens', title: 'Écrans LED haute définition', level: 2 },
    { id: 'management-systems', title: 'Systèmes de gestion de contenu', level: 2 },
    { id: 'connectivity', title: 'Solutions de connectivité', level: 2 },
    { id: 'strategies', title: 'Stratégies de communication DOOH', level: 1 },
    { id: 'targeting', title: 'Ciblage et personnalisation', level: 2 },
    { id: 'content-optimization', title: 'Optimisation du contenu', level: 2 },
    { id: 'martinique-specifics', title: 'Spécificités de la Martinique', level: 1 },
    { id: 'regulations', title: 'Réglementation locale', level: 2 },
    { id: 'market-analysis', title: 'Analyse du marché martiniquais', level: 2 },
    { id: 'case-studies', title: 'Études de cas et retours d\'expérience', level: 1 },
    { id: 'roi-measurement', title: 'Mesure du ROI et indicateurs', level: 1 },
    { id: 'future-trends', title: 'Tendances et perspectives d\'avenir', level: 1 }
  ];

  const benefits = [
    {
      icon: <Eye className="h-8 w-8 text-red-600" />,
      title: "Visibilité maximale",
      description: "Impact visuel fort avec des écrans LED haute luminosité"
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Ciblage précis",
      description: "Diffusion contextuelle selon l'heure et l'audience"
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Flexibilité totale",
      description: "Changement de contenu en temps réel"
    },
    {
      icon: <BarChart className="h-8 w-8 text-red-600" />,
      title: "Mesure d'impact",
      description: "Analytics détaillées et ROI mesurable"
    }
  ];

  const downloadGuide = () => {
    // Simulation d'un téléchargement
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'guide-complet-dooh-martinique.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Guide Complet de l'Affichage Digital en Martinique (DOOH) 2024"
        description="Guide expert de l'affichage digital outdoor en Martinique : technologies LED, stratégies DOOH, réglementation locale, ROI et tendances 2024. Téléchargement gratuit."
        keywords="guide affichage digital, DOOH martinique, écran LED publicitaire, affichage extérieur numérique, communication outdoor digitale, panneau publicitaire LED martinique"
        canonicalUrl="https://caribmatic.mq/guide-dooh"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-red-200 text-red-800 mb-6">
                Guide Expert 2024
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Guide Complet de l'Affichage Digital en Martinique
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                Tout ce que vous devez savoir sur le DOOH (Digital Out-of-Home) : 
                technologies, stratégies, réglementation et optimisation pour le marché martiniquais
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={downloadGuide}
                  className="bg-white text-red-600 hover:bg-red-50 px-8 py-3"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger le Guide PDF
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
                  <Target className="mr-2 h-5 w-5" />
                  Devis Personnalisé
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-6 w-6" />
                  Sommaire du Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                        item.level === 1 ? 'font-semibold text-gray-900' : 'text-gray-600 ml-4'
                      }`}
                    >
                      <span className="text-red-600 mr-2">{index + 1}.</span>
                      {item.title}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi Choisir l'Affichage Digital ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                L'affichage digital outdoor révolutionne la communication publicitaire 
                avec des avantages uniques par rapport aux supports traditionnels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction au DOOH</h2>
                
                <div id="definition" className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Qu'est-ce que l'affichage digital extérieur ?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Le DOOH (Digital Out-of-Home) représente l'évolution naturelle de l'affichage publicitaire traditionnel. 
                    Cette technologie utilise des écrans numériques pour diffuser du contenu publicitaire dynamique dans les 
                    espaces publics, transformant radicalement l'expérience de communication outdoor.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En Martinique, cette révolution digitale s'adapte parfaitement aux spécificités locales : climat tropical, 
                    habitudes de consommation créoles, et densité urbaine particulière. Les écrans LED haute luminosité 
                    résistent aux conditions climatiques extrêmes tout en offrant une visibilité optimale même en plein soleil.
                  </p>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MonitorSpeaker className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Saviez-vous que ?</h4>
                          <p className="text-blue-800">
                            L'affichage digital génère en moyenne 2,5 fois plus d'attention que l'affichage statique, 
                            avec un taux de mémorisation supérieur de 83% selon les études Nielsen.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div id="evolution" className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Évolution de l'affichage publicitaire</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    L'histoire de l'affichage publicitaire en Martinique suit les grandes tendances mondiales, 
                    avec des adaptations locales importantes. De l'affichage papier des années 1960 aux panneaux 
                    LED actuels, chaque évolution technologique a permis d'améliorer l'efficacité et la portée des messages.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Timeline de l'évolution :</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>1960-1990 :</strong> Affichage papier traditionnel dominé par les 4x3 mètres</li>
                      <li><strong>1990-2010 :</strong> Introduction des bâches et supports grand format</li>
                      <li><strong>2010-2020 :</strong> Premiers écrans LCD en intérieur, débuts du digital</li>
                      <li><strong>2020-2024 :</strong> Explosion du DOOH avec écrans LED extérieurs haute définition</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="technologies" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies et Équipements</h2>
                
                <div id="led-screens" className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Écrans LED Haute Définition</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les écrans LED constituent le cœur de l'affichage digital. En Martinique, les contraintes climatiques 
                    (humidité, salinité, cyclones) imposent des standards techniques élevés. Nos écrans P6 outdoor offrent 
                    une luminosité de 6500 nits, garantissant une visibilité parfaite même par fort ensoleillement.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Spécifications Techniques</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Pitch : 6mm pour vision optimale</li>
                          <li>• Luminosité : 6500 nits minimum</li>
                          <li>• Protection : IP65 contre intempéries</li>
                          <li>• Durée de vie : 100,000 heures</li>
                          <li>• Consommation : Optimisée LED</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Adaptations Climatiques</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Résistance saline renforcée</li>
                          <li>• Ventilation anti-humidité</li>
                          <li>• Structure anti-cyclonique</li>
                          <li>• Drainage optimisé</li>
                          <li>• Capteurs température intégrés</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div id="management-systems" className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Systèmes de Gestion de Contenu</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La gestion de contenu DOOH nécessite des plateformes sophistiquées permettant la diffusion 
                    en temps réel, la programmation avancée et l'analyse d'audience. Nos systèmes propriétaires 
                    intègrent intelligence artificielle et géolocalisation pour optimiser l'impact publicitaire.
                  </p>
                </div>
              </div>

              <div id="strategies" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Stratégies de Communication DOOH</h2>
                
                <div id="targeting" className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ciblage et Personnalisation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Le DOOH permet un ciblage contextuel impossible avec l'affichage traditionnel. En analysant 
                    les flux de circulation, les conditions météorologiques et les événements locaux, nous optimisons 
                    la diffusion pour maximiser l'impact sur votre audience cible.
                  </p>
                  
                  <Card className="bg-green-50 border-green-200 mb-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-green-900 mb-3">Exemple concret : Campagne restaurant</h4>
                      <div className="text-green-800 space-y-2">
                        <p>• <strong>11h-14h :</strong> Menu déjeuner avec prix attractifs</p>
                        <p>• <strong>16h-18h :</strong> Happy hour et apéritifs</p>
                        <p>• <strong>Jour de pluie :</strong> Plats réconfortants en promotion</p>
                        <p>• <strong>Vendredi soir :</strong> Ambiance festive et cocktails</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div id="martinique-specifics" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Spécificités de la Martinique</h2>
                
                <div id="regulations" className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Réglementation Locale</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    L'installation d'écrans LED en Martinique est encadrée par le Code de l'environnement et 
                    les règlements locaux d'urbanisme. Chaque commune dispose de ses propres règles, notamment 
                    concernant les zones protégées et le patrimoine architectural créole.
                  </p>
                  
                  <div className="bg-yellow-50 border-yellow-200 border rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-2">Points réglementaires clés :</h4>
                        <ul className="text-yellow-800 space-y-1">
                          <li>• Déclaration préalable obligatoire</li>
                          <li>• Respect des zones ABF (Architectes des Bâtiments de France)</li>
                          <li>• Limitation de luminosité nocturne</li>
                          <li>• Intégration paysagère obligatoire</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="market-analysis" className="mb-8">
                  <h3 className="text-2xl font-semibent text-gray-800 mb-4">Analyse du Marché Martiniquais</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Le marché publicitaire martiniquais représente environ 15 millions d'euros annuels, 
                    avec une croissance du digital de 25% par an. Les secteurs les plus dynamiques sont 
                    le tourisme, la grande distribution et l'automobile.
                  </p>
                </div>
              </div>

              <div id="roi-measurement" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mesure du ROI et Indicateurs</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'avantage majeur du DOOH réside dans sa capacité de mesure précise. Contrairement à 
                  l'affichage traditionnel, chaque diffusion est trackée, permettant un calcul de ROI exact 
                  et une optimisation continue des campagnes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Impressions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-red-600 mb-2">2.5M+</p>
                      <p className="text-gray-600">impressions mensuelles moyennes par écran</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Engagement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-green-600 mb-2">+83%</p>
                      <p className="text-gray-600">taux de mémorisation vs affichage statique</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        ROI Moyen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-blue-600 mb-2">250%</p>
                      <p className="text-gray-600">retour sur investissement campagnes DOOH</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Lancer Votre Campagne DOOH ?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Nos experts vous accompagnent dans la conception et le déploiement 
              de votre stratégie d'affichage digital en Martinique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3">
                <Target className="mr-2 h-5 w-5" />
                Devis Personnalisé
              </Button>
              <Link to="/resources">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
                  <BarChart className="mr-2 h-5 w-5" />
                  Calculateur ROI
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default GuideDooh;
