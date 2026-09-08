# Mother Properties Website Enhancement PRD

**Version:** 1.0  
**Prepared:** 7 September 2026  
**Scope:** `motherproperties.net` and `motherproperties/motherpropertieswebsite`  
**Primary outcome:** Turn the website into a trustworthy, search-visible lead-generation platform for Mother Properties and its managed farmland projects, beginning with Coffee Prince near Sakleshpur.

## 1. Executive brief

Mother Properties currently has a polished Next.js marketing site with a strong visual direction and a dedicated Coffee Prince project page. The main gap is not the visual foundation; it is conversion trust, proof, lead capture, and search depth.

The new site must help a qualified visitor answer five questions quickly:

1. Who is Mother Properties and why should I trust the company?
2. What exactly am I buying or enquiring about?
3. Where is the project, and can I visit it?
4. What documentation, management, ownership and regulatory facts can be verified?
5. What is the easiest next step: call, WhatsApp, request the catalogue, or book a site visit?

The positioning should be: **a Bangalore-based property consultancy and nature-led real estate brand offering carefully evaluated, professionally managed farmland opportunities in Karnataka, with Coffee Prince as the flagship managed coffee farmland near Sakleshpur.**

Do not claim “best,” “guaranteed returns,” “assured ROI,” “30–60% appreciation,” “legitimate,” or similar superlatives unless the business can provide current, reviewable evidence and the claim has been approved by legal/compliance. The website should prove trust through documents, process, people, location, operating updates and transparent caveats.

## 2. Audit basis

### Live website observations

- The live homepage clearly presents the brand promise, Coffee Prince, a four-step process, FAQs and contact details.
- Primary actions are project exploration, contact and site-visit intent, but the page does not establish a strong above-the-fold lead offer or a clear qualification path.
- The site presents “titled land,” “clear ownership documentation,” “expert management,” “long-term value,” and investment-oriented language without surfacing evidence, document previews, dates, or a verification pathway.
- The site contains generic testimonials with names and roles but no consent, date, photo, project reference or verifiable context. These should be replaced with approved real testimonials or removed.
- The homepage does not prominently show project price range, plot-size options, site-visit availability, distance/route context, or what happens after submitting an enquiry.
- Contact details are visible, but there is no visible CRM status, response-time promise backed by operations, WhatsApp conversation flow, calendar booking, or downloadable buyer guide as a lead magnet.

### Repository observations

- Stack: Next.js 15 App Router, React 19, Tailwind CSS, Framer Motion, Resend and Netlify configuration.
- Content is sensibly separated into `lib/siteConfig.ts` and `lib/copy/*`, which should be retained or evolved into a structured content/data layer.
- SEO has basic metadata, robots, sitemap and JSON-LD, but it is mostly global/static and does not yet create a complete local-search/content system.
- The contact API sends email through `onboarding@resend.dev`, logs submissions, and has no durable lead database, deduplication, spam protection, attribution capture, lead status, owner assignment or retry queue.
- The catalogue download flow appears to notify by email but does not implement a complete permissioned lead-delivery and CRM workflow.
- A gallery reference exists for `/images/WhatsApp Image 2025-10-18 at 18.24.15_acd64f1d.jpg`, but the file is not present in `public/images`; this must be fixed before release.
- The repository contains a placeholder `/upcoming-1` route. It should not be indexable or surfaced as a project until it contains real, approved content.
- The README and current copy contain inconsistent or outdated wording, including “since inception,” “proven track record,” and investment/return language that needs evidence review.

### Catalog observations

The supplied Coffee Prince catalog strengthens the content opportunity. It includes:

- 35+ acres in the Sakleshpur / Western Ghats region.
- Titled farmland positioning and plot sizes beginning at approximately 6,000 sq. ft.
- Coffee as primary crop with pepper intercropping and long-term arecanut cultivation.
- A conceptual resort model with cottages/villas, pool, games, nature trails and plantation tours.
- Site visits and Bangalore contact details.
- A founder/director story stating 23+ years of real estate and tourism experience.

These details must be migrated carefully with a clear separation between **current/on-ground facts**, **planned features**, **conceptual layouts**, **potential outcomes**, and **claims requiring documentation**.

## 3. Goals and success metrics

### Business goals

- Generate qualified enquiries directly from the website.
- Increase scheduled site visits for Coffee Prince.
- Build trust with Bangalore, NRI and Karnataka farmland buyers.
- Make Mother Properties discoverable for high-intent searches related to farmland, managed farmland, coffee estates and property consultants in Bangalore/Sakleshpur.
- Create a reusable project-page system for future managed farmland projects.

### Product metrics

Track at minimum:

- Lead conversion rate by landing page and source.
- Qualified-lead rate.
- Catalogue-request completion rate.
- Site-visit booking rate and show-up rate.
- WhatsApp click-to-conversation rate, phone click rate and email click rate.
- Form completion rate, validation failure rate and error rate.
- Organic impressions, clicks, CTR and ranking for target queries.
- Core Web Vitals and mobile performance.
- Lead response time and lead-to-visit time.

Initial targets should be set after a 30-day baseline. Suggested launch targets: 3–5% visitor-to-lead conversion, 20%+ catalogue-request-to-conversation, 10%+ qualified-lead-to-site-visit booking, and 100% of submissions recorded with source/UTM data.

## 4. Target audiences and intent paths

| Audience | Need | Best entry page | Primary CTA |
|---|---|---|---|
| Bangalore weekend-home buyer | Nature, access, ownership, visitability | Coffee Prince | Book a site visit |
| Farmland investor | Title, management, crop model, downside clarity | Managed Farmland Guide / Coffee Prince | Request verified project details |
| Family legacy buyer | Safety, documentation, lifestyle, long-term stewardship | About + Coffee Prince | Speak to an advisor |
| NRI buyer | Remote verification, management updates, process | NRI / Remote ownership page | Request a callback |
| Landowner / project partner | Consultancy and project expertise | Property Consultancy page | Discuss your property |
| Local search visitor | Nearby project/service discovery | Bangalore / Sakleshpur landing pages | WhatsApp Mother Properties |

## 5. Recommended information architecture

### Primary navigation

- Home
- Why Mother Properties
- Projects
- Managed Farmland
- Coffee Prince
- Property Consultancy
- Site Visits
- Insights / Buyer Guide
- Contact

### Supporting routes

- `/projects/coffee-prince`
- `/managed-farmland-in-bangalore`
- `/managed-farmland-in-sakleshpur`
- `/property-consultants-in-bangalore`
- `/site-visit`
- `/buyer-guide`
- `/insights/*`
- `/privacy`, `/terms`, `/disclaimer`

The existing `/coffeeprince` route may be preserved with a permanent redirect to `/projects/coffee-prince` if the new slug is adopted. Keep redirects and canonical URLs explicit.

## 6. Homepage requirements

### Hero

Replace generic hero copy with a clear, qualified proposition:

> **Own a managed coffee farmland near Sakleshpur.**  
> Titled farmland, professional plantation management and a nature-led ownership experience from a Bangalore-based property team.

Actions:

- `Book a Coffee Prince Site Visit`
- `Get the Project Catalogue`
- Persistent mobile `Call` and `WhatsApp` actions.

Hero must show location, project status, plot-size starting point where approved, and a non-misleading availability label such as “Limited current inventory” only when true.

### Proof strip

Show only verified facts, with dates where useful:

- 23+ years founder experience, if substantiated.
- 35+ acres, with source/date.
- Approx. 4-hour drive from Bangalore, with a map/route basis.
- Plot sizes from approx. 6,000 sq. ft., with current availability disclaimer.
- Current management model and crop mix.

### Trust section

Add “How we verify a project” with six concrete steps: ownership/title review, survey/boundary review, access review, water/power review, land-use/regulatory review, and buyer documentation support. Each item should link to an explanation, not just a badge.

### Project section

Use a conversion-ready Coffee Prince card with:

- Location map preview.
- Current project status.
- Crop model.
- Plot-size options.
- Site-visit CTA.
- Catalogue CTA.
- “What is confirmed / what is planned” labels.

### Lead magnet section

Offer a useful asset, not just a brochure:

**Free guide:** “Buying Managed Farmland Near Bangalore: 12 Due-Diligence Checks Before You Pay.”

Capture name, phone, email, buyer intent, preferred call time and consent. Deliver the guide and catalogue through a reliable email flow and record the lead.

### Social proof

Use approved customer stories, site-visit photos, project updates, director/founder video, documentation walkthroughs and third-party references. Do not use invented or unverifiable testimonials.

## 7. Coffee Prince page requirements

The project page should become the primary sales landing page, not a long brochure rendered as a scroll.

Required sections:

1. Clear project proposition and two conversion CTAs.
2. At-a-glance facts: location, acreage, plot sizes, crop mix, drive time, current phase and ownership model.
3. Interactive location and route from Bangalore, with exact coordinates revealed only if safe and approved.
4. “What you own / what is managed / what is planned” comparison.
5. Title and documentation process with approved document checklist and redacted sample documents where permitted.
6. Farming model: coffee, pepper and arecanut, with realistic maturity/timing language and no guaranteed returns.
7. Management model: activities, frequency, update mechanism, owner responsibilities, fees and exclusions.
8. Development phases with dates, current status and evidence. Remove “completed” or “in-progress” labels unless verified.
9. Resort/villa concept clearly marked as conceptual and subject to approvals; never present conceptual amenities as delivered facilities.
10. Gallery with only owned/licensed images, captions, location and date.
11. FAQ covering title, access, due diligence, construction permissions, maintenance, crop management, resale, taxes, fees, visit process, risks and cancellation/refund policy.
12. Sticky enquiry panel and site-visit booking module.
13. Download catalogue after a short lead form, with a visible privacy statement and immediate confirmation.

## 8. Lead-generation system

### Lead forms

Implement reusable forms with these fields:

- Full name
- Mobile number with country code
- Email
- City/country
- Intent: weekend home, farmland ownership, investment research, NRI enquiry, property consultancy, other
- Budget range, optional and configurable
- Preferred contact method
- Preferred call time
- Project interest
- Message
- Consent to contact and privacy-policy link

Use progressive profiling: the first CTA should ask only for the minimum required data; catalogue and site-visit flows may ask additional qualification questions.

### Lead routing

Create a durable lead record before sending notifications. Minimum fields: lead ID, timestamp, source, landing page, UTM parameters, referrer, form type, consent, status, owner, next action, notes and contact history.

Statuses: New, Contacted, Qualified, Site Visit Proposed, Site Visit Confirmed, Visited, Nurture, Converted, Lost, Invalid.

Send notifications to the responsible team through a verified sender domain. Add retries, failure logging, rate limits, spam protection and an admin export. If no CRM is selected initially, implement a small database-backed lead inbox that can later sync to a CRM.

### Conversion actions

- WhatsApp deep link with prefilled intent, e.g. “Hi, I want the Coffee Prince catalogue and a site-visit slot.”
- Click-to-call on mobile.
- Site-visit form with date preference and pickup/route questions.
- Catalogue download with consent and tracking.
- “Request a callback” CTA across every project and high-intent page.

## 9. Content, trust and compliance requirements

Create a claim register with columns: claim, page, source document, evidence owner, last verified date, expiry/review date, risk level and approved wording.

Mandatory rules:

- Never imply guaranteed returns, assured ROI or assured rental income without legally reviewed contractual documentation.
- Distinguish title verification from a promise of legal validity; publish “subject to independent legal verification” where appropriate.
- Mark conceptual resort layouts, proposed amenities and future phases as proposed.
- Explain agricultural land, construction, conversion, access, registration, tax and local-regulation considerations without giving legal advice.
- Add an investment-risk and no-guarantee disclaimer written for the actual project.
- Show the company’s legal entity name, registration details, office details, grievance/contact path and privacy consent.
- Obtain written consent for testimonials, customer photographs, site images and third-party images.
- Correct catalogue inconsistencies before publication, including address variants and typographical errors.

## 10. SEO and AISO/GEO requirements

### Technical SEO

- Unique title, meta description, canonical, OG image and structured data for every indexable page.
- Add `Organization`, `RealEstateAgent`/appropriate local business, `Product` or `Offer` only where factual, `BreadcrumbList`, `FAQPage` where eligible, `Article` and `LocalBusiness` schemas.
- Generate sitemap from real routes only; exclude placeholders, gated/private content and duplicate pages.
- Add image width/height, descriptive alt text, modern formats and consistent naming.
- Fix missing assets, broken links, 404s, redirect chains and canonical inconsistencies between `motherproperties.net` and `www.motherproperties.net`.
- Validate structured data in Google Rich Results Test and Schema Markup Validator.
- Add Search Console, analytics, conversion events and consent-aware tracking.

### Search content clusters

Build useful, first-hand pages around:

- managed farmland near Bangalore
- farmland near Sakleshpur
- coffee plantation plots near Bangalore
- weekend farmland near Sakleshpur
- managed coffee estate Karnataka
- property consultants in Bangalore
- farmland due diligence in Karnataka
- how managed farmland works
- coffee plantation ownership and management

Every article must answer a real buyer question, cite/identify the business’s own experience where relevant, include the last-reviewed date, and link to the relevant project or enquiry path.

### AI-search readiness

- Use direct question headings and concise answer blocks.
- Keep facts consistent across site, catalogue, Google Business Profile and social profiles.
- Provide clear entity information: company, founder, office, projects, locations, services and contact channels.
- Publish a transparent “Project facts and documents” page with dates and definitions.
- Use FAQ and HowTo-like content only when it reflects genuine page content; do not manipulate schema.
- Build a media/reference page with approved project facts, founder profile and contact details for journalists/partners.

## 11. Visual and UX direction

Retain the current organic-luxury foundation, but reduce decorative motion where it competes with the sales message.

- Mobile-first layout with thumb-reachable CTAs.
- Persistent bottom bar on mobile: WhatsApp, Call, Site Visit.
- Use real project photography and short on-ground video before stock imagery.
- Put factual labels beside aspirational copy.
- Make pricing/availability/contact route visible without forcing a long scroll.
- Use motion for orientation and storytelling; respect `prefers-reduced-motion`.
- Maintain WCAG 2.2 AA contrast, keyboard access, focus states, labels, error messages and screen-reader semantics.
- Optimize fonts, images, carousel behavior and client-side animation for Core Web Vitals.

## 12. Technical architecture changes

### Frontend

- Preserve Next.js App Router and Tailwind unless a measured reason requires change.
- Introduce typed project data models so future projects can be added without duplicating page code.
- Add route-level metadata generation and structured data helpers.
- Use server components by default; keep interactive forms, carousels and booking widgets client-side only.
- Add a proper media/content ownership manifest.

### Backend and integrations

- Add a database-backed lead model and admin/export path.
- Add a provider abstraction for email, WhatsApp and future CRM integration.
- Replace `onboarding@resend.dev` with a verified Mother Properties sender domain.
- Add webhook/retry handling and alerting for email/API failures.
- Add spam controls: honeypot, rate limiting, server-side validation, origin checks and optional Turnstile/reCAPTCHA.
- Capture UTM parameters, referrer and consent server-side.
- Serve catalogue and buyer guide from a stable, trackable route with access controls appropriate to the asset.

### Observability

- Monitor form errors, API latency, email delivery, failed downloads, broken images and 404s.
- Add uptime monitoring and a monthly SEO/lead funnel review.

## 13. Testing and acceptance criteria

### Functional

- Every CTA reaches the intended destination and retains project/UTM context.
- Valid submissions create exactly one lead record and send the correct notifications.
- Failed email delivery does not silently lose the lead.
- Catalogue and guide delivery works on desktop and mobile.
- WhatsApp links open with correct prefilled text and phone number.
- Site-visit requests capture date preference and appear in the lead inbox.
- No placeholder or broken image routes are exposed.

### SEO

- All indexable routes have unique metadata and valid canonical URLs.
- Sitemap contains only approved indexable routes.
- Structured data has no errors or misleading properties.
- Internal links connect informational pages to a relevant conversion action.
- Search Console ownership, sitemap submission and conversion events are configured.

### Performance/accessibility

- Test at representative Indian mobile network conditions.
- Target Lighthouse mobile: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+; treat as targets, not a substitute for field data.
- Meet WCAG 2.2 AA for keyboard, focus, labels, contrast and reduced motion.

### Security/privacy

- Validate and sanitize all inputs server-side.
- Do not log unnecessary personal data.
- Protect lead data and restrict exports.
- Publish consent language, retention policy and privacy contact.
- Run dependency audit, secret scan, API abuse tests and basic OWASP web checks.

## 14. Delivery phases

### Phase 0: Evidence and content lock

Verify project facts, legal/entity details, title/documentation process, current inventory, prices, fees, development status, crop model, permissions, amenities and approved imagery. Finalize claim register.

### Phase 1: Conversion foundation

Implement new homepage, Coffee Prince landing page, contact/site-visit forms, WhatsApp/call actions, catalogue lead flow, analytics and reliable lead capture.

### Phase 2: Trust and search expansion

Build due-diligence page, managed farmland explainer, property consultancy page, local landing pages, buyer guide and initial insight articles.

### Phase 3: Operations and optimization

Add lead inbox/CRM integration, automated follow-up, reporting dashboard, A/B tests, remarketing audiences where consented, and quarterly content refresh.

## 15. Definition of done

The release is complete when:

- A first-time visitor can understand the company, project, ownership model and next step within one minute.
- A visitor can call, WhatsApp, request the catalogue, request a callback or book a site visit from every high-intent page.
- Every enquiry is durably recorded with source and consent.
- All published claims are mapped to approved evidence or clearly labelled as proposed/subject to verification.
- The site has no broken assets, placeholder indexable routes or misleading testimonials.
- Mobile UX, accessibility, performance, SEO, privacy and security acceptance tests pass.
- The business can measure which pages and campaigns generate qualified leads and site visits.

## 16. Immediate backlog

1. Verify all current project facts and create the claim register.
2. Replace/remove fabricated or unverified testimonials.
3. Fix the missing WhatsApp gallery asset and audit every image/license.
4. Replace the fragile email-only contact process with durable lead capture.
5. Add site-visit booking and persistent mobile WhatsApp/call CTAs.
6. Rework Coffee Prince into a fact-led conversion landing page.
7. Add project documentation, risk, ownership and management sections.
8. Correct catalogue address/content inconsistencies and publish a reviewed version.
9. Add route-level SEO, local landing pages, analytics and conversion events.
10. Run mobile, accessibility, performance, security and end-to-end regression testing before launch.

## Evidence references

- Live website: https://motherproperties.net/
- Source repository: https://github.com/motherproperties/motherpropertieswebsite
- Supplied catalog: Coffee Prince Catalog, June 2026, 11 pages
