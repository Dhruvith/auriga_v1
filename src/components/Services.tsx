import { useEffect, useRef } from 'react';

const services = [
  {
    num: '01',
    title: 'Design',
    subtitle: 'Architectural Precision',
    desc: 'Spatial mastery that balances form with function.',
  },
  {
    num: '02',
    title: 'Build',
    subtitle: 'Artisan Craftsmanship',
    desc: 'Skilled hands and premium materials.',
  },
  {
    num: '03',
    title: 'Deliver',
    subtitle: 'On Time, Every Time',
    desc: 'Transparent timelines and rigorous project management.',
  },
  {
    num: '04',
    title: 'Sustain',
    subtitle: 'Built to Last',
    desc: 'Structures engineered with longevity in mind.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemsRef.current.forEach((item, i) => {
            setTimeout(() => {
              item?.classList.add('opacity-100', 'translate-y-0');
              item?.classList.remove('opacity-0', 'translate-y-8');
            }, i * 100);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-normal">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, index) => (
            <div
              key={service.num}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="group py-10 md:py-12 border-t border-gray-light opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-2xl text-gold font-normal group-hover:translate-x-2.5 transition-transform duration-200 ease-out">
                  {service.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal font-normal mb-1">
                    {service.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-sans block mb-3">
                    {service.subtitle}
                  </span>
                  <p className="text-sm text-gray leading-relaxed font-sans font-light group-hover:text-charcoal/80 transition-colors duration-200">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
