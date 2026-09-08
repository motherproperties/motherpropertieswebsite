import type { Metadata } from 'next';
import { LeadInbox } from './LeadInbox';

export const metadata: Metadata = {
  title: 'Lead Inbox | Mother Properties',
  robots: { index: false, follow: false, noarchive: true },
};

export default function LeadInboxPage() {
  return (
    <section className="min-h-[70vh] bg-gray-50 px-4 py-16 sm:px-6">
      <div className="mx-auto mb-10 max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold-700">Restricted operations</p>
        <h1 className="mt-2 text-4xl font-display font-semibold text-gray-900">Lead inbox</h1>
        <p className="mt-3 max-w-2xl text-gray-600">Review website enquiries, site-visit requests and notification health. The access token is kept only in this browser tab.</p>
      </div>
      <LeadInbox />
    </section>
  );
}
