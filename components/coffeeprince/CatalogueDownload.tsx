'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';

export function CatalogueDownload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send form data to API
      const response = await fetch('/api/catalogue-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to process request');
      }

      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/images/Coffee_Prince_Catalog_Mother_Properties.pdf';
      link.download = 'Coffee_Prince_Catalogue.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error downloading catalogue. Please try again.');
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
          <p className="text-gray-600">Get detailed information about our project, pricing, and investment opportunities.</p>
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
              disabled={isLoading}
              className="w-full bg-forest-500 hover:bg-forest-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {isLoading ? 'Processing...' : 'Download Catalogue'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Your information will only be used to send you the catalogue and project updates.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
