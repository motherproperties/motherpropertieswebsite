/**
 * HeroCarousel component - Auto-advancing hero carousel with manual controls
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroSlide } from '@/lib/types';

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoAdvanceInterval?: number;
}

export function HeroCarousel({ slides, autoAdvanceInterval = 6500 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance
  useEffect(() => {
    if (!isPaused && slides.length > 1) {
      const interval = setInterval(goToNext, autoAdvanceInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, goToNext, autoAdvanceInterval, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  const slide = slides[currentSlide];

  return (
    <div
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero carousel"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient Overlay - Darker for better text and button visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href={slide.primaryCTA.href} variant="primary" size="lg" className="shadow-lg">
                    {slide.primaryCTA.text}
                  </Button>
                  {slide.secondaryCTA && (
                    <Button href={slide.secondaryCTA.href} variant="outline" size="lg" className="shadow-lg border-2 border-white bg-white/15 hover:bg-white/25 text-white font-semibold">
                      {slide.secondaryCTA.text}
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      )}
    </div>
  );
}
