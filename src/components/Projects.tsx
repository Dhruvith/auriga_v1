import { useEffect, useRef } from 'react';

const projects = [
  {
    name: 'Completed Residence',
    location: 'Bengaluru',
    image: '/images/4.png',
    tall: true,
  },
  {
    name: 'Raghavendra Residence',
    location: 'Bengaluru',
    image: '/images/5.png',
    tall: false,
  },
  {
    name: 'Subramanya Residence',
    location: 'Bengaluru',
    image: '/images/6.png',
    tall: true,
  },
  {
    name: 'Praveen Residence',
    location: 'Bengaluru',
    image: '/images/8.png',
    tall: false,
  },
  {
    name: 'Courtyard Villa',
    location: 'Bengaluru',
    image: '/images/7.png',
    tall: true,
  },
  {
    name: 'Jaali House',
    location: 'Bengaluru',
    image: '/images/9.png',
    tall: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gridRef.current?.classList.add('opacity-100', 'translate-y-0');
          gridRef.current?.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 lg:py-40 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite font-normal">
            Selected Projects
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group ${index === 0 || index === 2 || index === 4 ? 'lg:row-span-1' : ''}`}
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-base text-offwhite font-normal mb-1">
                {project.name}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.15em] text-offwhite/50 font-sans">
                {project.location}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[11px] uppercase tracking-[0.2em] text-offwhite/60 font-sans border-b border-offwhite/20 pb-1 hover:border-gold hover:text-gold transition-all duration-300"
          >
            View All Designs
          </a>
        </div>
      </div>
    </section>
  );
}
