
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Affichage Digital Martinique - Caribmatic, Leader de la Communication Outdoor",
  description = "Caribmatic, leader de l'affichage digital en Martinique. 5 écrans LED 6m² dans les zones stratégiques. Communication outdoor, écrans publicitaires LED. Devis gratuit.",
  keywords = "affichage digital martinique, écran LED publicitaire, communication outdoor martinique, panneau publicitaire led, affichage extérieur",
  canonicalUrl = "https://caribmatic.mq/",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  jsonLd,
  noindex = false
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Caribmatic" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content="fr-FR" />
      <meta name="geo.region" content="MQ" />
      <meta name="geo.placename" content="Martinique" />
      <meta name="geo.position" content="14.6415;-61.0242" />
      <meta name="ICBM" content="14.6415, -61.0242" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Caribmatic" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@caribmatic" />
      <meta name="twitter:creator" content="@caribmatic" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#dc2626" />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" href="/icon-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon-192.png" />
      
      {/* Performance & Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Resource Hints */}
      <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Service Worker Registration */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                  console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
      
      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
