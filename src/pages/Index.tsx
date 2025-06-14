
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ImplantationsSection from '@/components/ImplantationsSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import Analytics from '@/components/Analytics';
import { organizationSchema, localBusinessSchema, serviceSchema } from '@/utils/schemas';

const Index = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      serviceSchema,
      {
        "@type": "WebSite",
        "@id": "https://caribmatic.mq/#website",
        "url": "https://caribmatic.mq/",
        "name": "Caribmatic - Affichage Digital Martinique",
        "description": "Leader de l'affichage digital en Martinique",
        "publisher": {
          "@id": "https://caribmatic.mq/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://caribmatic.mq/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "fr-FR"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Affichage Digital Martinique - Caribmatic, Leader de la Communication Outdoor"
        description="Caribmatic, leader de l'affichage digital en Martinique. 5 écrans LED 6m² dans les zones stratégiques. Communication outdoor, écrans publicitaires LED. Devis gratuit."
        keywords="affichage digital martinique, écran LED publicitaire, communication outdoor martinique, panneau publicitaire led, affichage extérieur, caribmatic"
        canonicalUrl="https://caribmatic.mq/"
        jsonLd={combinedSchema}
      />
      <Analytics />
      
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection />
        <TestimonialsSection />
        <ImplantationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
