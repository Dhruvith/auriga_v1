import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  const displayProjects = projects.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: i * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="designs" className="relative py-24 md:py-32 lg:py-40 bg-auriga-marble overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
              Featured Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1]">
              Selected Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group block"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-base text-auriga-charcoal font-normal mb-1 group-hover:text-auriga-teak transition-colors">
                {project.title}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans">
                {project.location}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-auriga-charcoal/60 font-sans hover:text-auriga-brass transition-colors duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
