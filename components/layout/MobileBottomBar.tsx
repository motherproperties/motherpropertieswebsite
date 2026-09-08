/**
 * MobileBottomBar — Persistent bottom action bar on mobile
 * Three thumb-reachable actions: WhatsApp, Call, Site Visit
 * Visible on all pages, hides when footer is in view
 */

'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { getWhatsAppLink, getCallLink, siteConfig } from '@/lib/siteConfig';

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide when footer is in view to avoid overlap
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-bottom">
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        {/* WhatsApp */}
        <a
          href={getWhatsAppLink(siteConfig.contact.whatsapp.defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-2 hover:bg-green-50 transition-colors active:bg-green-100"
          aria-label="WhatsApp Mother Properties"
        >
          <MessageCircle className="w-5 h-5 text-green-600 mb-0.5" />
          <span className="text-[11px] font-medium text-green-700">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={getCallLink()}
          className="flex flex-col items-center justify-center py-2.5 px-2 hover:bg-forest-50 transition-colors active:bg-forest-100"
          aria-label="Call Mother Properties"
        >
          <Phone className="w-5 h-5 text-forest-600 mb-0.5" />
          <span className="text-[11px] font-medium text-forest-700">Call</span>
        </a>

        {/* Site Visit */}
        <a
          href="/site-visit/"
          className="flex flex-col items-center justify-center py-2.5 px-2 hover:bg-gold-50 transition-colors active:bg-gold-100"
          aria-label="Book a site visit"
        >
          <Calendar className="w-5 h-5 text-gold-600 mb-0.5" />
          <span className="text-[11px] font-medium text-gold-700">Site Visit</span>
        </a>
      </div>
    </div>
  );
}
