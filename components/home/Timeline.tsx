/**
 * Timeline component - Vertical timeline for process steps
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineStep } from '@/lib/types';

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-forest-200 hidden md:block" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-start"
          >
            {/* Number Circle */}
            <div className="flex-shrink-0 w-12 h-12 bg-forest-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
              {index + 1}
            </div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
