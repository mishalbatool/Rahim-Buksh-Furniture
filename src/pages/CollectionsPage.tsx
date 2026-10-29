import React, { useState } from 'react';
import { MessageCircle, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import {
  FURNITURE_COLLECTIONS,
  createWhatsAppUrl,
  FurnitureCategory,
} from '../data/furnitureData';

interface CollectionsPageProps {
  onOpenCustomQuote: () => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onOpenCustomQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Collections' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'living', label: 'Living Room' },
    { id: 'dining', label: 'Dining' },
    { id: 'craft', label: 'Hand-Carved & Bespoke' },
  ];

  const filteredCollections = FURNITURE_COLLECTIONS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bedroom') {
      return (
        item.id === 'luxury-bedroom-sets' ||
        item.id === 'royal-beds-headboards' ||
        item.id === 'traditional-wooden-furniture'
      );
    }
    if (activeFilter === 'living') {
      return item.id === 'luxury-sofa-sets' || item.id === 'living-room-furniture';
    }
    if (activeFilter === 'dining') {
      return item.id === 'dining-tables-chairs';
    }
    if (activeFilter === 'craft') {
      return item.id === 'hand-carved-chinioti' || item.id === 'custom-furniture-designs';
    }
    return true;
  });

  return (
    <div className="bg-[#F7F3EB] min-h-screen">
      {/* Page Header */}
      <PageHeader
        breadcrumb="Collections"
        badge="Direct Factory Collections"
        title="Royal Chinioti Furniture Portfolios"
        description="Handcrafted in solid Sheesham, Burma teak, and aged walnut. Explore our 8 signature collections, customized directly at our factory outlet in Chiniot."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#EAE0D0]/70 rounded-lg max-w-xl mx-auto border border-[#B79A65]/25 mb-14">
          {filterOptions.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65] ${
                activeFilter === tab.id
                  ? 'bg-[#38271F] text-white shadow-xs'
                  : 'text-[#38271F]/80 hover:text-[#38271F] hover:bg-white/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Categories Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredCollections.map((category: FurnitureCategory) => {
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="absolute top-3 left-3 bg-[#38271F]/85 backdrop-blur-xs text-[#EAE0D0] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm border border-[#B79A65]/40">
                    Direct Factory
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white">
                  <div className="mb-2">
                    <h2 className="font-serif text-xl font-bold text-[#38271F] group-hover:text-[#76513B] transition-colors leading-snug">
                      {category.title}
                    </h2>
                    <p className="text-xs text-[#76513B] font-medium mt-1">
                      {category.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#38271F]/75 leading-relaxed font-light mb-4 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-auto pt-3 border-t border-[#EAE0D0] space-y-2 mb-5">
                    <div className="text-[11px] text-[#76513B] font-semibold uppercase tracking-wider">
                      Available Timber
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
                      Key Highlights
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
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#B79A65]" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Policy Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 bg-[#EAE0D0]/60 rounded-xl border border-[#B79A65]/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#38271F]">
              Transparent Factory-Direct Quotations
            </h3>
            <p className="text-xs sm:text-sm text-[#38271F]/80 max-w-xl font-light">
              Furniture prices depend on design complexity, choice of seasoned wood (Sheesham, Teak, or Walnut), room dimensions, and bespoke finishes. Speak directly with our workshop to receive a precise quote.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCustomQuote}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#76513B] hover:bg-[#38271F] rounded transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#B79A65]" />
            <span>Request Custom Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
