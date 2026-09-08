/**
 * StickyEnquiryPanel — Persistent CTA bar for Coffee Prince
 * Desktop: Fixed sidebar panel on the right
 * Mobile: Part of the MobileBottomBar (handled separately)
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink, getCallLink, siteConfig } from '@/lib/siteConfig';

export function StickyEnquiryPanel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero area (~500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={getWhatsAppLink(siteConfig.contact.whatsapp.catalogueMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="WhatsApp Mother Properties"
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-0 group-hover:max-w-[200px] overflow-hidden">
          WhatsApp Us
        </span>
      </a>

      {/* Call */}
      <a
        href={getCallLink()}
        className="group flex items-center gap-3 bg-forest-500 hover:bg-forest-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="Call Mother Properties"
      >
        <Phone className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-0 group-hover:max-w-[200px] overflow-hidden">
          Call Now
        </span>
      </a>

      {/* Site Visit */}
      <a
        href="#site-visit"
        className="group flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-forest-900 px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="Book a site visit"
      >
        <Calendar className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-0 group-hover:max-w-[200px] overflow-hidden">
          Book Visit
        </span>
      </a>
    </div>
  );
}
