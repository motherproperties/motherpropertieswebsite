# Requirements Document

## Introduction

This document specifies the requirements for the Mother Properties marketing website, a production-ready Next.js application featuring the main Mother Properties brand site and a Coffee Prince managed farmlands microsite. The system shall provide a professional, modern, and responsive web presence that showcases curated farmlands and nature-led living opportunities.

## Glossary

- **Mother Properties**: The main real estate brand focused on curated farmlands and nature-led living
- **Coffee Prince**: A flagship managed coffee farmland project in the Sakleshpur/Western Ghats region
- **Managed Farmland**: A farmland ownership model where experts handle cultivation and upkeep
- **Microsite**: A dedicated section of the website with its own navigation and content structure
- **Static Site Generation (SSG)**: Next.js rendering strategy that generates HTML at build time
- **App Router**: Next.js routing system using the app directory structure
- **Content Module**: TypeScript files containing structured copy and configuration data
- **Hero Carousel**: Full-width rotating banner component with multiple slides
- **Image Carousel**: Gallery component for browsing multiple images

## Requirements

### Requirement 1: Site Architecture and Routing

**User Story:** As a visitor, I want to navigate between different sections of the Mother Properties website and the Coffee Prince microsite, so that I can explore all available information and projects.

#### Acceptance Criteria

1. WHEN the system initializes THEN the system SHALL create routes for home (`/`), about (`/about`), projects (`/projects`), Coffee Prince (`/coffeeprince`), contact (`/contact`), privacy (`/privacy`), and terms (`/terms`)
2. WHEN a user navigates to any route THEN the system SHALL render the corresponding page with consistent header and footer components
3. WHEN a user clicks the Coffee Prince project card on the projects page THEN the system SHALL navigate to `/coffeeprince`
4. WHEN a user accesses the Coffee Prince microsite THEN the system SHALL display all Coffee Prince sections including snapshot, farming model, resort model, phases, amenities, gallery, FAQ, and site visit CTA
5. WHEN a user navigates between pages THEN the system SHALL maintain consistent branding and navigation structure

### Requirement 2: Responsive Design and Mobile Experience

**User Story:** As a mobile user, I want the website to adapt seamlessly to my device screen size, so that I can access all content and features comfortably on any device.

#### Acceptance Criteria

1. WHEN a user accesses the site on a mobile device THEN the system SHALL display a hamburger menu icon for navigation
2. WHEN a user taps the hamburger menu THEN the system SHALL open a mobile navigation overlay with all navigation links
3. WHEN a user views any page on mobile, tablet, or desktop THEN the system SHALL render layouts optimized for that viewport size
4. WHEN images are displayed THEN the system SHALL use responsive image sizing with Next.js Image component
5. WHEN a user interacts with carousels on mobile THEN the system SHALL support touch swipe gestures

### Requirement 3: Content Management and Editability

**User Story:** As a non-technical content editor, I want all website copy to be stored in clearly structured TypeScript files, so that I can update text without modifying component code.

#### Acceptance Criteria

1. WHEN the system is built THEN the system SHALL store all site-wide configuration in `lib/siteConfig.ts` including brand name, contact details, and social links
2. WHEN the system is built THEN the system SHALL store Mother Properties page content in `lib/copy/motherProperties.ts` with typed data structures
3. WHEN the system is built THEN the system SHALL store Coffee Prince content in `lib/copy/coffeePrince.ts` with typed data structures
4. WHEN a content editor modifies copy files THEN the system SHALL reflect changes after rebuild without requiring component modifications
5. WHEN content is structured THEN the system SHALL use TypeScript types for FAQ items, amenities, phases, gallery images, and project summaries

### Requirement 4: Brand Identity and Visual Design

**User Story:** As a visitor, I want to experience a premium, elegant visual design that reflects the Mother Properties brand values, so that I feel confident in the quality and professionalism of the offerings.

#### Acceptance Criteria

1. WHEN the system renders any page THEN the system SHALL apply a color palette of deep forest green, rich coffee brown, warm beige/cream, and subtle gold accents
2. WHEN the system displays cards and containers THEN the system SHALL use rounded-2xl corners and soft drop shadows
3. WHEN the system renders text THEN the system SHALL use elegant sans-serif fonts for body text and strong display fonts for headings
4. WHEN the system displays the Mother Properties logo THEN the system SHALL load the image from `/public/motherproperties-logo.png`
5. WHEN the system displays the Coffee Prince logo THEN the system SHALL load the image from `/public/coffeeprince-logo.png`

### Requirement 5: Header and Footer Navigation

**User Story:** As a visitor, I want consistent navigation and contact information available on every page, so that I can easily move around the site and reach out to Mother Properties.

#### Acceptance Criteria

1. WHEN any page loads THEN the system SHALL display a header with the Mother Properties logo and navigation links for Home, About, Projects, Coffee Prince, and Contact
2. WHEN a user views the header on desktop THEN the system SHALL display navigation links horizontally in the header
3. WHEN any page loads THEN the system SHALL display a footer with Mother Properties logo, tagline, contact information, quick links, social icons, and copyright notice
4. WHEN the footer displays contact information THEN the system SHALL show email (motherpropertiesblr@gmail.com), phone numbers (+91 98450 42789, +91 90350 51133), and full address
5. WHEN the footer displays social icons THEN the system SHALL include clickable Instagram and LinkedIn icons

### Requirement 6: Homepage Hero and Brand Introduction

**User Story:** As a first-time visitor, I want to immediately understand what Mother Properties offers through compelling visuals and messaging, so that I can decide if I want to explore further.

#### Acceptance Criteria

1. WHEN a user visits the homepage THEN the system SHALL display a hero carousel with 3-4 slides showing farmland imagery
2. WHEN the hero carousel displays THEN the system SHALL overlay each slide with headlines like "NATURE IS THE NEW LUXURY" and "GREEN IS THE NEW GOLD"
3. WHEN the hero carousel is active THEN the system SHALL auto-advance slides every 6-7 seconds
4. WHEN a user hovers over the hero carousel THEN the system SHALL pause auto-advance
5. WHEN the hero displays THEN the system SHALL show primary CTA "Explore Coffee Prince" linking to `/coffeeprince` and secondary CTA "View all projects" linking to `/projects`

### Requirement 7: Homepage Content Sections

**User Story:** As a visitor exploring the homepage, I want to learn about Mother Properties' values, see featured projects, and understand the process, so that I can evaluate if their offerings match my interests.

#### Acceptance Criteria

1. WHEN a user views the homepage THEN the system SHALL display an "About Mother Properties" summary section with a link to `/about`
2. WHEN a user views the homepage THEN the system SHALL display a "Why Mother Properties" feature grid with 3-6 key pillars
3. WHEN a user views the homepage THEN the system SHALL display a featured Coffee Prince project card with logo, summary, badges, and link to `/coffeeprince`
4. WHEN a user views the homepage THEN the system SHALL display a "How It Works" timeline with 3-4 steps
5. WHEN a user views the homepage THEN the system SHALL display testimonials section with 3-4 placeholder testimonial cards
6. WHEN a user views the homepage THEN the system SHALL display a brand-level FAQ accordion with 5-7 questions
7. WHEN a user views the homepage THEN the system SHALL display a CTA section with buttons for "Plan a Coffee Prince visit" and "Contact us"

### Requirement 8: About Page Content

**User Story:** As a visitor interested in learning more about the company, I want to read the brand story and Director's message, so that I can understand the vision and credibility behind Mother Properties.

#### Acceptance Criteria

1. WHEN a user visits `/about` THEN the system SHALL display a page hero with title "About Mother Properties" and subtitle
2. WHEN a user views the about page THEN the system SHALL display 2-3 paragraphs describing the brand story and founding vision
3. WHEN a user views the about page THEN the system SHALL display a Director's Message section with photo of Suresh Robert from `/public/director-suresh-robert.jpg`
4. WHEN the Director's Message displays THEN the system SHALL include text about Suresh Robert's 23+ years of experience and vision for nature-friendly assets
5. WHEN a user views the about page THEN the system SHALL display 3-4 value cards covering credibility, sustainability, customer-centric experience, and long-term relationships
6. WHEN a user views the about page THEN the system SHALL display a short Happy Club introduction section

### Requirement 9: Projects Listing Page

**User Story:** As a visitor exploring investment opportunities, I want to see all available projects in one place, so that I can compare options and select projects to learn more about.

#### Acceptance Criteria

1. WHEN a user visits `/projects` THEN the system SHALL display a page hero with title "Our Projects" and subtitle
2. WHEN a user views the projects page THEN the system SHALL display a project card for Coffee Prince with logo, summary, badges, and "View Project" button
3. WHEN a user clicks the Coffee Prince "View Project" button THEN the system SHALL navigate to `/coffeeprince`
4. WHEN a user views the projects page THEN the system SHALL display placeholder project cards for future projects with muted styling
5. WHEN a user views the projects page THEN the system SHALL display a CTA encouraging visitors to contact the team

### Requirement 10: Coffee Prince Microsite Overview and Snapshot

**User Story:** As a visitor interested in Coffee Prince, I want to see a comprehensive overview and project snapshot, so that I can quickly understand the key details of this managed farmland opportunity.

#### Acceptance Criteria

1. WHEN a user visits `/coffeeprince` THEN the system SHALL display the Coffee Prince logo prominently with headline "Coffee Prince – Managed Coffee Farmlands in the Western Ghats"
2. WHEN the Coffee Prince hero displays THEN the system SHALL show badges for "Managed Farmland", "Sakleshpur, Western Ghats", and "Approx. 35+ Acres"
3. WHEN the Coffee Prince hero displays THEN the system SHALL include taglines "GREEN IS THE NEW GOLD" and "NATURE IS THE NEW LUXURY"
4. WHEN a user views the Coffee Prince page THEN the system SHALL display a project snapshot section with 4 blocks covering project, developer, location, and scale
5. WHEN a user views the Coffee Prince page THEN the system SHALL display a Director angle section briefly reiterating Suresh Robert's vision with link to `/about`

### Requirement 11: Coffee Prince Managed Farmlands Explanation

**User Story:** As a potential investor, I want to understand what managed farmlands are and why they're beneficial, so that I can evaluate if this investment model suits my goals.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display a "Why Managed Farmlands" section explaining the concept
2. WHEN the managed farmlands section displays THEN the system SHALL present key points including sustainable living, investment growth, community & lifestyle, and eco-friendly practices
3. WHEN the managed farmlands section displays THEN the system SHALL reference Western Ghats climate and coffee/spice culture
4. WHEN the managed farmlands section displays THEN the system SHALL explain that experts handle cultivation and upkeep while owners retain ownership
5. WHEN the managed farmlands section displays THEN the system SHALL mention the idea of building a long-term legacy asset

### Requirement 12: Coffee Prince Estate Highlights

**User Story:** As a potential buyer, I want to know the key features and highlights of the Coffee Prince estate, so that I can assess the quality and amenities of the property.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display an "Estate Highlights" section with multiple highlight cards
2. WHEN estate highlights display THEN the system SHALL include cards for titled land, plot variants, water & power, connectivity, and biodiversity
3. WHEN the plot variants card displays THEN the system SHALL mention plots from approximately 6,000 sq.ft upwards
4. WHEN the connectivity card displays THEN the system SHALL describe accessibility by road and approximate drive time from Bangalore
5. WHEN the biodiversity card displays THEN the system SHALL mention coffee, spices, and evergreen terrain with rich flora and fauna

### Requirement 13: Coffee Prince Farming Model

**User Story:** As an investor interested in agricultural returns, I want to understand the farming model and crop strategy, so that I can evaluate the potential income and sustainability of the farmland.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display a "Farming Model" section with title "Growing Prosperity Through Nature's Rhythm"
2. WHEN the farming model section displays THEN the system SHALL present a 3-crop strategy with coffee, pepper, and arecanut
3. WHEN the farming model section displays THEN the system SHALL explain that coffee builds medium-term cash flow
4. WHEN the farming model section displays THEN the system SHALL explain that pepper climbs on existing trees and boosts annual income
5. WHEN the farming model section displays THEN the system SHALL explain that arecanut is a long-term crop strengthening overall asset value
6. WHEN the farming model section displays THEN the system SHALL mention focus on soil health, water balance, and sustainable yield

### Requirement 14: Coffee Prince Resort Model

**User Story:** As a potential owner, I want to understand the resort concept and dual-benefit investment opportunity, so that I can evaluate both personal use and income potential.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display a "Resort Model" section with title "Dual-Benefit Investment"
2. WHEN the resort model section displays THEN the system SHALL explain the central eco-resort concept with hospitality and club-like amenities
3. WHEN the resort model section displays THEN the system SHALL explain that farmland plots surround the core where owners can build private villas
4. WHEN the resort model section displays THEN the system SHALL mention the option for owners to participate in a managed rental program
5. WHEN the resort model section displays THEN the system SHALL present benefits including vacation home privileges, potential rental returns, dual-benefit use, and estate-led community experiences
6. WHEN the resort model section displays THEN the system SHALL include a disclaimer that this is a conceptual model and details may change

### Requirement 15: Coffee Prince Project Phases and Layout

**User Story:** As a potential investor, I want to understand the development timeline and planned amenities, so that I can assess project maturity and future facilities.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display a "Project Phases" section with 4 conceptual phases
2. WHEN the phases section displays THEN the system SHALL include Phase 1 (Land Acquisition & Plantation Setup), Phase 2 (Infrastructure), Phase 3 (Resort & Villa Program), and Phase 4 (Community Activities)
3. WHEN a user views the Coffee Prince page THEN the system SHALL display a "Layout & Amenities" section with a layout hero card
4. WHEN the layout displays THEN the system SHALL show overlay text stating "Conceptual Layout – not to scale"
5. WHEN the amenities display THEN the system SHALL list amenities including cottages/villas, swimming pool, indoor games, outdoor games, children's play area, plantation walks, bonfire spaces, and more
6. WHEN the layout and amenities display THEN the system SHALL include a disclaimer that layout and amenities are conceptual and subject to refinement

### Requirement 16: Coffee Prince Gallery and Quote

**User Story:** As a visitor, I want to see beautiful imagery of the coffee plantation and read inspirational messaging, so that I can emotionally connect with the Coffee Prince vision.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display a quote callout with poetic text like "Between the hills and the mist lies a quiet promise of peace, growth, and belonging"
2. WHEN the quote callout displays THEN the system SHALL use large typography and soft gradient background with plantation image overlay
3. WHEN a user views the Coffee Prince page THEN the system SHALL display an image carousel gallery with 6-10 images
4. WHEN the gallery displays THEN the system SHALL include image types such as coffee plants, misty hills, plantation pathways, rustic cottages, and people walking
5. WHEN the gallery carousel is active THEN the system SHALL provide manual prev/next controls, dots for slide index, swipe support on mobile, and accessible labels

### Requirement 17: Coffee Prince FAQ and Site Visit CTA

**User Story:** As a potential buyer with questions, I want to find answers to common questions and easily schedule a site visit, so that I can make an informed decision and take the next step.

#### Acceptance Criteria

1. WHEN a user views the Coffee Prince page THEN the system SHALL display an FAQ accordion with 6-10 Coffee Prince-specific questions
2. WHEN the FAQ displays THEN the system SHALL include questions about managed coffee farmlands, farming model, management responsibilities, visit frequency, resort model basics, title & documentation, and differences from normal plotted layouts
3. WHEN a user views the Coffee Prince page THEN the system SHALL display a "Site Visit & Contact CTA" section with title "Experience the Beauty of Coffee Prince – Plan a Site Visit"
4. WHEN the site visit CTA displays THEN the system SHALL show contact details including phone numbers with tel: and wa.me links, email, and address
5. WHEN the site visit CTA displays THEN the system SHALL provide buttons for "Plan a Site Visit" linking to `/contact` and "Call / WhatsApp" with clickable links

### Requirement 18: Contact Form and Page

**User Story:** As a visitor ready to inquire, I want to submit my contact information and message through a form, so that the Mother Properties team can follow up with me.

#### Acceptance Criteria

1. WHEN a user visits `/contact` THEN the system SHALL display a page hero with title "Let's talk about your next piece of land"
2. WHEN a user views the contact page THEN the system SHALL display a contact form with fields for name, email, phone, interested in (select), and message
3. WHEN a user submits the form with missing required fields THEN the system SHALL display validation error messages
4. WHEN a user submits a valid form THEN the system SHALL log the payload to console and display a success message
5. WHEN the "Interested In" select displays THEN the system SHALL provide options for "Mother Properties (General)", "Coffee Prince", and "Other"

### Requirement 19: SEO and Metadata

**User Story:** As a search engine or social media platform, I want to receive proper metadata for each page, so that I can display accurate titles, descriptions, and preview images.

#### Acceptance Criteria

1. WHEN any page is rendered THEN the system SHALL include a lang="en" attribute on the html element
2. WHEN the homepage is rendered THEN the system SHALL set metadata title to "Mother Properties – Curated Farmlands & Nature-Led Living"
3. WHEN the Coffee Prince page is rendered THEN the system SHALL override metadata title to "Coffee Prince – Managed Coffee Farmlands by Mother Properties"
4. WHEN any page is rendered THEN the system SHALL include Open Graph metadata with site name, description, and default og image path
5. WHEN any page is rendered THEN the system SHALL include exactly one h1 element

### Requirement 20: Animations and Accessibility

**User Story:** As a visitor, I want smooth, subtle animations that enhance the experience without being distracting, and I want the site to respect my motion preferences.

#### Acceptance Criteria

1. WHEN a user scrolls to a new section THEN the system SHALL apply a subtle fade-in animation using Framer Motion
2. WHEN a user hovers over cards and buttons THEN the system SHALL apply a gentle scale animation
3. WHEN the hero loads THEN the system SHALL apply subtle slide/fade-in animations to text and images
4. WHEN a user has prefers-reduced-motion enabled THEN the system SHALL disable or reduce all animations
5. WHEN carousels are navigated THEN the system SHALL provide accessible keyboard navigation and ARIA attributes

### Requirement 21: Legal Pages

**User Story:** As a visitor concerned about privacy and terms, I want to access privacy policy and terms & conditions pages, so that I can understand how my data is used and the site's legal terms.

#### Acceptance Criteria

1. WHEN a user visits `/privacy` THEN the system SHALL display a privacy policy page with placeholder content
2. WHEN a user visits `/terms` THEN the system SHALL display a terms & conditions page with placeholder content
3. WHEN legal pages display THEN the system SHALL use sections and headings describing data use and general terms
4. WHEN legal pages display THEN the system SHALL include a notice that this is sample copy to be replaced before production
5. WHEN legal pages display THEN the system SHALL maintain consistent header and footer navigation

### Requirement 22: Image Management and Optimization

**User Story:** As a developer or content manager, I want all images to be properly organized and optimized, so that the site loads quickly and images are easy to manage.

#### Acceptance Criteria

1. WHEN the system renders any image THEN the system SHALL use the Next.js Image component for optimization
2. WHEN the system is built THEN the system SHALL organize images under `/public/images/` with clear naming conventions
3. WHEN Mother Properties images are needed THEN the system SHALL reference paths like `/images/motherproperties-hero-1.jpg` and `/images/farmland-1.jpg`
4. WHEN Coffee Prince images are needed THEN the system SHALL reference paths like `/images/coffee-plantation-1.jpg` and `/images/resort-concept-1.jpg`
5. WHEN image paths are defined THEN the system SHALL include comments indicating they should be populated with royalty-free imagery

### Requirement 23: Code Quality and Developer Experience

**User Story:** As a developer maintaining this codebase, I want clean, well-organized TypeScript code with no errors, so that I can easily understand, modify, and extend the application.

#### Acceptance Criteria

1. WHEN the codebase is built THEN the system SHALL use TypeScript for all components and modules with no TypeScript errors
2. WHEN the codebase is built THEN the system SHALL pass all ESLint checks with no errors
3. WHEN components are created THEN the system SHALL be small, reusable, and well-named
4. WHEN the codebase is organized THEN the system SHALL separate layout JSX from copy data stored in lib/copy modules
5. WHEN the application is run with npm run dev THEN the system SHALL start without errors and be accessible in a browser
