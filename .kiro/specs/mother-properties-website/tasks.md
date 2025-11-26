# Implementation Plan: Mother Properties Website

- [x] 1. Initialize Next.js project and configure development environment



  - Create Next.js 14+ project with TypeScript and App Router
  - Install dependencies: Tailwind CSS, Framer Motion, lucide-react, Vitest, React Testing Library, fast-check
  - Configure Tailwind with custom theme (brand colors, fonts, spacing)
  - Set up ESLint and TypeScript strict mode
  - Create basic folder structure (app, components, lib, public)
  - _Requirements: 23.1, 23.2_

- [ ] 2. Set up content modules and type definitions
  - [x] 2.1 Create TypeScript type definitions in lib/types.ts


    - Define interfaces for FAQItem, Amenity, Phase, GalleryImage, ProjectSummary, Feature, TimelineStep, Testimonial
    - _Requirements: 3.5, 23.3_
  - [x] 2.2 Create site configuration in lib/siteConfig.ts


    - Define brand information, contact details, social links, and SEO defaults
    - _Requirements: 3.1, 5.4_
  - [x] 2.3 Create Mother Properties content module in lib/copy/motherProperties.ts


    - Define homeContent, aboutContent, and projectsContent with all sections
    - _Requirements: 3.2, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 8.2, 8.3, 8.4, 8.5, 8.6, 9.2_
  - [x] 2.4 Create Coffee Prince content module in lib/copy/coffeePrince.ts



    - Define all Coffee Prince sections: hero, snapshot, farming model, resort model, phases, amenities, gallery, FAQ, site visit
    - _Requirements: 3.3, 10.1, 10.2, 10.3, 10.4, 10.5, 11.1, 11.2, 11.3, 11.4, 11.5, 12.1, 12.2, 12.3, 12.4, 12.5, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 16.1, 16.2, 16.3, 16.4, 16.5, 17.1, 17.2, 17.3, 17.4, 17.5_

- [ ] 3. Create base UI components
  - [x] 3.1 Create Section component


    - Implement consistent section wrapper with spacing and background variants
    - _Requirements: 4.2_
  - [x] 3.2 Create PageHero component


    - Implement page title section with optional subtitle and background image
    - _Requirements: 8.1, 9.1_
  - [x] 3.3 Create Badge component


    - Implement small label component with variant styles
    - _Requirements: 10.2_
  - [x] 3.4 Create Button component


    - Implement reusable button with variants and hover animations
    - _Requirements: 20.2_

- [ ] 4. Create layout components
  - [x] 4.1 Create Header component


    - Implement desktop navigation with logo and links
    - Add active link highlighting based on current route
    - _Requirements: 5.1, 5.2_
  - [x] 4.2 Create MobileNav component


    - Implement mobile navigation overlay with hamburger menu
    - Add slide-in animation and focus trapping
    - _Requirements: 2.1, 2.2_
  - [x] 4.3 Create Footer component


    - Implement footer with logo, contact info, quick links, social icons, and copyright
    - _Requirements: 5.3, 5.4, 5.5_
  - [x] 4.4 Create root layout in app/layout.tsx


    - Set up global layout with Header and Footer
    - Configure fonts, metadata, and HTML lang attribute
    - _Requirements: 1.2, 19.1, 19.2, 19.4_
  - [ ] 4.5 Write property test for consistent layout
    - **Property 1: Consistent Layout Across All Pages**
    - **Validates: Requirements 1.2, 5.1, 5.3**

- [ ] 5. Create homepage components
  - [x] 5.1 Create HeroCarousel component


    - Implement auto-advancing carousel with manual controls
    - Add pause on hover, keyboard navigation, and touch swipe
    - Include ARIA attributes for accessibility
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 20.5_
  - [x] 5.2 Create FeatureGrid component


    - Implement responsive grid layout for feature cards
    - Add icon rendering with lucide-react
    - _Requirements: 7.2_
  - [x] 5.3 Create Timeline component

    - Implement vertical timeline for process steps
    - _Requirements: 7.4_
  - [x] 5.4 Create CTASection component

    - Implement full-width CTA section with buttons
    - _Requirements: 7.7_
  - [ ] 5.5 Write property test for carousel accessibility
    - **Property 14: Carousel Accessibility**
    - **Validates: Requirements 20.5**

- [ ] 6. Create shared components
  - [x] 6.1 Create ProjectCard component

    - Implement card for displaying project summaries
    - Add hover effect with scale animation
    - _Requirements: 7.3, 9.2, 9.3_
  - [x] 6.2 Create DirectorMessage component

    - Implement two-column layout for Director's message
    - _Requirements: 8.3, 8.4, 10.5_
  - [x] 6.3 Create QuoteCallout component

    - Implement large inspirational quote with background
    - _Requirements: 16.1, 16.2_
  - [x] 6.4 Create FAQAccordion component

    - Implement expandable FAQ list with smooth animations
    - Add keyboard navigation and ARIA attributes
    - _Requirements: 7.6, 17.1, 17.2_
  - [x] 6.5 Create ContactForm component

    - Implement form with validation and error handling
    - Add client-side validation for all fields
    - _Requirements: 18.2, 18.3, 18.4, 18.5_
  - [ ] 6.6 Write property test for form validation coverage
    - **Property 10: Form Validation Coverage**
    - **Validates: Requirements 18.3**

- [ ] 7. Create Coffee Prince specific components
  - [x] 7.1 Create ImageCarousel component

    - Implement gallery carousel with manual navigation
    - Add touch swipe, keyboard navigation, and ARIA attributes
    - _Requirements: 16.3, 16.4, 16.5_
  - [x] 7.2 Create PhasesSection component

    - Implement card-based layout for project phases
    - _Requirements: 15.1, 15.2_
  - [x] 7.3 Create AmenitiesGrid component

    - Implement responsive grid for amenities with icons
    - _Requirements: 15.3, 15.4, 15.5, 15.6_

- [ ] 8. Implement homepage (/)
  - [x] 8.1 Create app/page.tsx with all homepage sections


    - Implement HeroCarousel with slides from content module
    - Add About Mother Properties summary section
    - Add Why Mother Properties feature grid
    - Add Featured Coffee Prince project card
    - Add Projects Preview section
    - Add How It Works timeline
    - Add Testimonials section
    - Add Brand-level FAQ accordion
    - Add CTA section
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_
  - [ ] 8.2 Write property test for single h1 per page
    - **Property 13: Single H1 Per Page**
    - **Validates: Requirements 19.5**

- [ ] 9. Implement about page (/about)
  - [x] 9.1 Create app/about/page.tsx

    - Add PageHero with title and subtitle
    - Add Brand Story section with paragraphs
    - Add DirectorMessage component with Suresh Robert's photo and message
    - Add Values & Approach feature grid
    - Add Happy Club introduction section
    - Override metadata for about page
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [ ] 10. Implement projects page (/projects)
  - [x] 10.1 Create app/projects/page.tsx

    - Add PageHero with title and subtitle
    - Add ProjectCard grid with Coffee Prince and placeholder projects
    - Add CTA section encouraging contact
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  - [ ] 10.2 Write property test for navigation structure consistency
    - **Property 2: Navigation Structure Consistency**
    - **Validates: Requirements 1.5**

- [ ] 11. Implement Coffee Prince microsite (/coffeeprince)
  - [x] 11.1 Create app/coffeeprince/page.tsx with hero and overview

    - Add Coffee Prince logo and headline
    - Add badges for managed farmland, location, and acreage
    - Add taglines and background image
    - Override metadata for Coffee Prince page
    - _Requirements: 10.1, 10.2, 10.3, 19.3_
  - [ ] 11.2 Add Project Snapshot section
    - Display 4 blocks covering project, developer, location, and scale
    - _Requirements: 10.4_
  - [ ] 11.3 Add Director Angle section
    - Brief summary with link to /about
    - _Requirements: 10.5_
  - [ ] 11.4 Add Why Managed Farmlands section
    - Explain concept with feature grid
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
  - [ ] 11.5 Add Estate Highlights section
    - Display highlight cards for titled land, plots, water/power, connectivity, biodiversity
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  - [ ] 11.6 Add Farming Model section
    - Display 3-crop strategy with coffee, pepper, and arecanut
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_
  - [ ] 11.7 Add Resort Model section
    - Explain eco-resort concept and dual-benefit investment
    - Include disclaimer about conceptual model
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_
  - [ ] 11.8 Add Project Phases section
    - Display 4 conceptual phases with PhasesSection component
    - _Requirements: 15.1, 15.2_
  - [ ] 11.9 Add Layout & Amenities section
    - Display layout hero card and AmenitiesGrid
    - Include disclaimers
    - _Requirements: 15.3, 15.4, 15.5, 15.6_
  - [ ] 11.10 Add Quote Callout section
    - Display inspirational quote with background
    - _Requirements: 16.1, 16.2_
  - [ ] 11.11 Add Gallery section
    - Display ImageCarousel with 6-10 images
    - _Requirements: 16.3, 16.4, 16.5_
  - [ ] 11.12 Add FAQ section
    - Display FAQAccordion with Coffee Prince-specific questions
    - _Requirements: 17.1, 17.2_
  - [ ] 11.13 Add Site Visit & Contact CTA section
    - Display contact details with clickable phone/WhatsApp links
    - Add buttons for site visit and contact
    - _Requirements: 17.3, 17.4, 17.5_
  - [ ] 11.14 Write property test for content separation
    - **Property 5: Content Separation**
    - **Validates: Requirements 3.4, 23.4**

- [ ] 12. Implement contact page (/contact)
  - [x] 12.1 Create app/contact/page.tsx

    - Add PageHero with title
    - Add short explanatory text
    - Add ContactForm component
    - _Requirements: 18.1, 18.2_

- [ ] 13. Implement legal pages
  - [x] 13.1 Create app/privacy/page.tsx

    - Add PageHero and placeholder privacy policy content
    - Include notice about sample copy
    - _Requirements: 21.1, 21.3, 21.4, 21.5_
  - [x] 13.2 Create app/terms/page.tsx

    - Add PageHero and placeholder terms & conditions content
    - Include notice about sample copy
    - _Requirements: 21.2, 21.3, 21.4, 21.5_

- [ ] 14. Add placeholder images and assets
  - [ ] 14.1 Create placeholder image structure
    - Create /public/images/ directory structure
    - Add TODO comments for Mother Properties images
    - Add TODO comments for Coffee Prince images
    - _Requirements: 22.2, 22.3, 22.4, 22.5_
  - [ ] 14.2 Add logo placeholders
    - Add placeholder for /public/motherproperties-logo.png
    - Add placeholder for /public/coffeeprince-logo.png
    - Add placeholder for /public/director-suresh-robert.jpg
    - _Requirements: 4.4, 4.5_
  - [ ] 14.3 Write property test for image component usage
    - **Property 4: Image Component Usage**
    - **Validates: Requirements 2.4, 22.1**

- [ ] 15. Implement animations and motion
  - [ ] 15.1 Add Framer Motion animations to components
    - Add fade-in on scroll for sections
    - Add hover scale for cards and buttons
    - Add slide/fade-in for hero text and images
    - _Requirements: 20.1, 20.2, 20.3_
  - [ ] 15.2 Implement motion preference detection
    - Add prefers-reduced-motion detection
    - Disable/reduce animations when preference is set
    - _Requirements: 20.4_

- [ ] 16. Add SEO and metadata configuration
  - [x] 16.1 Create app/sitemap.ts

    - Generate sitemap for all pages
    - _Requirements: 19.1, 19.2, 19.3, 19.4_
  - [x] 16.2 Create app/robots.ts

    - Configure robots.txt with sitemap reference
    - _Requirements: 19.1, 19.2, 19.3, 19.4_
  - [ ] 16.3 Add Open Graph images
    - Create placeholder OG image at /public/og-motherproperties.png
    - _Requirements: 19.4_
  - [ ] 16.4 Write property test for HTML lang attribute
    - **Property 11: HTML Lang Attribute**
    - **Validates: Requirements 19.1**
  - [ ] 16.5 Write property test for Open Graph metadata
    - **Property 12: Open Graph Metadata**
    - **Validates: Requirements 19.4**

- [ ] 17. Implement responsive design refinements
  - [ ] 17.1 Test and refine mobile layouts
    - Verify all pages render correctly on mobile viewports
    - Test touch interactions for carousels
    - _Requirements: 2.3, 2.5_
  - [ ] 17.2 Test and refine tablet layouts
    - Verify all pages render correctly on tablet viewports
    - _Requirements: 2.3_
  - [ ] 17.3 Test and refine desktop layouts
    - Verify all pages render correctly on desktop viewports
    - _Requirements: 2.3_
  - [ ] 17.4 Write property test for responsive layout adaptation
    - **Property 3: Responsive Layout Adaptation**
    - **Validates: Requirements 2.3**

- [ ] 18. Configure build and deployment
  - [ ] 18.1 Configure next.config.js for static export
    - Set output to 'export'
    - Configure image optimization settings
    - _Requirements: 23.5_
  - [ ] 18.2 Add build scripts to package.json
    - Add dev, build, start, lint, type-check scripts
    - _Requirements: 23.5_
  - [ ] 18.3 Test production build
    - Run npm run build and verify no errors
    - Test static export output
    - _Requirements: 23.5_

- [ ] 19. Final quality checks and testing
  - [ ] 19.1 Run TypeScript type checking
    - Ensure no TypeScript errors
    - _Requirements: 23.1_
  - [ ] 19.2 Run ESLint
    - Ensure no ESLint errors
    - _Requirements: 23.2_
  - [ ] 19.3 Test all navigation flows
    - Verify all internal links work correctly
    - Test navigation from homepage to all pages
    - Test Coffee Prince navigation from projects page
    - _Requirements: 1.1, 1.3, 1.4_
  - [ ] 19.4 Test form submission
    - Verify form validation works correctly
    - Verify console logging on submit
    - Verify success message displays
    - _Requirements: 18.3, 18.4_
  - [ ] 19.5 Test accessibility
    - Verify keyboard navigation works
    - Test with screen reader (basic check)
    - Verify ARIA attributes are present
    - _Requirements: 20.5_
  - [ ] 19.6 Write property test for card styling consistency
    - **Property 7: Card Styling Consistency**
    - **Validates: Requirements 4.2**
  - [ ] 19.7 Write property test for footer completeness
    - **Property 8: Footer Completeness**
    - **Validates: Requirements 5.3**
  - [ ] 19.8 Write property test for hero carousel slide overlays
    - **Property 9: Hero Carousel Slide Overlays**
    - **Validates: Requirements 6.2**

- [ ] 20. Documentation and handoff
  - [x] 20.1 Update README.md


    - Add project overview and setup instructions
    - Document how to run dev server and build
    - Add content editing guide for non-technical users
    - _Requirements: 3.4_
  - [ ] 20.2 Add code comments
    - Add JSDoc comments to all components
    - Document complex logic with inline comments
    - _Requirements: 23.3_
  - [ ] 20.3 Create content update guide
    - Document how to update homepage content
    - Document how to update Coffee Prince content
    - Document how to add new FAQs
    - Document how to update contact information
    - _Requirements: 3.1, 3.2, 3.3_
