/**
 * OwnershipComparison — Three-column comparison table
 * "What You Own / What Is Managed / What Is Planned"
 */

import React from 'react';
import { Check, Settings, Clock } from 'lucide-react';
import type { OwnershipComparison as OwnershipComparisonType } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

interface OwnershipComparisonProps {
  data: OwnershipComparisonType;
}

const columns = [
  {
    key: 'whatYouOwn' as const,
    title: 'What You Own',
    subtitle: 'Titled ownership in your name',
    icon: Check,
    colorClass: 'bg-forest-50 border-forest-200',
    iconColor: 'text-forest-600',
    headerBg: 'bg-forest-500',
  },
  {
    key: 'whatIsManaged' as const,
    title: 'What Is Managed',
    subtitle: 'Handled by the farm team',
    icon: Settings,
    colorClass: 'bg-cream-50 border-cream-200',
    iconColor: 'text-coffee-600',
    headerBg: 'bg-coffee-500',
  },
  {
    key: 'whatIsPlanned' as const,
    title: 'What Is Planned',
    subtitle: 'Proposed — subject to progress',
    icon: Clock,
    colorClass: 'bg-gray-50 border-gray-200',
    iconColor: 'text-gray-600',
    headerBg: 'bg-gray-500',
  },
];

export function OwnershipComparison({ data }: OwnershipComparisonProps) {
  return (
    <div>
      <div className="text-center mb-10">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
            Ownership at a Glance
          </h2>
        </Reveal>
        <Reveal width="100%" delay={0.2}>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Clear separation between what you own, what we manage and what is
            planned for the future.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {columns.map((col, colIndex) => {
          const Icon = col.icon;
          const items = data[col.key];

          return (
            <Reveal key={col.key} width="100%" delay={colIndex * 0.15}>
              <div
                className={`rounded-2xl border ${col.colorClass} overflow-hidden h-full`}
              >
                {/* Column header */}
                <div
                  className={`${col.headerBg} px-6 py-4 text-center`}
                >
                  <Icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white">
                    {col.title}
                  </h3>
                  <p className="text-sm text-white/80">{col.subtitle}</p>
                </div>

                {/* Items */}
                <div className="p-6 space-y-4">
                  {items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {item.label}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
