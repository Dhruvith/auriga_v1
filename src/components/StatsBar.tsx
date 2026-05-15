import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 12, suffix: '+', label: 'Industry Awards' },
];

function useCountUp(end: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(end * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, started]);

  return { count, ref };
}

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center py-8 relative">
      {index > 0 && (
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gray-light hidden md:block" />
      )}
      <span className="font-serif text-4xl md:text-5xl text-charcoal font-normal mb-2">
        {count}{stat.suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray font-sans">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-gray-light opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
