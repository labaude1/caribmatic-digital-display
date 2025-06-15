
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon | (() => JSX.Element);
  value: string;
  label: string;
  description?: string;
  variant?: 'default' | 'highlight' | 'inverse';
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  value,
  label,
  description,
  variant = 'default',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'highlight':
        return 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl';
      case 'inverse':
        return 'bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-xl';
      default:
        return 'bg-white text-gray-900 shadow-lg border border-gray-100';
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case 'highlight':
        return 'bg-white/20 text-white';
      case 'inverse':
        return 'bg-white/20 text-white';
      default:
        return 'bg-red-50 text-red-600';
    }
  };

  const getValueStyles = () => {
    switch (variant) {
      case 'highlight':
        return 'text-white';
      case 'inverse':
        return 'text-white';
      default:
        return 'text-red-600';
    }
  };

  return (
    <div className={`card-interactive p-8 text-center rounded-2xl ${getVariantStyles()} ${className}`}>
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 ${getIconStyles()}`}>
        <Icon className="h-8 w-8" />
      </div>
      
      <div className={`text-4xl font-bold mb-3 ${getValueStyles()}`}>
        {value}
      </div>
      
      <h3 className={`text-lg font-semibold mb-3 ${variant === 'default' ? 'text-gray-900' : 'text-current'}`}>
        {label}
      </h3>
      
      {description && (
        <p className={`text-sm leading-relaxed ${variant === 'default' ? 'text-gray-600' : 'text-current opacity-90'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default MetricCard;
