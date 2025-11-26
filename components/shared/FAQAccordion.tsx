/**
 * FAQAccordion component - Expandable FAQ list
 */

'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '@/lib/types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
              role="button"
            >
              <span className="text-lg font-semibold text-gray-900 pr-4">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-forest-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
