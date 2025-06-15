
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
  iconBg = 'bg-gradient-to-br from-red-50 to-red-100',
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
    const baseClasses = `${className} transition-all duration-500 bg-white border-0 shadow-lg`;
    const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
    
    switch (variant) {
      case 'stats':
        return `${baseClasses} text-center ${hoverClasses} rounded-2xl overflow-hidden`;
      case 'feature':
        return `${baseClasses} ${hoverClasses} rounded-2xl overflow-hidden`;
      case 'service':
        return `${baseClasses} ${hoverClasses} border-l-4 border-red-500 rounded-2xl overflow-hidden shadow-xl`;
      default:
        return `${baseClasses} ${hoverClasses} rounded-2xl overflow-hidden`;
    }
  };

  const renderIcon = () => {
    if (!Icon) return null;
    
    return (
      <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
        <Icon className={`h-10 w-10 ${iconColor}`} />
      </div>
    );
  };

  const renderContent = () => {
    switch (variant) {
      case 'stats':
        return (
          <div className="p-8">
            {renderIcon()}
            {value && (
              <div className="text-5xl font-bold text-red-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                {value}
              </div>
            )}
            <CardTitle className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              {title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed text-lg" style={{fontFamily: 'Inter, sans-serif'}}>
              {description}
            </p>
          </div>
        );
      
      case 'feature':
        return (
          <div className="p-8">
            {renderIcon()}
            <CardTitle className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              {title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed text-lg" style={{fontFamily: 'Inter, sans-serif'}}>
              {description}
            </p>
          </div>
        );

      case 'service':
        return (
          <>
            <CardHeader className="pb-4 px-8 pt-8">
              <CardTitle className="flex items-center gap-4 text-2xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
                {Icon && <Icon className={`h-7 w-7 ${iconColor}`} />}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-gray-600 leading-relaxed text-lg" style={{fontFamily: 'Inter, sans-serif'}}>
                {description}
              </p>
              {label && (
                <div className="mt-6 text-base font-semibold text-red-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  {label}
                </div>
              )}
            </CardContent>
          </>
        );

      default:
        return (
          <CardContent className="pt-8 p-8">
            {renderIcon()}
            <CardTitle className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              {title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed text-lg" style={{fontFamily: 'Inter, sans-serif'}}>
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
