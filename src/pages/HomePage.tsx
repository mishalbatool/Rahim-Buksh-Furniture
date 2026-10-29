import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Building2,
  MapPin,
  CheckCircle2,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  createWhatsAppUrl,
  FURNITURE_COLLECTIONS,
  GALLERY_ITEMS,
} from '../data/furnitureData';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { SocialProof } from '../components/SocialProof';

interface HomePageProps {
  onOpenCustomQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCustomQuote }) => {
  // Curated preview items for Home
  const featuredCollections = FURNITURE_COLLECTIONS.slice(0, 4);
  const featuredGallery = GALLERY_ITEMS.slice(0, 6);

  const whatsappDesignUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum, I would like to discuss a custom furniture design with Rahim Buksh Furniture.'
  );

  return (
    <div className="space-y-0">
      {/* 1. Full-Width Luxury Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#38271F]">
        <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/hero-bedroom.jpg"
              alt="Royal Chinioti Handcrafted Bedroom Suite"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Multi-stop luxury gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#38271F] via-[#38271F]/65 to-[#38271F]/40" />
            <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#38271F]/30 to-[#38271F]/70" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full bg-[#38271F]/80 border border-[#B79A65]/40 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79A65]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#EAE0D0] uppercase font-sans">
                CHINIOT&apos;S HERITAGE OF FINE WOODWORK
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-sm">
              Where Timeless Craftsmanship <br className="hidden sm:inline" />
              Meets Royal Living
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F7F3EB]/90 max-w-2xl mx-auto font-light leading-relaxed">
              Discover handcrafted Chinioti furniture, exquisite wood carvings, and bespoke designs
              created by a family heritage dedicated to quality and elegance.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
              <Link
                to="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-white rounded transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
              >
                <span>Explore Our Collections</span>
                <ArrowRight className="w-4 h-4 text-[#76513B]" />
              </Link>

              <a
                href={whatsappDesignUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F]/80 hover:bg-[#76513B] border border-[#B79A65]/60 rounded transition-all backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
              >
                <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                <span>Discuss Your Design</span>
              </a>
            </div>

            {/* Trust markers */}
            <div className="mt-8 pt-6 border-t border-[#B79A65]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#EAE0D0]/80">
              <div className="flex items-center gap-2">
                <span className="text-[#B79A65] font-serif text-sm">✦</span>
                <span>Direct Factory in Chiniot</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B79A65] font-serif text-sm">✦</span>
                <span>100% Solid Hardwood</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B79A65] font-serif text-sm">✦</span>
                <span>Bespoke Custom Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B79A65] font-serif text-sm">✦</span>
                <span>Direct WhatsApp Quotations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short Brand Introduction Strip */}
      <section className="py-16 sm:py-20 bg-[#F7F3EB] border-b border-[#B79A65]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#76513B]">
            Authentic Pakistani Artistry
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38271F]">
            Direct Manufacturer of Royal Handcrafted Furniture
          </h2>
          <p className="text-sm sm:text-base text-[#38271F]/80 font-light leading-relaxed max-w-3xl mx-auto">
            Located near Chungi No. 1 in Chiniot, Rahim Buksh Furniture builds bespoke bedroom suites,
            monumental carved headboards, living deewans, and regal dining tables. Handcrafted from
            seasoned Sheesham and teak timber with zero middlemen markups.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#76513B] hover:text-[#38271F] group"
            >
              <span>Read Our Full Story</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Collections Preview */}
      <section className="py-20 bg-[#EAE0D0]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#B79A65]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
                  Signature Portfolios
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38271F]">
                Featured Furniture Collections
              </h2>
            </div>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-white hover:bg-[#38271F] hover:text-white rounded border border-[#B79A65]/40 transition-all shadow-xs"
            >
              <span>View All 8 Collections</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B79A65]" />
            </Link>
          </div>

          {/* 4 Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((category) => {
              const whatsappUrl = createWhatsAppUrl(category.whatsappMessage);
              return (
                <div
                  key={category.id}
                  className="group flex flex-col bg-white rounded-lg overflow-hidden border border-[#B79A65]/25 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE0D0]">
                    <img
                      src={category.image}
                      alt={category.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#38271F]/85 backdrop-blur-xs text-[#EAE0D0] text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm border border-[#B79A65]/40">
                      Direct Factory
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-bold text-[#38271F] group-hover:text-[#76513B] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#38271F]/75 font-light mt-1.5 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-[#EAE0D0] flex items-center justify-between">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#76513B] hover:text-[#38271F]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#B79A65]" />
                        <span>Discuss on WhatsApp</span>
                      </a>
                      <Link
                        to="/collections"
                        className="text-xs text-[#38271F]/50 hover:text-[#38271F]"
                        aria-label={`View details of ${category.title}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship Spotlight Teaser */}
      <section className="py-20 bg-[#EAE0D0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#B79A65]/40 shadow-xl group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#38271F]">
                <img
                  src="/images/craftsman-workshop.jpg"
                  alt="Master craftsman chiseling in Chiniot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-serif italic">
                  Chinioti master artisan sculpting intricate floral arabesques
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#76513B]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
                  Signature Artistry
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38271F]">
                Crafted by Hand. <br />
                Made to Be Cherished.
              </h2>
              <p className="text-sm sm:text-base text-[#38271F]/80 font-light leading-relaxed">
                In Chiniot, woodworking is a centuries-old hereditary heritage. Every curve, petal, and
                jali lattice is chiseled into seasoned Sheesham rosewood by hand—without machine routing.
              </p>
              <div className="p-4 bg-white/70 rounded-lg border border-[#B79A65]/35">
                <p className="font-serif text-lg font-bold text-[#38271F] italic">
                  &ldquo;Every Detail Tells a Story.&rdquo;
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/craftsmanship"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors shadow-xs"
                >
                  <span>Explore Our Craftsmanship</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B79A65]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery Preview */}
      <section className="py-20 bg-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#B79A65]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#76513B]">
                  Artisan Portfolio
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38271F]">
                Featured Gallery Highlights
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-white hover:bg-[#38271F] hover:text-white rounded border border-[#B79A65]/40 transition-all shadow-xs"
            >
              <span>Open Complete Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B79A65]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredGallery.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-[#B79A65]/30 shadow-xs block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[10px] text-[#B79A65] uppercase font-semibold">
                    Click to View in Gallery
                  </span>
                  <span className="text-white text-xs font-serif font-bold line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Social Proof */}
      <SocialProof />

      {/* 8. Call to Action / Factory Visit Banner */}
      <section className="py-16 bg-[#38271F] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B79A65]">
            Plan Your Visit or Inquiry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Visit Our Factory Outlet in Chiniot
          </h2>
          <p className="text-sm sm:text-base text-[#F7F3EB]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Near Chungi No. 1, Mahar Anwar Estate Road, opposite Lahore Road, Chiniot.
            Discuss sizes, wood species, and polishes directly with our master craftsmen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#38271F] bg-[#EAE0D0] hover:bg-white rounded transition-colors shadow-xs"
            >
              <span>Contact &amp; Location Details</span>
              <ArrowRight className="w-4 h-4 text-[#76513B]" />
            </Link>
            <button
              type="button"
              onClick={onOpenCustomQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-[#B79A65] rounded transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#B79A65]" />
              <span>Request Custom Quote</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
