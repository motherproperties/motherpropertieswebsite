/**
 * Coffee Prince content module
 * Edit this file to update Coffee Prince project page content
 */

import {
  FAQItem,
  Phase,
  Amenity,
  GalleryImage,
  Feature,
  CropInfo,
  AtAGlanceFact,
  OwnershipComparison,
  DocumentationStep,
  ManagementModel,
} from '../types';

export const coffeePrinceContent = {
  hero: {
    logo: '/images/coffee_prince_logo_gold_transparent_4000.png',
    headline: 'Coffee Prince — Managed Coffee Farmland Near Sakleshpur',
    subheadline:
      'Review the proposed sale-deed and coffee plantation management model. Current documents and availability require independent confirmation.',
    badges: ['Managed Farmland', 'Sakleshpur Region', 'Facts Subject to Verification'],
    backgroundImage: '/images/Coffee-plantation.jpg',
    primaryCTA: {
      text: 'Book a Site Visit',
      href: '#site-visit',
    },
    secondaryCTA: {
      text: 'Get the Catalogue',
      href: '#catalogue',
    },
  },

  atAGlance: [
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Sakleshpur, Western Ghats',
      disclaimer: 'Hassan district, Karnataka',
    },
    {
      icon: 'Mountain',
      label: 'Project Area',
      value: 'Approx. 35 Acres',
      disclaimer: 'Published project material; request current records',
    },
    {
      icon: 'Ruler',
      label: 'Plot Sizes',
      value: 'From ~6,000 sq.ft.',
      disclaimer: 'Subject to current availability',
    },
    {
      icon: 'Sprout',
      label: 'Crop Mix',
      value: 'Coffee + Pepper + Arecanut',
    },
    {
      icon: 'Car',
      label: 'Drive from Bangalore',
      value: '~4 Hours',
      disclaimer: 'Via NH75 / Hassan',
    },
    {
      icon: 'FileCheck',
      label: 'Ownership',
      value: 'Sale Deed Model',
      disclaimer: 'Subject to independent legal verification',
    },
  ] as AtAGlanceFact[],

  snapshot: {
    title: 'About Coffee Prince',
    intro:
      'Coffee Prince is a managed farmland project in the Sakleshpur region, offering titled plots with professional coffee plantation management.',
    blocks: [
      {
        title: 'Project',
        description:
          'Coffee Prince by Mother Properties is a managed farmland development offering titled coffee estate plots with professional farm management in the Western Ghats.',
      },
      {
        title: 'Developer',
        description:
          'Mother Properties is a Bangalore-based property consultancy led by founder Suresh Robert. Request current company and project references where relevant.',
      },
      {
        title: 'Location',
        description:
          'Located in the Sakleshpur belt of the Western Ghats, approximately 4 hours from Bangalore. The region is known for its coffee plantations, misty hills and biodiversity.',
      },
      {
        title: 'Plots & Ownership',
        description:
          'Published material describes approximately 35 acres and plot sizes from about 6,000 sq.ft. Availability, extent and ownership documents must be independently verified.',
      },
    ],
  },

  ownership: {
    whatYouOwn: [
      {
        label: 'Proposed Registered Ownership',
        description: 'The proposed model is registration and mutation in the buyer’s name, subject to eligibility, document review and completion of the transaction.',
      },
      {
        label: 'Your Plot',
        description:
          'A demarcated plot with defined boundaries within the Coffee Prince estate.',
      },
      {
        label: 'Construction Rights',
        description:
          'Subject to local regulations, zoning and required permissions. Consult legal counsel before construction.',
      },
    ],
    whatIsManaged: [
      {
        label: 'Coffee Cultivation',
        description:
          'Planting, maintenance, harvesting and processing of coffee on your plot by the farm management team.',
      },
      {
        label: 'Pepper & Arecanut',
        description:
          'Intercropping of pepper and long-term arecanut cultivation managed alongside coffee.',
      },
      {
        label: 'Estate Maintenance',
        description:
          'Common area upkeep, access roads, water systems and general estate operations.',
      },
    ],
    whatIsPlanned: [
      {
        label: 'Resort & Villa Concept',
        description:
          'A conceptual eco-resort with cottages, pool and community amenities. Subject to development progress, regulatory approvals and owner interest.',
      },
      {
        label: 'Community Experiences',
        description:
          'Plantation tours, nature trails and curated activities. Planned as estate development progresses.',
      },
      {
        label: 'Rental Programme',
        description:
          'A potential managed rental programme for owners who build villas. Conceptual — details to be finalised.',
      },
    ],
  } as OwnershipComparison,

  documentation: [
    {
      step: 1,
      title: 'Title Verification',
      description:
        'Review of title documents, encumbrance certificates and ownership history. We recommend buyers also engage independent legal counsel.',
      icon: 'FileCheck',
    },
    {
      step: 2,
      title: 'Sale Agreement',
      description:
        'Agreement of sale drafted with terms, payment schedule and timeline. Reviewed by both parties.',
      icon: 'FileText',
    },
    {
      step: 3,
      title: 'Registration & Mutation',
      description:
        'Sale deed registration at the sub-registrar office followed by mutation of land records in the buyer\'s name.',
      icon: 'Stamp',
    },
    {
      step: 4,
      title: 'Handover & Management',
      description:
        'Plot handover with boundary demarcation. Farm management begins with regular updates to the owner.',
      icon: 'Key',
    },
  ] as DocumentationStep[],

  management: {
    activities: [
      {
        activity: 'Soil preparation & planting',
        frequency: 'Initial setup + seasonal',
        managedBy: 'Farm management team',
      },
      {
        activity: 'Coffee plant maintenance',
        frequency: 'Year-round',
        managedBy: 'Farm management team',
      },
      {
        activity: 'Pepper & arecanut intercropping',
        frequency: 'Seasonal',
        managedBy: 'Farm management team',
      },
      {
        activity: 'Harvesting & processing',
        frequency: 'Annual (Oct–Feb for coffee)',
        managedBy: 'Farm management team',
      },
      {
        activity: 'Estate maintenance (roads, water)',
        frequency: 'Ongoing',
        managedBy: 'Estate operations team',
      },
      {
        activity: 'Owner updates & reporting',
        frequency: 'Quarterly / as needed',
        managedBy: 'Mother Properties',
      },
    ],
    updateMechanism:
      'The reporting channel and frequency must be confirmed in the signed management agreement. Ask for the current update process and recent examples.',
    ownerResponsibilities: [
      'Payment of applicable property taxes and government levies',
      'Participation in management fee contributions as agreed',
      'Compliance with estate community guidelines',
      'Obtaining independent legal and financial advice as needed',
    ],
    fees: 'Management fees apply and are detailed during the purchase discussion. Contact us for the current fee structure.',
    exclusions: [
      'Construction of individual villas/structures (owner\'s responsibility, subject to approvals)',
      'Individual crop yield guarantees — yields depend on weather, soil and market conditions',
      'Legal and tax advice — owners should engage their own professionals',
      'Insurance for individual plots — recommended but arranged by the owner',
    ],
  } as ManagementModel,

  directorAngle: {
    summary:
      'Coffee Prince reflects a nature-led farmland vision. Our aim is to help buyers evaluate a proposed registered-ownership and management model with transparent documentation — not to promise returns.',
    cta: { text: 'Read the Founder\'s Story', href: '/about' },
  },

  whyManagedFarmlands: {
    title: 'What Is Managed Farmland?',
    intro:
      'Managed farmland generally combines a registered land interest with a separate operating agreement for cultivation and upkeep. The exact ownership and service obligations must be confirmed in the parcel documents and signed agreements.',
    features: [
      {
        icon: 'Sprout',
        title: 'Own Land, Not Responsibilities',
        description:
          'Review the proposed registered ownership while the management agreement defines day-to-day farming operations.',
      },
      {
        icon: 'TrendingUp',
        title: 'Agricultural Asset',
        description:
          'Agricultural land in the Western Ghats with active cultivation. Note: land values and crop yields can vary and are not guaranteed.',
      },
      {
        icon: 'Users',
        title: 'Community of Owners',
        description:
          'Be part of an estate with other like-minded owners who value nature, sustainability and the Western Ghats lifestyle.',
      },
      {
        icon: 'Leaf',
        title: 'Sustainable Farming',
        description:
          'Coffee, pepper and arecanut grown using practices that focus on soil health, water balance and ecosystem preservation.',
      },
    ] as Feature[],
    additionalInfo:
      'The Western Ghats climate is well-suited for coffee and spice cultivation. Our management model is designed for owners who want land ownership without farming expertise.',
  },

  estateHighlights: {
    title: 'Estate Highlights',
    highlights: [
      {
        icon: 'FileCheck',
        title: 'Ownership Documentation',
        description:
          'The proposed pathway includes sale-deed registration and mutation, subject to eligibility, parcel records, transaction completion and independent legal review.',
      },
      {
        icon: 'Maximize',
        title: 'Plot Options',
        description:
          'Plots from approximately 6,000 sq.ft. Multiple sizes available. Subject to current inventory.',
      },
      {
        icon: 'Droplets',
        title: 'Water & Power',
        description:
          'Water sources and power infrastructure assessed as part of our project evaluation.',
      },
      {
        icon: 'MapPin',
        title: 'Accessibility',
        description:
          'Indicatively about 4 hours from Bangalore via NH75. Travel time and all-season legal access should be checked during due diligence.',
      },
      {
        icon: 'Trees',
        title: 'Western Ghats Setting',
        description:
          'Located in a coffee and spice growing belt with rich biodiversity, misty hills and evergreen terrain.',
      },
    ] as Feature[],
  },

  farmingModel: {
    title: 'Farming Model',
    subtitle: 'Three-Crop Cultivation Strategy',
    intro:
      'Coffee as the primary crop with intercropped pepper and long-term arecanut cultivation. This diversified approach is designed for sustainable productivity — not guaranteed returns.',
    crops: [
      {
        name: 'Coffee',
        description:
          'The primary crop. Coffee plants take 3–5 years to mature and yield varies based on weather, soil and management practices.',
        icon: 'Coffee',
      },
      {
        name: 'Pepper',
        description:
          'Intercropped on existing shade trees. Pepper provides an additional harvest with minimal additional land use.',
        icon: 'Leaf',
      },
      {
        name: 'Arecanut',
        description:
          'A long-term crop that complements the coffee and pepper cultivation. Takes several years to mature.',
        icon: 'TreePine',
      },
    ] as CropInfo[],
    disclaimer:
      'Crop yields depend on weather, soil conditions, market prices and management practices. Mother Properties does not guarantee specific yields, income or returns from farming activities.',
    additionalInfo:
      'Our farm management team follows sustainable practices focused on soil health and water balance. Owners receive updates on cultivation activities and seasonal progress.',
  },

  resortModel: {
    title: 'Resort & Villa Concept',
    subtitle: 'Proposed — Subject to Development Progress',
    intro:
      'A conceptual eco-resort at the heart of the estate, with cottages, community amenities and nature experiences. Farmland plots surround this planned core.',
    benefits: [
      'Personal retreat — Use your villa as a weekend getaway (subject to construction approvals)',
      'Potential rental participation — A managed rental programme is being explored for willing owners',
      'Community amenities — Access to planned common facilities as they are developed',
      'Nature experiences — Plantation walks, trails and curated activities (as developed)',
    ],
    disclaimer:
      'This is a conceptual resort model. Amenities, timelines and rental arrangements are proposed and subject to development progress, regulatory approvals and owner interest. Do not treat this as a commitment or a delivered facility.',
  },

  phases: [
    {
      title: 'Phase 1',
      subtitle: 'Land Acquisition & Plantation Setup',
      description:
        'Land and initial plantation setup described in the project plan. Current status requires dated evidence.',
      verifiedDate: 'Current status requires dated on-ground evidence',
    },
    {
      title: 'Phase 2',
      subtitle: 'Infrastructure Development',
      description:
        'Internal roads, water systems, power supply and estate access improvements.',
      verifiedDate: 'Current status requires dated on-ground evidence',
    },
    {
      title: 'Phase 3',
      subtitle: 'Resort & Villa Programme',
      description:
        'Development of the central resort concept and enabling villa construction for interested owners. Subject to regulatory approvals.',
      status: 'planning' as const,
      verifiedDate: 'Conceptual — timelines to be confirmed',
    },
    {
      title: 'Phase 4',
      subtitle: 'Community & Experience Expansion',
      description:
        'Nature experiences, community activities and additional amenities as the estate develops.',
      status: 'planning' as const,
      verifiedDate: 'Planned — dependent on earlier phases',
    },
  ] as Phase[],

  layoutAndAmenities: {
    layoutNote: 'Conceptual Layout — not to scale. Subject to change based on development progress.',
    amenities: [
      { name: 'Cottages / Villas', icon: 'Home', description: 'Proposed — subject to approvals' },
      { name: 'Swimming Pool', icon: 'Waves', description: 'Proposed' },
      { name: 'Indoor Games', icon: 'Gamepad2', description: 'Proposed' },
      { name: 'Outdoor Games', icon: 'Trophy', description: 'Proposed' },
      { name: 'Children\'s Play Area', icon: 'Baby', description: 'Proposed' },
      { name: 'Plantation Walks & Trails', icon: 'Footprints', description: 'Planned' },
      { name: 'Community Spaces', icon: 'Flame', description: 'Planned' },
    ] as Amenity[],
    disclaimer:
      'All amenities shown are conceptual and subject to development progress, regulatory approvals and owner interest. Do not treat proposed amenities as delivered or committed facilities.',
  },

  quote: {
    text: 'Between the hills and the mist lies a quiet promise of peace, growth and belonging.',
    backgroundImage: '/images/Coffee-plantation.jpg',
  },

  gallery: [
    {
      src: '/images/Coffee-plantation.jpg',
      alt: 'Coffee plantation in the Western Ghats',
      caption: 'Coffee cultivation in the Sakleshpur region',
      creditLabel: 'Western Ghats Coffee Estate',
    },
    {
      src: '/images/lifestyle-nature.jpg',
      alt: 'Nature and farming in the estate',
      caption: 'Sustainable farming practices',
      creditLabel: 'Eco-Tourism Western Ghats',
    },
    {
      src: '/images/hero.jpg',
      alt: 'Panoramic view of the Coffee Prince estate area',
      caption: 'Coffee Prince estate landscape',
      creditLabel: 'Coffee Prince Estate',
    },
    // Removed: WhatsApp Image 2025-10-18 — file missing from public/images (PRD §2)
  ] as GalleryImage[],

  faq: [
    {
      question: 'What is Coffee Prince?',
      answer:
        'Coffee Prince is a managed farmland project by Mother Properties, located in the Sakleshpur region of the Western Ghats. It offers titled coffee estate plots with professional farm management.',
    },
    {
      question: 'How does the farming model work?',
      answer:
        'We use a three-crop approach: coffee as the primary crop, pepper intercropped for diversity, and arecanut as a long-term cultivation. Professional farm managers handle all operations. Yields vary and are not guaranteed.',
    },
    {
      question: 'What documentation do I receive?',
      answer:
        'Buyers receive a registered sale deed, encumbrance certificate, tax receipts and mutation records. We facilitate the process through licensed professionals and recommend independent legal verification.',
    },
    {
      question: 'What does Mother Properties manage vs. what is my responsibility?',
      answer:
        'Mother Properties manages all farming operations, estate maintenance and provides owner updates. Owners are responsible for property taxes, management fee contributions, any construction they choose to undertake (subject to approvals), and their own legal and tax advice.',
    },
    {
      question: 'How often can I visit?',
      answer:
        'Visits are subject to access conditions, estate rules and scheduling. Prospective buyers can request a guided visit before making travel arrangements.',
    },
    {
      question: 'What about the resort and villa concept?',
      answer:
        'The resort and villa concept is proposed and subject to development progress, regulatory approvals and owner interest. It is not a delivered facility. Contact us for the current status.',
    },
    {
      question: 'How is title verification done?',
      answer:
        'We review title documents, encumbrance certificates and ownership history. However, this is our internal review — we strongly recommend that all buyers engage independent legal counsel for their own due diligence.',
    },
    {
      question: 'What are the risks?',
      answer:
        'As with any agricultural land, risks include weather variability, crop yield fluctuations, market price changes, regulatory changes and development timeline uncertainties. We do not guarantee returns or appreciation. Buyers should assess their own risk tolerance and seek professional advice.',
    },
    {
      question: 'Can I build on my plot?',
      answer:
        'Construction is subject to local zoning regulations, land-use classification and required permissions. Buyers must obtain their own approvals and consult legal counsel before any construction.',
    },
    {
      question: 'What is the cancellation and refund policy?',
      answer:
        'Cancellation and refund terms are specified in the sale agreement. Contact us for details on the current policy before making any commitments.',
    },
    {
      question: 'How do I get to Coffee Prince?',
      answer:
        'Coffee Prince is located in the Sakleshpur region, approximately 4 hours from Bangalore via NH75 through Hassan. We can help with route guidance and organise pickup for site visits.',
    },
  ] as FAQItem[],

  siteVisit: {
    title: 'Visit Coffee Prince',
    subtitle: 'See the Land Before You Decide',
    description:
      'Schedule a guided site visit to walk the land, meet the farm team, understand the documentation process and experience the Western Ghats setting. No obligation.',
    cta: {
      primary: { text: 'Book a Site Visit', href: '#site-visit-form' },
      whatsapp: {
        text: 'WhatsApp Us',
        href: 'https://wa.me/919845042789?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20to%20Coffee%20Prince%20near%20Sakleshpur.',
      },
      call: { text: 'Call Us', href: 'tel:+919845042789' },
    },
  },
};
