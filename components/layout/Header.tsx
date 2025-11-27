/**
 * Header component - Consistent navigation across all pages
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { MobileNav } from './MobileNav';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[51] bg-forest-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-14 h-14 bg-forest-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/motherproperties-logo (2).png"
                  alt="Mother Properties Logo"
                  width={56}
                  height={56}
                  priority
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-lg text-white">
                  {siteConfig.brand.name}
                </div>
                <div className="text-xs text-cream-100 font-medium">{siteConfig.brand.tagline}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold-400 border-b-2 border-gold-400'
                        : 'text-cream-100 hover:text-gold-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-forest-700 transition-colors active:bg-forest-600"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
