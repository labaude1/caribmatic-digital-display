
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import CompanyHistory from '@/components/CompanyHistory';
import TeamSection from '@/components/TeamSection';
import ValuesSection from '@/components/ValuesSection';
import EnvironmentalCommitment from '@/components/EnvironmentalCommitment';
import CertificationsSection from '@/components/CertificationsSection';
import UniquePositioning from '@/components/UniquePositioning';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AboutHero />
        <CompanyHistory />
        <TeamSection />
        <ValuesSection />
        <EnvironmentalCommitment />
        <CertificationsSection />
        <UniquePositioning />
      </main>
      <Footer />
    </div>
  );
};

export default About;
