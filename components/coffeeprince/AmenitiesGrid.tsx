/**
 * AmenitiesGrid component - Grid display of amenities
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Amenity } from '@/lib/types';

interface AmenitiesGridProps {
  amenities: Amenity[];
  disclaimer?: string;
}

export function AmenitiesGrid({ amenities, disclaimer }: AmenitiesGridProps) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => {
          const IconComponent = amenity.icon
            ? (Icons[amenity.icon as keyof typeof Icons] as React.ElementType)
            : null;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              {IconComponent && (
                <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <IconComponent className="w-5 h-5 text-forest-500" />
                </div>
              )}
              <p className="text-sm font-medium text-gray-900">{amenity.name}</p>
              {amenity.description && (
                <p className="text-xs text-gray-600 mt-1">{amenity.description}</p>
              )}
            </motion.div>
          );
        })}
      </div>

      {disclaimer && (
        <p className="mt-6 text-sm text-gray-500 italic text-center">{disclaimer}</p>
      )}
    </div>
  );
}
