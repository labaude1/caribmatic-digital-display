
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ImplantationsSection from '@/components/ImplantationsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection />
        <TestimonialsSection />
        <ImplantationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
