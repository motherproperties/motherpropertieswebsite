/**
 * FeatureGrid component - Responsive grid layout for feature cards
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Feature } from '@/lib/types';

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => {
        const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ElementType;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gold-200 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-forest-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />

            <div className="w-14 h-14 bg-forest-50 group-hover:bg-forest-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 relative z-10">
              {IconComponent && <IconComponent className="w-7 h-7 text-forest-600 group-hover:text-white transition-colors duration-300" />}
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-forest-700 transition-colors">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
