
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que Disent nos <span className="text-red-500">Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages de nos partenaires qui font confiance à Caribmatic
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 relative">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl text-center text-gray-200 mb-8">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-semibold text-white">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-red-400">
                {testimonials[currentTestimonial].company}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-gray-600 text-white hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-gray-600 text-white hover:bg-gray-700"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
