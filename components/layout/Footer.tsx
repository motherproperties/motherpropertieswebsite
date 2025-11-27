/**
 * Footer component - Site-wide footer with contact info and links
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-forest-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/motherproperties-logo (2).png"
                  alt="Mother Properties Logo"
                  width={64}
                  height={64}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-xl">{siteConfig.brand.name}</div>
                <div className="text-sm text-gray-300">{siteConfig.brand.tagline}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 max-w-md">
              Green is the New Gold – Invest in sustainable farmlands and nature-led real estate that creates meaningful environmental impact.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.contact.phones.map((phone) => (
                <li key={phone} className="flex items-start space-x-2">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <a
                    href={`tel:${phone}`}
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <address className="text-gray-300 text-sm not-italic">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city} – {siteConfig.contact.address.pincode}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.brand.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">{siteConfig.brand.website}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
