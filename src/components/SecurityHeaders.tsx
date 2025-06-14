
import React from 'react';
import { Helmet } from 'react-helmet';

const SecurityHeaders: React.FC = () => {
  return (
    <Helmet>
      {/* Content Security Policy */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; 
                 script-src 'self' 'unsafe-inline' 'unsafe-eval' 
                   https://www.googletagmanager.com 
                   https://www.google-analytics.com 
                   https://static.hotjar.com 
                   https://script.hotjar.com; 
                 style-src 'self' 'unsafe-inline' 
                   https://fonts.googleapis.com; 
                 font-src 'self' 
                   https://fonts.gstatic.com; 
                 img-src 'self' data: https: blob:; 
                 connect-src 'self' 
                   https://www.google-analytics.com 
                   https://stats.g.doubleclick.net 
                   https://*.hotjar.com 
                   https://*.hotjar.io 
                   wss://*.hotjar.com; 
                 frame-src 'self' 
                   https://www.google.com 
                   https://www.googletagmanager.com; 
                 object-src 'none'; 
                 base-uri 'self'; 
                 form-action 'self'; 
                 frame-ancestors 'none'; 
                 upgrade-insecure-requests;" 
      />
      
      {/* X-Content-Type-Options */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      
      {/* X-Frame-Options */}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      
      {/* X-XSS-Protection */}
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Referrer Policy */}
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Permissions Policy */}
      <meta 
        httpEquiv="Permissions-Policy" 
        content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=(), fullscreen=(self)" 
      />
      
      {/* Strict Transport Security (HSTS) - Note: This should ideally be set by the server */}
      <meta 
        httpEquiv="Strict-Transport-Security" 
        content="max-age=31536000; includeSubDomains; preload" 
      />
      
      {/* Cross-Origin-Embedder-Policy */}
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="credentialless" />
      
      {/* Cross-Origin-Opener-Policy */}
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      
      {/* Cross-Origin-Resource-Policy */}
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-origin" />
    </Helmet>
  );
};

export default SecurityHeaders;
