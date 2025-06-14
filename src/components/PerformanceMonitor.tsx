
import React, { useEffect, useState } from 'react';
import { useWebVitalsGA } from '@/hooks/useWebVitals';

interface PerformanceData {
  navigationTiming: PerformanceTiming | null;
  resourceTiming: PerformanceResourceTiming[];
  paintTiming: PerformanceEntry[];
  memoryInfo: any;
}

const PerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    navigationTiming: null,
    resourceTiming: [],
    paintTiming: [],
    memoryInfo: null
  });

  // Initialize Web Vitals monitoring
  useWebVitalsGA();

  useEffect(() => {
    const collectPerformanceData = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = window.performance.timing;
      const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const paints = window.performance.getEntriesByType('paint');
      const memory = (window.performance as any).memory;

      setPerformanceData({
        navigationTiming: navigation,
        resourceTiming: resources,
        paintTiming: paints,
        memoryInfo: memory
      });

      // Calculate and report custom metrics
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        const domReadyTime = navigation.domContentLoadedEventEnd - navigation.navigationStart;
        const renderTime = navigation.domComplete - navigation.domLoading;

        // Report to analytics
        if (window.gtag) {
          window.gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            load_time: Math.round(loadTime),
            dom_ready_time: Math.round(domReadyTime),
            render_time: Math.round(renderTime),
            page_path: window.location.pathname
          });
        }

        // Performance budgets - log warnings if exceeded
        if (loadTime > 2000) {
          console.warn(`Page load time (${loadTime}ms) exceeds budget (2000ms)`);
        }
        if (domReadyTime > 1500) {
          console.warn(`DOM ready time (${domReadyTime}ms) exceeds budget (1500ms)`);
        }
      }

      // Monitor resource loading
      resources.forEach(resource => {
        if (resource.duration > 1000) {
          console.warn(`Slow resource detected: ${resource.name} (${resource.duration}ms)`);
        }
      });
    };

    // Collect data when page is fully loaded
    if (document.readyState === 'complete') {
      collectPerformanceData();
    } else {
      window.addEventListener('load', collectPerformanceData);
    }

    // Monitor resource hints effectiveness
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', navEntry);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
    } catch (e) {
      // Fallback for older browsers
      console.log('Performance Observer not supported');
    }

    return () => {
      window.removeEventListener('load', collectPerformanceData);
      observer.disconnect();
    };
  }, []);

  // Monitor memory usage in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && performanceData.memoryInfo) {
      const checkMemory = () => {
        const memory = (window.performance as any).memory;
        if (memory) {
          const usedPercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
          if (usedPercent > 80) {
            console.warn(`High memory usage: ${usedPercent.toFixed(1)}%`);
          }
        }
      };

      const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, [performanceData.memoryInfo]);

  // Component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;
