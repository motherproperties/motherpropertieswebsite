/**
 * About page - Mother Properties company information and Director's message
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { DirectorMessage } from '@/components/shared/DirectorMessage';
import { aboutContent } from '@/lib/copy/motherProperties';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'About Mother Properties – Premium Farmland Real Estate Company',
  description:
    'Learn about Mother Properties, its managed farmland approach, company values and leadership.',
  keywords: 'about Mother Properties, farmland company, real estate, mission, values, leadership, Bangalore',
  openGraph: {
    title: 'About Mother Properties – Our Story & Mission',
    description: 'Discover Mother Properties and its approach to managed farmland and buyer documentation.',
    url: '/about/',
    images: ['/images/director-suresh-robert.jpg'],
  },
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.hero.title} subtitle={aboutContent.hero.subtitle} />

      {/* Brand Story */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none space-y-4">
            {aboutContent.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Director's Message */}
      <Section background="cream">
        <DirectorMessage director={aboutContent.director} />
      </Section>

      {/* Values & Approach */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Our Values & Approach
          </h2>
        </div>
        <FeatureGrid features={aboutContent.values} columns={4} />
      </Section>

      {/* Happy Club */}
      <Section background="green">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 tracking-wide">
              {aboutContent.happyClub.title}
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-cream-100/90 font-light leading-relaxed">{aboutContent.happyClub.description}</p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
