
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  quality?: number;
  placeholder?: string;
  fallback?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  quality = 80,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  fallback = '/placeholder.svg'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate responsive image URLs (would typically be handled by a CDN)
  const generateSrcSet = (baseSrc: string) => {
    const extensions = ['webp', 'avif'];
    const sizes = [320, 640, 768, 1024, 1280, 1536];
    
    return sizes.map(size => {
      // In a real implementation, you'd use a CDN like Cloudinary or ImageKit
      return `${baseSrc}?w=${size}&q=${quality} ${size}w`;
    }).join(', ');
  };

  const getSizes = () => {
    if (width) {
      return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${width}px`;
    }
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105 transition-opacity duration-300"
          style={{ 
            backgroundColor: '#f5f5f5',
            width: width || '100%',
            height: height || 'auto'
          }}
        />
      )}

      {/* Main Image */}
      {(isInView || loading === 'eager') && !hasError && (
        <picture>
          {/* WebP format for modern browsers */}
          <source
            srcSet={generateSrcSet(src.replace(/\.(jpg|jpeg|png)$/i, '.webp'))}
            sizes={getSizes()}
            type="image/webp"
          />
          
          {/* AVIF format for cutting-edge browsers */}
          <source
            srcSet={generateSrcSet(src.replace(/\.(jpg|jpeg|png)$/i, '.avif'))}
            sizes={getSizes()}
            type="image/avif"
          />
          
          {/* Original format fallback */}
          <img
            src={src}
            srcSet={generateSrcSet(src)}
            sizes={getSizes()}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              aspectRatio: width && height ? `${width}/${height}` : undefined
            }}
          />
        </picture>
      )}

      {/* Error Fallback */}
      {hasError && (
        <img
          src={fallback}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
