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

const inputBaseClasses = "w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-forest-500 transition-colors outline-none text-gray-900 placeholder-transparent peer";
const labelClasses = "absolute left-4 top-4 text-gray-500 transition-all duration-200 -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none bg-transparent";

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
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBaseClasses} ${errors.name ? 'border-red-300 bg-red-50' : ''}`}
        />
        <label htmlFor="name" className={labelClasses}>
          Your Name *
        </label>
        {errors.name && <p className="absolute -bottom-5 left-1 text-xs text-red-500 font-medium">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBaseClasses} ${errors.email ? 'border-red-300 bg-red-50' : ''}`}
        />
        <label htmlFor="email" className={labelClasses}>
          Email Address *
        </label>
        {errors.email && <p className="absolute -bottom-5 left-1 text-xs text-red-500 font-medium">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="relative">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBaseClasses} ${errors.phone ? 'border-red-300 bg-red-50' : ''}`}
        />
        <label htmlFor="phone" className={labelClasses}>
          Phone Number *
        </label>
        {errors.phone && <p className="absolute -bottom-5 left-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
      </div>

      {/* Interested In */}
      <div className="relative">
        <select
          id="interestedIn"
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-forest-500 transition-colors outline-none text-gray-900 appearance-none pt-6 pb-2"
        >
          <option value="general">Mother Properties (General)</option>
          <option value="coffeeprince">Coffee Prince</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="interestedIn" className="absolute left-4 top-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
          Interested In
        </label>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBaseClasses} ${errors.message ? 'border-red-300 bg-red-50' : ''}`}
        />
        <label htmlFor="message" className={labelClasses}>
          How can we help? *
        </label>
        {errors.message && <p className="absolute -bottom-5 left-1 text-xs text-red-500 font-medium">{errors.message}</p>}
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
