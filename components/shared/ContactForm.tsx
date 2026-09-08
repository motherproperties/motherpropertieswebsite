/**
 * ContactForm component - Contact form with validation
 */

'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { createSubmissionId, getLeadAttribution } from '@/lib/leadClient';
import { trackConversion } from '@/lib/analytics';

interface ContactFormProps {
  defaultInterest?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
  city: string;
  intent: string;
  budgetRange: string;
  preferredContactMethod: string;
  preferredCallTime: string;
  consent: boolean;
  website: string;
}

const inputBaseClasses = "w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-forest-500 transition-colors outline-none text-gray-900 placeholder-transparent peer";
const labelClasses = "absolute left-4 top-4 text-gray-500 transition-all duration-200 -translate-y-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none bg-transparent";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

export function ContactForm({ defaultInterest = 'general' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interestedIn: defaultInterest,
    message: '',
    city: '',
    intent: '',
    budgetRange: '',
    preferredContactMethod: 'phone',
    preferredCallTime: '',
    consent: false,
    website: '',
  });
  const submissionId = useRef(createSubmissionId());

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
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
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
      if (!['interestedIn', 'city', 'intent', 'budgetRange', 'preferredContactMethod', 'preferredCallTime', 'consent', 'website'].includes(key)) {
        const error = validateField(key, String(formData[key]));
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });
    if (!formData.consent) newErrors.consent = 'Please agree before submitting';

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
        body: JSON.stringify({
          ...formData,
          ...getLeadAttribution(),
          submissionId: submissionId.current,
          formType: 'contact',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors({ message: result.error || 'Failed to send message' });
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      trackConversion('contact_submitted');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestedIn: 'general',
        message: '',
        city: '',
        intent: '',
        budgetRange: '',
        preferredContactMethod: 'phone',
        preferredCallTime: '',
        consent: false,
        website: '',
      });
      submissionId.current = createSubmissionId();

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City / Country
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            maxLength={120}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-forest-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="intent" className="block text-sm font-medium text-gray-700 mb-2">
            Enquiry intent
          </label>
          <select
            id="intent"
            name="intent"
            value={formData.intent}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-forest-500 outline-none"
          >
            <option value="">Select an option</option>
            <option value="weekend_home">Weekend home</option>
            <option value="farmland_ownership">Farmland ownership</option>
            <option value="investment_research">Investment research</option>
            <option value="nri_enquiry">NRI enquiry</option>
            <option value="property_consultancy">Property consultancy</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred contact method
          </label>
          <select
            id="preferredContactMethod"
            name="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-forest-500 outline-none"
          >
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredCallTime" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred contact time
          </label>
          <select
            id="preferredCallTime"
            name="preferredCallTime"
            value={formData.preferredCallTime}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-forest-500 outline-none"
          >
            <option value="">Any time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-2">
          Budget range (optional)
        </label>
        <select
          id="budgetRange"
          name="budgetRange"
          value={formData.budgetRange}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-forest-500 outline-none"
        >
          <option value="">Prefer not to say</option>
          <option value="under_25_lakh">Under ₹25 lakh</option>
          <option value="25_50_lakh">₹25–50 lakh</option>
          <option value="50_lakh_plus">₹50 lakh+</option>
        </select>
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

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contact-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4 accent-forest-500"
        />
        <label htmlFor="contact-consent" className="text-sm text-gray-600">
          I agree that Mother Properties may contact me about this enquiry. Read the{' '}
          <a href="/privacy/" className="underline hover:text-forest-600">privacy policy</a>.
        </label>
      </div>
      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting || !formData.consent}>
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
