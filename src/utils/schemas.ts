
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Caribmatic",
  "alternateName": "Caribmatic Martinique",
  "description": "Leader de l'affichage digital en Martinique. Spécialiste des écrans LED publicitaires et de la communication outdoor.",
  "url": "https://caribmatic.mq",
  "logo": "https://caribmatic.mq/logo.png",
  "sameAs": [
    "https://www.facebook.com/caribmatic",
    "https://www.instagram.com/caribmatic",
    "https://www.linkedin.com/company/caribmatic"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+596-XX-XX-XX",
    "contactType": "customer service",
    "email": "contact@caribmatic.mq",
    "availableLanguage": "French",
    "areaServed": "MQ"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zone Industrielle",
    "addressLocality": "Le Lamentin",
    "postalCode": "97232",
    "addressCountry": "MQ",
    "addressRegion": "Martinique"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "14.6415",
    "longitude": "-61.0242"
  },
  "foundingDate": "2020",
  "numberOfEmployees": "5-10",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "14.6415",
      "longitude": "-61.0242"
    },
    "geoRadius": "50000"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Caribmatic",
  "image": "https://caribmatic.mq/logo.png",
  "telephone": "+596-XX-XX-XX",
  "email": "contact@caribmatic.mq",
  "url": "https://caribmatic.mq",
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "hasMap": "https://www.google.com/maps/place/Zone+Industrielle,+97232+Le+Lamentin,+Martinique",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Affichage Digital LED",
  "description": "Service d'affichage publicitaire sur écrans LED haute définition en Martinique",
  "provider": {
    "@type": "Organization",
    "name": "Caribmatic"
  },
  "areaServed": {
    "@type": "State",
    "name": "Martinique"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services d'affichage digital",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Campagnes publicitaires LED",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Affichage LED 1 semaine",
              "description": "Diffusion de votre publicité sur écrans LED 6m² pendant 1 semaine"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Affichage LED 1 mois",
              "description": "Diffusion de votre publicité sur écrans LED 6m² pendant 1 mois"
            }
          }
        ]
      }
    ]
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (questions: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(qa => ({
    "@type": "Question",
    "name": qa.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": qa.answer
    }
  }))
});
