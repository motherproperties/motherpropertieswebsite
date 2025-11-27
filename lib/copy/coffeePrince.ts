/**
 * Coffee Prince content module
 * Edit this file to update Coffee Prince microsite content
 */

import { FAQItem, Phase, Amenity, GalleryImage, Feature, CropInfo } from '../types';

export const coffeePrinceContent = {
  hero: {
    logo: '/images/coffee_prince_logo_gold_transparent_4000.png',
    headline: 'Coffee Prince – Managed Coffee Farmlands in the Western Ghats',
    subheadline:
      'Titled, curated coffee farmlands in the Sakleshpur region, blending natural beauty and modern lifestyle',
    badges: ['Managed Farmland', 'Sakleshpur, Western Ghats', 'Approx. 35+ Acres'],
    taglines: ['GREEN IS THE NEW GOLD', 'NATURE IS THE NEW LUXURY'],
    backgroundImage: '/images/Coffee-plantation.jpg',
  },
  snapshot: {
    title: 'Project Snapshot',
    intro:
      'Coffee Prince offers titled farmlands in a scenic Western Ghats plantation belt, ideal for those seeking a nature-led lifestyle combined with long-term asset growth.',
    blocks: [
      {
        title: 'Project',
        description:
          'Coffee Prince by Mother Properties is a premium managed farmland development offering curated coffee estates with modern amenities and professional management.',
      },
      {
        title: 'Developer',
        description:
          'Mother Properties is a real estate brand with a proven track record of delivering curated, value-driven projects focused on trust, transparency, and customer satisfaction.',
      },
      {
        title: 'Location',
        description:
          'Located in the Sakleshpur belt of the Western Ghats, known for its misty hills, lush coffee plantations, and rich biodiversity. The region offers a perfect blend of natural beauty and accessibility.',
      },
      {
        title: 'Scale & Plots',
        description:
          'Approximately 35+ acres of curated farmland with multiple plot sizes to suit various preferences and investment goals.',
      },
    ],
  },
  directorAngle: {
    summary:
      'Coffee Prince is led by the same vision from Suresh Robert that drives Mother Properties—combining real estate expertise with tourism and nature experiences to create secure, well-managed, eco-friendly estates.',
    cta: { text: 'Read Full Director Message', href: '/about' },
  },
  whyManagedFarmlands: {
    title: 'Why Managed Farmlands',
    intro:
      'Managed farmland is a concept where you own the land while experts handle cultivation and upkeep. It offers the best of both worlds—ownership benefits and hassle-free management.',
    features: [
      {
        icon: 'Sprout',
        title: 'Sustainable Living',
        description:
          'Connect with nature while building a legacy asset. Enjoy the peace of farmland ownership without daily operational responsibilities.',
      },
      {
        icon: 'TrendingUp',
        title: 'Investment Growth',
        description:
          'Agricultural land in premium locations offers long-term appreciation potential along with possible income from crops.',
      },
      {
        icon: 'Users',
        title: 'Community & Lifestyle',
        description:
          'Be part of a community of like-minded individuals who value nature, sustainability, and quality of life.',
      },
      {
        icon: 'Leaf',
        title: 'Eco-Friendly Practices',
        description:
          'Sustainable farming methods that preserve soil health, promote biodiversity, and protect the natural ecosystem.',
      },
    ] as Feature[],
    additionalInfo:
      'The Western Ghats climate and coffee/spice culture create an ideal environment for building a long-term legacy asset that connects you with nature.',
  },
  estateHighlights: {
    title: 'Estate Highlights',
    highlights: [
      {
        icon: 'FileCheck',
        title: 'Titled Land',
        description: 'Secure, clear ownership with proper documentation and legal title transfer.',
      },
      {
        icon: 'Maximize',
        title: 'Plot Variants',
        description: 'Plots from approximately 6,000 sq.ft upwards to suit various preferences.',
      },
      {
        icon: 'Droplets',
        title: 'Water & Power',
        description: 'Sustainably planned infrastructure with reliable water sources and power supply.',
      },
      {
        icon: 'MapPin',
        title: 'Connectivity',
        description:
          'Accessible by road, approximately a few hours\' drive from Bangalore, making it perfect for weekend getaways.',
      },
      {
        icon: 'Trees',
        title: 'Biodiversity',
        description:
          'Rich flora and fauna with coffee, spices, and evergreen terrain creating a vibrant ecosystem.',
      },
    ] as Feature[],
  },
  farmingModel: {
    title: 'Farming Model',
    subtitle: 'Growing Prosperity Through Nature\'s Rhythm',
    intro:
      'Coffee as the primary crop, with intercropped pepper and long-term arecanut cultivation, creating a balanced and sustainable agricultural ecosystem.',
    crops: [
      {
        name: 'Coffee',
        description: 'Builds medium-term cash flow as plants mature and begin yielding quality beans.',
        icon: 'Coffee',
      },
      {
        name: 'Pepper',
        description:
          'Climbs on existing trees and boosts annual income with minimal additional land use.',
        icon: 'Leaf',
      },
      {
        name: 'Arecanut',
        description:
          'A long-term crop that strengthens overall asset value and provides sustained returns.',
        icon: 'TreePine',
      },
    ] as CropInfo[],
    additionalInfo:
      'Our farming model focuses on soil health, water balance, and sustainable yield, ensuring the land remains productive and valuable for generations.',
  },
  resortModel: {
    title: 'Resort Model',
    subtitle: 'Dual-Benefit Investment',
    intro:
      'A central eco-resort concept at the heart of the estate offers hospitality, club-like amenities, and nature experiences. Farmland plots surround this core, where owners can build private villas or holiday homes.',
    benefits: [
      'Vacation Home Privileges – Use your villa as a personal retreat',
      'Potential Rental Returns – Participate in a managed rental program for income',
      'Dual-Benefit – Enjoy both personal use and income generation',
      'Estate-Led Community & Experiences – Access to resort amenities and curated activities',
    ],
    disclaimer:
      'This is a conceptual resort model and details may change based on development progress and regulatory requirements.',
  },
  phases: [
    {
      title: 'Phase 1',
      subtitle: 'Land Acquisition & Plantation Setup',
      description:
        'Securing titled land and establishing coffee plantations with proper soil preparation and initial planting.',
      status: 'completed',
    },
    {
      title: 'Phase 2',
      subtitle: 'Infrastructure Development',
      description:
        'Building roads, water systems, power supply, and internal amenity planning to support the estate.',
      status: 'in-progress',
    },
    {
      title: 'Phase 3',
      subtitle: 'Resort & Villa Program Rollout',
      description:
        'Developing the central eco-resort and enabling villa construction for owners who wish to build.',
      status: 'in-progress',
    },
    {
      title: 'Phase 4',
      subtitle: 'Community Activities & Experience Expansion',
      description:
        'Launching community programs, nature experiences, and additional amenities for owners and guests.',
      status: 'planning',
    },
  ] as Phase[],
  layoutAndAmenities: {
    layoutNote: 'Conceptual Layout – not to scale',
    amenities: [
      { name: 'Cottages / Villas', icon: 'Home' },
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Indoor Games', icon: 'Gamepad2' },
      { name: 'Outdoor Games', icon: 'Trophy' },
      { name: 'Children\'s Play Area', icon: 'Baby' },
      { name: 'Plantation Walks & Trails', icon: 'Footprints' },
      { name: 'Bonfire / Community Spaces', icon: 'Flame' },
      { name: '& many more curated experiences' },
    ] as Amenity[],
    disclaimer:
      'Layout and amenities are conceptual and subject to refinement based on development progress and owner feedback.',
  },
  quote: {
    text: 'Between the hills and the mist lies a quiet promise of peace, growth, and belonging.',
    backgroundImage: '/images/Coffee-plantation.jpg',
  },
  gallery: [
    {
      src: '/images/Coffee-plantation.jpg',
      alt: 'Lush coffee plantation in the Western Ghats',
      creditLabel: 'Western Ghats Coffee Estate',
    },
    {
      src: '/images/1547099542_blogs_5_incredible_experiences_in_indias_western_ghats.jpg',
      alt: 'Misty hills and tea gardens of Sakleshpur',
      creditLabel: 'Western Ghats Tourism',
    },
    {
      src: '/images/lifestyle-nature.jpg',
      alt: 'Sustainable farming practices in the estate',
      creditLabel: 'Eco-Tourism Western Ghats',
    },
    {
      src: '/images/hero.jpg',
      alt: 'Panoramic view of Coffee Prince landscape',
      creditLabel: 'Coffee Prince Estate',
    },
    {
      src: '/images/WhatsApp Image 2025-10-18 at 18.24.15_acd64f1d.jpg',
      alt: 'Community gathering at Coffee Prince resort',
      creditLabel: 'Coffee Prince Community',
    },
  ] as GalleryImage[],
  faq: [
    {
      question: 'What is a managed coffee farmland?',
      answer:
        'A managed coffee farmland is a property where you own titled agricultural land with coffee cultivation. Professional farm managers handle all cultivation, maintenance, and operations while you enjoy ownership benefits and potential returns.',
    },
    {
      question: 'How does Coffee Prince\'s farming model work?',
      answer:
        'We use a three-crop strategy: coffee as the primary crop for medium-term returns, pepper intercropped for annual income, and arecanut for long-term value. This diversified approach ensures sustainable productivity and balanced returns.',
    },
    {
      question: 'What does Mother Properties manage vs. what is the owner\'s responsibility?',
      answer:
        'Mother Properties handles all farming operations, maintenance, and management. As an owner, you simply enjoy the benefits of ownership, visit your property, and receive updates on farm activities and yields.',
    },
    {
      question: 'How often can I visit, and are there stay options?',
      answer:
        'You can visit your property anytime. The resort model concept includes accommodations and amenities for comfortable stays, allowing you to enjoy your farmland as a weekend retreat.',
    },
    {
      question: 'What are the basics of the resort model?',
      answer:
        'The resort model features a central eco-resort with hospitality amenities surrounded by farmland plots. Owners can build villas and optionally participate in a managed rental program for dual benefits—personal use and income.',
    },
    {
      question: 'How is title and documentation handled?',
      answer:
        'All plots come with clear, titled ownership. We provide complete legal documentation, title transfer support, and ensure all regulatory requirements are met for secure ownership.',
    },
    {
      question: 'How is this different from a normal plotted layout?',
      answer:
        'Unlike typical plotted developments, Coffee Prince is a working farmland with active cultivation, professional management, and a focus on agricultural productivity alongside lifestyle amenities. It\'s an investment in both land and a sustainable farming ecosystem.',
    },
    {
      question: 'What is the location and how do I get there?',
      answer:
        'Coffee Prince is located in the Sakleshpur region of the Western Ghats, accessible by road from Bangalore. The scenic drive takes approximately a few hours, making it perfect for weekend visits.',
    },
  ] as FAQItem[],
  siteVisit: {
    title: 'Experience the Beauty of Coffee Prince',
    subtitle: 'Plan a Site Visit',
    description:
      'Join us for guided tours, plantation walks, and an on-ground understanding of what makes Coffee Prince special. Experience the misty hills, coffee aroma, and natural beauty firsthand.',
    cta: {
      primary: { text: 'Plan a Site Visit', href: '/contact?interest=coffeeprince' },
      whatsapp: { text: 'WhatsApp Us', href: 'https://wa.me/919845042789' },
      call: { text: 'Call Us', href: 'tel:+919845042789' },
    },
  },
};
