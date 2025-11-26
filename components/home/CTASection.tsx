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
    <div className="bg-gradient-to-br from-forest-500 to-coffee-600 text-white py-16 md:py-20 rounded-2xl">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-white/90 mb-8">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryButton.href} variant="secondary" size="lg">
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button href={secondaryButton.href} variant="outline" size="lg">
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
