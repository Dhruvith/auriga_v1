import { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We begin by listening.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our architects translate your vision.',
  },
  {
    num: '03',
    title: 'Construction',
    desc: 'Precision-built by our expert teams.',
  },
  {
    num: '04',
    title: 'Handover',
    desc: 'Your keys, delivered on time.',
  },
];

export default function Process() {
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
            }, i * 150);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-24 md:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-normal">
            How We Work
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gold/40" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.num}
                ref={(el) => { itemsRef.current[index] = el; }}
                className="relative pl-12 md:pl-16 opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <span className="absolute left-0 top-0 font-serif text-xl md:text-2xl text-gold font-normal">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal font-normal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed font-sans font-light max-w-md">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
