/**
 * Site-wide configuration for Mother Properties website
 * Edit this file to update brand information, contact details, and SEO settings
 */

export const siteConfig = {
  brand: {
    name: 'Mother Properties',
    tagline: 'Curated Farmlands & Nature-Led Living',
    website: 'www.motherproperties.net',
  },
  contact: {
    email: 'motherpropertiesblr@gmail.com',
    phones: ['+91 98450 42789', '+91 90350 51133'],
    address: {
      line1: '#1831, 1st Floor, 41st Cross, 22nd Main',
      line2: 'Jayanagar 9th Block, Near Jain College',
      city: 'Bangalore',
      pincode: '560 069',
    },
  },
  social: {
    instagram: 'https://instagram.com/motherproperties',
    linkedin: 'https://linkedin.com/company/motherproperties',
  },
  seo: {
    defaultTitle: 'Mother Properties – Curated Farmlands & Nature-Led Living',
    defaultDescription:
      'Mother Properties is a trusted brand creating curated managed farmlands and lifestyle-driven real estate in harmony with nature.',
    ogImage: '/og-motherproperties.png',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Coffee Prince', href: '/coffeeprince' },
    { name: 'Contact', href: '/contact' },
  ],
};
