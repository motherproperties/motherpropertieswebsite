# Mother Properties Website Enhancement — Implementation Plan

Based on [Mother_Properties_Website_Enhancement_PRD.md](file:///c:/Github/motherpropertieswebsite/Mother_Properties_Website_Enhancement_PRD.md), this plan translates the PRD's 4-phase delivery into concrete code changes. **Phase 1 (Conversion Foundation)** is the implementation target for this session; Phases 2–3 are outlined for future sessions.

## User Review Required

> [!IMPORTANT]
> **Content/Evidence Decisions (PRD Phase 0):** The PRD requires a content and evidence lock *before* code work. Several content decisions affect implementation. I'll proceed with structural changes and placeholder-safe copy, but you'll need to confirm:
> 1. **Testimonials** — PRD §6 says remove unverified testimonials. The current three (`Rajesh Kumar`, `Priya Sharma`, `Anand Reddy`) appear fabricated. **Shall I remove them entirely, or replace with a "Customer stories coming soon" placeholder?**
> 2. **Phase statuses** — PRD §7.8 says don't mark phases as "completed" or "in-progress" unless verified. **Shall I remove all status labels from the 4 phases, or keep them with a "status subject to verification" disclaimer?**
> 3. **Pricing/availability** — PRD §6 hero wants plot-size starting point "where approved." **Do you have an approved starting price or should I omit pricing entirely?**
> 4. **WhatsApp number** — Currently `919845042789`. Is this the confirmed WhatsApp Business number for deep links?

> [!WARNING]
> **Database for Lead Capture:** PRD §8 requires a "durable lead record before sending notifications." The current stack has no database. Options:
> - **Option A (Recommended):** Add a SQLite/JSON file-based lead store for Netlify deployment — simple, no external deps.
> - **Option B:** Add Firestore (you have the Firebase MCP server available).
> - **Option C:** Defer database, keep email-only notification but add structured server-side logging with lead IDs.
>
> Which approach do you prefer?

## Open Questions

1. **Route structure for Coffee Prince:** PRD §5 recommends `/projects/coffee-prince`. The current route is `/coffeeprince`. Should I implement the redirect now, or keep `/coffeeprince` and defer the redirect?
2. **Verified sender domain:** PRD §12 requires replacing `onboarding@resend.dev`. Do you have a verified Resend domain (e.g., `notifications@motherproperties.net`)? If not, I'll keep Resend as-is and add a TODO.
3. **Google Analytics / Search Console:** PRD §10 requires analytics. Do you have a GA4 Measurement ID and/or Search Console verification token to integrate?

---

## Phase 1: Conversion Foundation (This Session)

### 1.1 Homepage Rework

#### [MODIFY] [page.tsx](file:///c:/Github/motherpropertieswebsite/app/page.tsx)
- Replace generic hero with PRD §6 qualified proposition: *"Own a managed coffee farmland near Sakleshpur"* with two CTAs: `Book a Coffee Prince Site Visit` and `Get the Project Catalogue`
- Add **Proof Strip** section with verified facts (23+ years, 35+ acres, ~4hr drive, plots from ~6,000 sq.ft.)
- Add **Trust Section**: "How we verify a project" with 6 concrete steps (title review, survey, access, water/power, land-use, buyer documentation)
- Replace featured project card with a **conversion-ready Coffee Prince card** (location map preview, project status, crop model, plot-size options, site-visit CTA, catalogue CTA, "confirmed vs. planned" labels)
- Add **Lead Magnet Section** with the buyer guide offer and progressive form
- Remove or replace the unverified testimonials section (pending your decision)
- Keep FAQ and CTA sections, enhance CTA to include WhatsApp + Call actions

#### [MODIFY] [motherProperties.ts](file:///c:/Github/motherpropertieswebsite/lib/copy/motherProperties.ts)
- Update `homeContent.hero` to use PRD-approved copy with qualified proposition
- Add proof strip data structure
- Add trust verification steps data
- Replace/remove `testimonials` array
- Update CTA copy to match PRD §6

#### [NEW] `components/home/ProofStrip.tsx`
- Horizontal strip of verified facts with icons (Years, Acres, Drive Time, Plot Size, Crop Mix)

#### [NEW] `components/home/TrustSection.tsx`
- Six-step "How we verify a project" grid with expandable explanations

#### [NEW] `components/home/LeadMagnetSection.tsx`
- Buyer guide offer card with progressive profiling form (name, phone, email, intent, preferred call time, consent)

---

### 1.2 Coffee Prince Landing Page Rework

#### [MODIFY] [page.tsx](file:///c:/Github/motherpropertieswebsite/app/coffeeprince/page.tsx)
- Add two prominent conversion CTAs in hero (Site Visit + Catalogue)
- Add **At-a-Glance** facts bar below hero
- Add **"What you own / what is managed / what is planned"** comparison table (PRD §7.4)
- Add **Title & Documentation** section with checklist (PRD §7.5)
- Add **Management Model** section with activities, frequency, update mechanism, fees/exclusions (PRD §7.7)
- Mark resort/villa concept as **"Conceptual — subject to approvals"** (PRD §7.9)
- Remove broken gallery image (`WhatsApp Image 2025-10-18...`)
- Add **Sticky Enquiry Panel** on desktop and **Site-Visit Booking Module** with date preference (PRD §7.12)
- Enhance FAQ with PRD §7.11 topics (title, access, due diligence, construction, maintenance, resale, taxes, risks, cancellation)

#### [MODIFY] [coffeePrince.ts](file:///c:/Github/motherpropertieswebsite/lib/copy/coffeePrince.ts)
- Add at-a-glance data structure
- Add ownership comparison data (own / managed / planned)
- Add documentation checklist data
- Add management model data
- Remove the broken gallery image reference
- Mark resort model as conceptual throughout
- Expand FAQ with compliance-aware answers

#### [NEW] `components/coffeeprince/AtAGlanceFacts.tsx`
- Horizontal factoid cards: Location, Acreage, Plot Sizes, Crop Mix, Drive Time, Current Phase, Ownership Model

#### [NEW] `components/coffeeprince/OwnershipComparison.tsx`
- Three-column comparison: What You Own | What Is Managed | What Is Planned

#### [NEW] `components/coffeeprince/DocumentationChecklist.tsx`
- Visual checklist of title/documentation process steps

#### [NEW] `components/coffeeprince/StickyEnquiryPanel.tsx`
- Fixed panel on right side (desktop) / bottom bar (mobile) with Call, WhatsApp, Site Visit CTAs

#### [NEW] `components/coffeeprince/SiteVisitBooking.tsx`
- Site-visit form with date preference, pickup/route questions, and lead capture

---

### 1.3 Lead Generation System

#### [MODIFY] [ContactForm.tsx](file:///c:/Github/motherpropertieswebsite/components/shared/ContactForm.tsx)
- Add fields: city/country, intent dropdown (weekend home, farmland ownership, investment research, NRI enquiry, property consultancy, other), budget range (optional), preferred contact method, preferred call time, project interest, consent checkbox with privacy-policy link
- Add honeypot field for spam protection
- Capture UTM parameters from URL and send with form data
- Add progressive profiling: minimal first CTA vs. full form for catalogue/site-visit flows

#### [MODIFY] [route.ts](file:///c:/Github/motherpropertieswebsite/app/api/contact/route.ts)
- Add server-side validation and sanitization
- Generate a lead ID (UUID) and timestamp
- Capture source, landing page, UTM parameters, referrer, form type, consent status
- Store lead record durably (per chosen database approach)
- Add retry logic for email delivery failures
- Add rate limiting (basic IP-based)
- Add honeypot check

#### [MODIFY] [route.ts](file:///c:/Github/motherpropertieswebsite/app/api/catalogue-download/route.ts)
- Same enhancements: lead ID, UTM capture, durable record, consent
- Add privacy statement to response

#### [NEW] `lib/leads.ts`
- Lead data model with all PRD §8 fields (lead ID, timestamp, source, landing page, UTMs, referrer, form type, consent, status, owner, next action, notes)
- Lead status enum: New, Contacted, Qualified, Site Visit Proposed, Site Visit Confirmed, Visited, Nurture, Converted, Lost, Invalid
- Storage abstraction (file-based initially, swappable to Firestore/CRM later)

#### [NEW] `app/api/site-visit/route.ts`
- New API route for site-visit booking requests
- Captures date preference, pickup location, number of visitors, lead data
- Creates durable lead record and sends notifications

---

### 1.4 Mobile Conversion Actions

#### [NEW] `components/layout/MobileBottomBar.tsx`
- Persistent bottom bar on mobile with three actions: WhatsApp, Call, Site Visit
- Visible on all high-intent pages (home, coffeeprince, contact, site-visit)
- Respects scroll position (hides on footer overlap)

#### [MODIFY] [layout.tsx](file:///c:/Github/motherpropertieswebsite/app/layout.tsx)
- Add `MobileBottomBar` to the root layout
- Add `pb-16` padding to body on mobile to accommodate bottom bar

---

### 1.5 Navigation & Information Architecture

#### [MODIFY] [siteConfig.ts](file:///c:/Github/motherpropertieswebsite/lib/siteConfig.ts)
- Update navigation to PRD §5: Home, Why Mother Properties, Projects (with Coffee Prince submenu), Site Visits, Contact
- Add WhatsApp deep link config with prefilled text
- Update SEO defaults with PRD-approved copy (remove "invest" language, add qualified description)

#### [MODIFY] [Header.tsx](file:///c:/Github/motherpropertieswebsite/components/layout/Header.tsx)
- Update nav to support the new IA
- Add prominent CTA button in header: "Book a Site Visit" (desktop)

#### [MODIFY] [MobileNav.tsx](file:///c:/Github/motherpropertieswebsite/components/layout/MobileNav.tsx)
- Update mobile nav to match new IA
- Add WhatsApp and Call quick actions in mobile menu

---

### 1.6 Upcoming-1 / Placeholder Fixes

#### [MODIFY] [upcoming-1/page.tsx](file:///c:/Github/motherpropertieswebsite/app/upcoming-1/page.tsx)
- Add `noindex` meta tag to prevent indexing (PRD §2, §10)

#### [MODIFY] [sitemap.ts](file:///c:/Github/motherpropertieswebsite/app/sitemap.ts)
- Remove `/upcoming-1` from sitemap (it was never there, confirm)
- Ensure only approved indexable routes are included

#### [MODIFY] [robots.ts](file:///c:/Github/motherpropertieswebsite/app/robots.ts)
- Add `Disallow: /upcoming-1` rule

---

### 1.7 SEO Foundation

#### [MODIFY] [layout.tsx](file:///c:/Github/motherpropertieswebsite/app/layout.tsx)
- Add `Organization` schema alongside existing `RealEstateAgent` schema
- Fix canonical URL consistency (`www.motherproperties.net`)

#### [MODIFY] [seo.ts](file:///c:/Github/motherpropertieswebsite/lib/seo.ts)
- Add `FAQPage` schema generator for pages with FAQ sections
- Add `BreadcrumbList` generator for all pages
- Add `Product`/`Offer` schema generator (for Coffee Prince, only factual data)

#### Each route page
- Add unique title, meta description, canonical, and OG image per PRD §10
- Add `FAQPage` structured data to homepage and Coffee Prince page

---

### 1.8 Type System Enhancement

#### [MODIFY] [types.ts](file:///c:/Github/motherpropertieswebsite/lib/types.ts)
- Add `Lead` interface with all PRD §8 fields
- Add `LeadStatus` enum
- Add `ProofFact` interface
- Add `TrustStep` interface
- Add `OwnershipComparison` interface
- Add `SiteVisitRequest` interface
- Add `ProjectData` typed model for reusable project pages (PRD §12)

---

## Phase 2: Trust & Search Expansion (Future Session)

### New pages to create:
- `/site-visit` — Dedicated site visit booking page
- `/buyer-guide` — The "12 Due-Diligence Checks" downloadable guide page
- `/managed-farmland-in-bangalore` — SEO landing page
- `/managed-farmland-in-sakleshpur` — SEO landing page
- `/property-consultants-in-bangalore` — SEO landing page
- `/insights/*` — Blog/article system for content clusters
- `/disclaimer` — Investment risk disclaimer page

### Components to create:
- `components/shared/BuyerGuideForm.tsx` — Guide-specific lead form
- About page → rename to "Why Mother Properties" with enhanced trust content

---

## Phase 3: Operations & Optimization (Future Session)

- Lead inbox admin page / CRM integration
- Automated follow-up email sequences
- Reporting dashboard
- A/B testing framework
- Remarketing pixel integration (with consent)
- Quarterly content refresh workflow

---

## Verification Plan

### Automated Tests
```bash
npm run type-check    # TypeScript compilation
npm run lint          # ESLint
npm run build         # Production build (catches SSR errors)
npm run test          # Vitest unit tests
```

### Manual Verification
- **Functional:** Test all CTAs reach correct destinations, WhatsApp links open with prefilled text, catalogue download works on desktop/mobile, form submissions create lead records
- **SEO:** Validate structured data with Google Rich Results Test, confirm sitemap excludes placeholder routes, verify unique metadata per page
- **Performance:** Lighthouse mobile audit targeting Performance 90+, Accessibility 95+
- **Mobile:** Test persistent bottom bar, thumb-reachable CTAs, responsive layout at 320px–428px widths
- **Broken assets:** Confirm broken WhatsApp gallery image is removed, all image references resolve

### Browser testing
- Open dev server and verify all pages render correctly
- Test contact form submission flow end-to-end
- Test catalogue download flow
- Test WhatsApp deep links on mobile
