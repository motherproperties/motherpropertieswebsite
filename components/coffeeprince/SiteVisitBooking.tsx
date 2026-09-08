/**
 * SiteVisitBooking — Site visit request form with date preference
 * Captures visit date, pickup location, number of visitors, and lead data
 */

'use client';

import React, { useRef, useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import { createSubmissionId, getLeadAttribution } from '@/lib/leadClient';
import { trackConversion } from '@/lib/analytics';

interface SiteVisitFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  preferredDate: string;
  alternateDate: string;
  pickupLocation: string;
  numberOfVisitors: string;
  message: string;
  consent: boolean;
  website: string;
}

export function SiteVisitBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const submissionId = useRef(createSubmissionId());
  const [formData, setFormData] = useState<SiteVisitFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    preferredDate: '',
    alternateDate: '',
    pickupLocation: '',
    numberOfVisitors: '1',
    message: '',
    consent: false,
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/site-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...getLeadAttribution(),
          submissionId: submissionId.current,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        trackConversion('site_visit_requested');
      } else {
        setSubmitError(result.error || 'We could not record your request.');
      }
    } catch (error) {
      console.error('Site visit form error:', error);
      setSubmitError('Network error. Please call or WhatsApp us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get min date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div
        id="site-visit-form"
        className="bg-gradient-to-br from-forest-50 to-cream-50 rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
          Visit Request Received!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          This is a request, not a confirmed appointment. Our team will contact
          you by phone or WhatsApp to confirm availability and route guidance.
        </p>
      </div>
    );
  }

  return (
    <div
      id="site-visit-form"
      className="bg-gradient-to-br from-forest-50 to-cream-50 rounded-3xl p-8 md:p-12"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-forest-500" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
              Book a Site Visit
            </h3>
          </div>
          <p className="text-gray-600">
            Visit Coffee Prince, walk the land and meet the team. No obligation. We can
            help with route guidance and pickup arrangements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="site-visit-website">Website</label>
            <input
              id="site-visit-website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sv-name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="sv-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="sv-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                id="sv-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sv-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="sv-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="sv-city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="sv-city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="e.g. Bangalore"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sv-date" className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="inline w-4 h-4 mr-1" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="sv-date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={minDate}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="sv-alt-date" className="block text-sm font-medium text-gray-700 mb-1">
                Alternate Date
              </label>
              <input
                type="date"
                id="sv-alt-date"
                name="alternateDate"
                value={formData.alternateDate}
                onChange={handleChange}
                min={minDate}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sv-pickup" className="block text-sm font-medium text-gray-700 mb-1">
                <MapPin className="inline w-4 h-4 mr-1" />
                Pickup / Starting Point
              </label>
              <input
                type="text"
                id="sv-pickup"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="e.g. Bangalore, self-drive"
              />
            </div>
            <div>
              <label htmlFor="sv-visitors" className="block text-sm font-medium text-gray-700 mb-1">
                <Users className="inline w-4 h-4 mr-1" />
                Number of Visitors
              </label>
              <select
                id="sv-visitors"
                name="numberOfVisitors"
                value={formData.numberOfVisitors}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
              >
                {[1, 2, 3, 4, 5, '6+'].map((n) => (
                  <option key={n} value={String(n)}>
                    {n} {n === 1 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="sv-message" className="block text-sm font-medium text-gray-700 mb-1">
              Questions or preferences
            </label>
            <textarea
              id="sv-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Any specific questions about Coffee Prince?"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              id="sv-consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 accent-forest-500"
            />
            <label htmlFor="sv-consent" className="text-xs text-gray-500">
              I agree to be contacted by Mother Properties regarding this site visit request. View
              our{' '}
              <a href="/privacy" className="underline hover:text-forest-600">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.consent}
            className="w-full bg-forest-500 hover:bg-forest-600 disabled:bg-gray-400 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Request Site Visit'}
          </button>

          {submitError && (
            <p role="alert" className="text-sm text-red-700 text-center">{submitError}</p>
          )}

          <p className="text-xs text-gray-400 text-center">
            Submitting this form requests a slot; it does not confirm a booking.
          </p>
        </form>
      </div>
    </div>
  );
}
