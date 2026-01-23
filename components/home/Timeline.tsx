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
      {/* Vertical Line with Gradient */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-400 via-gold-400 to-forest-400 hidden md:block rounded-full opacity-50" />

      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative flex items-start group"
          >
            {/* Number Circle with Pulse Effect */}
            <div className="flex-shrink-0 relative z-10">
              <div className="absolute inset-0 bg-gold-400 rounded-full opacity-0 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />
              <div className="w-12 h-12 bg-forest-900 text-gold-400 border-2 border-gold-400 rounded-full flex items-center justify-center font-display font-bold text-xl shadow-lg group-hover:bg-gold-400 group-hover:text-forest-900 transition-colors duration-300">
                {index + 1}
              </div>
            </div>

            {/* Content Card */}
            <div className="ml-8 flex-1 p-6 bg-white rounded-2xl border border-gray-100 shadow-md group-hover:shadow-xl group-hover:border-gold-200 transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-forest-700 transition-colors">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
