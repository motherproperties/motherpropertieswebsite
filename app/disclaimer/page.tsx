import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Project and Investment Disclaimer | Mother Properties',
  description: 'Important limitations and independent-verification guidance for Mother Properties project information.',
  alternates: { canonical: '/disclaimer/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Project and Investment Disclaimer | Mother Properties',
    description: 'Important limitations, risks and independent-verification guidance for Mother Properties project information.',
    url: '/disclaimer/',
    images: ['/images/Coffee-plantation.jpg'],
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Project Disclaimer" subtitle="Verify current facts before making a decision" />
      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p><strong>Last reviewed:</strong> 7 September 2026</p>
          <h2>No return or appreciation guarantee</h2>
          <p>
            Agricultural output, land value, resale demand and development
            timelines can change. Mother Properties does not guarantee crop
            yield, income, rental income, appreciation or investment returns.
          </p>
          <h2>Independent verification</h2>
          <p>
            Website and catalogue material is introductory information. Buyers
            should independently verify title, encumbrances, survey boundaries,
            access, land classification, permissions, taxes, fees and contracts
            with qualified legal, survey, tax and financial professionals.
          </p>
          <h2>Proposed features</h2>
          <p>
            Resort, villa, rental-programme, amenity and future-phase references
            are conceptual unless a current signed document expressly states
            otherwise. They may change or may not proceed.
          </p>
          <h2>Availability and project status</h2>
          <p>
            Acreage, plot sizes, prices, inventory, crop plans and status should
            be reconfirmed directly with the team and against current documents
            before any payment or travel commitment.
          </p>
        </div>
      </Section>
    </>
  );
}
