/**
 * MobileNav component - Mobile navigation overlay
 */

'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, getWhatsAppLink, getCallLink } from '@/lib/siteConfig';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when a navigation link is clicked (on route change)
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Only depend on pathname

  // Trap focus and prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first element when opened
      const focusableElements = menuRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Tab key for focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
            ref={menuRef}
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
                <ul className="space-y-2">
                  {siteConfig.navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${isActive
                              ? 'bg-gold-500 text-forest-900'
                              : 'text-cream-100 hover:bg-forest-800'
                            }`}
                        >
                          {item.name}
                        </Link>
                        {/* Render sub-items */}
                        {item.children && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {item.children.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={`block py-2 px-4 rounded-lg text-base transition-colors ${
                                      isChildActive
                                        ? 'bg-gold-400 text-forest-900'
                                        : 'text-cream-100/80 hover:bg-forest-800'
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Quick Actions */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={getCallLink()}
                    className="flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-700 text-white py-3 px-4 rounded-xl font-medium transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call
                  </a>
                </div>
              </div>

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
                  href={getCallLink()}
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
