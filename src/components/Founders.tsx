import { useEffect, useRef } from 'react';

const founders = [
  {
    name: 'Manoj Cherukuri',
    title: 'Founder',
    quote: 'Architecture is the art of making the inevitable feel effortless.',
    image: '/images/5.png',
  },
  {
    name: 'Raunak Baid',
    title: 'Co-Founder',
    quote: 'Every space should feel like it was made for exactly one person — its owner.',
    image: '/images/8.png',
  },
];

export default function Founders() {
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
    <section ref={sectionRef} id="founders" className="py-24 md:py-32 lg:py-40 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite font-normal">
            Our Story
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="mb-8 overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-[350px] md:h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-sans block mb-3">
                {founder.title}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-offwhite font-normal mb-4">
                {founder.name}
              </h3>
              <blockquote>
                <p className="font-serif text-base md:text-lg text-offwhite/70 italic leading-relaxed">
                  "{founder.quote}"
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
