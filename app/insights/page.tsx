import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { insightArticles } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Farmland Buyer Insights | Mother Properties',
  description: 'Practical, reviewed guides about managed farmland, Karnataka due diligence and coffee plantation ownership.',
  alternates: { canonical: '/insights/' },
  openGraph: {
    title: 'Farmland Buyer Insights | Mother Properties',
    description: 'Practical, reviewed guides for farmland buyers.',
    url: '/insights/',
    images: ['/images/Coffee-plantation.jpg'],
  },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Farmland buyer insights"
        subtitle="Plain-language research notes for better questions, independent verification and informed site visits."
      />
      <Section background="white">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {insightArticles.map((article) => (
            <article key={article.path} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <BookOpen className="h-7 w-7 text-forest-600" aria-hidden="true" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold-700">{article.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-display font-semibold text-gray-900">{article.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-gray-600">{article.description}</p>
              <p className="mt-5 text-xs text-gray-500">Reviewed {article.reviewedDate}</p>
              <Link href={article.path} className="mt-5 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">
                Read the guide <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
