/**
 * Projects page - List of all Mother Properties projects
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/Button';
import { projectsContent } from '@/lib/copy/motherProperties';

export const metadata: Metadata = {
  title: 'Our Projects – Mother Properties',
  description: 'Explore our curated farmland projects and nature-centric developments.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero title={projectsContent.hero.title} subtitle={projectsContent.hero.subtitle} />

      {/* Projects Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsContent.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured={project.badge === 'Featured'} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="cream">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            {projectsContent.cta.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{projectsContent.cta.description}</p>
          <Button href={projectsContent.cta.button.href} variant="primary" size="lg">
            {projectsContent.cta.button.text}
          </Button>
        </div>
      </Section>
    </>
  );
}
