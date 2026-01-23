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
  white: 'bg-white relative overflow-hidden',
  cream: 'bg-cream-50 relative overflow-hidden', // Changed to lighter cream
  green: 'bg-forest-900 text-white relative overflow-hidden', // Deepened to forest-900 for luxury contrast
  gradient: 'bg-gradient-to-br from-cream-50 via-white to-cream-100 relative overflow-hidden',
};

export function Section({ children, className = '', background = 'white', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${backgroundClasses[background]} ${className}`}>
      {/* Decorative Elements for Specific Backgrounds */}
      {background === 'cream' && (
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      )}
      {background === 'green' && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-700 to-transparent"></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
