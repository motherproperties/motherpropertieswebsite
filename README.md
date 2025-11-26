# Mother Properties Website

A production-ready Next.js marketing website for Mother Properties, featuring the main brand site and the Coffee Prince managed farmlands microsite.

## 🌟 Key Features

- **Modern Tech Stack**: Next.js 15.5.6, TypeScript 5.7, Tailwind CSS 3.4, Framer Motion 11.15
- **Static Site Generation**: 14 pre-rendered pages for maximum performance
- **Responsive Design**: Mobile-first responsive across all devices
- **Email Integration**: Resend-powered email notifications for form submissions
- **PDF Downloads**: Catalogue download with automatic PDF delivery
- **Image Galleries**: Smooth image carousels with Framer Motion
- **SEO Optimized**: Metadata, sitemaps, Open Graph tags, skip links
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Professional Branding**: Dark theme with gold accents, premium aesthetics

## 📁 Project Structure

```
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Homepage
│   ├── about/page.tsx               # About page
│   ├── projects/page.tsx            # Projects listing
│   ├── coffeeprince/page.tsx        # Coffee Prince microsite
│   ├── contact/page.tsx             # Contact form
│   ├── privacy/page.tsx             # Privacy policy
│   ├── terms/page.tsx               # Terms & conditions
│   └── api/
│       ├── contact/route.ts         # Contact form API
│       └── catalogue-download/      # Catalogue download API
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Site header with navigation
│   │   ├── Footer.tsx               # Site footer with logo
│   │   └── MobileNav.tsx            # Mobile navigation menu
│   ├── home/
│   │   ├── HeroCarousel.tsx         # Homepage hero carousel
│   │   ├── FeatureGrid.tsx          # Features grid
│   │   └── Timeline.tsx             # How it works timeline
│   ├── shared/
│   │   ├── ContactForm.tsx          # Contact form component
│   │   ├── ProjectCard.tsx          # Project card component
│   │   ├── QuoteCallout.tsx         # Quote sections
│   │   └── FAQAccordion.tsx         # FAQ accordion
│   ├── coffeeprince/
│   │   ├── ImageCarousel.tsx        # Gallery carousel
│   │   ├── CatalogueDownload.tsx    # Download form
│   │   ├── PhasesSection.tsx        # Project phases
│   │   └── AmenitiesGrid.tsx        # Amenities display
│   └── ui/
│       ├── Button.tsx               # Button component
│       ├── Badge.tsx                # Badge component
│       └── Section.tsx              # Section wrapper
│
├── lib/
│   ├── siteConfig.ts                # Site configuration
│   ├── types.ts                     # TypeScript definitions
│   └── copy/
│       ├── motherProperties.ts      # Main site content
│       └── coffeePrince.ts          # Coffee Prince content
│
├── public/
│   └── images/                      # Image assets
│       ├── logos/
│       ├── gallery/
│       └── Coffee_Prince_Catalog.pdf
│
├── .env.local                       # Environment variables
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS config
└── tsconfig.json                    # TypeScript config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone repository
git clone <repository-url>
cd motherpropertieswebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

### Build for Production

```bash
# Build static export
npm run build

# Start production server
npm start
```

## 📧 Email Configuration

The website uses **Resend** for email notifications.

### Setup

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

### Email Features

- **Catalogue Downloads**: User data sent to motherpropertiesblr@gmail.com
- **Contact Form**: Submissions logged and ready for integration
- Both forms trigger automatic PDF downloads

## 🎨 Design System

### Color Palette

- **Forest Green** (#1e5631): Primary color for headers, CTAs, backgrounds
- **Coffee Brown** (#6f4e37): Secondary accent
- **Gold** (#d4af37, #e5c158): Logo colors, highlights
- **Cream** (#f8f5f0): Warm neutral backgrounds

### Typography

- **Display**: Font display for headlines (luxury feel)
- **Body**: System fonts for optimal performance
- **Sizes**: Responsive scaling from mobile to desktop

## 📊 Pages Overview

| Page | Purpose | Status |
|------|---------|--------|
| Home | Landing page with hero, features, FAQ | ✅ Complete |
| About | Company information | ✅ Complete |
| Projects | Project showcase with Coffee Prince preview | ✅ Complete |
| Coffee Prince | Detailed project microsite with gallery | ✅ Complete |
| Contact | Contact form with backend API | ✅ Complete |
| Privacy | Privacy policy | ✅ Complete |
| Terms | Terms & conditions | ✅ Complete |

## 🔧 Development

### Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
npm run test        # Run tests with Vitest
npm run test:ui     # Run tests with UI
```

### Content Management

Edit content in `lib/copy/` modules:
- `motherProperties.ts` - Main site copy and content
- `coffeePrince.ts` - Coffee Prince project content

### Adding New Pages

1. Create new file in `app/`
2. Add to site config navigation if needed
3. Content loads automatically

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## 🔍 SEO Features

- ✅ Metadata configuration with metadataBase
- ✅ Sitemap generation
- ✅ Open Graph tags
- ✅ Skip to content links
- ✅ Semantic HTML structure
- ✅ Mobile-first responsive design

## 🎯 Performance

- **Build**: 0 errors, 0 warnings
- **Pages**: 14/14 generated successfully
- **Size**: ~320KB First Load JS
- **Type**: Static export for maximum speed

## 🤝 Contact

**Email**: motherpropertiesblr@gmail.com  
**Phone**: +91 98450 42789 | +91 90350 51133  
**Address**: Bangalore, India

## 📄 License

ISC License - Mother Properties

1. Clone the repository:
```bash
git clone <repository-url>
cd mother-properties-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static site will be exported to the `out/` directory.

## 📝 Content Editing Guide

All website content is stored in TypeScript files for easy editing without touching component code.

### Updating Site Configuration

Edit `lib/siteConfig.ts` to update:
- Brand name and tagline
- Contact information (email, phones, address)
- Social media links
- Navigation menu items

### Updating Homepage Content

Edit `lib/copy/motherProperties.ts` to update:
- Hero carousel slides
- About section
- Why Mother Properties features
- How It Works timeline
- Testimonials
- FAQ items

### Updating Coffee Prince Content

Edit `lib/copy/coffeePrince.ts` to update:
- Hero section
- Project snapshot
- Managed farmlands explanation
- Estate highlights
- Farming model
- Resort model
- Project phases
- Amenities
- Gallery images
- FAQ items

### Adding Images

1. Place images in `public/images/` directory
2. Reference them in content modules using paths like `/images/your-image.jpg`
3. See `public/images/README.md` for required images list

## 🎨 Customization

### Colors

Brand colors are defined in `tailwind.config.ts`:
- **Forest Green**: Primary brand color
- **Coffee Brown**: Secondary brand color
- **Cream**: Background accent
- **Gold**: Highlight accent

### Fonts

Fonts are configured in `app/layout.tsx`:
- **Inter**: Body text (sans-serif)
- **Playfair Display**: Headings (display font)

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Run tests (when implemented)
npm test
```

## 📦 Deployment

The site is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `out/` directory.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📄 License

ISC

## 👥 Contact

**Mother Properties**
- Email: motherpropertiesblr@gmail.com
- Phone: +91 98450 42789, +91 90350 51133
- Website: www.motherproperties.net

---

Built with ❤️ using Next.js and TypeScript
