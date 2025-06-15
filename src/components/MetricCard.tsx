
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
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
        return 'bg-red-600 text-white';
      case 'inverse':
        return 'bg-white bg-opacity-20 text-white';
      default:
        return 'bg-white text-gray-900 shadow-lg';
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case 'highlight':
        return 'bg-white bg-opacity-20 text-white';
      case 'inverse':
        return 'bg-white bg-opacity-30 text-white';
      default:
        return 'bg-red-100 text-red-600';
    }
  };

  return (
    <div className={`card-interactive p-6 text-center ${getVariantStyles()} ${className}`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getIconStyles()}`}>
        <Icon className="h-8 w-8" />
      </div>
      
      <div className={`text-3xl font-bold mb-2 ${variant === 'default' ? 'text-red-600' : ''}`}>
        {value}
      </div>
      
      <h3 className={`font-semibold mb-2 ${variant === 'default' ? 'text-gray-900' : 'text-current'}`}>
        {label}
      </h3>
      
      {description && (
        <p className={`text-sm ${variant === 'default' ? 'text-gray-600' : 'text-current opacity-90'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default MetricCard;
