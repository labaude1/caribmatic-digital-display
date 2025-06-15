
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
    ? `hero-gradient ${backgroundClass}` 
    : 'bg-red-600';

  const PrimaryIcon = primaryCTA.icon;
  const SecondaryIcon = secondaryCTA?.icon;

  return (
    <section className={`relative min-h-screen flex items-center ${bgClass} text-white overflow-hidden`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container-max w-full py-20">
        <div className="max-w-5xl">
          {badge && (
            <Badge className="bg-red-200 text-red-800 mb-8 text-base font-medium px-4 py-2">
              {badge}
            </Badge>
          )}
          
          <div className="space-y-4 mb-8">
            <h1 className="hero-title">
              {title}
            </h1>
            {highlight && (
              <div className="hero-highlight text-5xl md:text-7xl lg:text-8xl font-bold">
                {highlight}
              </div>
            )}
          </div>
          
          <p className="hero-subtitle">
            {subtitle}
          </p>

          <p className="hero-description">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={primaryCTA.onClick}
            >
              {primaryCTA.text}
              {PrimaryIcon && <PrimaryIcon className="ml-3 h-6 w-6" />}
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary"
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.text}
                {SecondaryIcon && <SecondaryIcon className="ml-3 h-6 w-6" />}
              </Button>
            )}
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="stats-container">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                      {stat.description && (
                        <div className="stat-description">{stat.description}</div>
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
