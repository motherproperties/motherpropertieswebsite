'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import { createSubmissionId, getLeadAttribution } from '@/lib/leadClient';
import { trackConversion } from '@/lib/analytics';

export function CatalogueDownload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false,
    website: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const submissionId = useRef(createSubmissionId());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsLoading(true);
    setSubmitError('');

    try {
      // Send form data to API
      const response = await fetch('/api/catalogue-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...getLeadAttribution(),
          submissionId: submissionId.current,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to process request');

      // Trigger PDF download
      const link = document.createElement('a');
      link.href = result.catalogueUrl;
      link.download = 'Coffee_Prince_Catalogue.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      setIsSubmitted(true);
      trackConversion('catalogue_downloaded');

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', consent: false, website: '' });
        submissionId.current = createSubmissionId();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Error downloading catalogue.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-forest-50 to-cream-50 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
            Download Coffee Prince Catalogue
          </h3>
          <p className="text-gray-600">Review the published project overview, concept and contact details. Confirm current facts and availability with our team.</p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Download Starting!</h4>
            <p className="text-gray-600">Thank you! The catalogue is being downloaded to your device.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="catalogue-website">Website</label>
              <input
                id="catalogue-website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="Your full name"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="catalogue-consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 accent-forest-500"
              />
              <label htmlFor="catalogue-consent" className="text-xs text-gray-600">
                I agree to receive the catalogue and related project communication.
                Read the <a href="/privacy/" className="underline">privacy policy</a>.
              </label>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.consent}
              className="w-full bg-forest-500 hover:bg-forest-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {isLoading ? 'Processing...' : 'Download Catalogue'}
            </button>

            {submitError && (
              <p role="alert" className="text-sm text-red-700 text-center">{submitError}</p>
            )}

            <p className="text-xs text-gray-500 text-center">
              Your request is recorded before the download begins.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
