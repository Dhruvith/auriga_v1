import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Eye, Gem } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { num: '01', title: 'Minimal Aesthetic', desc: 'We believe less is more. Every element earns its place.', icon: Minus },
  { num: '02', title: 'Bold Vision', desc: 'We push boundaries while honoring timeless principles.', icon: Eye },
  { num: '03', title: 'Craftsmanship', desc: 'Quality is non-negotiable. We work with the finest materials.', icon: Gem },
];

const benefits = [
  'Transparent BOQ-based pricing',
  'Structured project management',
  'Clear communication and updates',
  'Architect + construction coordination',
  'Single point of responsibility',
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const diffRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [storyRef, foundersRef, valuesRef, diffRef].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/1.png" alt="Auriga Homes architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-auriga-charcoal/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-auriga-ivory font-medium leading-[1.05]">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-24 md:py-32 lg:py-40 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-6 font-sans font-medium">
            Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-auriga-charcoal font-medium leading-[1.15] mb-8 max-w-3xl">
            Auriga Homes was founded in 2024 on a simple but demanding belief — that architecture should be both minimal and bold, timeless yet thoroughly contemporary.
          </h2>
          <p className="text-auriga-charcoal/60 text-base leading-relaxed max-w-2xl font-sans font-light mb-8">
            We started small, on purpose. A tightly focused team means every project gets the full weight of our attention. There are no junior handoffs, no template solutions — just two founders and a shared obsession with getting it right.
          </p>
          <p className="text-auriga-charcoal/60 text-base leading-relaxed max-w-2xl font-sans font-light">
            Every project we take on is a collaboration — a chance to push what's possible while staying deeply true to the vision of the person who will call it home.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section ref={foundersRef} className="py-24 md:py-32 lg:py-40 bg-auriga-marble">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-6 font-sans font-medium">
            The People
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-auriga-charcoal font-medium mb-16">
            Meet the Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="overflow-hidden mb-8">
                <img src="/images/5.png" alt="Manoj Cherukuri" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-2">Founder</span>
              <h3 className="font-serif text-2xl md:text-3xl text-auriga-charcoal font-medium mb-4">Manoj Cherukuri</h3>
              <blockquote className="mb-4">
                <p className="font-serif text-lg text-auriga-charcoal/80 italic leading-relaxed">
                  "Architecture is the art of making the inevitable feel effortless."
                </p>
              </blockquote>
              <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
                With over 5 years of hands-on construction experience, Manoj founded Auriga Homes on a single conviction: that the homes people live in should be as carefully considered as the lives they live inside them.
              </p>
            </div>

            <div>
              <div className="overflow-hidden mb-8">
                <img src="/images/8.png" alt="Raunak Baid" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-2">Co-Founder</span>
              <h3 className="font-serif text-2xl md:text-3xl text-auriga-charcoal font-medium mb-4">Raunak Baid</h3>
              <blockquote className="mb-4">
                <p className="font-serif text-lg text-auriga-charcoal/80 italic leading-relaxed">
                  "Every space should feel like it was made for exactly one person — its owner."
                </p>
              </blockquote>
              <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
                Raunak's eye for detail and deep passion for considered design have shaped Auriga's interior language from the very beginning. His interiors feel personal, never generic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 md:py-32 lg:py-40 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-6 font-sans font-medium">
            What We Stand For
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-auriga-charcoal font-medium mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.num} className="p-6 md:p-8 bg-auriga-marble/30 border border-auriga-sand/20">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-4">{value.num}</span>
                  <Icon className="w-5 h-5 text-auriga-teak mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-auriga-charcoal font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Difference */}
      <section ref={diffRef} className="py-24 md:py-32 lg:py-40 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-auriga-charcoal font-medium mb-12">The Auriga Difference</h2>
          <ul className="space-y-6 max-w-xl mb-12">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-4">
                <span className="w-6 h-px bg-auriga-brass mt-3 flex-shrink-0" />
                <span className="text-base text-auriga-charcoal/70 font-sans font-light leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 border border-auriga-brass text-auriga-brass text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-auriga-brass hover:text-auriga-ivory transition-all duration-500"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
