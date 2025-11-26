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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
              {IconComponent && <IconComponent className="w-6 h-6 text-forest-500" />}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
