import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Managed Farmland Buyer Guide | Mother Properties',
  description: 'Twelve practical due-diligence checks to make before paying for managed farmland in Karnataka.',
  alternates: { canonical: '/buyer-guide/' },
  openGraph: {
    title: 'Managed Farmland Buyer Guide',
    description: 'Twelve practical checks for managed farmland buyers.',
    url: '/buyer-guide/',
    images: ['/images/Coffee-plantation.jpg'],
  },
};

const checks = [
  ['Confirm the seller and ownership chain', 'Ask an independent property lawyer to review the title deeds, ownership history and the seller’s authority to transact.'],
  ['Obtain the current encumbrance certificate', 'Check the relevant period and reconcile mortgages, charges and transactions with the title documents.'],
  ['Match survey records and boundaries', 'Verify the survey number, extent, sketch and on-ground boundary markers through a qualified surveyor.'],
  ['Confirm land classification and buyer eligibility', 'Agricultural-land rules and eligibility can change. Obtain advice specific to the land and buyer.'],
  ['Verify legal access', 'Confirm that the approach road and any easement rights are recorded, usable and adequate in every season.'],
  ['Assess water and power evidence', 'Inspect sources, permissions, reliability, shared infrastructure and ongoing operating costs.'],
  ['Separate existing work from proposed work', 'Treat layouts, villas, resorts and amenities as conceptual unless approvals, contracts and on-ground evidence show otherwise.'],
  ['Read the management agreement', 'Check activities, frequency, reporting, fees, exclusions, termination rights and responsibilities after purchase.'],
  ['Model crop risk realistically', 'Weather, disease, labour, yield and market prices vary. Do not rely on guaranteed income or appreciation claims.'],
  ['Calculate the full ownership cost', 'Include registration, taxes, legal review, survey, management, infrastructure and future construction costs.'],
  ['Understand exit and resale constraints', 'Ask who may buy, how resale is handled, what fees apply and whether any lock-in or first-refusal right exists.'],
  ['Record every promise in signed documents', 'Reconcile the website, catalogue, layout, payment schedule and verbal statements before transferring money.'],
] as const;

export default function BuyerGuidePage() {
  return (
    <>
      <PageHero
        title="Managed Farmland Buyer Guide"
        subtitle="12 due-diligence checks to complete before you pay"
      />
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-10">
            This educational checklist is not legal, financial or tax advice.
            Engage independent professionals and verify the current project facts.
          </p>
          <ol className="space-y-6">
            {checks.map(([title, description], index) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-gray-100 p-5">
                <CheckCircle className="h-6 w-6 flex-none text-forest-600" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {index + 1}. {title}
                  </h2>
                  <p className="mt-1 text-gray-600">{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button href="/projects/coffee-prince/" variant="primary" size="lg">
              Review Coffee Prince
            </Button>
            <Button href="/site-visit/" variant="outline" size="lg">
              Request a Site Visit
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">Last reviewed: 7 September 2026</p>
        </div>
      </Section>
    </>
  );
}
