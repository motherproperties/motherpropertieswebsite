/**
 * Type definitions for Mother Properties website
 * These types ensure type safety across all content modules
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Amenity {
  name: string;
  description?: string;
  icon?: string;
}

export interface Phase {
  title: string;
  subtitle?: string;
  description: string;
  status?: 'completed' | 'in-progress' | 'planning';
}

export interface GalleryImage {
  src: string;
  alt: string;
  creditLabel?: string;
  creditUrl?: string;
}

export interface ProjectSummary {
  slug: string;
  name: string;
  logo?: string;
  summary: string;
  tags: string[];
  badge?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface HeroSlide {
  image: string;
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export interface DirectorInfo {
  image: string;
  name: string;
  title: string;
  message: string;
  signature?: string;
}

export interface CropInfo {
  name: string;
  description: string;
  icon: string;
}
