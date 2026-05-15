import HeroCinematic from '../components/HeroCinematic';
import StatsSection from '../components/StatsSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import ProjectsSection from '../components/ProjectsSection';
import PhilosophyQuoteSection from '../components/PhilosophyQuoteSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import ServicesPreview from '../components/ServicesPreview';

export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <StatsSection />
      <WhoWeAreSection />
      <ServicesPreview />
      <ProjectsSection />
      <PhilosophyQuoteSection />
      <HowWeWorkSection />
    </>
  );
}
