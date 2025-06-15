
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface StandardSectionProps {
  id?: string;
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'gray' | 'white';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  textAlign?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
}

const StandardSection: React.FC<StandardSectionProps> = ({
  id,
  badge,
  title,
  highlight,
  subtitle,
  children,
  variant = 'default',
  padding = 'lg',
  textAlign = 'center',
  maxWidth = '7xl'
}) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gray':
        return 'bg-gray-50';
      case 'white':
        return 'bg-white';
      default:
        return '';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'sm':
        return 'py-12';
      case 'md':
        return 'py-16';
      case 'lg':
        return 'py-20';
      case 'xl':
        return 'py-24';
      default:
        return 'py-20';
    }
  };

  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'sm':
        return 'max-w-sm';
      case 'md':
        return 'max-w-md';
      case 'lg':
        return 'max-w-lg';
      case 'xl':
        return 'max-w-xl';
      case '2xl':
        return 'max-w-2xl';
      case '7xl':
        return 'max-w-7xl';
      default:
        return 'max-w-7xl';
    }
  };

  const titleAlignment = textAlign === 'center' ? 'text-center' : 'text-left';
  const containerAlignment = textAlign === 'center' ? 'mx-auto' : '';

  return (
    <section id={id} className={`${getPaddingClass()} ${getBackgroundClass()}`}>
      <div className={`${getMaxWidthClass()} ${containerAlignment} px-4 sm:px-6 lg:px-8`}>
        <div className={`${titleAlignment} ${textAlign === 'center' ? 'mb-16' : 'mb-12'}`}>
          {badge && (
            <Badge className="bg-red-100 text-red-800 mb-6 text-sm font-medium">
              {badge}
            </Badge>
          )}
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
            {highlight && (
              <span className="text-red-600"> {highlight}</span>
            )}
          </h2>
          
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default StandardSection;
