import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import StatsSection from './components/StatsSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ProjectsSection from './components/ProjectsSection';
import PhilosophyQuoteSection from './components/PhilosophyQuoteSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import ServicesSection from './components/ServicesSection';
import OurStorySection from './components/OurStorySection';
import PhilosophySection from './components/PhilosophySection';
import PartnerDossier from './components/PartnerDossier';
import ClientBenefits from './components/ClientBenefits';
import ArchitectInviteCTA from './components/ArchitectInviteCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-auriga-ivory">
      <Navbar />
      <main>
        <HeroCinematic />
        <StatsSection />
        <WhoWeAreSection />
        <ProjectsSection />
        <PhilosophyQuoteSection />
        <HowWeWorkSection />
        <ServicesSection />
        <OurStorySection />
        <PhilosophySection />
        <PartnerDossier />
        <ClientBenefits />
        <ArchitectInviteCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
