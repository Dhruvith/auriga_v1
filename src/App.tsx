import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Founders from './components/Founders';
import Difference from './components/Difference';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Philosophy />
        <Services />
        <Projects />
        <Process />
        <Founders />
        <Difference />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
