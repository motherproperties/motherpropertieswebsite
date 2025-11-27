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
      state: 'Karnataka',
      pincode: '560 069',
      country: 'India',
    },
  },
  social: {
    instagram: 'https://instagram.com/motherproperties',
    linkedin: 'https://linkedin.com/company/motherproperties',
    facebook: 'https://facebook.com/motherproperties',
  },
  seo: {
    defaultTitle: 'Mother Properties – Curated Farmlands & Premium Land for Sale in Bangalore',
    defaultDescription:
      'Mother Properties offers premium curated farmlands and nature-led lifestyle properties near Bangalore. Managed farmland investments with Coffee Prince microsite. Best farmlands for sale in Karnataka.',
    ogImage: '/images/hero.jpg',
    keywords: 'farmlands, farmland for sale, managed farmland, real estate, Bangalore, Karnataka, nature living, agricultural land, investment property, Coffee Prince',
    canonical: 'https://www.motherproperties.net',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Coffee Prince', href: '/coffeeprince' },
    { name: 'Contact', href: '/contact' },
  ],
};
