import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Architecture', 'Residential'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [activeFilter]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/4.png" alt="Auriga Homes projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-auriga-charcoal/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-auriga-ivory font-medium">Selected Projects</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 lg:py-40 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex gap-6 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[11px] uppercase tracking-[0.15em] font-sans pb-1 border-b transition-all duration-300 ${
                  activeFilter === cat
                    ? 'text-auriga-charcoal border-auriga-brass'
                    : 'text-auriga-charcoal/40 border-transparent hover:border-auriga-sand/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
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
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans">{project.location}</span>
                  <span className="w-1 h-1 bg-auriga-charcoal/30 rounded-full" />
                  <span className="text-[10px] uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
