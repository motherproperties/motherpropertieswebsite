# Design Document: Mother Properties Website

## Overview

The Mother Properties website is a production-ready Next.js marketing site that showcases the Mother Properties brand and its flagship Coffee Prince managed farmlands project. The application uses Static Site Generation (SSG) with the App Router architecture, providing a fast, SEO-friendly, and maintainable solution.

### Key Design Goals

1. **Premium User Experience**: Elegant, modern design that conveys trust and quality
2. **Content Editability**: All copy stored in TypeScript modules for easy non-technical editing
3. **Performance**: Optimized images, static generation, and minimal JavaScript
4. **Accessibility**: WCAG 2.1 AA compliance with keyboard navigation and screen reader support
5. **Maintainability**: Clean component architecture with clear separation of concerns

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion 10+
- **Icons**: lucide-react
- **Image Optimization**: next/image

## Architecture

### Application Structure

```
mother-properties-website/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── coffeeprince/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileNav.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Section.tsx
│   │   ├── PageHero.tsx
│   │   ├── Badge.tsx
│   │   └── Button.tsx
│   ├── home/
│   │   ├── HeroCarousel.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── Timeline.tsx
│   │   └── CTASection.tsx
│   ├── shared/
│   │   ├── ProjectCard.tsx
│   │   ├── DirectorMessage.tsx
│   │   ├── QuoteCallout.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── ContactForm.tsx
│   └── coffeeprince/
│       ├── ImageCarousel.tsx
│       ├── PhasesSection.tsx
│       └── AmenitiesGrid.tsx
├── lib/
│   ├── siteConfig.ts
│   ├── types.ts
│   └── copy/
│       ├── motherProperties.ts
│       └── coffeePrince.ts
├── public/
│   ├── motherproperties-logo.png
│   ├── coffeeprince-logo.png
│   ├── director-suresh-robert.jpg
│   └── images/
│       ├── motherproperties-hero-1.jpg
│       ├── coffee-plantation-1.jpg
│       └── ...
└── tailwind.config.ts
```

### Routing Architecture

The application uses Next.js App Router with file-based routing:

- **Static Routes**: All pages are statically generated at build time
- **No Dynamic Routes**: No `[slug]` patterns needed for this version
- **Metadata Per Route**: Each route defines its own SEO metadata
- **Shared Layout**: Root layout provides header, footer, and global styles

### Data Flow

```
Content Modules (lib/copy/*.ts)
    ↓
Page Components (app/*/page.tsx)
    ↓
Presentational Components (components/*)
    ↓
Rendered HTML (Static)
```

All content flows from TypeScript modules into page components, which pass data as props to presentational components. No client-side data fetching is required.

## Components and Interfaces

### Layout Components

#### Header Component

**Purpose**: Provides consistent navigation across all pages

**Props Interface**:
```typescript
interface HeaderProps {
  // No props - reads from siteConfig
}
```

**Behavior**:
- Desktop: Horizontal navigation with logo on left, links on right
- Mobile: Logo on left, hamburger menu on right
- Sticky positioning on scroll
- Active link highlighting based on current route

**Implementation Notes**:
- Use `usePathname()` from `next/navigation` for active state
- Implement smooth scroll for anchor links
- Z-index: 50 to stay above content

#### MobileNav Component

**Purpose**: Provides mobile navigation overlay

**Props Interface**:
```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Behavior**:
- Full-screen overlay with backdrop blur
- Slide-in animation from right
- Close on link click or backdrop click
- Trap focus within menu when open

#### Footer Component

**Purpose**: Provides site-wide footer with contact info and links

**Props Interface**:
```typescript
interface FooterProps {
  // No props - reads from siteConfig
}
```

**Content Sections**:
1. Brand section (logo + tagline)
2. Quick links (navigation)
3. Contact information
4. Social media icons
5. Copyright notice

### UI Components

#### Section Component

**Purpose**: Consistent section wrapper with spacing and optional background

**Props Interface**:
```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'green' | 'gradient';
  id?: string;
}
```

**Styling**:
- Consistent padding: `py-16 md:py-24`
- Max width container: `max-w-7xl mx-auto px-4`
- Background variants via Tailwind classes

#### PageHero Component

**Purpose**: Page title section with optional subtitle

**Props Interface**:
```typescript
interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}
```

**Styling**:
- Large heading (h1): `text-4xl md:text-5xl lg:text-6xl`
- Centered text with optional background image overlay
- Gradient text for emphasis

#### Badge Component

**Purpose**: Small label for tags and categories

**Props Interface**:
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}
```

### Home Page Components

#### HeroCarousel Component

**Purpose**: Auto-advancing hero carousel with multiple slides

**Props Interface**:
```typescript
interface HeroSlide {
  image: string;
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoAdvanceInterval?: number; // default 6500ms
}
```

**State Management**:
```typescript
const [currentSlide, setCurrentSlide] = useState(0);
const [isPaused, setIsPaused] = useState(false);
```

**Behavior**:
- Auto-advance with configurable interval
- Pause on hover
- Manual navigation with prev/next buttons
- Dot indicators for slide position
- Keyboard navigation (arrow keys)
- Touch swipe support on mobile

**Accessibility**:
- ARIA labels for controls
- `role="region"` with `aria-label="Hero carousel"`
- Announce slide changes to screen readers

#### FeatureGrid Component

**Purpose**: Grid layout for feature cards

**Props Interface**:
```typescript
interface Feature {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}
```

**Layout**:
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Card styling: rounded corners, shadow, hover effect
- Icon rendering using lucide-react dynamic imports

#### Timeline Component

**Purpose**: Vertical timeline for process steps

**Props Interface**:
```typescript
interface TimelineStep {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}
```

**Styling**:
- Vertical line connecting steps
- Numbered circles for each step
- Alternating layout on desktop (optional)

### Shared Components

#### ProjectCard Component

**Purpose**: Card for displaying project summaries

**Props Interface**:
```typescript
interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    logo?: string;
    summary: string;
    tags: string[];
    badge?: string;
  };
  featured?: boolean;
}
```

**Behavior**:
- Click navigates to project page
- Hover effect with scale animation
- Featured variant has enhanced styling

#### DirectorMessage Component

**Purpose**: Two-column layout for Director's message

**Props Interface**:
```typescript
interface DirectorMessageProps {
  image: string;
  name: string;
  title: string;
  message: string; // Can contain HTML or markdown
  signature?: string;
}
```

**Layout**:
- Desktop: Image left, text right (or vice versa)
- Mobile: Stacked (image top, text bottom)
- Image: rounded with subtle shadow

#### QuoteCallout Component

**Purpose**: Large inspirational quote with background

**Props Interface**:
```typescript
interface QuoteCalloutProps {
  quote: string;
  backgroundImage?: string;
}
```

**Styling**:
- Large typography: `text-2xl md:text-4xl`
- Centered text
- Optional background image with overlay
- Gradient or solid background

#### FAQAccordion Component

**Purpose**: Expandable FAQ list

**Props Interface**:
```typescript
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}
```

**State Management**:
```typescript
const [openIndex, setOpenIndex] = useState<number | null>(null);
```

**Behavior**:
- Click question to expand/collapse
- Only one item open at a time
- Smooth height animation
- Chevron icon rotation

**Accessibility**:
- `role="button"` on questions
- `aria-expanded` attribute
- Keyboard navigation (Enter/Space to toggle)

#### ContactForm Component

**Purpose**: Contact form with validation

**Props Interface**:
```typescript
interface ContactFormProps {
  defaultInterest?: string; // Pre-select "Coffee Prince" when coming from that page
}
```

**Form Fields**:
```typescript
interface FormData {
  name: string;
  email: string;
  phone: string;
  interestedIn: 'general' | 'coffeeprince' | 'other';
  message: string;
}
```

**Validation Rules**:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Required, valid phone format (flexible)
- Message: Required, min 10 characters

**State Management**:
```typescript
const [formData, setFormData] = useState<FormData>(initialState);
const [errors, setErrors] = useState<Partial<FormData>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitSuccess, setSubmitSuccess] = useState(false);
```

**Behavior**:
- Client-side validation on blur and submit
- Display inline error messages
- On submit: log to console (TODO: integrate backend)
- Show success message after submission
- Clear form after successful submission

### Coffee Prince Components

#### ImageCarousel Component

**Purpose**: Gallery carousel for Coffee Prince images

**Props Interface**:
```typescript
interface GalleryImage {
  src: string;
  alt: string;
  creditLabel?: string;
  creditUrl?: string;
}

interface ImageCarouselProps {
  images: GalleryImage[];
}
```

**State Management**:
```typescript
const [currentIndex, setCurrentIndex] = useState(0);
```

**Behavior**:
- Manual navigation with prev/next buttons
- Dot indicators
- Touch swipe on mobile
- Keyboard navigation
- Optional lightbox view (click to enlarge)

**Accessibility**:
- Alt text for all images
- ARIA labels for controls
- Keyboard navigation

#### PhasesSection Component

**Purpose**: Display project development phases

**Props Interface**:
```typescript
interface Phase {
  title: string;
  subtitle?: string;
  description: string;
}

interface PhasesSectionProps {
  phases: Phase[];
}
```

**Layout**:
- Card-based layout
- Sequential numbering
- Optional timeline connector

#### AmenitiesGrid Component

**Purpose**: Grid display of amenities

**Props Interface**:
```typescript
interface Amenity {
  name: string;
  description?: string;
  icon?: string;
}

interface AmenitiesGridProps {
  amenities: Amenity[];
  disclaimer?: string;
}
```

**Layout**:
- Responsive grid
- Icon + text layout
- Optional disclaimer at bottom

## Data Models

### Site Configuration

**File**: `lib/siteConfig.ts`

```typescript
export const siteConfig = {
  brand: {
    name: 'Mother Properties',
    tagline: 'Curated Farmlands & Nature-Led Living',
    website: 'www.motherproperties.net',
  },
  contact: {
    email: 'motherpropertiesblr@gmail.com',
    phones: ['+91 98450 42789', '+91 90350 51133'],
    address: {
      line1: '#1831, 1st Floor, 41st Cross, 22nd Main',
      line2: 'Jayanagar 9th Block, Near Jain College',
      city: 'Bangalore',
      pincode: '560 069',
    },
  },
  social: {
    instagram: 'https://instagram.com/motherproperties', // placeholder
    linkedin: 'https://linkedin.com/company/motherproperties', // placeholder
  },
  seo: {
    defaultTitle: 'Mother Properties – Curated Farmlands & Nature-Led Living',
    defaultDescription: 'Mother Properties is a trusted brand creating curated managed farmlands and lifestyle-driven real estate in harmony with nature.',
    ogImage: '/og-motherproperties.png',
  },
};
```

### Type Definitions

**File**: `lib/types.ts`

```typescript
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
```

### Mother Properties Content

**File**: `lib/copy/motherProperties.ts`

```typescript
import { Feature, TimelineStep, Testimonial, FAQItem, ProjectSummary } from '../types';

export const homeContent = {
  hero: {
    slides: [
      {
        image: '/images/motherproperties-hero-1.jpg',
        headline: 'NATURE IS THE NEW LUXURY',
        subheadline: 'Discover curated farmlands where green meets gold',
        primaryCTA: { text: 'Explore Coffee Prince', href: '/coffeeprince' },
        secondaryCTA: { text: 'View All Projects', href: '/projects' },
      },
      // ... more slides
    ],
  },
  about: {
    title: 'About Mother Properties',
    summary: 'Mother Properties brings decades of real estate expertise...',
    cta: { text: 'Know More About Us', href: '/about' },
  },
  whyUs: {
    title: 'Why Mother Properties',
    features: [
      {
        icon: 'Leaf',
        title: 'Curated Farmlands & Managed Estates',
        description: 'Carefully selected properties...',
      },
      // ... more features
    ] as Feature[],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        title: 'Discover & Consultation',
        description: 'Explore our projects...',
      },
      // ... more steps
    ] as TimelineStep[],
  },
  testimonials: [
    {
      name: 'Rajesh Kumar',
      role: 'Investor',
      quote: 'The transparency and professionalism...',
    },
    // ... more testimonials
  ] as Testimonial[],
  faq: [
    {
      question: 'What does Mother Properties do?',
      answer: 'Mother Properties specializes in...',
    },
    // ... more FAQs
  ] as FAQItem[],
};

export const aboutContent = {
  hero: {
    title: 'About Mother Properties',
    subtitle: 'Building nature-led, long-term assets for generations',
  },
  story: {
    paragraphs: [
      'Mother Properties was founded with a vision...',
      'With years of experience in real estate...',
      'Our commitment to trust, transparency...',
    ],
  },
  director: {
    image: '/director-suresh-robert.jpg',
    name: 'Suresh Robert',
    title: 'Founder & Director, Mother Properties',
    message: 'With over 23 years of experience...',
    signature: 'Suresh Robert',
  },
  values: [
    {
      icon: 'Shield',
      title: 'Credibility & Due Diligence',
      description: 'Every property undergoes rigorous verification...',
    },
    // ... more values
  ] as Feature[],
  happyClub: {
    title: 'Happy Club',
    description: 'An extension of our vision...',
  },
};

export const projectsContent = {
  hero: {
    title: 'Our Projects',
    subtitle: 'Curated farmlands and nature-centric developments',
  },
  projects: [
    {
      slug: 'coffeeprince',
      name: 'Coffee Prince',
      logo: '/coffeeprince-logo.png',
      summary: 'Managed coffee farmlands in the Sakleshpur region...',
      tags: ['Managed Farmland', 'Coffee Estate Experience'],
      badge: 'Featured',
    },
    // ... placeholder projects
  ] as ProjectSummary[],
};
```

### Coffee Prince Content

**File**: `lib/copy/coffeePrince.ts`

```typescript
import { FAQItem, Phase, Amenity, GalleryImage } from '../types';

export const coffeePrinceContent = {
  hero: {
    logo: '/coffeeprince-logo.png',
    headline: 'Coffee Prince – Managed Coffee Farmlands in the Western Ghats',
    subheadline: 'Titled, curated coffee farmlands in the Sakleshpur region...',
    badges: ['Managed Farmland', 'Sakleshpur, Western Ghats', 'Approx. 35+ Acres'],
    taglines: ['GREEN IS THE NEW GOLD', 'NATURE IS THE NEW LUXURY'],
    backgroundImage: '/images/coffee-plantation-hero.jpg',
  },
  snapshot: {
    title: 'Project Snapshot',
    intro: 'Coffee Prince offers titled farmlands...',
    blocks: [
      {
        title: 'Project',
        description: 'Coffee Prince by Mother Properties is a premium...',
      },
      {
        title: 'Developer',
        description: 'Mother Properties is a real estate brand...',
      },
      {
        title: 'Location',
        description: 'In the Sakleshpur belt of the Western Ghats...',
      },
      {
        title: 'Scale & Plots',
        description: '~35+ acres with multiple plot sizes...',
      },
    ],
  },
  directorAngle: {
    summary: 'Coffee Prince is led by the same vision from Suresh Robert...',
    cta: { text: 'Read Full Director Message', href: '/about' },
  },
  whyManagedFarmlands: {
    title: 'Why Managed Farmlands',
    intro: 'Managed farmland is a concept where you own the land...',
    features: [
      {
        icon: 'Sprout',
        title: 'Sustainable Living',
        description: 'Connect with nature while building a legacy asset...',
      },
      // ... more features
    ],
  },
  estateHighlights: {
    title: 'Estate Highlights',
    highlights: [
      {
        icon: 'FileCheck',
        title: 'Titled Land',
        description: 'Secure, clear ownership with proper documentation',
      },
      {
        icon: 'Maximize',
        title: 'Plot Variants',
        description: 'Plots from ~6,000 sq.ft upwards to suit various preferences',
      },
      // ... more highlights
    ],
  },
  farmingModel: {
    title: 'Farming Model',
    subtitle: 'Growing Prosperity Through Nature\'s Rhythm',
    intro: 'Coffee as primary crop, with intercropped pepper...',
    crops: [
      {
        name: 'Coffee',
        description: 'Builds medium-term cash flow as plants mature',
        icon: 'Coffee',
      },
      {
        name: 'Pepper',
        description: 'Climbs on existing trees and boosts annual income',
        icon: 'Leaf',
      },
      {
        name: 'Arecanut',
        description: 'Long-term crop that strengthens overall asset value',
        icon: 'TreePine',
      },
    ],
    additionalInfo: 'Focus on soil health, water balance, and sustainable yield...',
  },
  resortModel: {
    title: 'Resort Model',
    subtitle: 'Dual-Benefit Investment',
    intro: 'A central eco-resort concept at the heart of the estate...',
    benefits: [
      'Vacation Home Privileges',
      'Potential Rental Returns',
      'Dual-Benefit (personal use + income)',
      'Estate-Led Community & Experiences',
    ],
    disclaimer: 'This is a conceptual resort model and details may change.',
  },
  phases: [
    {
      title: 'Phase 1',
      subtitle: 'Land Acquisition & Plantation Setup',
      description: 'Securing titled land and establishing coffee plantations...',
    },
    // ... more phases
  ] as Phase[],
  layoutAndAmenities: {
    layoutNote: 'Conceptual Layout – not to scale',
    amenities: [
      { name: 'Cottages / Villas', icon: 'Home' },
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Indoor Games', icon: 'Gamepad2' },
      { name: 'Outdoor Games', icon: 'Trophy' },
      { name: 'Children\'s Play Area', icon: 'Baby' },
      { name: 'Plantation Walks & Trails', icon: 'Footprints' },
      { name: 'Bonfire / Community Spaces', icon: 'Flame' },
      { name: '& many more curated experiences' },
    ] as Amenity[],
    disclaimer: 'Layout and amenities are conceptual and subject to refinement.',
  },
  quote: {
    text: 'Between the hills and the mist lies a quiet promise of peace, growth, and belonging.',
    backgroundImage: '/images/coffee-mist.jpg',
  },
  gallery: [
    {
      src: '/images/coffee-plantation-1.jpg',
      alt: 'Misty coffee plantation in the hills',
      creditLabel: 'Unsplash',
      creditUrl: 'https://unsplash.com',
    },
    // ... more images (6-10 total)
  ] as GalleryImage[],
  faq: [
    {
      question: 'What is a managed coffee farmland?',
      answer: 'A managed coffee farmland is a property where...',
    },
    // ... more FAQs (6-10 total)
  ] as FAQItem[],
  siteVisit: {
    title: 'Experience the Beauty of Coffee Prince',
    subtitle: 'Plan a Site Visit',
    description: 'Join us for guided tours, plantation walks...',
    cta: {
      primary: { text: 'Plan a Site Visit', href: '/contact?interest=coffeeprince' },
      whatsapp: { text: 'WhatsApp Us', href: 'https://wa.me/919845042789' },
      call: { text: 'Call Us', href: 'tel:+919845042789' },
    },
  },
};
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Consistent Layout Across All Pages

*For any* page route in the application, the rendered page should include both a Header component and a Footer component with consistent structure and styling.

**Validates: Requirements 1.2, 5.1, 5.3**

### Property 2: Navigation Structure Consistency

*For any* page in the application, the navigation links in the header should be identical in order, text, and destination URLs.

**Validates: Requirements 1.5**

### Property 3: Responsive Layout Adaptation

*For any* page and any viewport size (mobile, tablet, desktop), the layout should adapt appropriately without horizontal scrolling or broken layouts.

**Validates: Requirements 2.3**

### Property 4: Image Component Usage

*For any* image rendered in the application, it should use the Next.js Image component rather than standard HTML img tags.

**Validates: Requirements 2.4, 22.1**

### Property 5: Content Separation

*For any* component that displays text content, the content should be imported from lib/copy modules rather than hardcoded in the component JSX.

**Validates: Requirements 3.4, 23.4**

### Property 6: TypeScript Type Safety

*For any* content data structure (FAQ items, amenities, phases, gallery images, project summaries), the data should conform to defined TypeScript types from lib/types.ts.

**Validates: Requirements 3.5**

### Property 7: Card Styling Consistency

*For any* card or container component, it should use rounded-2xl corners and shadow styling classes.

**Validates: Requirements 4.2**

### Property 8: Footer Completeness

*For any* page, the footer should contain all required elements: logo, tagline, contact information (email, phones, address), quick links, social icons, and copyright notice.

**Validates: Requirements 5.3**

### Property 9: Hero Carousel Slide Overlays

*For any* slide in the hero carousel, it should include text overlay with headline and subheadline.

**Validates: Requirements 6.2**

### Property 10: Form Validation Coverage

*For any* required field in the contact form, submitting the form with that field empty should trigger a validation error message for that specific field.

**Validates: Requirements 18.3**

### Property 11: HTML Lang Attribute

*For any* page rendered, the HTML element should have a lang="en" attribute.

**Validates: Requirements 19.1**

### Property 12: Open Graph Metadata

*For any* page rendered, the page should include Open Graph metadata tags (og:title, og:description, og:image).

**Validates: Requirements 19.4**

### Property 13: Single H1 Per Page

*For any* page rendered, the page should contain exactly one h1 element.

**Validates: Requirements 19.5**

### Property 14: Carousel Accessibility

*For any* carousel component (hero or image gallery), it should include ARIA attributes (aria-label, aria-live) and support keyboard navigation (arrow keys, Enter/Space).

**Validates: Requirements 20.5**

## Error Handling

### Client-Side Validation Errors

**Contact Form Validation**:
- Display inline error messages below each field
- Error messages should be clear and actionable
- Errors should clear when user corrects the input
- Form submission should be blocked until all errors are resolved

**Error Message Examples**:
```typescript
const errorMessages = {
  name: {
    required: 'Please enter your name',
    minLength: 'Name must be at least 2 characters',
  },
  email: {
    required: 'Please enter your email address',
    invalid: 'Please enter a valid email address',
  },
  phone: {
    required: 'Please enter your phone number',
    invalid: 'Please enter a valid phone number',
  },
  message: {
    required: 'Please enter a message',
    minLength: 'Message must be at least 10 characters',
  },
};
```

### Image Loading Errors

**Next.js Image Component**:
- Use placeholder blur for loading states
- Provide alt text for all images
- Handle missing images gracefully with fallback

**Implementation**:
```typescript
<Image
  src={imageSrc}
  alt={altText}
  placeholder="blur"
  blurDataURL="data:image/..." // Low-quality placeholder
  onError={(e) => {
    // Fallback to placeholder image
    e.currentTarget.src = '/images/placeholder.jpg';
  }}
/>
```

### Navigation Errors

**404 Handling**:
- Create custom 404 page (app/not-found.tsx)
- Provide helpful navigation back to main sections
- Maintain header and footer on error pages

### Animation Errors

**Motion Preference Detection**:
```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Conditionally apply animations
const animationProps = prefersReducedMotion
  ? {}
  : { initial: { opacity: 0 }, animate: { opacity: 1 } };
```

### Build-Time Errors

**TypeScript Compilation**:
- All TypeScript errors must be resolved before build
- Use strict mode for maximum type safety
- No `any` types except where absolutely necessary

**ESLint**:
- All ESLint errors must be resolved
- Warnings should be addressed or explicitly ignored with comments

## Testing Strategy

### Unit Testing

**Framework**: Vitest + React Testing Library

**Test Coverage Areas**:

1. **Component Rendering**:
   - Test that each component renders without errors
   - Test that props are correctly passed and displayed
   - Test conditional rendering logic

2. **User Interactions**:
   - Test button clicks and navigation
   - Test form input and validation
   - Test carousel navigation (prev/next, dots)
   - Test accordion expand/collapse
   - Test mobile menu open/close

3. **Form Validation**:
   - Test each validation rule individually
   - Test error message display
   - Test error clearing on correction
   - Test successful form submission

4. **Responsive Behavior**:
   - Test component rendering at different viewport sizes
   - Test mobile menu visibility based on screen size

**Example Unit Tests**:

```typescript
// ContactForm.test.tsx
describe('ContactForm', () => {
  it('should display error when name is empty', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
  });

  it('should display error when email is invalid', () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });

  it('should submit form when all fields are valid', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '+919876543210' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'I am interested in Coffee Prince' } });
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });
});

// FAQAccordion.test.tsx
describe('FAQAccordion', () => {
  const mockFAQs = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
  ];

  it('should expand item when clicked', () => {
    render(<FAQAccordion items={mockFAQs} />);
    const question1 = screen.getByText('Question 1');
    fireEvent.click(question1);
    expect(screen.getByText('Answer 1')).toBeVisible();
  });

  it('should collapse previously open item when opening new item', () => {
    render(<FAQAccordion items={mockFAQs} />);
    
    fireEvent.click(screen.getByText('Question 1'));
    expect(screen.getByText('Answer 1')).toBeVisible();
    
    fireEvent.click(screen.getByText('Question 2'));
    expect(screen.getByText('Answer 2')).toBeVisible();
    expect(screen.queryByText('Answer 1')).not.toBeVisible();
  });
});

// HeroCarousel.test.tsx
describe('HeroCarousel', () => {
  const mockSlides = [
    { image: '/img1.jpg', headline: 'Slide 1', subheadline: 'Sub 1', primaryCTA: { text: 'CTA', href: '/link' } },
    { image: '/img2.jpg', headline: 'Slide 2', subheadline: 'Sub 2', primaryCTA: { text: 'CTA', href: '/link' } },
  ];

  it('should advance to next slide when next button is clicked', () => {
    render(<HeroCarousel slides={mockSlides} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    
    const nextButton = screen.getByLabelText(/next slide/i);
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('should pause auto-advance on hover', () => {
    jest.useFakeTimers();
    render(<HeroCarousel slides={mockSlides} autoAdvanceInterval={1000} />);
    
    const carousel = screen.getByRole('region');
    fireEvent.mouseEnter(carousel);
    
    jest.advanceTimersByTime(2000);
    expect(screen.getByText('Slide 1')).toBeInTheDocument(); // Should not advance
    
    jest.useRealTimers();
  });
});
```

### Property-Based Testing

**Framework**: fast-check (for JavaScript/TypeScript)

**Property Test Coverage**:

Property-based tests will verify universal properties that should hold across all inputs. Each property test should run a minimum of 100 iterations with randomly generated inputs.

**Property Test 1: Consistent Layout Across All Pages**

```typescript
// **Feature: mother-properties-website, Property 1: Consistent Layout Across All Pages**
import fc from 'fast-check';
import { render } from '@testing-library/react';

describe('Property 1: Consistent Layout', () => {
  const pages = ['/', '/about', '/projects', '/coffeeprince', '/contact', '/privacy', '/terms'];
  
  it('should render header and footer on all pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pagePath) => {
          // Mock router for the page
          const { container } = render(<PageComponent path={pagePath} />);
          
          const header = container.querySelector('header');
          const footer = container.querySelector('footer');
          
          expect(header).toBeInTheDocument();
          expect(footer).toBeInTheDocument();
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property Test 2: Navigation Structure Consistency**

```typescript
// **Feature: mother-properties-website, Property 2: Navigation Structure Consistency**
describe('Property 2: Navigation Consistency', () => {
  const pages = ['/', '/about', '/projects', '/coffeeprince', '/contact'];
  
  it('should have identical navigation links on all pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        fc.constantFrom(...pages),
        (page1, page2) => {
          const nav1 = getNavigationLinks(page1);
          const nav2 = getNavigationLinks(page2);
          
          expect(nav1).toEqual(nav2);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property Test 3: Image Component Usage**

```typescript
// **Feature: mother-properties-website, Property 4: Image Component Usage**
describe('Property 4: Image Component Usage', () => {
  const pages = ['/', '/about', '/projects', '/coffeeprince', '/contact'];
  
  it('should use Next.js Image component for all images', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pagePath) => {
          const { container } = render(<PageComponent path={pagePath} />);
          
          // Check that no standard img tags exist (except those from Next.js Image)
          const imgTags = container.querySelectorAll('img');
          imgTags.forEach((img) => {
            // Next.js Image adds specific attributes
            expect(img).toHaveAttribute('loading');
            expect(img).toHaveAttribute('decoding');
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property Test 4: Form Validation Coverage**

```typescript
// **Feature: mother-properties-website, Property 10: Form Validation Coverage**
describe('Property 10: Form Validation', () => {
  const requiredFields = ['name', 'email', 'phone', 'message'];
  
  it('should show validation error for any empty required field', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...requiredFields),
        (fieldName) => {
          const { getByLabelText, getByRole, getByText } = render(<ContactForm />);
          
          // Fill all fields except the one being tested
          requiredFields.forEach((field) => {
            if (field !== fieldName) {
              const input = getByLabelText(new RegExp(field, 'i'));
              fireEvent.change(input, { target: { value: 'valid value' } });
            }
          });
          
          // Submit form
          fireEvent.click(getByRole('button', { name: /submit/i }));
          
          // Should show error for the empty field
          const errorRegex = new RegExp(`please enter.*${fieldName}`, 'i');
          expect(getByText(errorRegex)).toBeInTheDocument();
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property Test 5: Single H1 Per Page**

```typescript
// **Feature: mother-properties-website, Property 13: Single H1 Per Page**
describe('Property 13: Single H1', () => {
  const pages = ['/', '/about', '/projects', '/coffeeprince', '/contact', '/privacy', '/terms'];
  
  it('should have exactly one h1 element on any page', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...pages),
        (pagePath) => {
          const { container } = render(<PageComponent path={pagePath} />);
          
          const h1Elements = container.querySelectorAll('h1');
          expect(h1Elements).toHaveLength(1);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property Test 6: Carousel Accessibility**

```typescript
// **Feature: mother-properties-website, Property 14: Carousel Accessibility**
describe('Property 14: Carousel Accessibility', () => {
  it('should have ARIA attributes on all carousel instances', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({
          image: fc.string(),
          alt: fc.string(),
        }), { minLength: 2, maxLength: 10 }),
        (images) => {
          const { container } = render(<ImageCarousel images={images} />);
          
          const carousel = container.querySelector('[role="region"]');
          expect(carousel).toHaveAttribute('aria-label');
          
          const prevButton = container.querySelector('[aria-label*="previous"]');
          const nextButton = container.querySelector('[aria-label*="next"]');
          
          expect(prevButton).toBeInTheDocument();
          expect(nextButton).toBeInTheDocument();
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

**Framework**: Playwright

**Test Scenarios**:

1. **End-to-End User Journey**:
   - User lands on homepage
   - Clicks "Explore Coffee Prince" CTA
   - Navigates to Coffee Prince page
   - Scrolls through sections
   - Clicks "Plan a Site Visit"
   - Fills and submits contact form

2. **Mobile Navigation Flow**:
   - Open site on mobile viewport
   - Click hamburger menu
   - Navigate to different pages
   - Verify menu closes after navigation

3. **Form Submission Flow**:
   - Navigate to contact page
   - Fill form with valid data
   - Submit form
   - Verify success message

4. **Carousel Interactions**:
   - Test hero carousel auto-advance
   - Test manual navigation
   - Test pause on hover
   - Test keyboard navigation

### Accessibility Testing

**Tools**:
- axe-core (automated accessibility testing)
- Manual keyboard navigation testing
- Screen reader testing (NVDA/JAWS)

**Test Areas**:
- Keyboard navigation (Tab, Enter, Space, Arrow keys)
- Focus management (visible focus indicators)
- ARIA attributes (labels, roles, states)
- Color contrast (WCAG AA compliance)
- Alt text for images
- Form labels and error messages

### Performance Testing

**Metrics to Monitor**:
- Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1
- Time to Interactive (TTI) < 3.8s

**Testing Approach**:
- Run Lighthouse audits on all pages
- Test on throttled network (3G)
- Test on low-end devices
- Monitor bundle size

### Visual Regression Testing

**Tool**: Percy or Chromatic

**Test Coverage**:
- Screenshot each page at mobile, tablet, desktop viewports
- Test component states (hover, focus, active)
- Test dark mode (if implemented)
- Compare against baseline screenshots

## Design Patterns and Best Practices

### Component Composition

**Container/Presentational Pattern**:
- Page components (containers) fetch data from content modules
- Presentational components receive data via props
- No business logic in presentational components

**Example**:
```typescript
// Page component (container)
export default function HomePage() {
  const { hero, about, whyUs } = homeContent;
  
  return (
    <>
      <HeroCarousel slides={hero.slides} />
      <AboutSection content={about} />
      <FeatureGrid features={whyUs.features} />
    </>
  );
}

// Presentational component
export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}
```

### State Management

**Local State Only**:
- Use `useState` for component-level state
- Use `useReducer` for complex state logic (e.g., form state)
- No global state management needed (no Redux, Zustand, etc.)

**Example Form State**:
```typescript
const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
  phone: '',
  interestedIn: 'general',
  message: '',
});

const [errors, setErrors] = useState<Partial<FormData>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitSuccess, setSubmitSuccess] = useState(false);
```

### Styling Approach

**Tailwind CSS Utilities**:
- Use utility classes for most styling
- Create custom classes in `tailwind.config.ts` for brand colors
- Use `@apply` sparingly for repeated patterns

**Custom Theme Configuration**:
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f4',
          100: '#daf2e4',
          500: '#1e5631', // Deep forest green
          900: '#0d2818',
        },
        coffee: {
          50: '#faf7f5',
          100: '#f0e9e3',
          500: '#6f4e37', // Rich coffee brown
          900: '#3e2723',
        },
        cream: {
          50: '#fdfcfb',
          100: '#f8f5f0', // Warm beige/cream
          200: '#f0e9de',
        },
        gold: {
          500: '#d4af37', // Subtle gold accent
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
};
```

### Animation Guidelines

**Framer Motion Variants**:
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

// Usage
<motion.div {...fadeInUp}>
  <Card />
</motion.div>
```

**Respect Motion Preferences**:
```typescript
import { useReducedMotion } from 'framer-motion';

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = shouldReduceMotion
    ? {} // No animation
    : fadeInUp; // Full animation
  
  return <motion.div {...variants}>Content</motion.div>;
}
```

### Accessibility Patterns

**Keyboard Navigation**:
```typescript
function Carousel() {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Home') goToFirst();
    if (e.key === 'End') goToLast();
  };
  
  return (
    <div
      role="region"
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Carousel content */}
    </div>
  );
}
```

**Focus Management**:
```typescript
function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      firstFocusableRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <div role="dialog" aria-modal="true">
      <button ref={firstFocusableRef} onClick={onClose}>
        Close
      </button>
      {/* Navigation links */}
    </div>
  );
}
```

### Performance Optimization

**Image Optimization**:
```typescript
<Image
  src="/images/coffee-plantation.jpg"
  alt="Coffee plantation in misty hills"
  width={1200}
  height={800}
  quality={85}
  priority={false} // Only true for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

**Code Splitting**:
```typescript
// Dynamic imports for heavy components
const ImageCarousel = dynamic(() => import('@/components/ImageCarousel'), {
  loading: () => <div>Loading gallery...</div>,
  ssr: true,
});
```

**Font Optimization**:
```typescript
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});
```

## Deployment and Build Configuration

### Build Process

**Static Export**:
```json
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};
```

**Build Commands**:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:e2e": "playwright test"
  }
}
```

### Environment Variables

**Not Required**: Since this is a static site with no backend integration, no environment variables are needed for the initial version.

**Future Considerations**:
- API endpoints for form submission
- Analytics tracking IDs
- CMS integration keys

### SEO Configuration

**Sitemap Generation**:
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://www.motherproperties.net',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.motherproperties.net/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.motherproperties.net/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.motherproperties.net/coffeeprince',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.motherproperties.net/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
```

**Robots.txt**:
```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.motherproperties.net/sitemap.xml',
  };
}
```

## Future Enhancements

### Phase 2 Considerations

1. **Backend Integration**:
   - Form submission to email service (SendGrid, Mailgun)
   - CRM integration for lead management
   - Database for storing inquiries

2. **Content Management**:
   - Headless CMS integration (Contentful, Sanity)
   - Admin panel for content editing
   - Image upload and management

3. **Advanced Features**:
   - Virtual tour integration (360° images)
   - Interactive map for plot selection
   - Document download center
   - Blog/news section
   - Multilingual support (English, Hindi, Kannada)

4. **Analytics and Tracking**:
   - Google Analytics integration
   - Heatmap tracking (Hotjar)
   - Conversion tracking
   - A/B testing

5. **Performance**:
   - CDN integration
   - Advanced caching strategies
   - Progressive Web App (PWA) features

## Maintenance and Documentation

### Code Documentation

**Component Documentation**:
- Each component should have a JSDoc comment explaining its purpose
- Props interfaces should be well-documented
- Complex logic should have inline comments

**Example**:
```typescript
/**
 * HeroCarousel displays a full-width auto-advancing carousel
 * with manual navigation controls and pause-on-hover functionality.
 * 
 * @param slides - Array of slide objects with image, headline, and CTAs
 * @param autoAdvanceInterval - Time in ms between auto-advances (default: 6500)
 */
export function HeroCarousel({ slides, autoAdvanceInterval = 6500 }: HeroCarouselProps) {
  // Implementation
}
```

### Content Update Guide

**For Non-Technical Editors**:

1. **Updating Homepage Content**:
   - Open `lib/copy/motherProperties.ts`
   - Find the `homeContent` object
   - Edit text within quotes
   - Save file and rebuild site

2. **Updating Coffee Prince Content**:
   - Open `lib/copy/coffeePrince.ts`
   - Find the relevant section
   - Edit text within quotes
   - Save file and rebuild site

3. **Adding New FAQ**:
   ```typescript
   // Add to faq array
   {
     question: 'Your new question?',
     answer: 'Your detailed answer here.',
   },
   ```

4. **Updating Contact Information**:
   - Open `lib/siteConfig.ts`
   - Edit the `contact` object
   - Changes will reflect across entire site

### Version Control

**Git Workflow**:
- Main branch: production-ready code
- Development branch: active development
- Feature branches: individual features/fixes

**Commit Message Convention**:
```
feat: Add image carousel component
fix: Correct form validation logic
docs: Update README with setup instructions
style: Format code with Prettier
refactor: Simplify hero carousel logic
test: Add unit tests for ContactForm
```

## Conclusion

This design document provides a comprehensive blueprint for building the Mother Properties marketing website. The architecture emphasizes:

- **Maintainability**: Clear separation of content and code
- **Performance**: Static generation and optimized assets
- **Accessibility**: WCAG 2.1 AA compliance
- **Scalability**: Modular component architecture
- **Quality**: Comprehensive testing strategy

The implementation should follow this design closely while remaining flexible for reasonable adjustments based on real-world constraints and user feedback.
