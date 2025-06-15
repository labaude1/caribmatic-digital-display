
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark' | 'gradient-primary' | 'gradient-dark';
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  background = 'white',
  className = '',
  id
}) => {
  const getBackgroundStyles = () => {
    switch (background) {
      case 'light':
        return 'gradient-surface';
      case 'dark':
        return 'gradient-dark text-white';
      case 'gradient-primary':
        return 'gradient-primary text-white';
      case 'gradient-dark':
        return 'gradient-dark text-white';
      default:
        return 'bg-white';
    }
  };

  return (
    <section 
      id={id}
      className={`section-padding ${getBackgroundStyles()} ${className}`}
    >
      <div className="container-width">
        {children}
      </div>
    </section>
  );
};

export default Section;
