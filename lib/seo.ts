/**
 * SEO utilities and helper functions
 * Helps maintain consistent SEO best practices across the site
 */

export const generateSchemaMarkup = (type: string, data: Record<string, any>) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };
  return { ...baseSchema, ...data };
};

export const createOrganizationSchema = (config: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.brand.name,
    url: 'https://www.motherproperties.net',
    logo: 'https://www.motherproperties.net/images/motherproperties-logo (2).png',
    description: config.seo.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${config.contact.address.line1}, ${config.contact.address.line2}`,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.pincode,
      addressCountry: config.contact.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: config.contact.phones[0],
      email: config.contact.email,
    },
    sameAs: [
      config.social.instagram,
      config.social.linkedin,
      config.social.facebook,
    ],
  };
};

export const createLocalBusinessSchema = (config: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.brand.name,
    image: 'https://www.motherproperties.net/images/hero.jpg',
    description: config.seo.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${config.contact.address.line1}, ${config.contact.address.line2}`,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.pincode,
      addressCountry: config.contact.address.country,
    },
    telephone: config.contact.phones[0],
    url: 'https://www.motherproperties.net',
    priceRange: '₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
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

export const getCanonicalUrl = (path: string = '') => {
  const baseUrl = 'https://www.motherproperties.net';
  return `${baseUrl}${path}`;
};
