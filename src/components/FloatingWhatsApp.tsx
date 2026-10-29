import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl, BUSINESS_INFO } from '../data/furnitureData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultUrl = createWhatsAppUrl(
    'Assalam-o-Alaikum Rahim Buksh Furniture, I am interested in discussing your handcrafted Chinioti furniture.'
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 flex items-center gap-2 group">
      {/* Tooltip on Desktop hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#38271F] text-white text-xs font-medium rounded-full shadow-lg border border-[#B79A65]/40 transition-all duration-200 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>Chat with Factory Outlet</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-106 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/50"
        aria-label="Direct WhatsApp Chat with Rahim Buksh Furniture"
      >
        <MessageCircle className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current" />
      </a>
    </div>
  );
};
