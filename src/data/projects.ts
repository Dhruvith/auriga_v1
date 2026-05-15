export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  client?: string;
  area?: string;
  status: string;
  desc: string;
  longDesc: string;
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'completed-residence',
    title: 'Completed Residence',
    location: 'Bengaluru',
    year: '2023',
    category: 'Architecture',
    client: 'Private Residence',
    area: '4,200 sq ft',
    status: 'Completed',
    desc: 'A completed multi-storey residence showcasing Auriga\'s precision in construction — copper-toned cladding, glass balcony railings, cantilevered volumes, and lush rooftop greenery.',
    longDesc: 'A bespoke residence designed for a private client in Bengaluru. This project showcases our commitment to architectural precision and timeless design. The home features copper-toned cladding, glass balcony railings, cantilevered volumes, and lush rooftop greenery — all built and delivered with meticulous attention to detail.',
    image: '/images/4.png',
    gallery: ['/images/4.png', '/images/5.png', '/images/6.png', '/images/8.png'],
  },
  {
    id: 2,
    slug: 'raghavendra-residence',
    title: 'Raghavendra Residence',
    location: 'Bengaluru',
    year: '2024',
    category: 'Architecture',
    client: 'Mr. Raghavendra',
    area: '3,800 sq ft',
    status: 'Completed',
    desc: 'A bold contemporary residence on a corner plot — clean cuboid massing in dark grey and white, with an open ground-floor carport, rooftop terrace, and floor-to-ceiling glass.',
    longDesc: 'A bold contemporary residence on a corner plot designed for Mr. Raghavendra. The home features clean cuboid massing in dark grey and white, with an open ground-floor carport, rooftop terrace, and floor-to-ceiling glass that commands the street.',
    image: '/images/5.png',
    gallery: ['/images/5.png', '/images/6.png', '/images/4.png', '/images/8.png'],
  },
  {
    id: 3,
    slug: 'subramanya-residence',
    title: 'Subramanya Residence',
    location: 'Bengaluru',
    year: '2024',
    category: 'Architecture',
    client: 'Mr. Subramanya',
    area: '3,500 sq ft',
    status: 'Completed',
    desc: 'A striking urban home defined by exposed dark brick cladding, dramatic dusk lighting, and generous open parking. Three storeys of considered design.',
    longDesc: 'A striking urban home designed for Mr. Subramanya, defined by exposed dark brick cladding, dramatic dusk lighting, and generous open parking. Three storeys of considered design — each level distinct, each detail deliberate.',
    image: '/images/6.png',
    gallery: ['/images/6.png', '/images/4.png', '/images/5.png', '/images/8.png'],
  },
  {
    id: 4,
    slug: 'praveen-residence',
    title: 'Praveen Residence',
    location: 'Bengaluru',
    year: '2024',
    category: 'Architecture',
    client: 'Mr. Praveen',
    area: '2,800 sq ft',
    status: 'Completed',
    desc: 'A compact urban home with a confident presence — stacked dark and cream volumes, a covered carport, open terraces at every level, and vertical louvers.',
    longDesc: 'A compact urban home designed for Mr. Praveen with a confident presence. Stacked dark and cream volumes, a covered carport, open terraces at every level, and vertical louvers that balance openness with privacy.',
    image: '/images/8.png',
    gallery: ['/images/8.png', '/images/4.png', '/images/5.png', '/images/6.png'],
  },
  {
    id: 5,
    slug: 'courtyard-villa',
    title: 'Courtyard Villa',
    location: 'Bengaluru',
    year: '2024',
    category: 'Residential',
    client: 'Private Client',
    area: '5,500 sq ft',
    status: 'Completed',
    desc: 'A serene courtyard home centered around a reflective water feature. Stone columns, tropical planting, and seamless indoor-outdoor flow define this tranquil residence.',
    longDesc: 'A serene courtyard home centered around a reflective water feature. Stone columns, tropical planting, and seamless indoor-outdoor flow define this tranquil Bengaluru residence.',
    image: '/images/7.png',
    gallery: ['/images/7.png', '/images/10.png', '/images/3.png', '/images/1.png'],
  },
  {
    id: 6,
    slug: 'jaali-house',
    title: 'Jaali House',
    location: 'Bengaluru',
    year: '2024',
    category: 'Residential',
    client: 'Private Client',
    area: '3,200 sq ft',
    status: 'Completed',
    desc: 'A refined living space featuring traditional jaali screens, warm teak furniture, and a mandala artwork as the centerpiece. Indian craft meets contemporary luxury.',
    longDesc: 'A refined living space featuring traditional jaali screens, warm teak furniture, and a mandala artwork as the centerpiece. Indian craft meets contemporary luxury in this carefully composed Bengaluru home.',
    image: '/images/9.png',
    gallery: ['/images/9.png', '/images/3.png', '/images/8.png', '/images/5.png'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
