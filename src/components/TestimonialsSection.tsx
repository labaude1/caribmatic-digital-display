
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Marie-Claire Dubois',
      company: 'Directrice Marketing, Centre Commercial La Galleria',
      content: 'Grâce aux écrans Caribmatic, nos campagnes ont une visibilité exceptionnelle. Le taux de fréquentation de nos magasins a augmenté de 30% depuis notre partenariat.',
      rating: 5,
    },
    {
      name: 'Jean-Luc Martin',
      company: 'Gérant, Concession Automobile Fort-de-France',
      content: 'L\'affichage digital nous permet de communiquer en temps réel sur nos promotions. C\'est un outil marketing indispensable pour toucher notre clientèle martiniquaise.',
      rating: 5,
    },
    {
      name: 'Sophie Belmont',
      company: 'Responsable Communication, Collectivité de Martinique',
      content: 'Caribmatic nous accompagne parfaitement dans nos campagnes de sensibilisation. Leur professionnalisme et la qualité de leurs écrans nous donnent entière satisfaction.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section background="dark" className="text-white">
      <SectionHeader
        title="Ce que Disent nos Clients"
        highlight="Clients"
        description="Découvrez les témoignages de nos partenaires qui font confiance à Caribmatic"
      />

      <div className="max-w-4xl mx-auto">
        <div className="card-interactive bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-xl md:text-2xl text-center text-white mb-8 leading-relaxed">
            "{testimonials[currentTestimonial].content}"
          </blockquote>

          {/* Author */}
          <div className="text-center mb-8">
            <div className="font-semibold text-white text-lg">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-red-300">
              {testimonials[currentTestimonial].company}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-white/30 text-white hover:bg-white/10 w-12 h-12 rounded-xl"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-white/30 text-white hover:bg-white/10 w-12 h-12 rounded-xl"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
