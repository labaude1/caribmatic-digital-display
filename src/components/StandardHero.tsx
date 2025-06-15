
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface StandardHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    icon?: LucideIcon;
    onClick?: () => void;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    icon?: LucideIcon;
    onClick?: () => void;
    href?: string;
  };
  stats?: Array<{
    icon: LucideIcon;
    value: string;
    label: string;
    description?: string;
  }>;
  variant?: 'gradient' | 'solid';
  backgroundClass?: string;
}

const StandardHero: React.FC<StandardHeroProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  variant = 'gradient',
  backgroundClass = 'from-gray-900 via-red-900 to-black'
}) => {
  const bgClass = variant === 'gradient' 
    ? `bg-gradient-to-br ${backgroundClass}` 
    : 'bg-red-600';

  const PrimaryIcon = primaryCTA.icon;
  const SecondaryIcon = secondaryCTA?.icon;

  return (
    <section className={`relative min-h-screen flex items-center ${bgClass} text-white`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {badge && (
            <Badge className="bg-red-200 text-red-800 mb-6 text-sm font-medium">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
            {highlight && (
              <span className="text-red-500"> {highlight}</span>
            )}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-medium">
            {subtitle}
          </p>

          <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-3xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={primaryCTA.onClick}
            >
              {primaryCTA.text}
              {PrimaryIcon && <PrimaryIcon className="ml-2 h-5 w-5" />}
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold"
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.text}
                {SecondaryIcon && <SecondaryIcon className="ml-2 h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                      {stat.description && (
                        <div className="text-sm text-gray-400">{stat.description}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StandardHero;
