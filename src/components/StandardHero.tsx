
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
    ? 'hero-gradient' 
    : 'bg-red-600';

  const PrimaryIcon = primaryCTA.icon;
  const SecondaryIcon = secondaryCTA?.icon;

  return (
    <section className={`relative min-h-screen flex items-center ${bgClass} text-white overflow-hidden`}>
      {/* Overlay décoratif premium */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container-max w-full py-24">
        <div className="max-w-6xl">
          {badge && (
            <Badge className="bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-100 border border-red-500/30 mb-12 text-lg font-medium px-6 py-3 backdrop-blur-sm">
              {badge}
            </Badge>
          )}
          
          <div className="space-y-6 mb-12">
            <h1 className="hero-title">
              {title}
              {highlight && (
                <span className="hero-highlight">
                  {highlight}
                </span>
              )}
            </h1>
          </div>
          
          <p className="hero-subtitle mb-8">
            {subtitle}
          </p>

          <p className="hero-description mb-16">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mb-20">
            <Button 
              size="lg" 
              className="btn-primary animate-glow"
              onClick={primaryCTA.onClick}
            >
              {primaryCTA.text}
              {PrimaryIcon && <PrimaryIcon className="ml-4 h-6 w-6" />}
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary glass-button"
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.text}
                {SecondaryIcon && <SecondaryIcon className="ml-4 h-6 w-6" />}
              </Button>
            )}
          </div>

          {/* Stats Premium */}
          {stats && stats.length > 0 && (
            <div className="stats-container">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="stat-item glass-card animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <div className="stat-icon animate-glow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-1">
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
