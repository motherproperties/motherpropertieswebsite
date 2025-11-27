/**
 * Root layout - Global layout with Header, Footer, fonts, and metadata
 */

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/siteConfig';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.motherproperties.net',
    name: siteConfig.brand.name,
    description: siteConfig.seo.defaultDescription,
    url: 'https://www.motherproperties.net',
    telephone: siteConfig.contact.phones[0],
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    image: siteConfig.seo.ogImage,
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-forest-500 focus:text-white focus:p-4 focus:rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
