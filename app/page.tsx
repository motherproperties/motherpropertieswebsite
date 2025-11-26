/**
 * Homepage - Mother Properties main landing page
 */

import { HeroCarousel } from '@/components/home/HeroCarousel';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { Timeline } from '@/components/home/Timeline';
import { CTASection } from '@/components/home/CTASection';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { homeContent } from '@/lib/copy/motherProperties';

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel slides={homeContent.hero.slides} />

      {/* About Mother Properties */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {homeContent.about.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{homeContent.about.summary}</p>
          <Button href={homeContent.about.cta.href} variant="primary">
            {homeContent.about.cta.text}
          </Button>
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

      {/* Featured Project: Coffee Prince */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Project
          </h2>
          <p className="text-lg text-gray-600">
            Discover our flagship managed coffee farmland in the Western Ghats
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ProjectCard
            project={{
              slug: 'coffeeprince',
              name: 'Coffee Prince',
              logo: '/images/coffee_prince_logo_gold_transparent_4000.png',
              summary:
                'Managed coffee farmlands in the Sakleshpur region of the Western Ghats. Approximately 35+ acres of curated farmland blending natural beauty with modern living.',
              tags: ['Managed Farmland', 'Coffee Estate Experience', 'Western Ghats'],
              badge: 'Featured',
            }}
            featured
          />
        </div>
      </Section>

      {/* How It Works */}
      <Section background="green">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            {homeContent.howItWorks.title}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Timeline steps={homeContent.howItWorks.steps} />
        </div>
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
