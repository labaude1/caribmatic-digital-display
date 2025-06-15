
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Monitor, Target, Zap, BarChart3, Camera, Palette, MapPin, Mail, Phone, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const Services = () => {
  const headerStats = [
    {
      icon: Monitor,
      value: '5',
      label: 'Écrans LED 6m²'
    },
    {
      icon: Target,
      value: '73%',
      label: 'Taux de mémorisation'
    },
    {
      icon: Zap,
      value: '576',
      label: 'Diffusions/jour'
    },
    {
      icon: BarChart3,
      value: '100%',
      label: 'Mesure ROI'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire de contact soumis');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <PageHeader
        title="Nos Services d'Affichage Digital en Martinique"
        highlight="Affichage Digital"
        description="Solutions complètes de communication outdoor : écrans LED, publicité digitale, création de contenu et stratégies DOOH pour maximiser votre visibilité"
        stats={headerStats}
      />

      <main className="py-20">
        {/* Affichage Digital LED */}
        <section id="affichage-led" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Monitor className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Affichage Digital LED Haute Performance
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  Nos écrans LED publicitaires de 6m² offrent une visibilité exceptionnelle avec une technologie 
                  de pointe adaptée au climat tropical martiniquais. Avec une résolution Full HD 1920x1080 et 
                  une luminosité de 5000 nits, vos messages restent parfaitement lisibles même en plein soleil.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Technologie LED P4 Outdoor</h3>
                      <p className="text-gray-600">Pixels de 4mm pour une netteté optimale à toutes distances</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Résistance IP65</h3>
                      <p className="text-gray-600">Protection totale contre les intempéries tropicales</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Gestion à Distance</h3>
                      <p className="text-gray-600">Contrôle et programmation 24h/24 via notre plateforme</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Tarifs Affichage LED</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Campagne 1 semaine :</span> À partir de 890€ HT</p>
                    <p className="text-gray-700"><span className="font-semibold">Campagne 1 mois :</span> À partir de 2990€ HT</p>
                    <p className="text-gray-700"><span className="font-semibold">Création visuelle incluse</span></p>
                  </div>
                </div>

                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  Devis Affichage LED Gratuit
                </Button>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <Monitor className="h-32 w-32 text-red-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Communication Outdoor */}
        <section id="communication-outdoor" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 rounded-lg p-8 h-96 flex items-center justify-center order-2 lg:order-1">
                <Target className="h-32 w-32 text-red-600" />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Communication Outdoor Stratégique
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  Notre expertise en communication outdoor en Martinique s'appuie sur une connaissance approfondie 
                  des flux de circulation et des habitudes de consommation locales. Nous développons des stratégies 
                  personnalisées pour maximiser l'impact de votre message publicitaire sur les bonnes audiences.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Analyse des Implantations</h3>
                    <p className="text-gray-600">
                      Nos 5 écrans LED sont positionnés dans les zones à plus fort trafic : Fort-de-France centre, 
                      Lamentin commercial, Schoelcher universitaire, Le Robert touristique et Ducos industriel. 
                      Chaque emplacement génère entre 25 000 et 45 000 passages quotidiens.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">ROI Mesuré et Optimisé</h3>
                    <p className="text-gray-600">
                      Grâce à notre système de mesure d'audience intégré, nous calculons précisément le retour 
                      sur investissement de chaque campagne. Nos clients constatent en moyenne une augmentation 
                      de 40% de leur notoriété locale et 25% de leur chiffre d'affaires.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ciblage Géographique Précis</h3>
                    <p className="text-gray-600">
                      Adaptez votre message selon les zones : communication BtoB vers Ducos/Lamentin, 
                      ciblage jeunes vers Schoelcher, tourisme vers Le Robert, ou couverture globale 
                      via Fort-de-France centre.
                    </p>
                  </div>
                </div>

                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  Stratégie Communication Personnalisée
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Publicité Extérieure Digitale */}
        <section id="publicite-digitale" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Zap className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Publicité Extérieure Digitale Innovante
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  La publicité extérieure digitale révolutionne la communication en Martinique. Contrairement 
                  aux supports traditionnels, nos écrans LED permettent des campagnes dynamiques, interactives 
                  et mesurables. Chaque diffusion peut être adaptée en temps réel selon l'audience, la météo 
                  ou les événements locaux.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-600 text-2xl mb-2">73%</h4>
                    <p className="text-gray-700">Taux de mémorisation publicitaire supérieur à l'affichage traditionnel</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-600 text-2xl mb-2">576</h4>
                    <p className="text-gray-700">Diffusions par jour et par écran pour une visibilité maximale</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-600 text-2xl mb-2">0</h4>
                    <p className="text-gray-700">Déchet produit - Solution 100% écologique et durable</p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-600 text-2xl mb-2">5000</h4>
                    <p className="text-gray-700">Nits de luminosité pour une visibilité parfaite 24h/24</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Avantages de la Publicité Digitale</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Flexibilité totale : changement de créatifs en quelques clics</li>
                    <li>• Ciblage temporel : messages différents selon les heures de pointe</li>
                    <li>• Mesure d'impact : statistiques détaillées en temps réel</li>
                    <li>• Créativité sans limite : animations, vidéos, effets spéciaux</li>
                    <li>• Coût optimisé : amortissement sur la durée de diffusion</li>
                  </ul>
                </div>

                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  Lancer Ma Campagne Digitale
                </Button>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <Zap className="h-32 w-32 text-red-600" />
              </div>
            </div>
          </div>
        </section>

        {/* DOOH (Digital Out-of-Home) */}
        <section id="dooh" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 rounded-lg p-8 h-96 flex items-center justify-center order-2 lg:order-1">
                <BarChart3 className="h-32 w-32 text-red-600" />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    DOOH - Digital Out-of-Home Analytics
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  Notre plateforme DOOH (Digital Out-of-Home) combine la puissance de l'affichage digital 
                  avec des analytics avancés. Grâce à l'intelligence artificielle et aux capteurs intégrés, 
                  nous analysons l'audience en temps réel pour optimiser automatiquement vos campagnes 
                  publicitaires en Martinique.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Technologie de Mesure d'Audience</h3>
                    <p className="text-gray-600">
                      Nos écrans intègrent des capteurs anonymes qui comptabilisent les passages, analysent 
                      les temps d'attention et détectent les profils démographiques généraux. Ces données 
                      permettent d'ajuster les créatifs en fonction de l'audience présente.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Programmation Intelligente</h3>
                    <p className="text-gray-600">
                      L'algorithme de notre plateforme DOOH optimise automatiquement les plages de diffusion 
                      selon les objectifs de campagne : visibilité maximale, ciblage démographique ou 
                      optimisation budgétaire. Chaque euro investi génère le maximum d'impact.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Reporting Analytics Avancé</h3>
                    <p className="text-gray-600">
                      Recevez des rapports détaillés incluant : nombre d'impressions, taux d'attention, 
                      profil d'audience, horaires optimaux, comparaison avec les campagnes précédentes 
                      et recommandations d'amélioration basées sur l'IA.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                  <h4 className="font-bold text-blue-900 mb-2">Innovation DOOH Martinique</h4>
                  <p className="text-blue-800">
                    Caribmatic est le premier réseau DOOH de Martinique à intégrer l'intelligence 
                    artificielle pour l'optimisation automatique des campagnes publicitaires.
                  </p>
                </div>

                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  Découvrir la Technologie DOOH
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Création de Contenu */}
        <section id="creation-contenu" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Palette className="h-10 w-10 text-red-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Création de Contenu Digital Professionnel
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Notre studio de création développe des contenus visuels et vidéo optimisés pour l'affichage 
                LED extérieur. Chaque création respecte les contraintes techniques de lisibilité, d'impact 
                visuel et d'adaptation au contexte martiniquais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Camera className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Production Vidéo</h3>
                <p className="text-gray-600 mb-4">
                  Tournage HD professionnel, montage dynamique et effets spéciaux adaptés aux écrans LED. 
                  Nos vidéos captent l'attention en 3 secondes et marquent les esprits durablement.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tournage 4K professionnel</li>
                  <li>• Motion design créatif</li>
                  <li>• Optimisation LED outdoor</li>
                  <li>• Formats multiples inclus</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Palette className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Graphique</h3>
                <p className="text-gray-600 mb-4">
                  Création d'identités visuelles percutantes respectant les codes de lisibilité 
                  à distance. Nos designers maîtrisent les spécificités de l'affichage digital extérieur.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contrastes optimisés LED</li>
                  <li>• Typographies haute lisibilité</li>
                  <li>• Couleurs anti-reflet</li>
                  <li>• Formats adaptatifs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Monitor className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimisation Technique</h3>
                <p className="text-gray-600 mb-4">
                  Adaptation technique de tous les contenus aux spécifications de nos écrans LED : 
                  résolution, fréquence de rafraîchissement, température de couleur et luminosité.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Calibrage colorimétrique</li>
                  <li>• Compression optimisée</li>
                  <li>• Test de visibilité soleil</li>
                  <li>• Validation technique</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Processus de Création Collaboratif</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                  <h4 className="font-semibold mb-2">Brief Créatif</h4>
                  <p className="text-sm text-gray-600">Analyse des objectifs et définition du concept</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                  <h4 className="font-semibold mb-2">Maquettage</h4>
                  <p className="text-sm text-gray-600">Propositions visuelles et validation client</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                  <h4 className="font-semibold mb-2">Production</h4>
                  <p className="text-sm text-gray-600">Réalisation technique et optimisation LED</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                  <h4 className="font-semibold mb-2">Diffusion</h4>
                  <p className="text-sm text-gray-600">Programmation et suivi de performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de Contact */}
        <section id="contact" className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Démarrez Votre Campagne d'Affichage Digital
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Obtenez votre devis personnalisé et lancez votre communication outdoor 
                  en Martinique avec l'expertise Caribmatic.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <p className="text-gray-300">+596 696 XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">contact@caribmatic.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-400 mr-4" />
                    <div>
                      <p className="font-semibold">Localisation</p>
                      <p className="text-gray-300">Martinique - Antilles Françaises</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande de Devis Gratuit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom" className="text-gray-700">Prénom</Label>
                      <Input id="prenom" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="nom" className="text-gray-700">Nom</Label>
                      <Input id="nom" type="text" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="entreprise" className="text-gray-700">Entreprise</Label>
                    <Input id="entreprise" type="text" className="mt-1" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="telephone" className="text-gray-700">Téléphone</Label>
                      <Input id="telephone" type="tel" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-gray-700">Service souhaité</Label>
                    <select 
                      id="service" 
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="affichage-led">Affichage Digital LED</option>
                      <option value="communication-outdoor">Communication Outdoor</option>
                      <option value="creation-contenu">Création de Contenu</option>
                      <option value="campagne-complete">Campagne Complète</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    Envoyer ma Demande
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
