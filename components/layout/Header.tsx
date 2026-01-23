/**
 * Header component - Consistent navigation across all pages
 */

'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { MobileNav } from './MobileNav';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[51] bg-forest-900/90 backdrop-blur-md border-b border-forest-800 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
            {/* Logo - Scale on hover */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-forest-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300 border border-forest-700">
                <Image
                  src="/images/motherproperties-logo (2).png"
                  alt="Mother Properties Logo"
                  width={56}
                  height={56}
                  priority
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-lg md:text-xl text-white group-hover:text-gold-400 transition-colors">
                  {siteConfig.brand.name}
                </div>
                <div className="text-xs text-cream-100/80 font-medium tracking-wide">{siteConfig.brand.tagline}</div>
              </div>
            </Link>

            {/* Desktop Navigation - Animated Underlines */}
            <nav className="hidden md:flex space-x-8">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-1 py-2 group"
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-gold-400' : 'text-cream-50 group-hover:text-gold-300'
                      }`}>
                      {item.name}
                    </span>
                    {/* Hover Underline Animation */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-400 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button - Glassy */}
            <button
              className="md:hidden p-2.5 rounded-xl text-cream-100 hover:bg-white/10 transition-colors active:scale-95"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}
