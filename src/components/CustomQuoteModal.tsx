import React, { useState } from 'react';
import { X, MessageCircle, SlidersHorizontal, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../data/furnitureData';

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState('Luxury Bedroom Sets');
  const [timber, setTimber] = useState('Seasoned Sheesham (Rosewood)');
  const [finish, setFinish] = useState('Natural Warm Satin Lacquer');
  const [city, setCity] = useState('Lahore');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Assalam-o-Alaikum Rahim Buksh Furniture,\n\nI would like to request a custom factory quotation:\n• Collection: ${category}\n• Preferred Timber: ${timber}\n• Finish: ${finish}\n• Delivery City / Region: ${city}${
      notes.trim() ? `\n• Custom Notes: ${notes.trim()}` : ''
    }\n\nPlease share available designs, estimated production timeline, and quotation.`;

    const url = createWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#38271F]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#F7F3EB] rounded-xl border border-[#B79A65]/40 shadow-2xl p-6 sm:p-8 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded text-[#38271F] hover:bg-[#EAE0D0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#76513B] uppercase tracking-wider font-semibold mb-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B79A65]" />
            <span>Direct Factory Customizer</span>
          </div>
          <h3 id="modal-title" className="font-serif text-2xl font-bold text-[#38271F]">
            Request a Custom Quote
          </h3>
          <p className="text-xs text-[#38271F]/70 font-light mt-1">
            Specify your requirements to generate a structured inquiry sent straight to our Chiniot workshop on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Furniture Category */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1.5">
              Furniture Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#B79A65]/35 rounded text-[#38271F] focus:outline-none focus:ring-2 focus:ring-[#B79A65]"
            >
              <option value="Luxury Bedroom Sets">Luxury Bedroom Sets</option>
              <option value="Royal Beds & Headboards">Royal Beds &amp; Headboards</option>
              <option value="Luxury Sofa Sets">Luxury Sofa Sets</option>
              <option value="Living Room Furniture & Deewan">Living Room Furniture &amp; Deewan</option>
              <option value="Hand-Carved Chinioti Showpieces">Hand-Carved Chinioti Showpieces</option>
              <option value="Dining Tables & Chairs">Dining Tables &amp; Chairs</option>
              <option value="Traditional Bridal Dressing Tables">Traditional Bridal Dressing Tables</option>
              <option value="Complete Custom Architectural Project">Complete Custom Architectural Project</option>
            </select>
          </div>

          {/* Timber Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1.5">
                Preferred Hardwood
              </label>
              <select
                value={timber}
                onChange={(e) => setTimber(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#B79A65]/35 rounded text-[#38271F] focus:outline-none focus:ring-2 focus:ring-[#B79A65]"
              >
                <option value="Seasoned Sheesham (Rosewood)">Seasoned Sheesham (Rosewood)</option>
                <option value="Pure Burma Teak">Pure Burma Teak</option>
                <option value="Aged Dark Walnut">Aged Dark Walnut</option>
                <option value="Artisan Recommendation">Artisan Recommendation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1.5">
                Finish &amp; Detailing
              </label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#B79A65]/35 rounded text-[#38271F] focus:outline-none focus:ring-2 focus:ring-[#B79A65]"
              >
                <option value="Natural Warm Satin Lacquer">Natural Warm Satin Lacquer</option>
                <option value="Antique Matt Patina">Antique Matt Patina</option>
                <option value="High-Gloss Sheesham Polish">High-Gloss Sheesham Polish</option>
                <option value="With Antique Gold Leaf Gilding">With Antique Gold Leaf Gilding</option>
              </select>
            </div>
          </div>

          {/* Delivery Location */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1.5">
              Delivery City / Destination
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Lahore, Islamabad, Karachi, Multan, Overseas"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#B79A65]/35 rounded text-[#38271F] placeholder:text-[#38271F]/40 focus:outline-none focus:ring-2 focus:ring-[#B79A65]"
              required
            />
          </div>

          {/* Custom Notes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#76513B] mb-1.5">
              Specific Dimensions or Requests (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="e.g. King-size bed (6x6.5 ft), bridal suite package, matching velvet stool, send reference photos..."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#B79A65]/35 rounded text-[#38271F] placeholder:text-[#38271F]/40 focus:outline-none focus:ring-2 focus:ring-[#B79A65] resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#38271F] hover:bg-[#76513B] rounded transition-colors border border-[#B79A65]/40 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A65]"
            >
              <MessageCircle className="w-4 h-4 text-[#B79A65]" />
              <span>Send Inquiry to Factory on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
