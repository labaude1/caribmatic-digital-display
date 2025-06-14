
import React from 'react';
import { Award, ExternalLink, Shield, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'ISO 14001',
      description: 'Management environnemental',
      year: '2023',
      link: '#',
      logo: '/placeholder.svg'
    },
    {
      name: 'CE Conformité',
      description: 'Normes européennes LED',
      year: '2024',
      link: '#',
      logo: '/placeholder.svg'
    },
    {
      name: 'ADEME Partenaire',
      description: 'Transition énergétique',
      year: '2023',
      link: '#',
      logo: '/placeholder.svg'
    },
    {
      name: 'Qualibat',
      description: 'Qualification bâtiment',
      year: '2022',
      link: '#',
      logo: '/placeholder.svg'
    }
  ];

  const partners = [
    'Samsung Display',
    'Philips Lighting',
    'EDF Martinique',
    'CTM (Collectivité)',
    'CCI Martinique',
    'CACEM'
  ];

  const references = [
    'Collectivité Territoriale de Martinique',
    'Groupe Bernard Hayot',
    'Martinique Transport',
    'Centre Commercial La Galleria',
    'Hôpital Universitaire de Martinique',
    'Aéroport Martinique Aimé Césaire'
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-yellow-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Certifications & Partenaires
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre expertise reconnue par les organismes de référence et la confiance 
            de partenaires majeurs garantissent la qualité de nos services.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nos Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Depuis {cert.year}
                </div>
                <a 
                  href={cert.link}
                  className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Voir le certificat
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nos Partenaires Technologiques</h3>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg shadow-sm p-4 h-20 flex items-center justify-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* References */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nos Références Clients</h3>
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {references.map((reference, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{reference}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Garanties & Engagements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5 ans</div>
                <p className="text-gray-700">Garantie constructeur sur tous nos écrans LED</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-700">Surveillance et maintenance préventive</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">99,2%</div>
                <p className="text-gray-700">Taux de disponibilité garanti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
