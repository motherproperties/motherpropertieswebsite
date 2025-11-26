/**
 * DirectorMessage component - Two-column layout for Director's message
 */

import React from 'react';
import Image from 'next/image';
import { DirectorInfo } from '@/lib/types';

interface DirectorMessageProps {
  director: DirectorInfo;
}

export function DirectorMessage({ director }: DirectorMessageProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="order-2 lg:order-1">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-[4/5] bg-gradient-to-br from-forest-200 to-coffee-200 flex items-center justify-center">
            {director.image ? (
              <Image
                src={director.image}
                alt={director.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <span className="text-6xl text-forest-500 font-bold">
                {director.name.split(' ').map((n) => n[0]).join('')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          {director.name}
        </h2>
        <p className="text-lg text-coffee-600 mb-6">{director.title}</p>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">{director.message}</p>
        </div>
        {director.signature && (
          <div className="mt-6">
            <p className="font-display text-2xl text-forest-500">{director.signature}</p>
          </div>
        )}
      </div>
    </div>
  );
}
