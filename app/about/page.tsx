/**
 * About page - Mother Properties company information and Director's message
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { DirectorMessage } from '@/components/shared/DirectorMessage';
import { aboutContent } from '@/lib/copy/motherProperties';

export const metadata: Metadata = {
  title: 'About Us – Mother Properties',
  description:
    'Learn about Mother Properties, our vision, values, and the team behind curated managed farmlands.',
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {aboutContent.happyClub.title}
          </h2>
          <p className="text-lg text-gray-700">{aboutContent.happyClub.description}</p>
        </div>
      </Section>
    </>
  );
}
