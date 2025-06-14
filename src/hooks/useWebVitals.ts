
import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

interface UseWebVitalsOptions {
  onCLS?: (metric: WebVitalsMetric) => void;
  onINP?: (metric: WebVitalsMetric) => void;
  onFCP?: (metric: WebVitalsMetric) => void;
  onLCP?: (metric: WebVitalsMetric) => void;
  onTTFB?: (metric: WebVitalsMetric) => void;
  reportAllChanges?: boolean;
}

// Extend Navigator interface to include connection property
declare global {
  interface Navigator {
    connection?: {
      effectiveType?: string;
      downlink?: number;
      rtt?: number;
    };
  }
}

export const useWebVitals = (options: UseWebVitalsOptions = {}) => {
  const {
    onCLS,
    onINP,
    onFCP,
    onLCP,
    onTTFB,
    reportAllChanges = false
  } = options;

  useEffect(() => {
    const loadWebVitals = async () => {
      try {
        const { onCLS: getCLS, onINP: getINP, onFCP: getFCP, onLCP: getLCP, onTTFB: getTTFB } = await import('web-vitals');
        
        // Cumulative Layout Shift
        if (onCLS) {
          getCLS(onCLS, { reportAllChanges });
        }
        
        // Interaction to Next Paint (replaces FID)
        if (onINP) {
          getINP(onINP, { reportAllChanges });
        }
        
        // First Contentful Paint
        if (onFCP) {
          getFCP(onFCP, { reportAllChanges });
        }
        
        // Largest Contentful Paint
        if (onLCP) {
          getLCP(onLCP, { reportAllChanges });
        }
        
        // Time to First Byte
        if (onTTFB) {
          getTTFB(onTTFB, { reportAllChanges });
        }
      } catch (error) {
        console.warn('Web Vitals could not be loaded:', error);
      }
    };

    loadWebVitals();
  }, [onCLS, onINP, onFCP, onLCP, onTTFB, reportAllChanges]);
};

// Default implementation that reports to Google Analytics
export const useWebVitalsGA = () => {
  const sendToAnalytics = (metric: WebVitalsMetric) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
        custom_parameter_1: window.location.pathname,
        custom_parameter_2: navigator.connection?.effectiveType || 'unknown'
      });
    }
    
    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${metric.name}:`, metric.value, metric);
    }
  };

  useWebVitals({
    onCLS: sendToAnalytics,
    onINP: sendToAnalytics,
    onFCP: sendToAnalytics,
    onLCP: sendToAnalytics,
    onTTFB: sendToAnalytics,
    reportAllChanges: false
  });
};

export default useWebVitals;
