/**
 * AtAGlanceFacts — Horizontal factoid cards for Coffee Prince
 * Shows key project facts at a glance below the hero
 */

import React from 'react';
import {
  MapPin,
  Mountain,
  Ruler,
  Sprout,
  Car,
  FileCheck,
} from 'lucide-react';
import type { AtAGlanceFact } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Mountain,
  Ruler,
  Sprout,
  Car,
  FileCheck,
};

interface AtAGlanceFactsProps {
  facts: AtAGlanceFact[];
}

export function AtAGlanceFacts({ facts }: AtAGlanceFactsProps) {
  return (
    <div className="bg-white border-y border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {facts.map((fact, index) => {
            const Icon = iconMap[fact.icon] || FileCheck;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-cream-50 transition-colors duration-200"
              >
                <Icon className="w-5 h-5 text-forest-500 mb-2" />
                <p className="text-sm font-bold text-gray-900 leading-tight">
                  {fact.value}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{fact.label}</p>
                {fact.disclaimer && (
                  <p className="text-[10px] text-gray-400 mt-0.5 hidden lg:block">
                    {fact.disclaimer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
