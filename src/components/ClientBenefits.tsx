import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    num: '01',
    title: 'Design Excellence',
    desc: 'You work with architects who have been vetted by us, firms whose eye for space, light, and form is something we trust unconditionally.',
    image: '/images/5.png',
    alt: 'Dining room with brass lighting and teak furniture',
  },
  {
    num: '02',
    title: 'Shared Standards',
    desc: 'No gap between design intent and built reality. Our collaborators understand how we build, and we understand how they design.',
    image: '/images/6.png',
    alt: 'Grand arched wooden doorway with symmetry',
  },
  {
    num: '03',
    title: 'Unified Delivery',
    desc: 'Architecture and construction as one seamless team. Fewer meetings, faster decisions, better outcomes for you.',
    image: '/images/8.png',
    alt: 'Refined living space with mandala artwork',
  },
];

export default function ClientBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
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

      // Panels stagger reveal and lock into symmetrical layout
      panelsRef.current.forEach((panel, i) => {
        if (panel) {
          gsap.fromTo(
            panel,
            { 
              y: 80, 
              opacity: 0,
              clipPath: 'inset(0 50% 0 50%)'
            },
            {
              y: 0,
              opacity: 1,
              clipPath: 'inset(0 0% 0 0%)',
              duration: 1.2,
              delay: i * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Parallax on image
          const img = panel.querySelector('img');
          if (img) {
            gsap.fromTo(
              img,
              { y: -30 },
              {
                y: 30,
                ease: 'none',
                scrollTrigger: {
                  trigger: panel,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                },
              }
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-20">
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
          For Our Clients
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1] max-w-3xl">
          What collaboration means for you
        </h2>
      </div>

      {/* Three Panels */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.num}
              ref={(el) => { panelsRef.current[index] = el; }}
              className="group relative overflow-hidden bg-auriga-charcoal"
            >
              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-full h-[120%] object-cover will-change-transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auriga-charcoal via-auriga-charcoal/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                {/* Number Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-auriga-brass text-auriga-charcoal text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">
                    {benefit.num}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-auriga-ivory font-medium mb-3 leading-tight">
                  {benefit.title}
                </h3>

                <p className="text-auriga-ivory/70 text-sm leading-relaxed font-sans font-light">
                  {benefit.desc}
                </p>
              </div>

              {/* Architectural panel border effect */}
              <div className="absolute inset-0 border border-auriga-sand/10 pointer-events-none group-hover:border-auriga-brass/30 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
