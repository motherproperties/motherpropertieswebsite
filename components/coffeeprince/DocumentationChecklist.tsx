/**
 * DocumentationChecklist — Visual step-by-step documentation process
 * Shows the title verification to handover journey
 */

import React from 'react';
import {
  FileCheck,
  FileText,
  Stamp,
  Key,
} from 'lucide-react';
import type { DocumentationStep } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  FileText,
  Stamp,
  Key,
};

interface DocumentationChecklistProps {
  steps: DocumentationStep[];
}

export function DocumentationChecklist({ steps }: DocumentationChecklistProps) {
  return (
    <div>
      <div className="text-center mb-10">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
            Documentation Process
          </h2>
        </Reveal>
        <Reveal width="100%" delay={0.2}>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            A clear, step-by-step process from title verification to handover.
            We recommend independent legal verification at each stage.
          </p>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-forest-100 hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || FileCheck;
              const isLast = index === steps.length - 1;

              return (
                <Reveal key={index} width="100%" delay={index * 0.12}>
                  <div className="flex items-start gap-4 md:gap-6 relative">
                    {/* Step number circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-forest-500 flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      {!isLast && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full h-6 w-0.5 bg-forest-200 md:hidden" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-forest-500 bg-forest-50 px-2.5 py-0.5 rounded-full">
                          Step {step.step}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <p className="text-sm text-gray-500 italic text-center mt-8">
          We facilitate the documentation process through licensed professionals.
          Buyers should conduct their own independent legal verification.
        </p>
      </div>
    </div>
  );
}
