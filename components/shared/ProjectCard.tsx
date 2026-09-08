/**
 * ProjectCard component - Card for displaying project summaries
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ProjectSummary } from '@/lib/types';

interface ProjectCardProps {
  project: ProjectSummary;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 relative ${featured ? 'ring-1 ring-gold-400/50 shadow-2xl' : 'hover:shadow-xl hover:border-gold-300'
        }`}
    >
      {/* Featured Banner */}
      {featured && (
        <div className="absolute top-0 right-0 bg-gold-500 text-forest-900 text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
          FEATURED
        </div>
      )}

      <div className="p-8 h-full flex flex-col relative">
        {/* Background Pattern on Hover */}
        <div className="absolute inset-0 bg-forest-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex-1">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            {project.logo ? (
              <div className="w-20 h-20 bg-cream-50 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner border border-cream-100 p-2 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ) : (
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center animate-pulse">
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-forest-800 transition-colors">
            {project.name}
          </h3>

          {/* Summary */}
          <p className="text-gray-600 mb-6 leading-relaxed font-light">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cream-50 text-coffee-700 text-xs font-medium uppercase tracking-wider rounded-lg border border-cream-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Area */}
        {project.logo && (
          <div className="mt-auto pt-6 border-t border-gray-100 relative z-10">
            <Button href={`/${project.slug}`} variant="primary" className="w-full justify-center group-hover:bg-forest-600 shadow-md">
              Explore Project
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
