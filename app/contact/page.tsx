/**
 * Contact page - Contact form and information
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Mother Properties – Farmland Inquiries & Support',
  description: 'Contact Mother Properties for inquiries about premium farmland investments, Coffee Prince project, and real estate opportunities. Reach out to our Bangalore office.',
  keywords: 'contact Mother Properties, farmland inquiry, real estate contact, Bangalore office, customer support',
  openGraph: {
    title: 'Contact Mother Properties',
    description: 'Get in touch with Mother Properties for farmland investment inquiries and project information.',
    images: ['/images/hero.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's talk about your next piece of land"
        subtitle="We're here to answer your questions and help you find the perfect farmland opportunity"
      />

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-forest-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-forest-600 hover:text-forest-700"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-forest-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-forest-600 hover:text-forest-700"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-forest-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                  <address className="text-gray-600 not-italic">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.city} – {siteConfig.contact.address.pincode}
                  </address>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-cream-50 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
              <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
