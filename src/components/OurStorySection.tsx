import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Minus, Eye, Gem } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    num: '01',
    title: 'Minimal Aesthetic',
    desc: 'We believe less is more. Every element earns its place — nothing is decorative for its own sake.',
    icon: Minus,
  },
  {
    num: '02',
    title: 'Bold Vision',
    desc: 'We push boundaries while honoring timeless principles. Great design is both daring and disciplined.',
    icon: Eye,
  },
  {
    num: '03',
    title: 'Craftsmanship',
    desc: 'Quality is non-negotiable. We work only with the finest materials and the most skilled artisans.',
    icon: Gem,
  },
];

export default function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
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

      gsap.fromTo(
        foundersRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: foundersRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      valuesRef.current.forEach((val, i) => {
        if (val) {
          gsap.fromTo(
            val,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: val,
                start: 'top 85%',
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
    <section ref={sectionRef} id="our-story" className="relative py-24 md:py-32 lg:py-40 bg-auriga-marble overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={textRef} className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1] mb-6">
            Who We Are
          </h2>
          <p className="text-auriga-charcoal/70 text-base md:text-lg leading-relaxed max-w-3xl font-sans font-light mb-8">
            Auriga Homes was founded in 2024 on a simple but demanding belief — that architecture should be both minimal and bold, timeless yet thoroughly contemporary.
          </p>
          <p className="text-auriga-charcoal/60 text-base leading-relaxed max-w-3xl font-sans font-light">
            We started small, on purpose. A tightly focused team means every project gets the full weight of our attention. There are no junior handoffs, no template solutions — just two founders and a shared obsession with getting it right.
          </p>
        </div>

        {/* Founders */}
        <div ref={foundersRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div className="bg-auriga-ivory p-8 md:p-10 border border-auriga-sand/20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-4">Founder</span>
            <h3 className="font-serif text-2xl md:text-3xl text-auriga-charcoal font-medium mb-4">Manoj Cherukuri</h3>
            <blockquote className="mb-4">
              <p className="font-serif text-lg text-auriga-charcoal/80 italic leading-relaxed">
                "Architecture is the art of making the inevitable feel effortless."
              </p>
            </blockquote>
            <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
              With over 5 years of hands-on construction experience, Manoj founded Auriga Homes on a single conviction: that the homes people live in should be as carefully considered as the lives they live inside them. His minimalist philosophy runs through every project — not as a style, but as a discipline.
            </p>
          </div>

          <div className="bg-auriga-ivory p-8 md:p-10 border border-auriga-sand/20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-4">Co-Founder</span>
            <h3 className="font-serif text-2xl md:text-3xl text-auriga-charcoal font-medium mb-4">Raunak Baid</h3>
            <blockquote className="mb-4">
              <p className="font-serif text-lg text-auriga-charcoal/80 italic leading-relaxed">
                "Every space should feel like it was made for exactly one person — its owner."
              </p>
            </blockquote>
            <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
              Raunak's eye for detail and deep passion for considered design have shaped Auriga's interior language from the very beginning. He believes every room should tell a story — and his job is to make sure it's the right one. His interiors feel personal, never generic.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-6 font-sans font-medium">
            What We Stand For
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-auriga-charcoal font-medium mb-10">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.num}
                  ref={(el) => { valuesRef.current[index] = el; }}
                  className="p-6 md:p-8 bg-auriga-ivory border border-auriga-sand/20"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-4">
                    {value.num}
                  </span>
                  <Icon className="w-5 h-5 text-auriga-teak mb-4" strokeWidth={1.5} />
                  <h4 className="font-serif text-lg text-auriga-charcoal font-medium mb-2">{value.title}</h4>
                  <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
