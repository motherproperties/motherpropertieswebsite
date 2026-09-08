/**
 * LeadMagnetSection — Buyer guide offer with progressive profiling form
 * "Buying Managed Farmland Near Bangalore: 12 Due-Diligence Checks"
 */

'use client';

import React, { useRef, useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { createSubmissionId, getLeadAttribution } from '@/lib/leadClient';
import { trackConversion } from '@/lib/analytics';

interface LeadMagnetFormData {
  name: string;
  phone: string;
  email: string;
  intent: string;
  preferredCallTime: string;
  consent: boolean;
  website: string;
}

export function LeadMagnetSection() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const submissionId = useRef(createSubmissionId());
  const [formData, setFormData] = useState<LeadMagnetFormData>({
    name: '',
    phone: '',
    email: '',
    intent: '',
    preferredCallTime: '',
    consent: false,
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...getLeadAttribution(),
          submissionId: submissionId.current,
          interestedIn: 'buyer_guide',
          formType: 'lead_magnet',
          message: `Requested: Buyer Guide — 12 Due-Diligence Checks. Intent: ${formData.intent}. Preferred call time: ${formData.preferredCallTime}`,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setEmailSent(Boolean(result.emailSent));
        setIsSubmitted(true);
        trackConversion('buyer_guide_requested');
      } else {
        setSubmitError(result.error || 'We could not record your request.');
      }
    } catch (error) {
      console.error('Lead magnet form error:', error);
      setSubmitError('Network error. Please call or WhatsApp us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-forest-50 via-cream-50 to-forest-50 rounded-3xl p-8 md:p-12 border border-forest-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-forest-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
            Free Buyer Guide
          </h3>
          <p className="text-xl text-forest-700 font-medium mb-2">
            Buying Managed Farmland Near Bangalore
          </p>
          <p className="text-gray-600">
            12 due-diligence checks to complete before you pay — plus the Coffee
            Prince project catalogue.
          </p>
        </div>

        {/* Checklist preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 max-w-xl mx-auto">
          {[
            'Title & ownership verification',
            'Encumbrance certificate check',
            'Survey & boundary confirmation',
            'Land-use classification',
            'Access road assessment',
            'Water source verification',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm text-gray-500 italic">
            <span className="w-4" />+ 6 more checks in the guide
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Your guide is ready
            </h4>
            <p className="text-gray-600">
              {emailSent
                ? 'We also emailed these links to you.'
                : 'Your request is recorded. Use the links below to access the resources now.'}
            </p>
            <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
              <Button href="/buyer-guide/" variant="primary" size="md">
                Read the Buyer Guide
              </Button>
              <Button
                href="/images/Coffee_Prince_Catalog_Mother_Properties.pdf"
                variant="outline"
                size="md"
              >
                Download Catalogue
              </Button>
            </div>
          </div>
        ) : !showForm ? (
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="shadow-xl"
              onClick={() => setShowForm(true)}
            >
              Get the Free Guide + Catalogue
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="guide-website">Website</label>
              <input
                id="guide-website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <select
                name="intent"
                value={formData.intent}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition text-gray-700"
              >
                <option value="">What are you looking for?</option>
                <option value="weekend_home">Weekend home / getaway</option>
                <option value="farmland_ownership">Farmland ownership</option>
                <option value="investment_research">Researching options</option>
                <option value="nri_enquiry">NRI enquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <select
                name="preferredCallTime"
                value={formData.preferredCallTime}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition text-gray-700"
              >
                <option value="">Preferred call time</option>
                <option value="morning">Morning (10am–12pm)</option>
                <option value="afternoon">Afternoon (12pm–4pm)</option>
                <option value="evening">Evening (4pm–7pm)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                id="lead-magnet-consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 accent-forest-500"
              />
              <label
                htmlFor="lead-magnet-consent"
                className="text-xs text-gray-500"
              >
                I agree to receive the buyer guide, project catalogue and
                related communication from Mother Properties. View our{' '}
                <a
                  href="/privacy"
                  className="underline hover:text-forest-600"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="w-full bg-forest-500 hover:bg-forest-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Me the Guide'}
            </button>
            {submitError && (
              <p role="alert" className="text-sm text-red-700 text-center">{submitError}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
