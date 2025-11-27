/**
 * PhasesSection component - Display project development phases
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phase } from '@/lib/types';

interface PhasesSectionProps {
  phases: Phase[];
}

export function PhasesSection({ phases }: PhasesSectionProps) {
  const getStatusBadgeStyle = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'planning':
        return 'bg-amber-100 text-amber-800 border border-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'completed':
        return '✓ Completed';
      case 'in-progress':
        return '⚙ In Progress';
      case 'planning':
        return '📋 Planning';
      default:
        return 'Upcoming';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {phases.map((phase, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-forest-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                {phase.status && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getStatusBadgeStyle(phase.status)}`}>
                    {getStatusText(phase.status)}
                  </span>
                )}
              </div>
              {phase.subtitle && (
                <p className="text-sm text-coffee-600 font-medium mb-2">{phase.subtitle}</p>
              )}
              <p className="text-gray-600">{phase.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
