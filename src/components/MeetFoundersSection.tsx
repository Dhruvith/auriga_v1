import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeetFoundersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={contentRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
                The People
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1] mb-8">
                Meet the Founders
              </h2>

              <div className="space-y-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-2">Founder</span>
                  <h3 className="font-serif text-2xl text-auriga-charcoal font-medium mb-3">Manoj Cherukuri</h3>
                  <blockquote className="mb-3">
                    <p className="font-serif text-base text-auriga-charcoal/70 italic leading-relaxed">
                      "Architecture is the art of making the inevitable feel effortless."
                    </p>
                  </blockquote>
                  <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
                    With over 5 years of hands-on construction experience, Manoj founded Auriga Homes on a single conviction: that the homes people live in should be as carefully considered as the lives they live inside them. His minimalist philosophy runs through every project, not as a style, but as a discipline.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-2">Co-Founder</span>
                  <h3 className="font-serif text-2xl text-auriga-charcoal font-medium mb-3">Raunak Baid</h3>
                  <blockquote className="mb-3">
                    <p className="font-serif text-base text-auriga-charcoal/70 italic leading-relaxed">
                      "Every space should feel like it was made for exactly one person, its owner."
                    </p>
                  </blockquote>
                  <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
                    Raunak's eye for detail and deep passion for considered design have shaped Auriga's interior language from the very beginning. He believes every room should tell a story, and his job is to make sure it's the right one. His interiors feel personal, never generic.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-auriga-charcoal/70 font-sans hover:text-auriga-brass transition-colors duration-300 group"
                >
                  Read Our Full Story
                  <span className="w-4 h-px bg-auriga-charcoal/30 group-hover:bg-auriga-brass group-hover:w-6 transition-all duration-300" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden">
              <img
                src="/images/founders.jpg"
                alt="Manoj Cherukuri and Raunak Baid, Founders of Auriga Homes"
                className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
