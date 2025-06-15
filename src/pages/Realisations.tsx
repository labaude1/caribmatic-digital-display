
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import RealizationsGallery from '@/components/RealizationsGallery';
import CaseStudies from '@/components/CaseStudies';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import BeforeAfter from '@/components/BeforeAfter';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

const Realisations = () => {
  const headerStats = [
    {
      icon: Award,
      value: '5',
      label: 'Écrans LED Premium'
    },
    {
      icon: TrendingUp,
      value: '100K+',
      label: 'Personnes touchées/jour'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Campagnes diffusées'
    },
    {
      icon: Target,
      value: '95%',
      label: 'Satisfaction client'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <PageHeader
        title="Nos Installations d'Écrans LED en Martinique"
        highlight="Installations"
        description="Découvrez nos 5 écrans LED 6m² positionnés aux emplacements les plus stratégiques de la Martinique. Plus de 100 000 personnes touchées quotidiennement."
        stats={headerStats}
      />

      <main>
        <RealizationsGallery />
        <CaseStudies />
        <PerformanceMetrics />
        <BeforeAfter />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Realisations;
