import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '150+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Industry Awards' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, i) => {
        if (stat) {
          gsap.fromTo(
            stat,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
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
    <section ref={sectionRef} className="relative py-16 md:py-20 bg-auriga-ivory overflow-hidden border-y border-auriga-sand/20">
      {/* Marquee Ticker */}
      <div className="overflow-hidden mb-12 border-y border-auriga-sand/10 py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.3em] text-auriga-charcoal/30 font-sans mx-8 flex-shrink-0">
              Auriga Homes, Crafting Exceptional Spaces, Architecture & Construction, Est. Since 2018, Premium Residential, Bespoke Interiors,
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => { statsRef.current[index] = el; }}
              className="text-center"
            >
              <span className="block font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-brass font-medium mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-charcoal/50 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
