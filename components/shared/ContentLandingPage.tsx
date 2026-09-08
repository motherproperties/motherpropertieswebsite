import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { createArticleSchema, createBreadcrumbSchema, createFAQPageSchema } from '@/lib/seo';
import { getCallLink, getWhatsAppLink } from '@/lib/siteConfig';
import type { FAQItem } from '@/lib/types';

export interface ContentSection {
  title: string;
  answer?: string;
  body?: string[];
  points?: string[];
}

export interface ContentLandingPageProps {
  eyebrow: string;
  title: string;
  introduction: string;
  reviewedDate: string;
  path: string;
  sections: ContentSection[];
  faqs?: FAQItem[];
  relatedLinks?: Array<{ label: string; href: string }>;
  disclaimer?: string;
  article?: boolean;
}

export function ContentLandingPage({
  eyebrow,
  title,
  introduction,
  reviewedDate,
  path,
  sections,
  faqs = [],
  relatedLinks = [],
  disclaimer,
  article = false,
}: ContentLandingPageProps) {
  const schemas = [
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://www.motherproperties.net/' },
      { name: title, url: `https://www.motherproperties.net${path}` },
    ]),
    ...(faqs.length ? [createFAQPageSchema(faqs)] : []),
    ...(article ? [createArticleSchema({ title, description: introduction, path, reviewedDate })] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="bg-forest-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-display font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-cream-100/90 md:text-xl">{introduction}</p>
          <p className="mt-6 text-sm text-cream-100/70">Last reviewed: {reviewedDate}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/site-visit/" variant="primary" size="lg">Request a site visit</Button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="mx-auto max-w-4xl space-y-14">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') }>
              <h2 id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="text-3xl font-display font-semibold text-gray-900 md:text-4xl">
                {section.title}
              </h2>
              {section.answer && (
                <p className="mt-5 border-l-4 border-gold-500 bg-cream-50 px-5 py-4 text-lg font-medium leading-8 text-gray-800">
                  {section.answer}
                </p>
              )}
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-lg leading-8 text-gray-700">{paragraph}</p>
              ))}
              {section.points && (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 rounded-xl border border-gray-200 p-4 text-gray-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-forest-600" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {disclaimer && (
            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950">
              <strong>Important:</strong> {disclaimer}
            </aside>
          )}
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section background="cream">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-display font-semibold text-gray-900 md:text-4xl">Common buyer questions</h2>
            <dl className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      <Section background="green">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-display font-semibold md:text-4xl">Review the facts before deciding</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-100/85">Ask for current project information, arrange an on-ground visit and take independent professional advice.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact/" variant="secondary" size="lg">Request a callback</Button>
            <a href={getCallLink()} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">
              <Phone className="h-5 w-5" /> Call now
            </a>
          </div>
          {relatedLinks.length > 0 && (
            <nav aria-label="Related reading" className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-gold-200 hover:text-white">
                  {link.label} <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </nav>
          )}
        </div>
      </Section>
    </>
  );
}
