import { useEffect, useRef } from 'react';

const points = [
  'Transparent BOQ-based pricing',
  'Structured project management',
  'Clear communication and updates',
  'Architect + construction coordination',
  'Single point of responsibility',
];

export default function Difference() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current?.classList.add('opacity-100', 'translate-y-0');
          contentRef.current?.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-normal mb-12 md:mb-16">
            The Auriga Difference
          </h2>

          <ul className="space-y-6 max-w-xl">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="w-6 h-px bg-gold mt-3 flex-shrink-0" />
                <span className="text-base md:text-lg text-charcoal/80 font-sans font-light leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
