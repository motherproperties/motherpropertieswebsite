/**
 * ImageCarousel component - Gallery carousel for Coffee Prince images
 */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/lib/types';

interface ImageCarouselProps {
  images: GalleryImage[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative" role="region" aria-label="Image gallery carousel">
      {/* Main Image */}
      <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Image Info */}
      <div className="mt-4 text-center">
        <p className="text-gray-700">{currentImage.alt}</p>
        {currentImage.creditLabel && (
          <p className="text-sm text-gray-500 mt-1">
            Photo by{' '}
            {currentImage.creditUrl ? (
              <a
                href={currentImage.creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 hover:underline"
              >
                {currentImage.creditLabel}
              </a>
            ) : (
              currentImage.creditLabel
            )}
          </p>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-forest-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
