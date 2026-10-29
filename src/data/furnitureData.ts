export interface FurnitureCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  woodOptions: string[];
  features: string[];
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bedroom' | 'living' | 'dining' | 'craftsmanship';
  image: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'Rahim Buksh Chinioti Furniture',
  shortName: 'Rahim Buksh Furniture',
  subtitle: 'Direct Factory & Furniture Manufacturer',
  phone: '+92 324 6211612',
  phoneDisplay: '+92 324 6211612',
  phoneTel: '+923246211612',
  whatsappNumber: '923246211612',
  address: 'Rahim Buksh Factory Outlet, Near Chungi No. 1, Mahar Anwar Estate Road, opposite Lahore Road, Chiniot, Punjab 35400, Pakistan',
  addressShort: 'Near Chungi No. 1, Mahar Anwar Estate Road, opposite Lahore Road, Chiniot, Punjab',
  googleReviewsCount: '16 Google reviews',
  googleSearchUrl: 'https://www.google.com/search?q=Rahim+Buksh+Furniture+Chiniot',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rahim+Buksh+Factory+Outlet+Chiniot+Punjab+Pakistan',
  instagramUrl: 'https://www.instagram.com/rahimbukshfurniture/',
  tiktokUrl: 'https://www.tiktok.com/@rahimbukshfurniture',
};

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const FURNITURE_COLLECTIONS: FurnitureCategory[] = [
  {
    id: 'luxury-bedroom-sets',
    title: 'Luxury Bedroom Sets',
    tagline: 'Regal bridal suites & master bedroom sanctuaries',
    description: 'Complete royal suites featuring monumental hand-carved bed frames, matching bedside tables, ornate wardrobe almirahs, and grand dressing vanities.',
    image: '/images/hero-bedroom.jpg',
    woodOptions: ['Seasoned Sheesham (Rosewood)', 'Pure Burma Teak', 'Fine Walnut'],
    features: ['High-relief hand carving', 'Custom mattress dimensions', 'Matching side tables & console'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Luxury Bedroom Sets. Please share available designs, customization options, and price details.',
  },
  {
    id: 'royal-beds-headboards',
    title: 'Royal Beds & Headboards',
    tagline: 'Master-carved statement pieces for royalty',
    description: 'Monumental headboards adorned with intricate jali openwork, traditional Mughal arches, floral arabesques, and subtle antique gold leaf highlighting.',
    image: '/images/royal-headboard.jpg',
    woodOptions: ['Solid Sheesham Rosewood', 'Aged Teak', 'Dark Walnut'],
    features: ['Arched Mughal jali crest', 'Antique gold leaf leafing', 'Heavy-gauge solid timber joinery'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Royal Beds & Headboards. Please share available designs, customization options, and price details.',
  },
  {
    id: 'luxury-sofa-sets',
    title: 'Luxury Sofa Sets',
    tagline: 'Majestic drawing room seating crafted for opulence',
    description: 'Handcrafted 7-seater and 9-seater royal sofa sets featuring deeply carved solid wood crowns, cabriole legs, and premium velvet or damask upholstery.',
    image: '/images/luxury-sofa.jpg',
    woodOptions: ['Pure Sheesham', 'Walnut Wood Finish', 'Mahogany Tones'],
    features: ['Deep button-tufted or damask upholstery', 'Carved cabriole legs', 'Matching center & peg tables'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Luxury Sofa Sets. Please share available designs, customization options, and price details.',
  },
  {
    id: 'living-room-furniture',
    title: 'Living Room Furniture',
    tagline: 'Warmth, elegance, and timeless Pakistani hospitality',
    description: 'Curated royal deewans, carved coffee tables, luxury corner showcases, wall consoles, and accent armchairs designed for refined entertaining.',
    image: '/images/traditional-deewan.jpg',
    woodOptions: ['Hand-Selected Sheesham', 'Golden Teak', 'Natural Walnut'],
    features: ['Traditional bolster cushions', 'Intricate lattice fretwork', 'High-gloss or matte lacquer finish'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Living Room Furniture. Please share available designs, customization options, and price details.',
  },
  {
    id: 'hand-carved-chinioti',
    title: 'Hand-Carved Chinioti Furniture',
    tagline: 'Authentic UNESCO-celebrated craft from Chiniot masters',
    description: 'The pinnacle of Chiniot’s centuries-old woodworking legacy. Every curve, vine, and leaf is chiseled entirely by hand by hereditary master artisans.',
    image: '/images/carving-macro.jpg',
    woodOptions: ['100% Solid Seasoned Sheesham', 'Antique Polish Sheesham'],
    features: ['100% Hand-chiseled woodwork', 'No CNC or machine carving', 'Generational artisan techniques'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Hand-Carved Chinioti Furniture. Please share available designs, customization options, and price details.',
  },
  {
    id: 'dining-tables-chairs',
    title: 'Dining Tables & Chairs',
    tagline: 'Grand banquets crafted for family gatherings',
    description: '8-seater, 10-seater, and 12-seater solid hardwood dining tables paired with high-back carved dining chairs featuring velvet seating and polished grain.',
    image: '/images/royal-dining.jpg',
    woodOptions: ['Heavy Sheesham Wood', 'Teak Wood', 'Rich Walnut'],
    features: ['Solid timber tabletop', 'High-back ergonomic carved chairs', 'Optional custom buffet console'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Dining Tables & Chairs. Please share available designs, customization options, and price details.',
  },
  {
    id: 'custom-furniture-designs',
    title: 'Custom Furniture Designs',
    tagline: 'Bespoke commissions tailored to your architectural plans',
    description: 'Work directly with our factory master draftsmen. Bring your floor plans, reference photos, or specific wood preferences to create unique custom heirlooms.',
    image: '/images/bespoke-cabinet.jpg',
    woodOptions: ['Client’s Choice of Hardwood', 'Brass & Bone Inlay Options'],
    features: ['Custom dimensions & layout', 'Brass inlay & metal accents', 'Direct factory price advantage'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Custom Furniture Designs. Please share available designs, customization options, and price details.',
  },
  {
    id: 'traditional-wooden-furniture',
    title: 'Traditional Wooden Furniture',
    tagline: 'Heritage Pakistani artistry & antique silhouettes',
    description: 'Classic heritage dressing tables with carved mirror crowns, antique jharoka cabinets, traditional swings (jhoola), and timeless cultural showpieces.',
    image: '/images/dressing-table.jpg',
    woodOptions: ['Seasoned Pakistani Rosewood (Sheesham)', 'Aged Walnut'],
    features: ['Ornate carved mirror frame', 'Felt-lined secret vanity drawers', 'Antique hand-rubbed patina'],
    whatsappMessage: 'Assalam-o-Alaikum, I am interested in your Traditional Wooden Furniture. Please share available designs, customization options, and price details.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Bridal Bed with Monumental Carved Headboard',
    category: 'bedroom',
    image: '/images/hero-bedroom.jpg',
    description: 'Solid Sheesham rosewood royal bridal bed featuring high-relief arabesque headboard and hand-carved footboard.',
  },
  {
    id: 'gal-2',
    title: 'Intricate Floral Arabesque Wood Carving',
    category: 'craftsmanship',
    image: '/images/carving-macro.jpg',
    description: 'Macro detail showing three-dimensional depth, flowing botanical scrollwork, and smooth hand-planed finish.',
  },
  {
    id: 'gal-3',
    title: 'Opulent Chinioti Drawing Room Sofa Suite',
    category: 'living',
    image: '/images/luxury-sofa.jpg',
    description: 'Stately living room suite with hand-carved walnut wood crowns and gold-accented damask upholstery.',
  },
  {
    id: 'gal-4',
    title: 'Master Craftsman Hand-Chiseling in Chiniot Factory',
    category: 'craftsmanship',
    image: '/images/craftsman-workshop.jpg',
    description: 'Generational Chinioti artisan sculpting floral motifs by hand with traditional steel gouges and mallet.',
  },
  {
    id: 'gal-5',
    title: 'Royal 8-Seater Round Banquet Dining Set',
    category: 'dining',
    image: '/images/royal-dining.jpg',
    description: 'Hand-carved pedestal dining table with eight high-back crest chairs and velvet damask seat pads.',
  },
  {
    id: 'gal-6',
    title: 'Heritage Bridal Dressing Table & Vanity Mirror',
    category: 'bedroom',
    image: '/images/dressing-table.jpg',
    description: 'Crown-arched dressing mirror console featuring deep-relief floral motifs and matching velvet stool.',
  },
  {
    id: 'gal-7',
    title: 'Traditional Mughal Jali Deewan Daybed',
    category: 'living',
    image: '/images/traditional-deewan.jpg',
    description: 'Stately royal daybed crafted with intricate wood lattice openwork, silk bolsters, and cabriole feet.',
  },
  {
    id: 'gal-8',
    title: 'Master-Carved Headboard with Antique Gold Gilding',
    category: 'bedroom',
    image: '/images/royal-headboard.jpg',
    description: 'Intricately pierced arch headboard with antique gold leaf accents over solid seasoned Sheesham.',
  },
  {
    id: 'gal-9',
    title: 'Bespoke Carved Credenza with Brass Inlays',
    category: 'dining',
    image: '/images/bespoke-cabinet.jpg',
    description: 'Architectural display credenza featuring geometric brass inlay and delicate Chinioti floral relief.',
  },
];
