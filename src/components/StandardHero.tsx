
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
    <section className={`relative min-h-screen flex items-center ${bgClass} text-white`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container-max w-full">
        <div className="max-w-4xl">
          {badge && (
            <Badge className="bg-red-200 text-red-800 mb-6 text-sm font-medium">
              {badge}
            </Badge>
          )}
          
          <h1 className="hero-title mb-6">
            {title}
            {highlight && (
              <span className="hero-highlight"> {highlight}</span>
            )}
          </h1>
          
          <p className="hero-subtitle">
            {subtitle}
          </p>

          <p className="hero-description mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={primaryCTA.onClick}
            >
              {primaryCTA.text}
              {PrimaryIcon && <PrimaryIcon className="ml-2 h-5 w-5" />}
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary"
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.text}
                {SecondaryIcon && <SecondaryIcon className="ml-2 h-5 w-5" />}
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
                      <IconComponent className="h-6 w-6 text-white" />
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
