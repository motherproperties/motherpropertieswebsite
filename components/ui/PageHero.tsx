/**
 * PageHero component - Page title section with optional subtitle and background
 */

import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <div className={`relative py-20 md:py-32 overflow-hidden ${!backgroundImage ? 'bg-gradient-to-br from-forest-500 to-coffee-600' : ''}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
