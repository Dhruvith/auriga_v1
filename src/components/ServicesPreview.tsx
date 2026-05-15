import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Hammer, Clock, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Design',
    subtitle: 'Architectural Precision',
    desc: 'Spatial mastery that balances form with function — where every proportion feels intentional.',
    icon: Compass,
    image: '/images/3.png',
  },
  {
    num: '02',
    title: 'Build',
    subtitle: 'Artisan Craftsmanship',
    desc: 'Skilled hands and premium materials brought together by decades of construction expertise.',
    icon: Hammer,
    image: '/images/6.png',
  },
  {
    num: '03',
    title: 'Deliver',
    subtitle: 'On Time, Every Time',
    desc: 'Transparent timelines and rigorous project management — so your vision lands on schedule.',
    icon: Clock,
    image: '/images/4.png',
  },
  {
    num: '04',
    title: 'Sustain',
    subtitle: 'Built to Last',
    desc: 'Structures engineered with longevity in mind — homes that outlast trends and hold their value.',
    icon: Shield,
    image: '/images/7.png',
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
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
              delay: i * 0.15,
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
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32 lg:py-40 bg-auriga-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="mb-16 md:mb-20">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-auriga-brass mb-4 font-sans font-medium">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-charcoal font-medium leading-[1.1]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-auriga-sand/30 pt-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-xl text-auriga-brass font-normal group-hover:translate-x-2.5 transition-transform duration-200">
                      {service.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-auriga-teak" strokeWidth={1.5} />
                      <h3 className="font-serif text-xl md:text-2xl text-auriga-charcoal font-normal group-hover:underline group-hover:decoration-auriga-brass group-hover:underline-offset-4 transition-all">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans block mb-2">
                    {service.subtitle}
                  </span>
                  <p className="text-sm text-auriga-charcoal/60 leading-relaxed font-sans font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-auriga-charcoal/70 font-sans hover:text-auriga-brass transition-colors duration-300 group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
