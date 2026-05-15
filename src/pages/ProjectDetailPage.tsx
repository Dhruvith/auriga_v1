import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const project = slug ? getProjectBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-auriga-ivory">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-auriga-charcoal mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-auriga-brass text-sm uppercase tracking-wide font-sans hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={contentRef}>
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-auriga-charcoal/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/projects" className="text-[10px] uppercase tracking-[0.2em] text-auriga-sand/70 font-sans hover:text-auriga-sand transition-colors mb-4 inline-block">
              ← Back to Projects
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-auriga-ivory font-medium">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <p className="text-auriga-charcoal/70 text-base md:text-lg leading-relaxed font-sans font-light mb-8">
                {project.longDesc}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans block mb-1">Year</span>
                <span className="text-sm text-auriga-charcoal font-sans">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans block mb-1">Location</span>
                <span className="text-sm text-auriga-charcoal font-sans">{project.location}</span>
              </div>
              {project.area && (
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans block mb-1">Area</span>
                  <span className="text-sm text-auriga-charcoal font-sans">{project.area}</span>
                </div>
              )}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans block mb-1">Status</span>
                <span className="text-sm text-auriga-charcoal font-sans">{project.status}</span>
              </div>
              {project.client && (
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-auriga-brass font-sans block mb-1">Client</span>
                  <span className="text-sm text-auriga-charcoal font-sans">{project.client}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-auriga-charcoal font-medium mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img src={img} alt={`${project.title} view ${i + 1}`} className="w-full h-[300px] md:h-[400px] object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation + CTA */}
      <section className="py-12 border-t border-auriga-sand/20 bg-auriga-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              {adjacent.prev && (
                <button
                  onClick={() => navigate(`/projects/${adjacent.prev!.slug}`)}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-auriga-charcoal/60 font-sans hover:text-auriga-brass transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                  {adjacent.prev.title}
                </button>
              )}
              {adjacent.next && (
                <button
                  onClick={() => navigate(`/projects/${adjacent.next!.slug}`)}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-auriga-charcoal/60 font-sans hover:text-auriga-brass transition-colors"
                >
                  {adjacent.next.title}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              )}
            </div>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-auriga-charcoal text-auriga-ivory text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-auriga-teak transition-all duration-500"
            >
              Inquire About This Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
