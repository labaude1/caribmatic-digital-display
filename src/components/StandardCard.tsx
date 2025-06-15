
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StandardCardProps {
  icon?: LucideIcon;
  iconBg?: string;
  iconColor?: string;
  title: string;
  description: string;
  value?: string;
  label?: string;
  variant?: 'default' | 'stats' | 'feature' | 'service';
  className?: string;
  hover?: boolean;
}

const StandardCard: React.FC<StandardCardProps> = ({
  icon: Icon,
  iconBg = 'bg-red-100',
  iconColor = 'text-red-600',
  title,
  description,
  value,
  label,
  variant = 'default',
  className = '',
  hover = true
}) => {
  const getCardClasses = () => {
    const baseClasses = `${className} transition-all duration-300`;
    const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
    
    switch (variant) {
      case 'stats':
        return `${baseClasses} text-center ${hoverClasses}`;
      case 'feature':
        return `${baseClasses} ${hoverClasses}`;
      case 'service':
        return `${baseClasses} ${hoverClasses} border-l-4 border-red-600`;
      default:
        return `${baseClasses} ${hoverClasses}`;
    }
  };

  const renderIcon = () => {
    if (!Icon) return null;
    
    return (
      <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
    );
  };

  const renderContent = () => {
    switch (variant) {
      case 'stats':
        return (
          <>
            {renderIcon()}
            {value && (
              <div className="text-4xl font-bold text-red-600 mb-2">
                {value}
              </div>
            )}
            <CardTitle className="text-xl font-semibold text-gray-900 mb-4">
              {title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </>
        );
      
      case 'feature':
        return (
          <>
            {renderIcon()}
            <CardTitle className="text-xl font-semibold text-gray-900 mb-4">
              {title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </>
        );

      case 'service':
        return (
          <>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                {Icon && <Icon className={`h-6 w-6 ${iconColor}`} />}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
              {label && (
                <div className="mt-4 text-sm font-medium text-red-600">
                  {label}
                </div>
              )}
            </CardContent>
          </>
        );

      default:
        return (
          <CardContent className="pt-6">
            {renderIcon()}
            <CardTitle className="text-xl font-semibold text-gray-900 mb-4">
              {title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </CardContent>
        );
    }
  };

  return (
    <Card className={getCardClasses()}>
      {renderContent()}
    </Card>
  );
};

export default StandardCard;
