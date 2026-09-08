import type { Metadata } from 'next';
import type { ContentLandingPageProps } from '@/components/shared/ContentLandingPage';

export type ContentPageDefinition = ContentLandingPageProps & {
  description: string;
  keywords: string[];
};

export function metadataFor(page: ContentPageDefinition): Metadata {
  return {
    title: `${page.title} | Mother Properties`,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      type: 'article',
      images: ['/images/Coffee-plantation.jpg'],
    },
  };
}

const commonDisclaimer =
  'This information is general education, not legal, tax or investment advice. Agricultural-land eligibility, title, access, land use, construction and registration must be independently verified for the specific parcel and buyer.';

export const managedFarmlandPage: ContentPageDefinition = {
  eyebrow: 'Managed farmland explained',
  title: 'How managed farmland ownership works',
  introduction: 'Managed farmland combines individual land ownership with an agreed operating service. The deed, management agreement, crop plan, fees and exit responsibilities should each be reviewed separately.',
  description: 'Understand managed farmland ownership, management agreements, costs, responsibilities, risks and due diligence before evaluating a project.',
  keywords: ['how managed farmland works', 'managed farmland ownership', 'managed farmland Karnataka'],
  reviewedDate: '8 September 2026',
  path: '/managed-farmland/',
  sections: [
    {
      title: 'What does managed farmland mean?',
      answer: 'It generally means the buyer owns an identified parcel while a separate operator carries out defined agricultural or maintenance services under a written agreement.',
      body: ['The exact structure varies. Confirm the registered interest you receive, the survey boundaries, who employs farm labour, who owns produce, what reports are provided and how either party can end the management arrangement.'],
    },
    {
      title: 'What should the agreement specify?',
      points: ['Scope and frequency of farm work', 'Management fee and escalation terms', 'Produce, revenue and expense treatment', 'Reporting and owner access', 'Insurance and force-majeure treatment', 'Renewal, termination and handover'],
    },
    {
      title: 'What are the principal risks?',
      body: ['Agriculture is exposed to weather, crop disease, labour availability, commodity prices and operating execution. Land transactions also carry title, access, boundary, land-use, eligibility, liquidity and regulatory risks. Marketing projections are not a substitute for contracts and independent review.'],
    },
  ],
  faqs: [
    { question: 'Is income from managed farmland guaranteed?', answer: 'No. Agricultural outcomes and land values are variable. Any commercial arrangement must be read from the current signed documents, not inferred from marketing.' },
    { question: 'Can an owner build on agricultural land?', answer: 'Permissions depend on the parcel, local rules, intended use and approvals. Obtain advice from an independent Karnataka property lawyer and the relevant authority.' },
  ],
  relatedLinks: [
    { label: '12 due-diligence checks', href: '/buyer-guide/' },
    { label: 'Coffee Prince facts', href: '/projects/coffee-prince/facts/' },
  ],
  disclaimer: commonDisclaimer,
};

export const bangaloreFarmlandPage: ContentPageDefinition = {
  eyebrow: 'Buyer research · Bangalore',
  title: 'Managed farmland near Bangalore: what to compare',
  introduction: 'Start with realistic travel time, title and access verification, the management contract and your own use case—not a promised return or a scenic photograph.',
  description: 'A practical comparison guide for managed farmland near Bangalore covering access, title, management, costs, risks and site visits.',
  keywords: ['managed farmland near Bangalore', 'farmland near Bangalore', 'weekend farmland Bangalore'],
  reviewedDate: '8 September 2026',
  path: '/managed-farmland-in-bangalore/',
  sections: [
    { title: 'How should buyers define “near Bangalore”?', answer: 'Compare door-to-door travel under normal weekend conditions, the final approach road and seasonal access—not just straight-line distance.', body: ['Ask for a shareable meeting point, route video where appropriate, and an accompanied site visit. Record tolls, road conditions, fuel access, medical access and the last-mile approach.'] },
    { title: 'What should be compared between projects?', points: ['Parcel-level title chain and encumbrance review', 'Survey sketch and boundary identification', 'Legal access and physical approach', 'Water source and permitted use', 'Management scope, fees and exclusions', 'Current versus proposed amenities', 'Resale process and likely liquidity', 'Total transaction and recurring costs'] },
    { title: 'Who is this suitable for?', body: ['The model may suit buyers who value land stewardship and periodic access but cannot personally supervise routine farm work. It is not a low-effort substitute for legal diligence and it should not be treated as a guaranteed-return product.'] },
  ],
  faqs: [
    { question: 'How far is Coffee Prince from Bangalore?', answer: 'Travel time depends on starting point, traffic, weather and route. Request the current meeting point and route guidance before planning a visit.' },
    { question: 'Should I pay a token before visiting?', answer: 'Review the written refund terms, project documents and payment recipient before transferring money. Obtain independent advice for your circumstances.' },
  ],
  relatedLinks: [{ label: 'Explore Coffee Prince', href: '/projects/coffee-prince/' }, { label: 'How managed farmland works', href: '/managed-farmland/' }],
  disclaimer: commonDisclaimer,
};

export const sakleshpurFarmlandPage: ContentPageDefinition = {
  eyebrow: 'Buyer research · Sakleshpur',
  title: 'Managed farmland near Sakleshpur',
  introduction: 'The Sakleshpur region is associated with plantation landscapes and high rainfall. A sound buying decision still depends on the individual parcel, documents, crop conditions and operating plan.',
  description: 'Research managed farmland near Sakleshpur with practical checks for plantation land, access, crop management, documents and seasonal conditions.',
  keywords: ['managed farmland in Sakleshpur', 'farmland near Sakleshpur', 'coffee plantation plots Sakleshpur'],
  reviewedDate: '8 September 2026',
  path: '/managed-farmland-in-sakleshpur/',
  sections: [
    { title: 'What is different about plantation land?', answer: 'Terrain, shade, drainage, rainfall, crop age, labour access and disease management can materially affect operations.', body: ['Ask an agricultural professional to inspect the specific land and crop condition. Understand what already exists, what is proposed, and the timeframe and cost assumptions for new planting.'] },
    { title: 'What should a site visit cover?', points: ['Identified parcel and boundary markers', 'Approach road in current conditions', 'Slope, drainage and erosion indicators', 'Existing crop condition and shade canopy', 'Water and power representations', 'Worker access and management base', 'Neighbouring land use', 'Distance to essential services'] },
    { title: 'How should proposed amenities be assessed?', body: ['Treat cottages, pools, clubhouses, resort facilities and conceptual layouts as proposals unless approvals, funding, construction status and delivery obligations are documented. Land ownership should be evaluated independently from amenity expectations.'] },
  ],
  faqs: [
    { question: 'Does coffee cultivation guarantee income?', answer: 'No. Yield, quality, input costs, weather, disease and market prices vary. Ask for actual operating assumptions and understand who bears each cost and risk.' },
    { question: 'Can exact coordinates be shared?', answer: 'Mother Properties can provide appropriate meeting and route details for a scheduled visit. Parcel-level information should be shared securely and with owner approval.' },
  ],
  relatedLinks: [{ label: 'Coffee Prince project', href: '/projects/coffee-prince/' }, { label: 'Book a visit', href: '/site-visit/' }],
  disclaimer: commonDisclaimer,
};

export const consultancyPage: ContentPageDefinition = {
  eyebrow: 'Property consultancy · Bangalore',
  title: 'Property consultants in Bangalore for land-led opportunities',
  introduction: 'Mother Properties provides an enquiry and coordination path for buyers and landowners evaluating nature-led and farmland opportunities. Engagement scope should be agreed in writing before work begins.',
  description: 'Speak with Mother Properties about property consultancy, farmland evaluation, project positioning and buyer coordination in Bangalore and Karnataka.',
  keywords: ['property consultants in Bangalore', 'farmland consultant Bangalore', 'land consultancy Karnataka'],
  reviewedDate: '8 September 2026',
  path: '/property-consultants-in-bangalore/',
  sections: [
    { title: 'How can Mother Properties assist?', points: ['Initial requirement and budget discovery', 'Project information coordination', 'Site-visit planning', 'Document checklist coordination', 'Independent-advisor handoff', 'Landowner and project-partner discussions'] },
    { title: 'What is outside the consultancy scope?', answer: 'Marketing or coordination does not replace independent legal, tax, survey, valuation, agricultural or regulatory advice.', body: ['The written engagement should name the client, service scope, fees, conflicts, deliverables and the professionals responsible for specialist opinions.'] },
    { title: 'What should you prepare for a first call?', points: ['Intended use and holding period', 'Preferred location and travel tolerance', 'Approximate budget', 'Ownership or eligibility questions', 'Desired management involvement', 'Target decision timeframe'] },
  ],
  faqs: [
    { question: 'Do you provide legal title opinions?', answer: 'No legal opinion should be inferred from project marketing. Buyers should appoint an independent qualified lawyer.' },
    { question: 'Can landowners propose a project?', answer: 'Yes. Use the contact form with “Property consultancy” selected and include location, extent, ownership status and a concise objective.' },
  ],
  relatedLinks: [{ label: 'Contact Mother Properties', href: '/contact/' }, { label: 'Project review framework', href: '/about/' }],
  disclaimer: commonDisclaimer,
};

export const nriPage: ContentPageDefinition = {
  eyebrow: 'Remote buyer pathway',
  title: 'NRI farmland enquiries in Karnataka',
  introduction: 'Agricultural-land eligibility and transaction structure can differ by buyer and change over time. NRI buyers should obtain current, independent Karnataka legal and tax advice before relying on a project presentation.',
  description: 'A remote-verification pathway for NRI buyers researching managed farmland and coffee plantation opportunities in Karnataka.',
  keywords: ['NRI farmland Karnataka', 'remote farmland ownership', 'NRI property consultation Bangalore'],
  reviewedDate: '8 September 2026',
  path: '/nri-farmland-ownership/',
  sections: [
    { title: 'What should an NRI buyer verify first?', answer: 'Confirm personal eligibility, permitted transaction structure, funding route, tax treatment and repatriation implications with qualified advisers.', body: ['Do this before paying a reservation amount or signing an expression of interest. Rules depend on facts such as citizenship, residency, land classification and transaction structure.'] },
    { title: 'How can remote diligence be organised?', points: ['Secure document index and version dates', 'Independent lawyer and surveyor access', 'Live video walkthrough with landmarks', 'Parcel and boundary confirmation', 'Written management scope and reporting', 'In-person representative or power-of-attorney review'] },
    { title: 'What should ongoing reporting include?', body: ['Agree the report format, evidence, frequency, responsible person, owner access, issue escalation and record retention in the management agreement. Avoid relying only on informal messaging updates.'] },
  ],
  faqs: [
    { question: 'Can every NRI buy agricultural land in Karnataka?', answer: 'Do not assume so. Eligibility is fact-specific and should be confirmed by an independent lawyer using current law and the parcel classification.' },
    { question: 'Can a site visit be arranged for a representative?', answer: 'A request can be made, subject to identity, authority, timing and site-access confirmation.' },
  ],
  relatedLinks: [{ label: 'Request a callback', href: '/contact/' }, { label: 'Due-diligence guide', href: '/buyer-guide/' }],
  disclaimer: commonDisclaimer,
};
