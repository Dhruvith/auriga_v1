import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophyQuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const attrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        attrRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div ref={quoteRef}>
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-8 font-sans font-medium">
            Our Philosophy
          </span>
          <blockquote>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-auriga-charcoal italic font-normal leading-snug mb-8">
              "A home should feel inevitable — as though it could not have been built any other way."
            </p>
          </blockquote>
        </div>
        <div ref={attrRef}>
          <span className="text-xs text-auriga-charcoal/50 font-sans tracking-wide block">Founder, Auriga Homes</span>
          <span className="text-xs text-auriga-charcoal/40 font-sans tracking-wide">Architect & Principal</span>
        </div>
      </div>
    </section>
  );
}
