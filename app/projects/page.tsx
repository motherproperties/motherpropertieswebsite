/**
 * Projects page - List of all Mother Properties projects
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/Button';
import { projectsContent } from '@/lib/copy/motherProperties';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Projects – Mother Properties Farmlands & Real Estate Developments',
  description: 'Explore Mother Properties curated farmland projects and nature-led developments. Coffee Prince and more verified real estate investments near Bangalore.',
  keywords: 'real estate projects, farmland projects, Coffee Prince, agricultural development, Bangalore properties, lifestyle projects',
  openGraph: {
    title: 'Our Projects – Mother Properties',
    description: 'Curated farmland and nature-led real estate developments by Mother Properties.',
    images: ['/images/lifestyle-nature.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero title={projectsContent.hero.title} subtitle={projectsContent.hero.subtitle} />

      {/* Projects Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsContent.projects.map((project, index) => (
            <Reveal key={project.slug} width="100%" delay={index * 0.1}>
              <ProjectCard project={project} featured={project.badge === 'Featured'} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="cream">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-6">
              {projectsContent.cta.title}
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 font-light">{projectsContent.cta.description}</p>
          </Reveal>
          <Reveal width="100%" delay={0.3}>
            <Button href={projectsContent.cta.button.href} variant="primary" size="lg" className="shadow-lg">
              {projectsContent.cta.button.text}
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
