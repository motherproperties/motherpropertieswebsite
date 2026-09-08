/**
 * Homepage - Mother Properties main landing page
 * Conversion-focused layout per PRD §6
 */

import type { Metadata } from 'next';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ProofStrip } from '@/components/home/ProofStrip';
import { TrustSection } from '@/components/home/TrustSection';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { Timeline } from '@/components/home/Timeline';
import { CTASection } from '@/components/home/CTASection';
import { LeadMagnetSection } from '@/components/home/LeadMagnetSection';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { homeContent } from '@/lib/copy/motherProperties';
import { siteConfig } from '@/lib/siteConfig';
import { Reveal } from '@/components/ui/Reveal';
import { createFAQPageSchema } from '@/lib/seo';
import { MapPin, Sprout, Calendar } from 'lucide-react';
import Image from 'next/image';
import { preload } from 'react-dom';

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: '/' },
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
    url: '/',
  },
};

export default function HomePage() {
  preload('/images/coffee-prince-hero-desktop.webp', {
    as: 'image',
    type: 'image/webp',
    fetchPriority: 'high',
    media: '(min-width: 768px)',
  });
  const faqSchema = createFAQPageSchema(homeContent.faq);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Carousel */}
      <HeroCarousel slides={homeContent.hero.slides} />

      {/* Proof Strip */}
      <ProofStrip facts={homeContent.proofStrip.facts} />

      {/* About Mother Properties */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6 tracking-tight">
              {homeContent.about.title}
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 font-light leading-relaxed">
              {homeContent.about.summary}
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.3}>
            <Button
              href={homeContent.about.cta.href}
              variant="primary"
              size="lg"
              className="shadow-xl focus:ring-forest-500"
            >
              {homeContent.about.cta.text}
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Why Mother Properties */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            {homeContent.whyUs.title}
          </h2>
        </div>
        <FeatureGrid features={homeContent.whyUs.features} columns={4} />
      </Section>

      {/* Trust Section: How We Verify a Project */}
      <Section background="white">
        <TrustSection
          title={homeContent.trustSteps.title}
          subtitle={homeContent.trustSteps.subtitle}
          steps={homeContent.trustSteps.steps}
        />
      </Section>

      {/* Featured Project: Coffee Prince — Conversion-Ready Card */}
      <Section background="cream">
        <div className="text-center mb-12">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Featured Project
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-gray-600 font-light">
              Our flagship managed coffee farmland in the Western Ghats
            </p>
          </Reveal>
        </div>
        <Reveal width="100%" delay={0.3}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/Coffee-plantation.jpg"
                  alt="Coffee Prince — managed coffee farmland in the Western Ghats"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-forest-900 text-xs font-bold px-3 py-1 rounded-full">
                    {homeContent.projectCard.badge}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src="/images/coffee_prince_logo_gold_transparent_4000.png"
                      alt="Coffee Prince logo"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                    <h3 className="text-2xl font-display font-bold text-gray-900">
                      {homeContent.projectCard.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {homeContent.projectCard.summary}
                  </p>

                  {/* Facts */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-forest-500" />
                      <span className="text-gray-700">{homeContent.projectCard.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Sprout className="w-4 h-4 text-forest-500" />
                      <span className="text-gray-700">{homeContent.projectCard.cropModel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-forest-500" />
                      <span className="text-gray-700">{homeContent.projectCard.plotSizes}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="text-xs text-forest-600 font-medium bg-forest-50 px-3 py-1.5 rounded-lg inline-block mb-4">
                    {homeContent.projectCard.projectStatus}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {homeContent.projectCard.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-cream-100 text-gray-600 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2">
                  <Button
                    href="/site-visit/"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Book a Site Visit
                  </Button>
                  <Button
                    href="/projects/coffee-prince/#catalogue"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Get the Catalogue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* How It Works */}
      <Section background="green">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            {homeContent.howItWorks.title}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Timeline steps={homeContent.howItWorks.steps} />
        </div>
      </Section>

      {/* Lead Magnet: Buyer Guide */}
      <Section background="white">
        <LeadMagnetSection />
      </Section>

      {/* FAQ */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={homeContent.faq} />
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <CTASection
          title={homeContent.cta.title}
          subtitle={homeContent.cta.subtitle}
          primaryButton={homeContent.cta.primaryButton}
          secondaryButton={homeContent.cta.secondaryButton}
        />
      </Section>
    </>
  );
}
