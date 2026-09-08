import type { Metadata } from 'next';
import { ContentLandingPage } from '@/components/shared/ContentLandingPage';

export const metadata: Metadata = {
  title: 'Mother Properties Media and Reference Information',
  description: 'Approved public reference information, contact details and usage guidance for Mother Properties and Coffee Prince.',
  alternates: { canonical: '/media/' },
  openGraph: {
    title: 'Mother Properties Media and Reference Information',
    description: 'Public reference information and contact pathway.',
    url: '/media/',
    images: ['/images/hero.jpg'],
  },
};

export default function MediaPage() {
  return (
    <ContentLandingPage
      eyebrow="Media and partner reference"
      title="Mother Properties reference information"
      introduction="Use this page for current public descriptions and contact the company before publishing project figures, founder history, customer material or images."
      reviewedDate="8 September 2026"
      path="/media/"
      sections={[
        {
          title: 'Approved short description',
          answer: 'Mother Properties is a Bangalore-based property consultancy presenting nature-led real-estate and managed-farmland opportunities in Karnataka, including Coffee Prince in the Sakleshpur region.',
        },
        {
          title: 'Usage guidance',
          points: ['Request written approval before reusing photography', 'Confirm project figures against a dated source', 'Label proposed amenities as conceptual', 'Do not describe agricultural or land-value outcomes as guaranteed', 'Do not publish customer identities without consent', 'Send factual corrections to the listed contact address'],
        },
        {
          title: 'Press and partner contact',
          body: ['Email motherpropertiesblr@gmail.com or call +91 98450 42789. Include your organisation, intended use, deadline and the facts or assets you want to reference.'],
        },
      ]}
      relatedLinks={[
        { label: 'Project facts', href: '/projects/coffee-prince/facts/' },
        { label: 'About Mother Properties', href: '/about/' },
      ]}
      disclaimer="Company legal-entity details, founder-experience claims and project statistics must be confirmed by Mother Properties against current supporting evidence before third-party publication."
    />
  );
}
