# PRD Completion Status

Last reviewed: 8 September 2026

This file distinguishes implemented website behavior from business evidence and
third-party setup that cannot be created from source code.

## Implemented locally

- Conversion-focused homepage and fact-led Coffee Prince page
- Canonical `/projects/coffee-prince/` route with permanent legacy redirect
- Contact, buyer-guide, catalogue and site-visit lead flows
- Durable Netlify Blobs production storage and isolated local development storage
- Idempotent submissions, consent, honeypots, request limits and origin checks
- Configurable verified email sender with retry and failure recording
- Token-protected lead inbox, status workflow, summary metrics and CSV export
- Persistent mobile phone, WhatsApp and site-visit actions
- Buyer guide, disclaimer, facts page, media reference page and privacy controls
- Managed-farmland, Bangalore, Sakleshpur, consultancy and NRI search pages
- Three reviewed initial Insights articles with Article and breadcrumb data
- Unique canonical metadata and sitemap coverage for every public route
- Consent-gated GA4 conversion events and optional Search Console verification
- Uptime health endpoint and baseline security response headers
- Placeholder route and uncleared third-party image removed
- Large photographs recompressed and a desktop hero derivative generated
- Automated type, lint, unit, integration, build, route and HTTP security checks

## Requires business-supplied evidence before production sign-off

- Registered legal entity name and registration number
- Current project inventory, price, parcel extent and plot schedule
- Title chain, survey, access, land-use and regulatory evidence
- Current management agreement, fee schedule, exclusions and reporting process
- Dated development-status evidence and approved phase wording
- Founder career evidence if an experience-duration claim is to be restored
- Written permissions for photographs, portrait, logos and catalogue contents
- Legally reviewed catalogue, address consistency, terms and grievance details

The public copy currently avoids treating those pending items as verified facts.
The claim register remains the source of truth for approving any stronger claim.

## Requires deployment credentials or external authority

- Netlify preview/production deployment and Blobs verification
- Resend API key, verified sender domain and lead-notification recipient
- Lead inbox/export token and rate-limit salt
- GA4 measurement ID and Search Console verification token
- Search Console property verification and sitemap submission
- External uptime monitor configuration

## Measured acceptance status

- Type checking, lint, unit/integration tests and production build: pass
- Automated tests: 23 passing
- Dependency audit: zero known vulnerabilities after Next.js 16 security upgrade
- Sitemap routes and referenced assets: all return HTTP 200 locally
- Legacy Coffee Prince route: permanent redirect
- Placeholder route and unauthorized lead APIs: HTTP 404
- Lighthouse mobile local: Performance 90, Accessibility 100, Best Practices 100, SEO 100
- Mobile LCP: 3.6 seconds; total blocking time: 100 ms; layout shift: 0

Lighthouse is a laboratory result. Production hosting, caching and field Core
Web Vitals must be measured after deployment. Missing production source maps are
the only remaining binary Lighthouse audit failure in the local report.

## Deliberately not activated

- Automated promotional follow-up and remarketing are not activated because
  approved campaign copy, marketing-consent scope and audience rules were not
  supplied.
- A/B tests are not activated without a defined hypothesis and sufficient
  baseline traffic; GA4-compatible measurement infrastructure is ready.
- No external CRM webhook sends personal data. The database-backed lead inbox is
  the PRD-approved initial operating path until a CRM and data-processing terms
  are selected.
