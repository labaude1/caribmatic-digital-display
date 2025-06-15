
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';
import QuoteForm from '@/components/contact/QuoteForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import ContactFAQ from '@/components/contact/ContactFAQ';
import PageHeader from '@/components/PageHeader';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Devis Gratuit Affichage Digital | Caribmatic Martinique</title>
        <meta name="description" content="Contactez Caribmatic pour votre projet d'affichage digital en Martinique. Devis gratuit, conseil personnalisé. 5 écrans LED 6m² aux meilleurs emplacements." />
        <meta name="keywords" content="contact caribmatic, devis affichage digital martinique, écrans LED martinique, publicité digitale contact" />
        <link rel="canonical" href="https://caribmatic.mq/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Caribmatic - Devis Gratuit Affichage Digital Martinique" />
        <meta property="og:description" content="Demandez votre devis gratuit pour l'affichage digital en Martinique. Conseil personnalisé et emplacements premium." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caribmatic.mq/contact" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Caribmatic",
            "description": "Spécialiste de l'affichage digital en Martinique",
            "url": "https://caribmatic.mq",
            "telephone": "+596-XX-XX-XX",
            "email": "contact@caribmatic.mq",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zone Industrielle",
              "addressLocality": "Le Lamentin",
              "postalCode": "97232",
              "addressCountry": "MQ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "14.6415",
              "longitude": "-61.0242"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "areaServed": "Martinique",
            "serviceType": "Affichage digital, Écrans LED"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <PageHeader
          title="Contactez-nous"
          description="Prêt à booster votre visibilité ? Demandez votre devis gratuit pour l'affichage digital sur nos écrans LED premium en Martinique."
        />

        {/* Contact Forms Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Général
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Demande de Devis
                  </h2>
                  <QuoteForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactFAQ />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
