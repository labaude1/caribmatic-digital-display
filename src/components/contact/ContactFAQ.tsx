
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const ContactFAQ = () => {
  const faqs = [
    {
      id: 'pricing',
      question: 'Quels sont vos tarifs pour l\'affichage digital ?',
      answer: 'Nos tarifs dépendent de plusieurs facteurs : la zone d\'affichage, la durée de la campagne, le type de contenu et la fréquence de diffusion. En moyenne, comptez entre 200€ et 800€ par semaine selon l\'emplacement. Contactez-nous pour un devis personnalisé gratuit adapté à votre budget et vos objectifs.'
    },
    {
      id: 'locations',
      question: 'Où sont situés vos écrans LED en Martinique ?',
      answer: 'Nos 5 écrans LED 6m² sont stratégiquement placés dans les zones à fort trafic : Fort-de-France centre-ville, Le Lamentin zone commerciale, Schoelcher front de mer, Ducos zone industrielle, et Le Robert centre-ville. Chaque emplacement garantit une visibilité maximale pour votre message publicitaire.'
    },
    {
      id: 'content',
      question: 'Qui créé le contenu de ma publicité ?',
      answer: 'Nous proposons plusieurs options : vous pouvez fournir vos propres visuels (nous vérifions la conformité technique), ou bénéficier de notre service de création graphique professionnel. Notre équipe créative peut concevoir des animations dynamiques et percutantes adaptées à l\'affichage LED.'
    },
    {
      id: 'booking',
      question: 'Quel est le délai pour lancer ma campagne ?',
      answer: 'Une fois votre devis validé et le contenu approuvé, votre campagne peut débuter sous 48h. Pour les créations graphiques, comptez 3-5 jours supplémentaires. Nous recommandons de nous contacter au moins une semaine avant la date souhaitée pour une planification optimale.'
    },
    {
      id: 'duration',
      question: 'Quelle est la durée minimum d\'une campagne ?',
      answer: 'La durée minimum est d\'une semaine pour garantir un impact publicitaire efficace. Cependant, nos statistiques montrent que les campagnes de 2-4 semaines obtiennent les meilleurs résultats en termes de mémorisation et de retour sur investissement.'
    },
    {
      id: 'targeting',
      question: 'Puis-je cibler des heures spécifiques de diffusion ?',
      answer: 'Absolument ! Vous pouvez définir des créneaux horaires précis selon votre cible : heures de pointe pour les travailleurs, journée pour les shoppers, soirée pour les loisirs. Cette programmation fine optimise l\'impact de votre message auprès de votre audience.'
    },
    {
      id: 'reporting',
      question: 'Comment puis-je mesurer l\'efficacité de ma campagne ?',
      answer: 'Nous fournissons des rapports détaillés incluant : nombre d\'impressions, heures de diffusion, conditions météo, et photos de preuve de diffusion. Sur demande, nous pouvons aussi mettre en place des outils de mesure d\'impact comme les QR codes ou landing pages dédiées.'
    },
    {
      id: 'weather',
      question: 'Les écrans fonctionnent-ils par mauvais temps ?',
      answer: 'Nos écrans LED sont conçus pour résister aux conditions tropicales martiniquaises : pluie, vent, forte luminosité. Ils sont étanches (IP65) et continuent d\'afficher par tous temps. En cas de cyclone, les écrans sont sécurisés et la campagne reprogrammée.'
    },
    {
      id: 'exclusivity',
      question: 'Puis-je avoir l\'exclusivité sur un emplacement ?',
      answer: 'Oui, nous proposons des formules d\'exclusivité temporaire sur nos emplacements premium. Cette option garantit que votre marque sera la seule visible sur l\'écran choisi pendant la durée convenue, moyennant un tarif préférentiel pour la location exclusive.'
    },
    {
      id: 'formats',
      question: 'Quels formats de fichiers acceptez-vous ?',
      answer: 'Nous acceptons les formats image (JPG, PNG) et vidéo (MP4, MOV). Résolution recommandée : 1920x1080 pixels minimum. Taille maximum : 100 MB par fichier. Notre équipe technique peut adapter vos contenus existants aux spécifications de nos écrans LED.'
    }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <HelpCircle className="h-8 w-8 text-red-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Questions Fréquentes
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trouvez rapidement les réponses à vos questions sur l'affichage digital en Martinique. 
          Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Contact CTA */}
      <div className="mt-8 text-center bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-2">
          Vous avez d'autres questions ?
        </h3>
        <p className="text-red-100 mb-4">
          Notre équipe d'experts est là pour vous accompagner dans votre projet d'affichage digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+596XXXXXX"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Appelez-nous : +596 XX XX XX
          </a>
          <a 
            href="mailto:contact@caribmatic.mq"
            className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
          >
            Envoyez un email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;
