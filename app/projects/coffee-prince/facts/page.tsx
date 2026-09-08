import type { Metadata } from 'next';
import { ContentLandingPage } from '@/components/shared/ContentLandingPage';

export const metadata: Metadata = {
  title: 'Coffee Prince Project Facts and Documents | Mother Properties',
  description: 'Dated definitions, verification status and document-request pathway for Coffee Prince near Sakleshpur.',
  alternates: { canonical: '/projects/coffee-prince/facts/' },
  openGraph: {
    title: 'Coffee Prince Project Facts and Documents',
    description: 'Review published project statements and what buyers should independently verify.',
    url: '/projects/coffee-prince/facts/',
    images: ['/images/Coffee-plantation.jpg'],
  },
};

export default function CoffeePrinceFactsPage() {
  return (
    <ContentLandingPage
      eyebrow="Coffee Prince · verification centre"
      title="Project facts and document pathway"
      introduction="This page separates statements in current project materials from matters that every buyer should verify for the specific parcel and transaction."
      reviewedDate="8 September 2026"
      path="/projects/coffee-prince/facts/"
      sections={[
        {
          title: 'What do current project materials state?',
          answer: 'Coffee Prince is presented as a managed coffee-farmland opportunity in the Sakleshpur region, with coffee, pepper and proposed longer-term arecanut cultivation.',
          body: ['Published acreage and plot-size descriptions are indicative project-level statements. Current parcel availability, extent, boundaries, price, inclusions and status must be confirmed in the latest dated offer and supporting records.'],
        },
        {
          title: 'Which documents should a buyer request?',
          points: ['Parcel and seller identification', 'Title-chain documents', 'Current encumbrance search', 'Revenue and mutation records', 'Survey sketch and extent records', 'Access documents', 'Draft sale documentation', 'Management agreement and fee schedule'],
        },
        {
          title: 'What is planned rather than delivered?',
          body: ['Resort, cottage, villa, pool, recreation and similar lifestyle elements shown in concepts are proposed and subject to feasibility, approvals, contracts and execution. They must not be treated as existing facilities or guaranteed delivery.'],
        },
        {
          title: 'How are documents shared?',
          answer: 'Request the current document index through Mother Properties. Sensitive or owner-controlled documents may be shared securely after identity and enquiry checks.',
          body: ['Mother Properties does not publish private title records or exact parcel coordinates openly. Buyers should appoint independent professionals and confirm that every reviewed document relates to the parcel offered.'],
        },
      ]}
      relatedLinks={[
        { label: 'Explore Coffee Prince', href: '/projects/coffee-prince/' },
        { label: 'Farmland due diligence', href: '/insights/farmland-due-diligence-karnataka/' },
      ]}
      disclaimer="Project information can change. The latest signed documents govern; website and catalogue content do not constitute a title opinion, approval, income assurance or promise of appreciation."
    />
  );
}
