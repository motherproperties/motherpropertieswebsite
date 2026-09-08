# Mother Properties Website

A premium real estate portfolio for Mother Properties, featuring "Coffee Prince" managed farmlands. Built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🌟 Key Features

*   **Premium Aesthetic**: "Organic Luxury" design using `Outfit` and `Playfair Display` typography, rich "Forest Green" and "Gold" color palette, and glassmorphism UI.
*   **Cinematic Animations**: Scroll-triggered reveals, Ken Burns hero effects, and interactive timelines powered by `framer-motion`.
*   **Microsite Architecture**: Dedicated sub-experience for the flagship "Coffee Prince" project.
*   **Performance First**: Fully optimized images (`next/image`) and SEO-ready structure with Next.js App Router.

## 🛠 Tech Stack

*   **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment Target**: Netlify (Runtime detected automatically)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/motherproperties/website.git
    cd website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

*   `app/` - App Router pages and layouts.
    *   `coffeeprince/` - The Coffee Prince microsite.
*   `components/`
    *   `ui/` - Reusable base components (Buttons, Reveal, Section).
    *   `home/` - Homepage specific sections (Hero, Timeline).
    *   `shared/` - Shared business components (ProjectCard, ContactForm).
*   `lib/`
    *   `siteConfig.ts` - Global configuration (SEO titles, contact info, navigation).
    *   `copy/` - Text content separated from UI.
*   `public/` - Static assets and images.

## 🎨 Customizing Content

Most text content is separated from the code in `lib/copy/`.
*   Edit `lib/siteConfig.ts` to change global settings like Phone Numbers, Address, or Social Links.
*   Edit `lib/copy/motherProperties.ts` for Homepage/About/Projects text.
*   Edit `lib/copy/coffeePrince.ts` for the Coffee Prince microsite text.

## 🚢 Deployment

This project is configured for seamless deployment on **Netlify**.
1.  Connect your repository to Netlify.
2.  The build command `npm run build` will automatically be detected.
3.  The `netlify.toml` file is set up to allow the Next.js Runtime to handle SSR/ISR functions automatically.

### Lead storage and email

Production leads use the site-wide Netlify Blobs store
`mother-properties-leads`. Local Next.js development uses `.data/leads`
only for local verification.

Configure the values listed in `.env.example` in Netlify. Email delivery
requires a verified `RESEND_FROM_EMAIL`; there is no hardcoded recipient.
The token-protected CSV export is `GET /api/admin/leads/export/` with an
`Authorization: Bearer <LEADS_EXPORT_TOKEN>` header.

The restricted lead inbox is available at `/admin/leads/`. It uses the same
bearer token, shows funnel totals and supports status updates. The public
`/api/health/` endpoint is suitable for an external uptime monitor.

### Analytics and search verification

Set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` to enable the analytics option. Google
Analytics is not loaded until a visitor explicitly chooses “Allow analytics”;
only page paths and named conversion actions are sent. Set
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to publish the Search Console
verification meta tag.

---
Designed by [Samarth Viswanath](https://samarthv.me) | © 2024 Mother Properties
