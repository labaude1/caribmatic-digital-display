
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
      value: '50+',
      label: 'Projets réalisés'
    },
    {
      icon: TrendingUp,
      value: '+40%',
      label: 'Augmentation visibilité'
    },
    {
      icon: Users,
      value: '100K+',
      label: 'Personnes atteintes/jour'
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
        title="Nos Réalisations d'Affichage Digital en Martinique"
        highlight="Réalisations"
        description="Découvrez comment nos solutions d'affichage digital ont transformé la communication de nos clients en Martinique. Plus de 500 campagnes réussies."
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
