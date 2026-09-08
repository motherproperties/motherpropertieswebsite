import type { ContentPageDefinition } from './contentPages';

const disclaimer = 'This educational material is not legal, tax, agricultural or investment advice. Verify the specific property, documents and current rules with independent qualified professionals.';

export const insightArticles: ContentPageDefinition[] = [
  {
    eyebrow: 'Buyer guide · 8 minute read',
    title: 'Farmland due diligence in Karnataka: a practical sequence',
    introduction: 'Good diligence is a sequence, not a document bundle. First identify the parcel and seller, then examine title, boundaries, access, land classification, restrictions, taxes, physical conditions and the transaction documents.',
    description: 'A practical sequence for farmland due diligence in Karnataka, including title, survey, access, land use, taxes and independent review.',
    keywords: ['farmland due diligence Karnataka', 'agricultural land documents Karnataka', 'farmland title check'],
    reviewedDate: '8 September 2026',
    path: '/insights/farmland-due-diligence-karnataka/',
    article: true,
    sections: [
      { title: 'What should happen before document review?', answer: 'Record the survey number, extent, village, hobli, taluk, seller identity, asking terms and the exact interest being offered.', body: ['Names used in brochures or layout sketches are not parcel identifiers. The professional review must connect the marketed opportunity to the land records and proposed transaction.'] },
      { title: 'Which review streams should run?', points: ['Title chain and encumbrance search', 'Revenue records and mutation history', 'Survey sketch, extent and boundaries', 'Legal and physical access', 'Land classification and permitted use', 'Acquisition eligibility and restrictions', 'Tax and charge verification', 'Draft agreement and payment safeguards'] },
      { title: 'Why is a site inspection separate?', body: ['Documents may not reveal encroachment, boundary disputes, seasonal access, drainage, slope, crop condition or neighbouring uses. A surveyor, agricultural professional and lawyer answer different questions; one should not be assumed to replace another.'] },
      { title: 'When should money move?', answer: 'Only after the payment purpose, recipient, conditions, refund terms and next transaction step are documented and independently reviewed.', body: ['Keep payment records and do not rely on oral descriptions of reservation, cancellation or refund rights.'] },
    ],
    relatedLinks: [{ label: '12-check summary', href: '/buyer-guide/' }, { label: 'Request project information', href: '/contact/' }],
    disclaimer,
  },
  {
    eyebrow: 'Managed farmland · 7 minute read',
    title: 'How managed farmland works: ownership and operations',
    introduction: 'The land transaction and the management service are related but distinct. A buyer should understand both contracts, the operating assumptions and what happens if the manager changes.',
    description: 'Understand the ownership and operating layers of managed farmland, including service scope, fees, reporting, risks and exit planning.',
    keywords: ['how managed farmland works', 'managed farm agreement', 'managed farmland fees'],
    reviewedDate: '8 September 2026',
    path: '/insights/how-managed-farmland-works/',
    article: true,
    sections: [
      { title: 'What are the two core layers?', answer: 'One layer defines the land interest; the other defines agricultural or maintenance services.', body: ['Ask whether the service agreement is optional or mandatory, its duration, renewal and termination rules, and whether obligations transfer on resale.'] },
      { title: 'What belongs in an operating schedule?', points: ['Crop and maintenance activities', 'Frequency and seasonal calendar', 'Labour and input responsibility', 'Budget approval and expense evidence', 'Produce ownership and sale process', 'Owner reports and access', 'Incident escalation', 'Handover if service ends'] },
      { title: 'How should buyers view projections?', body: ['Separate agronomic assumptions from contractual obligations. Yields, prices, costs, crop maturity and land values are uncertain. Scenario illustrations should show assumptions and should never be described as guaranteed outcomes.'] },
    ],
    relatedLinks: [{ label: 'Managed farmland explainer', href: '/managed-farmland/' }, { label: 'Coffee Prince facts', href: '/projects/coffee-prince/facts/' }],
    disclaimer,
  },
  {
    eyebrow: 'Coffee estates · 7 minute read',
    title: 'Coffee plantation ownership and management questions',
    introduction: 'Owning plantation land does not by itself define crop performance or the services an operator will provide. Buyers should inspect the crop, management plan, cost allocation and reporting evidence.',
    description: 'Questions to ask when researching coffee plantation ownership and management in Karnataka, from crop condition to reporting and risks.',
    keywords: ['coffee plantation ownership Karnataka', 'managed coffee estate Karnataka', 'coffee plantation management'],
    reviewedDate: '8 September 2026',
    path: '/insights/coffee-plantation-ownership-management/',
    article: true,
    sections: [
      { title: 'What crop facts matter?', points: ['Variety and approximate planting age', 'Shade tree and intercropping plan', 'Recent maintenance history', 'Water and drainage conditions', 'Pest and disease observations', 'Harvest, processing and sale method'] },
      { title: 'What should management reports show?', answer: 'Reports should connect dated activities, costs and on-ground evidence to the agreed operating schedule.', body: ['Agree how photographs are dated, how expenses are approved, how exceptions are escalated and whether owners can arrange an independent inspection.'] },
      { title: 'What can affect outcomes?', body: ['Rainfall, temperature, labour, input prices, crop disease, plant maturity, wildlife, terrain, processing, quality and commodity markets all matter. A project presentation cannot eliminate these agricultural risks.'] },
    ],
    relatedLinks: [{ label: 'Farmland near Sakleshpur', href: '/managed-farmland-in-sakleshpur/' }, { label: 'Book an on-ground visit', href: '/site-visit/' }],
    disclaimer,
  },
];

export const insightBySlug = Object.fromEntries(
  insightArticles.map((article) => [article.path.split('/').filter(Boolean).at(-1)!, article])
) as Record<string, ContentPageDefinition>;
