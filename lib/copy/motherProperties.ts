/**
 * Mother Properties content module
 * Edit this file to update homepage, about page, and projects page content
 */

import {
  Feature,
  TimelineStep,
  Testimonial,
  FAQItem,
  ProjectSummary,
  HeroSlide,
  DirectorInfo,
} from '../types';

export const homeContent = {
  hero: {
    slides: [
      {
        image: '/images/hero.jpg',
        headline: 'NATURE IS THE NEW LUXURY',
        subheadline: 'Green is the New Gold – Invest in Nature-Led Living',
        primaryCTA: { text: 'Explore Coffee Prince', href: '/coffeeprince' },
        secondaryCTA: { text: 'View All Projects', href: '/projects' },
      },
      {
        image: '/images/lifestyle-nature.jpg',
        headline: 'GREEN IS THE NEW GOLD',
        subheadline: 'Invest in nature-led living and long-term value',
        primaryCTA: { text: 'Explore Coffee Prince', href: '/coffeeprince' },
        secondaryCTA: { text: 'Contact Us', href: '/contact' },
      },
      {
        image: '/images/Coffee-plantation.jpg',
        headline: 'BUILD YOUR LEGACY IN NATURE',
        subheadline: 'Managed farmlands that blend lifestyle with investment',
        primaryCTA: { text: 'Explore Coffee Prince', href: '/coffeeprince' },
        secondaryCTA: { text: 'Learn More', href: '/about' },
      },
    ] as HeroSlide[],
  },
  about: {
    title: 'About Mother Properties',
    summary:
      'Mother Properties brings decades of real estate expertise to create curated managed farmlands that blend natural beauty with long-term value. We focus on trust, transparency, and delivering nature-led living experiences.',
    cta: { text: 'Know More About Us', href: '/about' },
  },
  whyUs: {
    title: 'Why Mother Properties',
    features: [
      {
        icon: 'Leaf',
        title: 'Green is the New Gold – Premium Farmlands',
        description:
          'Carefully selected properties in pristine locations with expert management and sustainable practices.',
      },
      {
        icon: 'Shield',
        title: 'Transparent Processes & Titled Land',
        description:
          'Clear ownership documentation, rigorous due diligence, and complete transparency at every step.',
      },
      {
        icon: 'Sprout',
        title: 'Sustainable, Eco-Friendly Practices',
        description:
          'Environmentally conscious development that preserves natural ecosystems and promotes biodiversity.',
      },
      {
        icon: 'Users',
        title: 'End-to-End Support & Management',
        description:
          'Comprehensive support from site selection to ongoing management, ensuring peace of mind for owners.',
      },
    ] as Feature[],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        title: 'Discover & Consultation',
        description:
          'Explore our projects and discuss your vision with our team. We help you understand the opportunities and benefits.',
      },
      {
        title: 'Site Visit & Experience',
        description:
          'Visit the property, walk the land, and experience the natural beauty firsthand. See what makes each project unique.',
      },
      {
        title: 'Documentation & Ownership',
        description:
          'Complete transparent documentation process with clear title transfer and legal support.',
      },
      {
        title: 'Ongoing Management & Updates',
        description:
          'Enjoy professional management of your farmland with regular updates and the option to visit anytime.',
      },
    ] as TimelineStep[],
  },
  testimonials: [
    {
      name: 'Rajesh Kumar',
      role: 'Investor & Nature Enthusiast',
      quote:
        'The transparency and professionalism of Mother Properties gave me complete confidence. Coffee Prince is not just an investment, it\'s a connection to nature.',
    },
    {
      name: 'Priya Sharma',
      role: 'IT Professional',
      quote:
        'I was looking for a weekend retreat that would also be a good investment. Mother Properties delivered exactly that with their managed farmland concept.',
    },
    {
      name: 'Anand Reddy',
      role: 'Business Owner',
      quote:
        'The clarity of process and the quality of land exceeded my expectations. It\'s wonderful to own a piece of the Western Ghats.',
    },
  ] as Testimonial[],
  faq: [
    {
      question: 'What does Mother Properties do?',
      answer:
        'Mother Properties specializes in curated managed farmlands and nature-centric real estate. We identify premium agricultural land, develop it sustainably, and offer ownership opportunities with professional management.',
    },
    {
      question: 'What is a managed farmland?',
      answer:
        'Managed farmland is a model where you own titled agricultural land while experts handle cultivation, maintenance, and operations. You enjoy the benefits of ownership, potential returns, and a connection to nature without day-to-day responsibilities.',
    },
    {
      question: 'How is ownership structured?',
      answer:
        'All our properties come with clear, titled ownership. You receive proper documentation and legal title to your plot, ensuring complete transparency and security.',
    },
    {
      question: 'Can I visit my farmland?',
      answer:
        'Absolutely! As an owner, you can visit your property anytime. Many of our projects also include amenities and accommodations for comfortable stays.',
    },
    {
      question: 'What makes Mother Properties different?',
      answer:
        'Our focus on trust, transparency, and long-term relationships sets us apart. We conduct rigorous due diligence, provide clear documentation, and offer ongoing support and management.',
    },
    {
      question: 'Are these properties eco-friendly?',
      answer:
        'Yes, sustainability is at the core of our approach. We use eco-friendly practices, preserve natural ecosystems, and promote biodiversity in all our developments.',
    },
  ] as FAQItem[],
  cta: {
    title: 'Ready to experience curated managed farmlands?',
    subtitle: 'Start your journey towards nature-led living',
    primaryButton: { text: 'Plan a Coffee Prince Visit', href: '/coffeeprince#site-visit' },
    secondaryButton: { text: 'Contact Us', href: '/contact' },
  },
};

export const aboutContent = {
  hero: {
    title: 'About Mother Properties',
    subtitle: 'Building nature-led, long-term assets for generations',
  },
  story: {
    paragraphs: [
      'Mother Properties was founded with a vision to create meaningful connections between people and nature through curated farmlands and sustainable real estate. We believe that true wealth lies not just in financial returns, but in the legacy we build for future generations.',
      'With years of experience in real estate and a deep understanding of agricultural land, we identify premium properties in pristine locations. Our approach combines traditional wisdom with modern management practices to create farmlands that are both productive and beautiful.',
      'Our commitment to trust, transparency, and customer-centric service has made us a preferred partner for families, professionals, and investors seeking nature-led living opportunities. Every property we offer undergoes rigorous due diligence, and we provide complete support from acquisition to ongoing management.',
    ],
  },
  director: {
    image: '/images/director-suresh-robert.jpg',
    name: 'Suresh Robert',
    title: 'Founder & Director, Mother Properties',
    message:
      'With over 23 years of experience in real estate and tourism, I founded Mother Properties and Happy Club to help families, professionals, and investors create long-term value through nature-friendly assets. Coffee Prince represents the culmination of this vision—a managed coffee estate that blends secure ownership, natural beauty, and a resort-like lifestyle. Our goal is to provide not just land, but a complete experience that connects people with nature while building lasting wealth.',
    signature: 'Suresh Robert',
  } as DirectorInfo,
  values: [
    {
      icon: 'Shield',
      title: 'Credibility & Due Diligence',
      description:
        'Every property undergoes rigorous verification and legal checks. We ensure clear titles, proper documentation, and complete transparency.',
    },
    {
      icon: 'Sprout',
      title: 'Sustainable Development',
      description:
        'We develop properties with minimal environmental impact, preserving natural ecosystems and promoting biodiversity.',
    },
    {
      icon: 'Heart',
      title: 'Customer-Centric Experience',
      description:
        'Your vision and goals guide our approach. We provide personalized service and ongoing support throughout your ownership journey.',
    },
    {
      icon: 'Handshake',
      title: 'Long-Term Relationships',
      description:
        'We build lasting partnerships with our clients, providing continuous management and support long after the initial purchase.',
    },
  ] as Feature[],
  happyClub: {
    title: 'Happy Club',
    description:
      'An extension of our vision, Happy Club offers eco-tourism experiences, wellness retreats, and community activities in natural settings. It complements our farmland projects by creating opportunities for meaningful experiences in nature.',
  },
};

export const projectsContent = {
  hero: {
    title: 'Our Projects',
    subtitle: 'Green is the New Gold – Sustainable Real Estate Investments',
  },
  projects: [
    {
      slug: 'coffeeprince',
      name: 'Coffee Prince',
      logo: '/images/coffee_prince_logo_gold_transparent_4000.png',
      summary:
        'Managed coffee farmlands in the Sakleshpur region of the Western Ghats. Approximately 35+ acres of curated farmland blending natural beauty with modern living.',
      tags: ['Managed Farmland', 'Coffee Estate Experience', 'Western Ghats'],
      badge: 'Featured',
    },
    {
      slug: 'upcoming-1',
      name: 'Coming Soon',
      summary:
        'New exciting projects in development. Stay tuned for more curated farmland opportunities.',
      tags: ['Upcoming'],
    },
  ] as ProjectSummary[],
  cta: {
    title: 'Don\'t see what you\'re looking for?',
    description: 'Get in touch with our team to discuss your specific requirements and vision.',
    button: { text: 'Talk to Us', href: '/contact' },
  },
};
