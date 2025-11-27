/**
 * MobileNav component - Mobile navigation overlay
 */

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/siteConfig';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Trap focus and prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-forest-900 z-40 md:hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-forest-800">
                <div className="font-display font-bold text-xl text-white">
                  {siteConfig.brand.name}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-forest-800 transition-colors active:bg-forest-700"
                  aria-label="Close menu"
                  type="button"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-4">
                  {siteConfig.navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                            isActive
                              ? 'bg-gold-500 text-white'
                              : 'text-cream-100 hover:bg-forest-800'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-forest-800 bg-forest-800">
                <p className="text-sm text-cream-100 mb-2">Contact Us</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-gold-400 hover:underline block mb-1"
                >
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phones[0]}`}
                  className="text-sm text-gold-400 hover:underline block"
                >
                  {siteConfig.contact.phones[0]}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
