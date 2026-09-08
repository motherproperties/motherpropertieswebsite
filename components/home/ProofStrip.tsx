/**
 * ProofStrip — Horizontal strip of verified project facts
 * Displays key facts with icons below the hero section
 */

import React from 'react';
import {
  Calendar,
  Mountain,
  Car,
  Ruler,
  Sprout,
} from 'lucide-react';
import type { ProofFact } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Mountain,
  Car,
  Ruler,
  Sprout,
};

interface ProofStripProps {
  facts: ProofFact[];
}

export function ProofStrip({ facts }: ProofStripProps) {
  return (
    <div className="bg-forest-900 border-y border-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {facts.map((fact, index) => {
            const Icon = iconMap[fact.icon] || Sprout;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-700/50 flex items-center justify-center mb-2 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <p className="text-white font-semibold text-sm md:text-base leading-tight">
                  {fact.value}
                </p>
                <p className="text-cream-100/70 text-xs mt-0.5">{fact.label}</p>
                {fact.source && (
                  <p className="text-cream-100/40 text-[10px] mt-0.5 hidden md:block">
                    {fact.source}
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
