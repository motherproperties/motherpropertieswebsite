/**
 * TrustSection — "How We Verify a Project" with expandable steps
 * Displays the 6-step verification process Mother Properties uses
 */

'use client';

import React, { useState } from 'react';
import {
  FileCheck,
  Map,
  Route,
  Droplets,
  Scale,
  ClipboardList,
  ChevronDown,
} from 'lucide-react';
import type { TrustStep } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Map,
  Route,
  Droplets,
  Scale,
  ClipboardList,
};

interface TrustSectionProps {
  title: string;
  subtitle: string;
  steps: TrustStep[];
}

export function TrustSection({ title, subtitle, steps }: TrustSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <div className="text-center mb-12">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </Reveal>
        <Reveal width="100%" delay={0.2}>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            {subtitle}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon] || FileCheck;
          const isExpanded = expandedIndex === index;

          return (
            <Reveal key={index} width="100%" delay={index * 0.08}>
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    {isExpanded && (
                      <p className="text-sm text-gray-500 mt-3 pt-3 border-t border-gray-100 leading-relaxed">
                        {step.details}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
