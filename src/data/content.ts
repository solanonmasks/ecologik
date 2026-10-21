// Page copy that appears in lists (stages, services, projects).
// Copy was checked against the client's current site. Don't add services
// or claims they haven't stated.
import { img } from './images';

export const STAGES = [
  { title: 'Rough-in', img: img('rad', 1800), alt: 'Heating tubing rough-in', text: 'Planning and rough-in, done before the walls close up.' },
  { title: 'Mechanical room', img: img('man', 1800), alt: 'Copper manifolds, valves and pumps', text: 'Boilers, manifolds and piping, installed with precision.' },
  { title: 'Finish', img: img('hex', 1800), alt: 'Finished bathroom with hex tile', text: 'Fixtures installed and the system commissioned. The finish is only as good as the work behind it.' },
];

export const ROWS = [
  { title: 'Plumbing and heating', tag: 'Homes and commercial', img: img('boiler'), text: 'Expert plumbing and heating for custom homes, high-end renovations and low-rise commercial spaces. Quality, reliability and precision on every project.', items: ['Custom homes', 'Renovations', 'Small commercial'] },
  { title: 'Air-to-water and HVAC', tag: 'Our specialty', img: img('mech'), text: 'Heating, ventilation and air conditioning, specializing in air-to-water systems. Efficient, high-performance solutions tailored to your space.', items: ['Air-to-water', 'Heating', 'Ventilation', 'Air conditioning'] },
  { title: 'Gas fitting', tag: 'Natural gas', img: img('fire'), text: 'Natural gas is a cost-effective, consistent and convenient energy choice. Expert gas fitting you can trust: safe, professional and tailored to your needs.', items: ['Gas fitting', 'Gas piping'] },
  { title: 'Waterworks', tag: 'Parks and municipal', img: img('splash'), text: 'Underground rough-in, municipal tie-ins, equipment connections, pressure testing, chlorination and commissioning support for splash pads, water play parks and public washrooms.', items: ['Splash parks', 'Municipal tie-ins', 'Public washrooms'] },
];

export const GROUPS = [
  {
    title: 'Mechanical',
    theme: 'dark' as const,
    items: [
      { title: 'Plumbing and heating', img: img('boiler'), text: 'Expert plumbing and heating are at the core of what we do. We bring the same commitment to every custom home, high-end renovation and low-rise commercial space we work on.', tags: ['Custom homes', 'Renovations', 'Small commercial'] },
      { title: 'HVAC and air-to-water', img: img('mech'), text: 'Heating, ventilation and air conditioning for new builds, renovations and small commercial projects. We specialize in air-to-water systems, giving you efficient, high-performance solutions tailored to your space.', tags: ['Air-to-water', 'Heating', 'Ventilation', 'Air conditioning'] },
      { title: 'Gas fitting', img: img('fire'), text: 'Natural gas is consistent, cost-effective and convenient. We provide expert gas fitting you can trust: safe, professional and tailored to your needs.', tags: ['Gas fitting', 'Gas piping'] },
    ],
  },
  {
    title: 'Waterworks',
    theme: 'stone' as const,
    items: [
      { title: 'Waterworks', img: img('pipe'), text: 'From underground rough-in and municipal tie-ins to equipment connections, pressure testing, chlorination and commissioning support. We coordinate every stage so the system is built safely and to spec.', tags: ['Underground rough-in', 'Municipal tie-ins', 'Pressure testing', 'Chlorination'] },
      { title: 'Splash parks', img: img('splash'), text: 'Complete waterworks installation for splash pads and water play parks across British Columbia.', tags: ['Splash pads', 'Water play parks'] },
      { title: 'Public washrooms', img: img('pipe'), text: 'Prefabricated washroom installs or fully custom-built facilities. We handle the mechanical and waterworks from start to finish.', tags: ['Prefab installs', 'Custom builds', 'Mechanical and waterworks'] },
    ],
  },
];

export type WorkItem = { img: string; label: string; cat: 'Homes' | 'Mechanical' | 'Waterworks' };

export const WORK: WorkItem[] = [
  { img: img('hex', 1000), label: 'Bathroom', cat: 'Homes' },
  { img: img('boiler', 1000), label: 'Mechanical room', cat: 'Mechanical' },
  { img: img('kitchen', 1000), label: 'Custom home', cat: 'Homes' },
  { img: img('marb', 1000), label: 'Bathroom', cat: 'Homes' },
  { img: img('rad', 1000), label: 'Rough-in', cat: 'Mechanical' },
  { img: img('view', 1000), label: 'Custom home', cat: 'Homes' },
  { img: img('man', 1000), label: 'Mechanical', cat: 'Mechanical' },
  { img: img('tub', 1000), label: 'Bathroom', cat: 'Homes' },
  { img: img('splash', 1000), label: 'Waterworks', cat: 'Waterworks' },
  { img: img('mech', 1000), label: 'Mechanical room', cat: 'Mechanical' },
  { img: img('bath', 1000), label: 'Bathroom', cat: 'Homes' },
  { img: img('pipe', 1000), label: 'Waterworks', cat: 'Waterworks' },
  { img: img('fire', 1000), label: 'Gas', cat: 'Homes' },
];

// The six shown in "Recent work" on the home page.
export const PREVIEW = [0, 1, 3, 5, 6, 7].map((i) => WORK[i]);
