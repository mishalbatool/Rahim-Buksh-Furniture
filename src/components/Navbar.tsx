import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

interface NavbarProps {
  onOpenCustomQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown states
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  // Mobile accordion states
  const [mobileCollectionsExpanded, setMobileCollectionsExpanded] = useState(false);
  const [mobileGalleryExpanded, setMobileGalleryExpanded] = useState(false);

  const collectionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const collectionsContainerRef = useRef<HTMLDivElement>(null);
  const galleryContainerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
    setGalleryDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        collectionsContainerRef.current &&
        !collectionsContainerRef.current.contains(event.target as Node)
      ) {
        setCollectionsDropdownOpen(false);
      }
      if (
        galleryContainerRef.current &&
        !galleryContainerRef.current.contains(event.target as Node)
      ) {
        setGalleryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mouse handlers with small debounce for smooth bridge
  const handleCollectionsMouseEnter = () => {
    if (collectionsTimeoutRef.current) clearTimeout(collectionsTimeoutRef.current);
    setCollectionsDropdownOpen(true);
    setGalleryDropdownOpen(false);
  };

  const handleCollectionsMouseLeave = () => {
    collectionsTimeoutRef.current = setTimeout(() => {
      setCollectionsDropdownOpen(false);
    }, 150);
  };

  const handleGalleryMouseEnter = () => {
    if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
    setGalleryDropdownOpen(true);
    setCollectionsDropdownOpen(false);
  };

  const handleGalleryMouseLeave = () => {
    galleryTimeoutRef.current = setTimeout(() => {
      setGalleryDropdownOpen(false);
    }, 150);
  };

  const collectionItems = [
    { label: 'Bedroom', path: '/collections/bedroom', desc: 'Beds, headboards & vanities' },
    { label: 'Living Room', path: '/collections/living-room', desc: 'Sofas, deewan & consoles' },
    { label: 'Dining', path: '/collections/dining', desc: '8 to 12-seater banquet tables' },
    { label: 'Hand-Carved & Bespoke', path: '/collections/hand-carved-bespoke', desc: 'Custom architectural woodwork' },
  ];

  const galleryItems = [
    { label: 'Beds & Bedroom', path: '/gallery/beds-bedroom', desc: 'Royal carved bridal sets' },
    { label: 'Royal Sofas & Deewan', path: '/gallery/royal-sofas-deewan', desc: 'Drawing room suites' },
    { label: 'Dining & Consoles', path: '/gallery/dining-consoles', desc: 'Banquet tables & credenzas' },
    { label: 'Woodwork Details', path: '/gallery/woodwork-details', desc: 'Chinioti chiseling & relief' },
  ];

  const isCollectionsActive = location.pathname.startsWith('/collections');
  const isGalleryActive = location.pathname.startsWith('/gallery');

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F3EB]/95 backdrop-blur-md shadow-xs border-b border-[#B79A65]/25 py-3'
            : 'bg-[#F7F3EB] border-b border-[#B79A65]/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Home) */}
            <Link
              to="/"
              className="flex items-center gap-2.5 text-[#38271F] group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
              aria-label="Rahim Buksh Furniture - Home"
            >
              <div className="w-8 h-8 rounded-sm border border-[#B79A65] flex items-center justify-center bg-[#EAE0D0]/50 group-hover:bg-[#B79A65]/20 transition-colors">
                <svg
                  className="w-4 h-4 text-[#76513B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M4 18v3M20 18v3M4 14h16M3 9h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#38271F] leading-tight">
                  Rahim Buksh
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#76513B] font-semibold -mt-0.5">
                  Chinioti Furniture
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links with Elegant Dropdowns */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
              {/* Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65] ${
                    isActive ? 'text-[#76513B] font-semibold' : 'text-[#38271F]/80 hover:text-[#38271F]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Home</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B79A65] transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* Collections with Dropdown */}
              <div
                ref={collectionsContainerRef}
                className="relative"
                onMouseEnter={handleCollectionsMouseEnter}
                onMouseLeave={handleCollectionsMouseLeave}
              >
                <div className="flex items-center gap-1">
                  <NavLink
                    to="/collections"
                    end
                    className={({ isActive }) =>
                      `relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65] ${
                        isCollectionsActive
                          ? 'text-[#76513B] font-semibold'
                          : 'text-[#38271F]/80 hover:text-[#38271F]'
                      }`
                    }
                  >
                    <span>Collections</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B79A65] transition-all duration-200 ${
                        isCollectionsActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setCollectionsDropdownOpen(!collectionsDropdownOpen)}
                    className="p-1 rounded text-[#38271F]/70 hover:text-[#38271F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
                    aria-expanded={collectionsDropdownOpen}
                    aria-label="Toggle collections menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#76513B] ${
                        collectionsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Menu Container */}
                {collectionsDropdownOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    style={{ minWidth: '240px' }}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-[#B79A65]/35 p-2 bg-[#F7F3EB]/98 backdrop-blur-md">
                      <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#76513B] border-b border-[#EAE0D0] mb-1">
                        Select Collection
                      </div>
                      {collectionItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setCollectionsDropdownOpen(false)}
                          className={`flex flex-col px-3 py-2 rounded-md transition-colors text-left group ${
                            location.pathname === item.path
                              ? 'bg-[#EAE0D0] text-[#76513B]'
                              : 'hover:bg-[#EAE0D0]/60 text-[#38271F]'
                          }`}
                        >
                          <span className="text-xs font-semibold group-hover:text-[#76513B] transition-colors">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-[#38271F]/65 font-light">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                      <div className="mt-1 pt-1 border-t border-[#EAE0D0]">
                        <Link
                          to="/collections"
                          onClick={() => setCollectionsDropdownOpen(false)}
                          className="block px-3 py-1.5 text-[11px] font-semibold text-[#76513B] hover:text-[#38271F] hover:bg-[#EAE0D0]/40 rounded text-center"
                        >
                          View All 8 Collections →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Craftsmanship */}
              <NavLink
                to="/craftsmanship"
                className={({ isActive }) =>
                  `relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65] ${
                    isActive ? 'text-[#76513B] font-semibold' : 'text-[#38271F]/80 hover:text-[#38271F]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Our Craftsmanship</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B79A65] transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* About Us */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65] ${
                    isActive ? 'text-[#76513B] font-semibold' : 'text-[#38271F]/80 hover:text-[#38271F]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>About Us</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B79A65] transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* Gallery with Dropdown */}
              <div
                ref={galleryContainerRef}
                className="relative"
                onMouseEnter={handleGalleryMouseEnter}
                onMouseLeave={handleGalleryMouseLeave}
              >
                <div className="flex items-center gap-1">
                  <NavLink
                    to="/gallery"
                    end
                    className={({ isActive }) =>
                      `relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65] ${
                        isGalleryActive
                          ? 'text-[#76513B] font-semibold'
                          : 'text-[#38271F]/80 hover:text-[#38271F]'
                      }`
                    }
                  >
                    <span>Gallery</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B79A65] transition-all duration-200 ${
                        isGalleryActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                    className="p-1 rounded text-[#38271F]/70 hover:text-[#38271F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65]"
                    aria-expanded={galleryDropdownOpen}
                    aria-label="Toggle gallery menu"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#76513B] ${
                        galleryDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Menu Container */}
                {galleryDropdownOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    style={{ minWidth: '240px' }}
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-[#B79A65]/35 p-2 bg-[#F7F3EB]/98 backdrop-blur-md">
                      <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#76513B] border-b border-[#EAE0D0] mb-1">
                        Gallery Portfolios
                      </div>
                      {galleryItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setGalleryDropdownOpen(false)}
                          className={`flex flex-col px-3 py-2 rounded-md transition-colors text-left group ${
                            location.pathname === item.path
                              ? 'bg-[#EAE0D0] text-[#76513B]'
                              : 'hover:bg-[#EAE0D0]/60 text-[#38271F]'
                          }`}
                        >
                          <span className="text-xs font-semibold group-hover:text-[#76513B] transition-colors">
                            {item.label}
                          </span>
                          <span className="text-[11px] text-[#38271F]/65 font-light">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                      <div className="mt-1 pt-1 border-t border-[#EAE0D0]">
                        <Link
                          to="/gallery"
                          onClick={() => setGalleryDropdownOpen(false)}
                          className="block px-3 py-1.5 text-[11px] font-semibold text-[#76513B] hover:text-[#38271F] hover:bg-[#EAE0D0]/40 rounded text-center"
                        >
                          View Full Gallery Showcase →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B79A65] ${
                    isActive ? 'text-[#76513B] font-semibold' : 'text-[#38271F]/80 hover:text-[#38271F]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Contact</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#B79A65] transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={createWhatsAppUrl(
                  'Assalam-o-Alaikum Rahim Buksh Furniture, I would like to discuss an order inquiry with your factory.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] rounded hover:bg-[#76513B] transition-colors border border-[#B79A65]/30 shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B79A65]" />
                <span>Discuss Your Order</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded text-[#38271F] hover:bg-[#EAE0D0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Accordion Submenus */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-[#38271F]/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F7F3EB] shadow-2xl flex flex-col p-6 border-l border-[#B79A65]/30 overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#B79A65]/20">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-[#38271F]">Rahim Buksh</span>
                <span className="text-[10px] tracking-wider uppercase text-[#76513B] font-semibold">
                  Chinioti Furniture
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded text-[#38271F] hover:bg-[#EAE0D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links & Accordions */}
            <div className="flex flex-col gap-1.5 py-5">
              {/* Home */}
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#EAE0D0] text-[#76513B] font-semibold' : 'text-[#38271F]'
                  }`
                }
              >
                <span>Home</span>
              </NavLink>

              {/* Collections Accordion */}
              <div className="flex flex-col">
                <div
                  className={`flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${
                    isCollectionsActive ? 'bg-[#EAE0D0]/80 text-[#76513B] font-semibold' : 'text-[#38271F]'
                  }`}
                >
                  <Link
                    to="/collections"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 hover:text-[#76513B]"
                  >
                    Collections
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileCollectionsExpanded(!mobileCollectionsExpanded)}
                    className="p-1 text-[#76513B]"
                    aria-label="Expand collections submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileCollectionsExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileCollectionsExpanded && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-[#B79A65]/40 ml-3 my-1">
                    {collectionItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-1.5 text-xs rounded transition-colors ${
                            isActive
                              ? 'bg-[#EAE0D0] text-[#76513B] font-semibold'
                              : 'text-[#38271F]/80 hover:bg-[#EAE0D0]/40'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    <Link
                      to="/collections"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-[11px] font-semibold text-[#76513B] hover:underline"
                    >
                      View All 8 Collections →
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Craftsmanship */}
              <NavLink
                to="/craftsmanship"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#EAE0D0] text-[#76513B] font-semibold' : 'text-[#38271F]'
                  }`
                }
              >
                <span>Our Craftsmanship</span>
              </NavLink>

              {/* About Us */}
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#EAE0D0] text-[#76513B] font-semibold' : 'text-[#38271F]'
                  }`
                }
              >
                <span>About Us</span>
              </NavLink>

              {/* Gallery Accordion */}
              <div className="flex flex-col">
                <div
                  className={`flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${
                    isGalleryActive ? 'bg-[#EAE0D0]/80 text-[#76513B] font-semibold' : 'text-[#38271F]'
                  }`}
                >
                  <Link
                    to="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 hover:text-[#76513B]"
                  >
                    Gallery
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileGalleryExpanded(!mobileGalleryExpanded)}
                    className="p-1 text-[#76513B]"
                    aria-label="Expand gallery submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileGalleryExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileGalleryExpanded && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-[#B79A65]/40 ml-3 my-1">
                    {galleryItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-1.5 text-xs rounded transition-colors ${
                            isActive
                              ? 'bg-[#EAE0D0] text-[#76513B] font-semibold'
                              : 'text-[#38271F]/80 hover:bg-[#EAE0D0]/40'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    <Link
                      to="/gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-[11px] font-semibold text-[#76513B] hover:underline"
                    >
                      View All Gallery Images →
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#EAE0D0] text-[#76513B] font-semibold' : 'text-[#38271F]'
                  }`
                }
              >
                <span>Contact</span>
              </NavLink>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-6 border-t border-[#B79A65]/20 space-y-3">
              <a
                href={createWhatsAppUrl(
                  'Assalam-o-Alaikum Rahim Buksh Furniture, I would like to discuss an order inquiry with your factory.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] rounded hover:bg-[#76513B] transition-colors border border-[#B79A65]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#B79A65]" />
                <span>Discuss Your Order</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#38271F] bg-[#EAE0D0] rounded hover:bg-[#EAE0D0]/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#76513B]" />
                <span>Call Factory: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
