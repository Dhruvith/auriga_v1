import { useEffect, useRef } from 'react';

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current?.classList.add('opacity-100', 'translate-y-0');
          textRef.current?.classList.remove('opacity-0', 'translate-y-8');
          imageRef.current?.classList.add('opacity-100', 'translate-y-0');
          imageRef.current?.classList.remove('opacity-0', 'translate-y-8');
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={textRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-8">
              Spaces crafted for those who refuse to settle for ordinary.
            </h2>
            <p className="text-gray text-sm md:text-base leading-relaxed font-sans font-light mb-8 max-w-md">
              At Auriga Homes, we believe a home is more than structure and stone — it is a living testament to your aspirations. Our team of architects, designers, and craftsmen work in concert to deliver spaces that are at once technically impeccable and deeply personal.
            </p>
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-serif text-lg md:text-xl text-charcoal/80 italic leading-relaxed mb-3">
                "A home should feel inevitable — as though it could not have been built any other way."
              </p>
              <cite className="text-[10px] uppercase tracking-[0.2em] text-gray font-sans not-italic">
                Founder, Auriga Homes
              </cite>
            </blockquote>
          </div>

          <div
            ref={imageRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150"
          >
            <img
              src="/images/3.png"
              alt="Interior architectural detail with jaali screen"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
