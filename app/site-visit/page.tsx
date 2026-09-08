import type { Metadata } from 'next';
import { SiteVisitBooking } from '@/components/coffeeprince/SiteVisitBooking';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Request a Coffee Prince Site Visit | Mother Properties',
  description: 'Request a preferred date to visit Coffee Prince near Sakleshpur. Visits are confirmed by the Mother Properties team.',
  alternates: { canonical: '/site-visit/' },
  openGraph: {
    title: 'Request a Coffee Prince Site Visit',
    description: 'Request a preferred visit date and route guidance.',
    url: '/site-visit/',
    images: ['/images/Coffee-plantation.jpg'],
  },
};

export default function SiteVisitPage() {
  return (
    <>
      <PageHero
        title="Request a Coffee Prince Site Visit"
        subtitle="Choose a preferred date. Our team will confirm availability and route details."
      />
      <Section background="white">
        <div className="max-w-3xl mx-auto mb-8 text-center text-gray-600">
          <p>
            A submitted request is not a confirmed appointment. Please wait for
            confirmation before making travel arrangements.
          </p>
        </div>
        <SiteVisitBooking />
      </Section>
    </>
  );
}
