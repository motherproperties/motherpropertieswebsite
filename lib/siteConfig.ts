/**
 * Site-wide configuration for Mother Properties website
 * Edit this file to update brand information, contact details, and SEO settings
 */

export const siteConfig = {
  brand: {
    name: 'Mother Properties',
    tagline: 'Green is the New Gold',
    legalName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || 'Mother Properties',
    registrationNumber: process.env.NEXT_PUBLIC_REGISTRATION_NUMBER || '',
    website: 'www.motherproperties.net',
  },
  contact: {
    email: 'motherpropertiesblr@gmail.com',
    grievanceEmail:
      process.env.NEXT_PUBLIC_GRIEVANCE_EMAIL || 'motherpropertiesblr@gmail.com',
    phones: ['+91 98450 42789', '+91 90350 51133'],
    whatsapp: {
      number: '919845042789',
      defaultMessage:
        'Hi, I would like to know more about Coffee Prince managed farmland near Sakleshpur.',
      catalogueMessage:
        'Hi, I want the Coffee Prince catalogue and a site-visit slot.',
      siteVisitMessage:
        'Hi, I would like to schedule a site visit to Coffee Prince near Sakleshpur.',
    },
    address: {
      line1: '#1831, 1st Floor, 41st Cross, 22nd Main',
      line2: 'Jayanagar 9th Block, Near Jain College',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560 069',
      country: 'India',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/motherpropertiesblr/',
    facebook: 'https://www.facebook.com/motherpropertiesblr',
  },
  seo: {
    defaultTitle:
      'Mother Properties – Managed Farmland Near Bangalore | Coffee Prince Sakleshpur',
    defaultDescription:
      'Mother Properties is a Bangalore-based property consultancy presenting managed coffee farmland project information near Sakleshpur, with document review and site-visit options.',
    ogImage: '/images/hero.jpg',
    keywords:
      'managed farmland near Bangalore, farmland near Sakleshpur, coffee plantation plots, managed coffee estate Karnataka, property consultants Bangalore, farmland for sale Karnataka, Coffee Prince, Mother Properties',
    canonical: 'https://www.motherproperties.net',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Why Mother Properties', href: '/about/' },
    {
      name: 'Projects',
      href: '/projects/',
      children: [{ name: 'Coffee Prince', href: '/projects/coffee-prince/' }],
    },
    { name: 'Managed Farmland', href: '/managed-farmland/' },
    { name: 'Consultancy', href: '/property-consultants-in-bangalore/' },
    { name: 'Insights', href: '/insights/' },
    { name: 'Contact', href: '/contact/' },
  ],
  analytics: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '',
  },
};

/**
 * Generate a WhatsApp deep link URL
 */
export function getWhatsAppLink(message?: string): string {
  const msg = message || siteConfig.contact.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}

/**
 * Generate a tel: link for click-to-call
 */
export function getCallLink(phoneIndex: number = 0): string {
  const phone = siteConfig.contact.phones[phoneIndex] || siteConfig.contact.phones[0];
  return `tel:${phone.replace(/\s/g, '')}`;
}
