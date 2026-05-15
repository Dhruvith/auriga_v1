import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroCinematic from './components/HeroCinematic';
import PhilosophySection from './components/PhilosophySection';
import PartnerDossier from './components/PartnerDossier';
import ClientBenefits from './components/ClientBenefits';
import ArchitectInviteCTA from './components/ArchitectInviteCTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger after all content loads
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
        <PhilosophySection />
        <PartnerDossier />
        <ClientBenefits />
        <ArchitectInviteCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
