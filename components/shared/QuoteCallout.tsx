/**
 * QuoteCallout component - Large inspirational quote with background
 */

import React from 'react';

interface QuoteCalloutProps {
  quote: string;
  backgroundImage?: string;
}

export function QuoteCallout({ quote, backgroundImage }: QuoteCalloutProps) {
  return (
    <div
      className="relative py-20 md:py-32 rounded-2xl overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div
        className={`absolute inset-0 ${
          backgroundImage ? 'bg-gradient-to-br from-forest-900/80 to-coffee-900/80' : 'bg-gradient-to-br from-forest-500 to-coffee-600'
        }`}
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-2xl md:text-4xl font-display font-medium text-white leading-relaxed">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
}
