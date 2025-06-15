
import React from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

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
    <Section id="equipe" background="white">
      <SectionHeader
        title="Notre Équipe d'Experts"
        description="Une équipe passionnée et expérimentée, profondément enracinée en Martinique, au service de votre réussite commerciale."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="card-interactive bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-red-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500 mb-6">
                <Quote className="h-5 w-5 text-red-500 mb-3" />
                <p className="text-gray-700 italic">"{member.testimonial}"</p>
              </div>
              
              <div className="flex space-x-3">
                <a 
                  href={member.linkedin}
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center w-12 h-12 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
