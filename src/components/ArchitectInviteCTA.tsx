import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ArchitectInviteCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: -40 },
          {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Content reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });

      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
      }

      if (quoteRef.current) {
        tl.fromTo(
          quoteRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.6'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <img
            src="/images/10.png"
            alt="Courtyard with reflective pool at dusk"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-auriga-charcoal/80 via-auriga-charcoal/60 to-auriga-charcoal/80" />
        <div className="absolute inset-0 bg-auriga-teak/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div ref={contentRef}>
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-6 font-sans font-medium">
            Architect Firms
          </span>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-ivory font-medium leading-[1.1] mb-6">
            Interested in working together?
          </h2>

          <p className="text-auriga-ivory/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-sans font-light">
            We are always open to conversations with architect firms who share our values. If you believe your practice would be a good fit, we would love to hear from you.
          </p>
        </div>

        {/* Quote */}
        <blockquote
          ref={quoteRef}
          className="mb-12"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-auriga-sand italic font-normal leading-snug max-w-3xl mx-auto">
            "We do not just build what architects draw. We build what they dream."
          </p>
        </blockquote>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col items-center gap-4">
          <a
            href="mailto:hello@aurigahomes.in"
            className="group relative px-10 py-4 border border-auriga-brass text-auriga-brass text-xs uppercase tracking-[0.2em] font-sans font-medium overflow-hidden transition-all duration-500 hover:text-auriga-charcoal"
          >
            <span className="absolute inset-0 bg-auriga-brass transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Start the Conversation</span>
          </a>

          <span className="text-[11px] text-auriga-sand/50 font-sans tracking-wide">
            We review every enquiry personally.
          </span>
        </div>
      </div>
    </section>
  );
}
