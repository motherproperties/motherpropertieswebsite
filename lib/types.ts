/**
 * Type definitions for Mother Properties website
 * These types ensure type safety across all content modules
 */

// ─── Content Types ───────────────────────────────────────────────────────────

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
  verifiedDate?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  date?: string;
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

// ─── Proof & Trust Types ─────────────────────────────────────────────────────

export interface ProofFact {
  icon: string;
  label: string;
  value: string;
  source?: string;
  sourceDate?: string;
}

export interface TrustStep {
  icon: string;
  title: string;
  description: string;
  details: string;
}

// ─── Ownership & Documentation Types ─────────────────────────────────────────

export interface OwnershipItem {
  label: string;
  description: string;
}

export interface OwnershipComparison {
  whatYouOwn: OwnershipItem[];
  whatIsManaged: OwnershipItem[];
  whatIsPlanned: OwnershipItem[];
}

export interface DocumentationStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ─── At-a-Glance Types ──────────────────────────────────────────────────────

export interface AtAGlanceFact {
  icon: string;
  label: string;
  value: string;
  disclaimer?: string;
}

// ─── Management Model Types ──────────────────────────────────────────────────

export interface ManagementActivity {
  activity: string;
  frequency: string;
  managedBy: string;
}

export interface ManagementModel {
  activities: ManagementActivity[];
  updateMechanism: string;
  ownerResponsibilities: string[];
  fees: string;
  exclusions: string[];
}

// ─── Lead Generation Types ───────────────────────────────────────────────────

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'site_visit_proposed'
  | 'site_visit_confirmed'
  | 'visited'
  | 'nurture'
  | 'converted'
  | 'lost'
  | 'invalid';

export type LeadIntent =
  | 'weekend_home'
  | 'farmland_ownership'
  | 'investment_research'
  | 'nri_enquiry'
  | 'property_consultancy'
  | 'site_visit'
  | 'catalogue_download'
  | 'other';

export type FormType =
  | 'contact'
  | 'catalogue_download'
  | 'site_visit'
  | 'lead_magnet'
  | 'callback_request';

export interface Lead {
  id: string;
  submissionId: string;
  timestamp: string;

  // Contact
  name: string;
  email: string;
  phone: string;
  city?: string;
  country?: string;

  // Qualification
  intent: LeadIntent;
  budgetRange?: string;
  preferredContactMethod?: string;
  preferredCallTime?: string;
  projectInterest?: string;
  message?: string;

  // Attribution
  source: string;
  landingPage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  formType: FormType;

  // Consent & Compliance
  consentGiven: boolean;
  consentTimestamp?: string;

  // Lead Management
  status: LeadStatus;
  owner?: string;
  nextAction?: string;
  notes?: string;
  contactHistory: Array<{
    timestamp: string;
    channel: string;
    note: string;
  }>;
  notification: {
    status: 'pending' | 'sent' | 'failed';
    attempts: number;
    sentAt?: string;
    lastError?: string;
  };

  // Site Visit specific
  siteVisitDate?: string;
  siteVisitAlternateDate?: string;
  siteVisitPickupLocation?: string;
  siteVisitVisitors?: number;
}

export interface SiteVisitRequest {
  name: string;
  email: string;
  phone: string;
  city?: string;
  preferredDate: string;
  alternateDate?: string;
  pickupLocation?: string;
  numberOfVisitors?: number;
  message?: string;
  consent: boolean;
}

// ─── Project Data Model (Reusable) ───────────────────────────────────────────

export interface ProjectData {
  slug: string;
  name: string;
  logo?: string;
  tagline: string;
  location: {
    region: string;
    district?: string;
    state: string;
    driveTimeFromBangalore?: string;
    coordinates?: { lat: number; lng: number };
  };
  acreage: string;
  plotSizes: string;
  cropMix: CropInfo[];
  ownershipModel: string;
  currentPhase: string;
  projectStatus: string;
  amenities: Amenity[];
  phases: Phase[];
  gallery: GalleryImage[];
  faq: FAQItem[];
  atAGlance: AtAGlanceFact[];
  ownership: OwnershipComparison;
  documentation: DocumentationStep[];
  management?: ManagementModel;
}
