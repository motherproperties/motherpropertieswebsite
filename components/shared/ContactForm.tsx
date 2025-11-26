/**
 * ContactForm component - Contact form with validation
 */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface ContactFormProps {
  defaultInterest?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm({ defaultInterest = 'general' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interestedIn: defaultInterest,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your name';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Please enter your email address';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        if (!value.trim()) return 'Please enter your phone number';
        if (!/^[\d\s+()-]{10,}$/.test(value)) return 'Please enter a valid phone number';
        break;
      case 'message':
        if (!value.trim()) return 'Please enter a message';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (key !== 'interestedIn') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors({ message: result.error || 'Failed to send message' });
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestedIn: 'general',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ message: 'Network error. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* Interested In */}
      <div>
        <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-2">
          Interested In
        </label>
        <select
          id="interestedIn"
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
        >
          <option value="general">Mother Properties (General)</option>
          <option value="coffeeprince">Coffee Prince</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Success Message */}
      {submitSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Thank you for your message! Our team will get in touch with you shortly.
          </p>
        </div>
      )}
    </form>
  );
}
