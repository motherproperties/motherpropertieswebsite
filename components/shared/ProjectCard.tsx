/**
 * ProjectCard component - Card for displaying project summaries
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectSummary } from '@/lib/types';

interface ProjectCardProps {
  project: ProjectSummary;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
        featured ? 'ring-2 ring-gold-500' : ''
      }`}
    >
      <div className="p-6">
        {/* Logo */}
        {project.logo && (
          <div className="w-24 h-24 bg-cream-100 rounded-2xl flex items-center justify-center mb-4 overflow-hidden shadow-md">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={96}
              height={96}
              className="w-20 h-20 object-contain"
            />
          </div>
        )}

        {/* Badge */}
        {project.badge && (
          <div className="mb-3">
            <Badge variant="secondary">{project.badge}</Badge>
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{project.name}</h3>

        {/* Summary */}
        <p className="text-gray-600 mb-4">{project.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cream-100 text-coffee-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        {project.logo && (
          <Button href={`/${project.slug}`} variant="primary">
            View Project
          </Button>
        )}
      </div>
    </motion.div>
  );
}
