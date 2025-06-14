
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RealisationsHero from '@/components/RealisationsHero';
import RealizationsGallery from '@/components/RealizationsGallery';
import CaseStudies from '@/components/CaseStudies';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import BeforeAfter from '@/components/BeforeAfter';
import TestimonialsSection from '@/components/TestimonialsSection';

const Realisations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <RealisationsHero />
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
