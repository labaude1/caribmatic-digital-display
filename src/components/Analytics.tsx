
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    hj: (...args: any[]) => void;
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
  }
}

interface AnalyticsProps {
  gaId?: string;
  hotjarId?: number;
  enableDebug?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  gaId = 'G-XXXXXXXXXX', // À remplacer par l'ID réel
  hotjarId = 1000000, // À remplacer par l'ID réel
  enableDebug = false 
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (gaId && gaId !== 'G-XXXXXXXXXX') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
        debug_mode: enableDebug,
        // GDPR compliance
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });

      // Enhanced ecommerce events
      window.gtag('config', gaId, {
        custom_map: {
          custom_parameter: 'lead_generation'
        }
      });
    }

    // Initialize Hotjar
    if (hotjarId && hotjarId !== 1000000) {
      window._hjSettings = {
        hjid: hotjarId,
        hjsv: 6
      };
      
      window.hj = window.hj || function(...args: any[]) {
        (window.hj.q = window.hj.q || []).push(args);
      };
    }

    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, [gaId, hotjarId, enableDebug]);

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      {gaId && gaId !== 'G-XXXXXXXXXX' && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_title: document.title,
                page_location: window.location.href,
                debug_mode: ${enableDebug},
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </script>
        </>
      )}

      {/* Hotjar Tracking Code */}
      {hotjarId && hotjarId !== 1000000 && (
        <script>
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${hotjarId},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
      )}

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-verification-code-here" />
      
      {/* Performance Monitoring */}
      <script>
        {`
          // Core Web Vitals monitoring
          if ('web-vital' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              function sendToAnalytics(metric) {
                if (window.gtag) {
                  window.gtag('event', metric.name, {
                    event_category: 'Web Vitals',
                    event_label: metric.id,
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    non_interaction: true,
                  });
                }
              }
              
              getCLS(sendToAnalytics);
              getFID(sendToAnalytics);
              getFCP(sendToAnalytics);
              getLCP(sendToAnalytics);
              getTTFB(sendToAnalytics);
            });
          }
        `}
      </script>
    </Helmet>
  );
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

export const trackConversion = (conversionId: string, value?: number, currency = 'EUR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency
    });
  }
};

export default Analytics;
