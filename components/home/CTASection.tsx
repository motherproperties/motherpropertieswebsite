/**
 * CTASection component - Full-width CTA section with buttons
 */

import React from 'react';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

export function CTASection({ title, subtitle, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <div className="relative overflow-hidden bg-forest-900 text-white py-20 md:py-24 rounded-3xl shadow-2xl">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-800 to-black/40 z-0" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">{title}</h2>
        {subtitle && <p className="text-xl md:text-2xl text-cream-100/90 mb-10 font-light max-w-2xl mx-auto">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button href={primaryButton.href} variant="secondary" size="lg" className="shadow-xl hover:shadow-gold-500/20">
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button href={secondaryButton.href} variant="outline" size="lg" className="border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-forest-900 backdrop-blur-sm">
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
