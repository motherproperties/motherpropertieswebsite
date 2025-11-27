/**
 * Site-wide configuration for Mother Properties website
 * Edit this file to update brand information, contact details, and SEO settings
 */

export const siteConfig = {
  brand: {
    name: 'Mother Properties',
    tagline: 'Green is the New Gold',
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
    instagram: 'https://www.instagram.com/motherpropertiesblr/',
    facebook: 'https://www.facebook.com/motherpropertiesblr',
  },
  seo: {
    defaultTitle: 'Mother Properties – Green is the New Gold',
    defaultDescription:
      'Mother Properties offers premium farmlands and nature-led lifestyle properties near Bangalore. Green is the New Gold - invest in sustainable real estate with managed farmlands. Coffee Prince microsite.',
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
