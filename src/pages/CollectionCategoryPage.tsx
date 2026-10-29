import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { MessageCircle, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import {
  FURNITURE_COLLECTIONS,
  createWhatsAppUrl,
  FurnitureCategory,
} from '../data/furnitureData';

interface CollectionCategoryConfig {
  title: string;
  badge: string;
  breadcrumb: string;
  description: string;
  categoryIds: string[];
}

const CATEGORY_MAP: Record<string, CollectionCategoryConfig> = {
  bedroom: {
    title: 'Luxury Bedroom Sets & Royal Beds',
    badge: 'Chinioti Bridal Suites',
    breadcrumb: 'Bedroom',
    description:
      'Explore handcrafted royal bridal suites, monumental hand-carved headboards, matching bedside cabinets, and heirloom vanity dressing tables sculpted from seasoned Sheesham and teak.',
    categoryIds: [
      'luxury-bedroom-sets',
      'royal-beds-headboards',
      'traditional-wooden-furniture',
    ],
  },
  'living-room': {
    title: 'Luxury Sofa Sets & Royal Living Room Furniture',
    badge: 'Drawing Room Splendor',
    breadcrumb: 'Living Room',
    description:
      'Regal 7-seater and 9-seater drawing room suites, solid-frame cabriole sofas, traditional Mughal jali deewans, and carved center tables designed for noble Pakistani hospitality.',
    categoryIds: ['luxury-sofa-sets', 'living-room-furniture'],
  },
  dining: {
    title: 'Royal Banquet Dining Tables & Chairs',
    badge: 'Family Banquets & Feasts',
    breadcrumb: 'Dining',
    description:
      'Grand 8-seater, 10-seater, and 12-seater solid timber dining suites. High-back ergonomic hand-carved dining chairs paired with heavy pedestal tables and matching consoles.',
    categoryIds: ['dining-tables-chairs'],
  },
  'hand-carved-bespoke': {
    title: 'Hand-Carved Chinioti & Bespoke Furniture Designs',
    badge: 'Hereditary Mastercraft',
    breadcrumb: 'Hand-Carved & Bespoke',
    description:
      'The pinnacle of Chiniot woodworking. Authentic deep-relief floral arabesques chiseled 100% by hand, and bespoke architectural commissions built to your exact room specifications.',
    categoryIds: ['hand-carved-chinioti', 'custom-furniture-designs'],
  },
};

interface CollectionCategoryPageProps {
  onOpenCustomQuote: () => void;
  forcedSlug?: string;
}

export const CollectionCategoryPage: React.FC<CollectionCategoryPageProps> = ({
  onOpenCustomQuote,
  forcedSlug,
}) => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const slug = forcedSlug || categorySlug || 'bedroom';
  const config = CATEGORY_MAP[slug] || CATEGORY_MAP['bedroom'];

  const items = FURNITURE_COLLECTIONS.filter((item) =>
    config.categoryIds.includes(item.id)
  );

  return (
    <div className="bg-[#F7F3EB] min-h-screen">
      {/* Page Header */}
      <PageHeader
        breadcrumb={`Collections / ${config.breadcrumb}`}
        badge={config.badge}
        title={config.title}
        description={config.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#B79A65]/20">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#76513B] hover:text-[#38271F] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All 8 Collections</span>
          </Link>

          <span className="text-xs text-[#38271F]/70">
            Showing {items.length} Category Portfolio{items.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Responsive Grid */}
        <div
          className={`grid grid-cols-1 ${
            items.length === 1
              ? 'max-w-2xl mx-auto'
              : items.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          } gap-8`}
        >
          {items.map((category: FurnitureCategory) => {
            const whatsappUrl = createWhatsAppUrl(category.whatsappMessage);

            return (
              <div
                key={category.id}
                className="group flex flex-col bg-white rounded-lg overflow-hidden border border-[#B79A65]/25 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE0D0]">
                  <img
                    src={category.image}
                    alt={category.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#38271F]/85 backdrop-blur-xs text-[#EAE0D0] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm border border-[#B79A65]/40">
                    Direct Factory
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6 bg-white">
                  <div className="mb-2">
                    <h2 className="font-serif text-xl font-bold text-[#38271F] group-hover:text-[#76513B] transition-colors leading-snug">
                      {category.title}
                    </h2>
                    <p className="text-xs text-[#76513B] font-medium mt-1">
                      {category.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#38271F]/75 leading-relaxed font-light mb-4">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-auto pt-3 border-t border-[#EAE0D0] space-y-2 mb-5">
                    <div className="text-[11px] text-[#76513B] font-semibold uppercase tracking-wider">
                      Available Timber Options
                    </div>
                    <div className="text-xs text-[#38271F]/85 flex flex-wrap gap-x-1.5">
                      {category.woodOptions.map((wood, i) => (
                        <span key={wood}>
                          {wood}
                          {i < category.woodOptions.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#76513B] font-semibold uppercase tracking-wider pt-1">
                      Crafting Features
                    </div>
                    <ul className="text-xs text-[#38271F]/75 space-y-1">
                      {category.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <span className="text-[#B79A65]">✔</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Action Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-16 p-7 sm:p-8 bg-[#EAE0D0]/60 rounded-xl border border-[#B79A65]/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#38271F]">
              Need Custom Dimensions or Design Modifications?
            </h3>
            <p className="text-xs sm:text-sm text-[#38271F]/80 max-w-xl font-light">
              As direct manufacturers, we can adjust bed sizes, wood species, stain colors, and fabric upholstery to match your bridal suite or home interior.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCustomQuote}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#76513B] hover:bg-[#38271F] rounded transition-colors shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#B79A65]" />
            <span>Request Custom Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
