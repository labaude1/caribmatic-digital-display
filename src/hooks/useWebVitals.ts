
import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

interface UseWebVitalsOptions {
  onCLS?: (metric: WebVitalsMetric) => void;
  onFID?: (metric: WebVitalsMetric) => void;
  onFCP?: (metric: WebVitalsMetric) => void;
  onLCP?: (metric: WebVitalsMetric) => void;
  onTTFB?: (metric: WebVitalsMetric) => void;
  reportAllChanges?: boolean;
}

export const useWebVitals = (options: UseWebVitalsOptions = {}) => {
  const {
    onCLS,
    onFID,
    onFCP,
    onLCP,
    onTTFB,
    reportAllChanges = false
  } = options;

  useEffect(() => {
    const loadWebVitals = async () => {
      try {
        const webVitalsModule = await import('web-vitals');
        
        // Cumulative Layout Shift
        if (onCLS) {
          webVitalsModule.getCLS(onCLS, { reportAllChanges });
        }
        
        // First Input Delay
        if (onFID) {
          webVitalsModule.getFID(onFID, { reportAllChanges });
        }
        
        // First Contentful Paint
        if (onFCP) {
          webVitalsModule.getFCP(onFCP, { reportAllChanges });
        }
        
        // Largest Contentful Paint
        if (onLCP) {
          webVitalsModule.getLCP(onLCP, { reportAllChanges });
        }
        
        // Time to First Byte
        if (onTTFB) {
          webVitalsModule.getTTFB(onTTFB, { reportAllChanges });
        }
      } catch (error) {
        console.warn('Web Vitals could not be loaded:', error);
      }
    };

    loadWebVitals();
  }, [onCLS, onFID, onFCP, onLCP, onTTFB, reportAllChanges]);
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
    onFID: sendToAnalytics,
    onFCP: sendToAnalytics,
    onLCP: sendToAnalytics,
    onTTFB: sendToAnalytics,
    reportAllChanges: false
  });
};

export default useWebVitals;
