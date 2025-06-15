
import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'subtitle' | 'caption';
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'muted' | 'primary' | 'white';
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  color = 'default'
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'muted':
        return 'text-gray-600';
      case 'primary':
        return 'text-red-600';
      case 'white':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  const baseColorClass = getColorClass();

  switch (variant) {
    case 'h1':
      return (
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${baseColorClass} ${className}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`text-3xl md:text-4xl font-bold ${baseColorClass} ${className}`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`text-2xl md:text-3xl font-semibold ${baseColorClass} ${className}`}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={`text-xl font-semibold ${baseColorClass} ${className}`}>
          {children}
        </h4>
      );
    case 'subtitle':
      return (
        <p className={`text-xl md:text-2xl font-medium ${baseColorClass} ${className}`}>
          {children}
        </p>
      );
    case 'body':
      return (
        <p className={`text-base leading-relaxed ${baseColorClass} ${className}`}>
          {children}
        </p>
      );
    case 'caption':
      return (
        <span className={`text-sm ${baseColorClass} ${className}`}>
          {children}
        </span>
      );
    default:
      return (
        <p className={`${baseColorClass} ${className}`}>
          {children}
        </p>
      );
  }
};

export default Typography;
