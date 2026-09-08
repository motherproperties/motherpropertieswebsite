/**
 * Mother Properties content module
 * Edit this file to update homepage, about page, and projects page content
 */

import {
  Feature,
  TimelineStep,
  FAQItem,
  ProjectSummary,
  HeroSlide,
  DirectorInfo,
  ProofFact,
  TrustStep,
} from '../types';

// ─── Homepage Content ────────────────────────────────────────────────────────

export const homeContent = {
  hero: {
    slides: [
      {
        image: '/images/Coffee-plantation.jpg',
        headline: 'Explore Managed Coffee Farmland Near Sakleshpur',
        subheadline:
          'Review the proposed ownership, plantation management and nature-led experience with a Bangalore-based property team. Verify current documents before purchase.',
        primaryCTA: { text: 'Book a Coffee Prince Site Visit', href: '/site-visit/' },
        secondaryCTA: { text: 'Get the Project Catalogue', href: '/projects/coffee-prince/#catalogue' },
      },
      {
        image: '/images/hero.jpg',
        headline: 'Professionally Managed Farmland in the Western Ghats',
        subheadline:
          'A published coffee, pepper and arecanut management plan with ownership documents available for independent review.',
        primaryCTA: { text: 'Explore Coffee Prince', href: '/projects/coffee-prince/' },
        secondaryCTA: { text: 'Contact Us', href: '/contact' },
      },
      {
        image: '/images/lifestyle-nature.jpg',
        headline: 'From Bangalore to Your Own Coffee Estate',
        subheadline:
          'Indicatively about 4 hours from Bangalore. Request current route guidance and an available visit slot.',
        primaryCTA: { text: 'Plan a Site Visit', href: '/site-visit/' },
        secondaryCTA: { text: 'Learn About Us', href: '/about' },
      },
    ] as HeroSlide[],
  },

  proofStrip: {
    facts: [
      {
        icon: 'Mountain',
        label: 'Project Area',
        value: 'Approx. 35 Acres',
        source: 'Published project material; request current records',
      },
      {
        icon: 'Car',
        label: 'From Bangalore',
        value: '~4 Hour Drive',
        source: 'Indicative only; traffic and starting point vary',
      },
      {
        icon: 'Ruler',
        label: 'Plot Sizes From',
        value: '~6,000 sq.ft.',
        source: 'Subject to current availability',
      },
      {
        icon: 'Sprout',
        label: 'Crop Model',
        value: 'Coffee + Pepper + Arecanut',
        source: 'Published crop plan; confirm current status',
      },
    ] as ProofFact[],
  },

  trustSteps: {
    title: 'A Practical Project Review Framework',
    subtitle:
      'The checks buyers should expect to see explained and independently verify.',
    steps: [
      {
        icon: 'FileCheck',
        title: 'Ownership & Title Review',
        description: 'Review title documents, encumbrances and ownership history.',
        details:
          'We examine title deeds, encumbrance certificates, tax receipts and ownership history. We recommend buyers also conduct their own independent legal verification.',
      },
      {
        icon: 'Map',
        title: 'Survey & Boundary Review',
        description: 'Match property boundaries with survey records.',
        details:
          'Survey numbers, dimensions and boundary markers should be reconciled with government records and on-ground measurements.',
      },
      {
        icon: 'Route',
        title: 'Access Review',
        description: 'Review legal and practical access to the property.',
        details:
          'We verify the accessibility of the property including road conditions, distance from highways and availability of approach roads throughout the year.',
      },
      {
        icon: 'Droplets',
        title: 'Water & Power Review',
        description: 'Review evidence for water and power infrastructure.',
        details:
          'Availability of borewells, natural water sources, rainfall data and electricity connections are assessed to ensure the land is viable for farming.',
      },
      {
        icon: 'Scale',
        title: 'Land-Use & Regulatory Review',
        description: 'Review zoning, land-use and regulatory requirements.',
        details:
          'Agricultural land classification, conversion status, local panchayat regulations and any applicable restrictions are reviewed. We do not provide legal advice; buyers should consult their own legal counsel.',
      },
      {
        icon: 'ClipboardList',
        title: 'Buyer Documentation Support',
        description: 'Understand documentation and registration responsibilities.',
        details:
          'We assist with sale deed preparation, registration coordination and post-purchase documentation. All legal formalities are handled through licensed professionals.',
      },
    ] as TrustStep[],
  },

  about: {
    title: 'About Mother Properties',
    summary:
      'Mother Properties is a Bangalore-based property consultancy offering carefully evaluated, professionally managed farmland opportunities in Karnataka. Our focus is on trust, transparent documentation and nature-led ownership experiences.',
    cta: { text: 'Why Mother Properties', href: '/about' },
  },

  whyUs: {
    title: 'Why Mother Properties',
    features: [
      {
        icon: 'Leaf',
        title: 'Carefully Evaluated Farmlands',
        description:
          'Properties in the Western Ghats region selected through our structured evaluation process covering title, access, water and land-use.',
      },
      {
        icon: 'Shield',
        title: 'Transparent Documentation',
        description:
          'Clear ownership documentation with a defined process. We recommend independent legal verification for all buyers.',
      },
      {
        icon: 'Sprout',
        title: 'Professional Farm Management',
        description:
          'Coffee, pepper and arecanut cultivation managed by experienced farm teams with regular updates to owners.',
      },
      {
        icon: 'Users',
        title: 'End-to-End Support',
        description:
          'From site visits and documentation to ongoing management — our team supports owners throughout their journey.',
      },
    ] as Feature[],
  },

  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        title: 'Explore & Consult',
        description:
          'Browse our projects, speak with our team and understand the ownership model, costs and documentation process.',
      },
      {
        title: 'Visit the Property',
        description:
          'Schedule a guided site visit to see the land, meet the farm team and experience the Western Ghats location firsthand.',
      },
      {
        title: 'Documentation & Ownership',
        description:
          'Review the documents with independent counsel and complete registration if the transaction proceeds.',
      },
      {
        title: 'Ongoing Management & Updates',
        description:
          'The proposed farm-management scope covers cultivation and owner updates. Visits are arranged in advance and subject to site access.',
      },
    ] as TimelineStep[],
  },

  // Testimonials removed — PRD §6: replace with approved customer stories
  // or leave empty until consent-based testimonials are collected.

  faq: [
    {
      question: 'What does Mother Properties do?',
      answer:
        'Mother Properties is a Bangalore-based property consultancy that identifies and manages farmland projects in Karnataka. We evaluate land for clear ownership, access and viability, then offer titled plots with professional farm management.',
    },
    {
      question: 'What is managed farmland?',
      answer:
        'Managed farmland is a model where you own titled agricultural land while experienced farm managers handle cultivation, maintenance and operations. You hold full ownership of your plot and receive regular updates on farm activities.',
    },
    {
      question: 'How is ownership structured?',
      answer:
        'The proposed transaction uses a registered sale-deed model. Buyers must confirm eligibility, title, encumbrances and registration requirements with independent legal counsel.',
    },
    {
      question: 'Can I visit my farmland?',
      answer:
        'Owner and prospective-buyer visits are subject to access conditions, estate rules and scheduling. Contact the team before travelling.',
    },
    {
      question: 'Where is Coffee Prince located?',
      answer:
        'Coffee Prince is located in the Sakleshpur region of the Western Ghats in Karnataka, approximately a 4-hour drive from Bangalore via NH75.',
    },
    {
      question: 'What crops are cultivated?',
      answer:
        'The current farming model includes coffee as the primary crop, pepper as an intercrop and arecanut as a long-term cultivation. The crop mix is managed by our farm team for sustainable productivity.',
    },
  ] as FAQItem[],

  cta: {
    title: 'Ready to see Coffee Prince in person?',
    subtitle:
      'Book a guided site visit, download the catalogue or speak to our team.',
    primaryButton: {
      text: 'Book a Site Visit',
      href: '/site-visit/',
    },
    secondaryButton: { text: 'Get the Catalogue', href: '/projects/coffee-prince/#catalogue' },
  },

  projectCard: {
    slug: 'projects/coffee-prince',
    name: 'Coffee Prince',
    logo: '/images/coffee_prince_logo_gold_transparent_4000.png',
    summary:
      'Project material describes a managed coffee-farmland opportunity in the Sakleshpur region. Request current parcel, ownership and management documents.',
    tags: ['Managed Farmland', 'Document Review', 'Western Ghats'],
    badge: 'Featured',
    location: 'Sakleshpur, Karnataka',
    cropModel: 'Coffee + Pepper + Arecanut',
    plotSizes: 'From ~6,000 sq.ft.',
    projectStatus: 'Enquiries open — confirm current inventory',
  },
};

// ─── About Page Content ──────────────────────────────────────────────────────

export const aboutContent = {
  hero: {
    title: 'Why Mother Properties',
    subtitle: 'A Bangalore-based consultancy helping families and professionals find carefully evaluated farmland in Karnataka.',
  },
  story: {
    paragraphs: [
      'Mother Properties was founded to help people connect with nature through carefully evaluated farmland in Karnataka. We believe in transparent processes, clear documentation and long-term relationships with our clients.',
      'Our founder identified an opportunity to bring structured evaluation and management coordination to farmland ownership. Buyers should independently review title, access, water, land use and viability for the specific parcel.',
      'Our approach combines on-ground knowledge of Karnataka\'s agricultural regions with a commitment to clear, verifiable documentation. We do not make return guarantees — instead, we focus on helping buyers make informed decisions with the facts they need.',
    ],
  },
  director: {
    image: '/images/director-suresh-robert.jpg',
    name: 'Suresh Robert',
    title: 'Founder & Director, Mother Properties',
    message:
      'I founded Mother Properties to help families and professionals research carefully evaluated farmland opportunities in Karnataka. Coffee Prince represents this vision: a proposed managed coffee-farmland ownership experience in the Western Ghats. Our goal is to provide transparent information and a clear verification pathway so buyers can make informed decisions.',
    signature: 'Suresh Robert',
  } as DirectorInfo,
  values: [
    {
      icon: 'Shield',
      title: 'Evaluation & Due Diligence',
      description:
        'Every property goes through our structured review covering ownership, title, survey, access, water and regulatory status.',
    },
    {
      icon: 'Sprout',
      title: 'Professional Farm Management',
      description:
        'Experienced farm teams manage cultivation using sustainable practices while providing regular updates to owners.',
    },
    {
      icon: 'Heart',
      title: 'Owner-Focused Service',
      description:
        'We support owners from initial inquiry through documentation and into ongoing management, with clear communication at every step.',
    },
    {
      icon: 'Handshake',
      title: 'Long-Term Relationships',
      description:
        'Our involvement does not end at purchase. We provide ongoing management, communication and support for our farmland communities.',
    },
  ] as Feature[],
  happyClub: {
    title: 'Happy Club',
    description:
      'An extension of our vision, Happy Club organises nature experiences, wellness activities and community events in natural settings across Karnataka.',
  },
};

// ─── Projects Page Content ───────────────────────────────────────────────────

export const projectsContent = {
  hero: {
    title: 'Our Projects',
    subtitle: 'Carefully evaluated farmland with professional management in Karnataka.',
  },
  projects: [
    {
      slug: 'projects/coffee-prince',
      name: 'Coffee Prince',
      logo: '/images/coffee_prince_logo_gold_transparent_4000.png',
      summary:
        'Project material describes a managed coffee-farmland opportunity in the Sakleshpur region. Request current parcel, ownership and management documents.',
      tags: ['Managed Farmland', 'Document Review', 'Western Ghats'],
      badge: 'Featured',
    },
  ] as ProjectSummary[],
  // Removed upcoming-1 placeholder from public project listing
  cta: {
    title: 'Looking for something specific?',
    description:
      'Get in touch with our team to discuss your requirements. We can help with farmland, property consultancy and site visits.',
    button: { text: 'Talk to Us', href: '/contact' },
  },
};
