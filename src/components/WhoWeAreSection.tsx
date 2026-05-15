import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Hammer, Clock, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: '01',
    title: 'Design',
    subtitle: 'Architectural Precision',
    desc: 'Spatial mastery that balances form with function — where every proportion feels intentional.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Build',
    subtitle: 'Artisan Craftsmanship',
    desc: 'Skilled hands and premium materials brought together by decades of construction expertise.',
    icon: Hammer,
  },
  {
    num: '03',
    title: 'Deliver',
    subtitle: 'On Time, Every Time',
    desc: 'Transparent timelines and rigorous project management — so your vision lands on schedule.',
    icon: Clock,
  },
  {
    num: '04',
    title: 'Sustain',
    subtitle: 'Built to Last',
    desc: 'Structures engineered with longevity in mind — homes that outlast trends and hold their value.',
    icon: Shield,
  },
];

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: i * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 60%',
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
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={textRef} className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
            Who We Are
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-auriga-charcoal font-medium leading-[1.1] max-w-3xl mb-6">
            Spaces crafted for those who refuse to settle for ordinary.
          </h2>
          <p className="text-auriga-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
            At Auriga Homes, we believe a home is more than structure and stone — it is a living testament to your aspirations. Our team of architects, designers, and craftsmen work in concert to deliver spaces that are at once technically impeccable and deeply personal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group p-6 md:p-8 bg-auriga-marble/50 border border-auriga-sand/20 hover:border-auriga-brass/30 transition-all duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans font-medium block mb-4">
                  {pillar.num}
                </span>
                <Icon className="w-5 h-5 text-auriga-teak mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-auriga-charcoal font-medium mb-1">{pillar.title}</h3>
                <span className="text-xs uppercase tracking-[0.15em] text-auriga-charcoal/50 font-sans block mb-3">{pillar.subtitle}</span>
                <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
