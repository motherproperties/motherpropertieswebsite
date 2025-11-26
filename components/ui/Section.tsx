/**
 * Section component - Consistent section wrapper with spacing and background variants
 */

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'green' | 'gradient';
  id?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  cream: 'bg-cream-100',
  green: 'bg-forest-50',
  gradient: 'bg-gradient-to-b from-cream-50 to-white',
};

export function Section({ children, className = '', background = 'white', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
