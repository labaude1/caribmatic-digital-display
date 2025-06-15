
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
  highlight?: string;
  stats?: Array<{
    icon: React.ComponentType<any>;
    value: string;
    label: string;
  }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  highlight,
  stats
}) => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-red-200 font-semibold text-lg mb-4 uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {highlight ? (
              <>
                {title.split(highlight)[0]}
                <span className="text-red-200">{highlight}</span>
                {title.split(highlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
