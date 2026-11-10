// Site-wide configuration for Fort Mohave Epoxy.
// PHONE: replace the placeholder below once the business line is live.
export const site = {
  name: 'Fort Mohave Epoxy',
  domain: 'https://fortmohaveepoxy.com',
  city: 'Fort Mohave',
  state: 'AZ',
  phone: { display: '(928) 000-0000', tel: '+19280000000', placeholder: true },
  mapQuery: 'Fort Mohave, AZ 86426',
  hours: 'Mon–Fri 6:30–4:30 · Saturday by request',
  ogImage: '/images/hero/palm-lined-riverbank-below-desert-mountains-1200.webp',
};

export const services = [
  { slug: 'garage-floor-coatings', name: 'Garage Floor Coatings', short: 'Garages', blurb: 'Flake and solid-color systems for garages that hold trucks, boats, side-by-sides and everything else that comes back from the river.', img: 'garageYellow', points: ['Diamond-ground prep, not acid etch', 'Hot-tire resistant build', 'UV-stable topcoat for open-door afternoons'] },
  { slug: 'residential-epoxy-flooring', name: 'Residential Epoxy Flooring', short: 'Interiors', blurb: 'Seamless floors for living rooms, casitas, laundry rooms and converted garages — easy to sweep when the wind brings the desert inside.', img: 'roomTrim', points: ['Low-odor interior products', 'Satin or gloss sheen', 'Moisture tested before we start'] },
  { slug: 'decorative-flake-flooring', name: 'Decorative Flake Flooring', short: 'Flake', blurb: 'Vinyl chip broadcast in sand, river-stone and slate blends that hide dust, add grip and stand up to daily use.', img: 'terrazzo', points: ['Full or partial broadcast', 'Textured, slip-conscious surface', 'Dozens of blend options'] },
  { slug: 'metallic-epoxy-flooring', name: 'Metallic Epoxy Flooring', short: 'Metallic', blurb: 'Hand-worked pearl pigments that move like water and stone — a statement floor for living spaces, bars and showrooms.', img: 'metalRiver', points: ['One-of-a-kind pattern', 'Deep, layered color', 'Best for interior spaces'] },
  { slug: 'polyaspartic-floor-coatings', name: 'Polyaspartic Floor Coatings', short: 'Polyaspartic', blurb: 'Fast-curing, color-stable coatings that let most garages go back into service quickly and hold up under strong sun.', img: 'motoLift', points: ['Walk on in hours', 'Resists yellowing in sunlight', 'Wide temperature window'] },
  { slug: 'polyurea-floor-coatings', name: 'Polyurea Floor Coatings', short: 'Polyurea', blurb: 'Flexible, high-bond base coats for slabs that move with big temperature swings, plus shops and heavy-use garages.', img: 'mechanic', points: ['Flexes with slab movement', 'Strong chemical resistance', 'Pairs with flake or solid tops'] },
  { slug: 'patio-concrete-coatings', name: 'Patio & Concrete Coatings', short: 'Patios', blurb: 'Light-colored, textured finishes for patios, pool decks, walkways and carport slabs that bake in full sun.', img: 'loungers', points: ['Lighter colors run cooler', 'Grip texture for wet feet', 'Repairs to cracks and spalls'] },
  { slug: 'commercial-epoxy-flooring', name: 'Commercial Epoxy Flooring', short: 'Commercial', blurb: 'Durable, cleanable floors for shops, salons, clinics, restaurants and showrooms along the Highway 95 corridor.', img: 'detailers', points: ['Night and weekend scheduling', 'Easy-clean, seamless surface', 'Slip-resistant options'] },
  { slug: 'warehouse-floor-coatings', name: 'Warehouse Floor Coatings', short: 'Warehouse', blurb: 'Heavy-duty systems, joint repair and safety striping for warehouses, hangars, fabrication shops and storage buildings.', img: 'hangar', points: ['Forklift and pallet-jack rated', 'Joint fill and crack repair', 'Aisle and safety line striping'] },
];

export const areas = [
  { name: 'Fort Mohave', note: 'Our home base along Highway 95, including neighborhoods around Desert Lakes and Los Lagos.' },
  { name: 'Bullhead City', note: 'North along the river — garages, shops and commercial buildings throughout the city.' },
  { name: 'Mohave Valley', note: 'Rural and residential properties south and east, from small homes to large shop buildings.' },
  { name: 'Mesquite Creek', note: 'Homes and outbuildings just south of Fort Mohave.' },
  { name: 'Golden Shores & Topock', note: 'River-adjacent communities farther south toward the Interstate 40 crossing.' },
];

export const projectTypes = [
  'Garage floor',
  'Boat, RV or toy garage',
  'Interior / living space',
  'Decorative flake',
  'Metallic floor',
  'Polyaspartic (fast cure)',
  'Patio, pool deck or walkway',
  'Shop or commercial space',
  'Warehouse or hangar',
  'Not sure yet',
];
