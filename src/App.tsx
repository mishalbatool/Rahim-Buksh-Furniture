/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomQuoteModal } from './components/CustomQuoteModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionCategoryPage } from './pages/CollectionCategoryPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { GalleryCategoryPage } from './pages/GalleryCategoryPage';
import { ContactPage } from './pages/ContactPage';

// Component to handle dynamic page titles per route
function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Rahim Buksh Chinioti Furniture – Direct Factory & Manufacturer',
      '/collections': 'Furniture Collections | Rahim Buksh Chinioti Furniture',
      '/collections/bedroom': 'Bedroom Collections | Rahim Buksh Chinioti Furniture',
      '/collections/living-room': 'Living Room Collections | Rahim Buksh Chinioti Furniture',
      '/collections/dining': 'Dining Collections | Rahim Buksh Chinioti Furniture',
      '/collections/hand-carved-bespoke': 'Hand-Carved & Bespoke Furniture | Rahim Buksh Chinioti Furniture',
      '/craftsmanship': 'Our Craftsmanship | Rahim Buksh Chinioti Furniture',
      '/about': 'About Us | Rahim Buksh Chinioti Furniture',
      '/gallery': 'Featured Gallery | Rahim Buksh Chinioti Furniture',
      '/gallery/beds-bedroom': 'Beds & Bedroom Gallery | Rahim Buksh Chinioti Furniture',
      '/gallery/royal-sofas-deewan': 'Royal Sofas & Deewan Gallery | Rahim Buksh Chinioti Furniture',
      '/gallery/dining-consoles': 'Dining & Consoles Gallery | Rahim Buksh Chinioti Furniture',
      '/gallery/woodwork-details': 'Woodwork Details Gallery | Rahim Buksh Chinioti Furniture',
      '/contact': 'Contact & Factory Location | Rahim Buksh Chinioti Furniture',
    };

    document.title =
      titles[location.pathname] || 'Rahim Buksh Chinioti Furniture – Direct Factory & Manufacturer';
  }, [location.pathname]);

  return null;
}

function MainLayout() {
  const [customQuoteOpen, setCustomQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB] text-[#38271F] font-sans selection:bg-[#B79A65]/30 selection:text-[#38271F]">
      <ScrollToTop />
      <TitleManager />

      {/* Shared Header with Dropdowns across all pages */}
      <Navbar onOpenCustomQuote={() => setCustomQuoteOpen(true)} />

      {/* Page Content Routed Separately */}
      <main className="flex-1">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage onOpenCustomQuote={() => setCustomQuoteOpen(true)} />} />
          <Route
            path="/collections"
            element={<CollectionsPage onOpenCustomQuote={() => setCustomQuoteOpen(true)} />}
          />
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Collections Dropdown Subpages */}
          <Route
            path="/collections/bedroom"
            element={<CollectionCategoryPage forcedSlug="bedroom" onOpenCustomQuote={() => setCustomQuoteOpen(true)} />}
          />
          <Route
            path="/collections/living-room"
            element={<CollectionCategoryPage forcedSlug="living-room" onOpenCustomQuote={() => setCustomQuoteOpen(true)} />}
          />
          <Route
            path="/collections/dining"
            element={<CollectionCategoryPage forcedSlug="dining" onOpenCustomQuote={() => setCustomQuoteOpen(true)} />}
          />
          <Route
            path="/collections/hand-carved-bespoke"
            element={<CollectionCategoryPage forcedSlug="hand-carved-bespoke" onOpenCustomQuote={() => setCustomQuoteOpen(true)} />}
          />

          {/* Gallery Dropdown Subpages */}
          <Route
            path="/gallery/beds-bedroom"
            element={<GalleryCategoryPage forcedSlug="beds-bedroom" />}
          />
          <Route
            path="/gallery/royal-sofas-deewan"
            element={<GalleryCategoryPage forcedSlug="royal-sofas-deewan" />}
          />
          <Route
            path="/gallery/dining-consoles"
            element={<GalleryCategoryPage forcedSlug="dining-consoles" />}
          />
          <Route
            path="/gallery/woodwork-details"
            element={<GalleryCategoryPage forcedSlug="woodwork-details" />}
          />

          {/* Catch-all fallback route */}
          <Route path="*" element={<HomePage onOpenCustomQuote={() => setCustomQuoteOpen(true)} />} />
        </Routes>
      </main>

      {/* Shared Footer across all pages */}
      <Footer />

      {/* Shared Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Shared Bespoke Inquiry Modal */}
      <CustomQuoteModal
        isOpen={customQuoteOpen}
        onClose={() => setCustomQuoteOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
