/**
 * SEO utilities and helper functions
 * Helps maintain consistent SEO best practices across the site
 */

import { siteConfig } from './siteConfig';
import type { FAQItem } from './types';

// ─── Schema Generators ──────────────────────────────────────────────────────

export const generateSchemaMarkup = (type: string, data: Record<string, unknown>) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };
  return { ...baseSchema, ...data };
};

export const createOrganizationSchema = (): Record<string, unknown> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brand.name,
    url: 'https://www.motherproperties.net',
    logo: 'https://www.motherproperties.net/images/motherproperties-logo (2).png',
    description: siteConfig.seo.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: siteConfig.contact.phones[0],
      email: siteConfig.contact.email,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  };
};

export const createRealEstateAgentSchema = (): Record<string, unknown> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.motherproperties.net',
    name: siteConfig.brand.name,
    description: siteConfig.seo.defaultDescription,
    url: 'https://www.motherproperties.net',
    telephone: siteConfig.contact.phones[0],
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    image: siteConfig.seo.ogImage,
  };
};

export const createLocalBusinessSchema = (): Record<string, unknown> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.brand.name,
    image: 'https://www.motherproperties.net/images/hero.jpg',
    description: siteConfig.seo.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.country,
    },
    telephone: siteConfig.contact.phones[0],
    url: 'https://www.motherproperties.net',
    priceRange: '₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  };
};

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate FAQPage structured data from FAQ items.
 * Only use for pages where the FAQ reflects genuine page content.
 */
export const createFAQPageSchema = (items: FAQItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

export const createArticleSchema = ({
  title,
  description,
  path,
  reviewedDate,
}: {
  title: string;
  description: string;
  path: string;
  reviewedDate: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  dateModified: new Date(reviewedDate).toISOString(),
  mainEntityOfPage: `https://www.motherproperties.net${path}`,
  author: { '@type': 'Organization', name: siteConfig.brand.name },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.brand.name,
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.motherproperties.net/images/motherproperties-logo (2).png',
    },
  },
});

export const getCanonicalUrl = (path: string = '') => {
  const baseUrl = 'https://www.motherproperties.net';
  return `${baseUrl}${path}`;
};
