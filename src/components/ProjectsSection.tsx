import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Completed Residence',
    location: 'Bengaluru',
    year: '2023',
    category: 'Architecture',
    desc: 'A completed multi-storey residence showcasing Auriga\'s precision in construction — copper-toned cladding, glass balcony railings, cantilevered volumes, and lush rooftop greenery. Built and delivered.',
    image: '/images/4.png',
  },
  {
    id: 2,
    title: 'Raghavendra Residence',
    location: 'Bengaluru',
    year: '2024',
    category: 'Architecture',
    client: 'Mr. Raghavendra',
    desc: 'A bold contemporary residence on a corner plot — clean cuboid massing in dark grey and white, with an open ground-floor carport, rooftop terrace, and floor-to-ceiling glass that commands the street.',
    image: '/images/5.png',
  },
  {
    id: 3,
    title: 'Subramanya Residence',
    location: 'Bengaluru',
    year: '2024',
    category: 'Architecture',
    client: 'Mr. Subramanya',
    desc: 'A striking urban home defined by exposed dark brick cladding, dramatic dusk lighting, and generous open parking. Three storeys of considered design — each level distinct, each detail deliberate.',
    image: '/images/6.png',
  },
  {
    id: 4,
    title: 'Praveen Residence',
    location: 'Bengaluru',
    year: '2024',
    category: 'Architecture',
    client: 'Mr. Praveen',
    desc: 'A compact urban home with a confident presence — stacked dark and cream volumes, a covered carport, open terraces at every level, and vertical louvers that balance openness with privacy.',
    image: '/images/8.png',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
              Selected projects
            </h2>
          </div>
          <a
            href="#designs"
            className="text-xs uppercase tracking-[0.2em] text-auriga-charcoal/60 hover:text-auriga-teak transition-colors font-sans flex items-center gap-2 group"
          >
            View All Designs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`group relative overflow-hidden bg-auriga-charcoal cursor-pointer ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'h-[400px] md:h-[500px]' : 'h-[350px] md:h-[420px]'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auriga-charcoal via-auriga-charcoal/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans">{project.category}</span>
                  <span className="w-1 h-1 bg-auriga-brass/50 rounded-full" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-sand/60 font-sans">{project.location}</span>
                  <span className="w-1 h-1 bg-auriga-brass/50 rounded-full" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-sand/60 font-sans">{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-auriga-ivory font-medium mb-2">{project.title}</h3>
                <p className="text-auriga-ivory/60 text-sm leading-relaxed max-w-lg font-sans font-light mb-4">{project.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-auriga-brass font-sans group-hover:text-auriga-sand transition-colors">
                  View Project
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
