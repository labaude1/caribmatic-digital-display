
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  highlight,
  description,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-red-600 font-semibold text-lg mb-2 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-balance mb-4">
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-red-600">{highlight}</span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      
      {description && (
        <p className={`text-large text-secondary max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
