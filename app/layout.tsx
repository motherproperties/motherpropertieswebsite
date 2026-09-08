/**
 * Root layout - Global layout with Header, Footer, MobileBottomBar, fonts, and metadata
 */

import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsentAnalytics } from '@/components/layout/ConsentAnalytics';
import { siteConfig } from '@/lib/siteConfig';
import { createRealEstateAgentSchema, createOrganizationSchema } from '@/lib/seo';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.motherproperties.net'),
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: '/images/motherproperties-logo (2).png',
    apple: '/images/motherproperties-logo (2).png',
  },
  alternates: {
    canonical: siteConfig.seo.canonical,
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.brand.name,
    images: [siteConfig.seo.ogImage],
    type: 'website',
    url: siteConfig.seo.canonical,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const realEstateAgentSchema = createRealEstateAgentSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([realEstateAgentSchema, organizationSchema]),
          }}
        />
      </head>
      <body className="font-sans pb-14 lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-forest-500 focus:text-white focus:p-4 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBottomBar />
        <ConsentAnalytics />
      </body>
    </html>
  );
}
