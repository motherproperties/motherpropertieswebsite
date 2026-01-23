/**
 * HeroCarousel component - Auto-advancing hero carousel with manual controls
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroSlide } from '@/lib/types';
import Image from 'next/image';

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
      className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900"
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
          {/* Background Image with Ken Burns Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                sizes="100vw"
                className="object-cover"
                priority={currentSlide === 0}
                quality={90}
              />
            </motion.div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75 z-10" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 leading-tight drop-shadow-lg"
                >
                  {slide.headline}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="text-xl md:text-3xl text-cream-50 mb-10 font-light max-w-2xl drop-shadow-md"
                >
                  {slide.subheadline}
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Button href={slide.primaryCTA.href} variant="primary" size="lg" className="shadow-xl ring-2 ring-forest-400/50">
                    {slide.primaryCTA.text}
                  </Button>
                  {slide.secondaryCTA && (
                    <Button href={slide.secondaryCTA.href} variant="outline" size="lg" className="shadow-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white text-white">
                      {slide.secondaryCTA.text}
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${index === currentSlide ? 'bg-gold-400 w-12' : 'bg-white/30 w-6 hover:bg-white/50'
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
