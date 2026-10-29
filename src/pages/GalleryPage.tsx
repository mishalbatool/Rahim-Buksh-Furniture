import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, createWhatsAppUrl } from '../data/furnitureData';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'bedroom', label: 'Beds & Bedroom' },
    { id: 'living', label: 'Royal Sofas & Deewan' },
    { id: 'dining', label: 'Dining & Consoles' },
    { id: 'craftsmanship', label: 'Woodwork Details' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div className="bg-[#F7F3EB] min-h-screen">
      {/* Page Header */}
      <PageHeader
        breadcrumb="Gallery"
        badge="Artisan Portfolio"
        title="Featured Furniture Gallery"
        description="A visual journey through handcrafted Chinioti bridal beds, royal drawing room suites, banquet dining sets, and high-relief architectural woodwork. Click any piece to enlarge and inquire directly."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#EAE0D0]/70 rounded-lg max-w-xl mx-auto border border-[#B79A65]/25 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedImageIndex(null);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65] ${
                activeCategory === cat.id
                  ? 'bg-[#38271F] text-white shadow-xs'
                  : 'text-[#38271F]/80 hover:text-[#38271F] hover:bg-white/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-white border border-[#B79A65]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#38271F]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#38271F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#38271F] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="p-4 sm:p-5 bg-white flex flex-col flex-1 justify-between border-t border-[#B79A65]/15">
                <div>
                  <div className="text-[11px] font-sans text-[#76513B] uppercase tracking-wider font-semibold mb-1">
                    {item.category === 'bedroom' && 'Royal Bedroom'}
                    {item.category === 'living' && 'Living & Drawing Room'}
                    {item.category === 'dining' && 'Dining & Banquet'}
                    {item.category === 'craftsmanship' && 'Chinioti Craftsmanship'}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#38271F] leading-snug group-hover:text-[#76513B] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#38271F]/70 font-light mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Working Lightbox Modal */}
      {selectedImageIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-[#38271F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-4xl w-full bg-[#F7F3EB] rounded-xl overflow-hidden shadow-2xl border border-[#B79A65]/40 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[420px]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#F7F3EB]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#76513B] uppercase tracking-wider font-semibold">
                  <span>Chiniot Heritage Piece</span>
                  <span aria-hidden="true">·</span>
                  <span>100% Solid Wood</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#38271F] leading-tight">
                  {currentItem.title}
                </h3>

                <p className="text-sm text-[#38271F]/80 font-light leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="p-3.5 bg-[#EAE0D0] rounded border border-[#B79A65]/30 space-y-1 text-xs text-[#38271F]">
                  <p className="font-semibold text-[#76513B]">Direct Manufacturer Advantage:</p>
                  <p className="font-light">
                    Every piece is made-to-order at our Chiniot factory. You can choose wood species (Sheesham, Teak, Walnut), custom dimensions, fabric colors, and carved detailing.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B79A65]/25">
                <a
                  href={createWhatsAppUrl(
                    `Assalam-o-Alaikum, I am inquiring about the "${currentItem.title}" displayed in your gallery. Please share price, customization, and production timeline details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
                >
                  <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                  <span>Inquire About This Piece via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
