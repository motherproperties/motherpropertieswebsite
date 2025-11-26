/**
 * Badge component - Small label for tags and categories
 */

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const variantClasses = {
  primary: 'bg-forest-500 text-white',
  secondary: 'bg-gold-500 text-white',
  outline: 'border-2 border-forest-500 text-forest-500 bg-transparent',
};

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
