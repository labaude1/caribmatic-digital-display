
import React from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Marc Durand',
      role: 'Directeur Général',
      image: '/placeholder.svg',
      bio: 'Expert en communication digitale avec 15 ans d\'expérience dans les Antilles.',
      testimonial: 'Notre mission est de démocratiser l\'affichage digital en Martinique tout en respectant notre environnement caribéen.',
      linkedin: '#',
      email: 'marc@caribmatic.mq'
    },
    {
      name: 'Sophie Martin',
      role: 'Responsable Technique',
      image: '/placeholder.svg',
      bio: 'Ingénieure spécialisée en technologies LED et systèmes d\'affichage extérieur.',
      testimonial: 'Chaque installation est pensée pour résister au climat tropical tout en optimisant la consommation énergétique.',
      linkedin: '#',
      email: 'sophie@caribmatic.mq'
    },
    {
      name: 'Jean-Claude Théodore',
      role: 'Directeur Commercial',
      image: '/placeholder.svg',
      bio: 'Natif de Martinique, expert en marketing local et relations client depuis 12 ans.',
      testimonial: 'Nous connaissons parfaitement les enjeux locaux et adaptons nos solutions aux besoins spécifiques de chaque client.',
      linkedin: '#',
      email: 'jean-claude@caribmatic.mq'
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Équipe d'Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée et expérimentée, profondément enracinée en Martinique, 
            au service de votre réussite commerciale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 mb-4">
                  <Quote className="h-5 w-5 text-red-500 mb-2" />
                  <p className="text-gray-700 italic">"{member.testimonial}"</p>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
