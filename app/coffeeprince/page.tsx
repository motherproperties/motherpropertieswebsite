/**
 * Coffee Prince — Primary sales landing page
 * Conversion-focused layout per PRD §7
 */

import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { QuoteCallout } from '@/components/shared/QuoteCallout';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { ImageCarousel } from '@/components/coffeeprince/ImageCarousel';
import { PhasesSection } from '@/components/coffeeprince/PhasesSection';
import { AmenitiesGrid } from '@/components/coffeeprince/AmenitiesGrid';
import { CatalogueDownload } from '@/components/coffeeprince/CatalogueDownload';
import { AtAGlanceFacts } from '@/components/coffeeprince/AtAGlanceFacts';
import { OwnershipComparison } from '@/components/coffeeprince/OwnershipComparison';
import { DocumentationChecklist } from '@/components/coffeeprince/DocumentationChecklist';
import { StickyEnquiryPanel } from '@/components/coffeeprince/StickyEnquiryPanel';
import { SiteVisitBooking } from '@/components/coffeeprince/SiteVisitBooking';
import { coffeePrinceContent } from '@/lib/copy/coffeePrince';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/lib/siteConfig';
import { createFAQPageSchema, createBreadcrumbSchema } from '@/lib/seo';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title:
    'Coffee Prince — Managed Coffee Farmland Near Sakleshpur | Mother Properties',
  description:
    'Review Coffee Prince managed farmland project information for the Sakleshpur region, request current documents and book a site visit.',
  keywords:
    'coffee farmland Sakleshpur, managed farmland near Bangalore, coffee plantation plots, titled farmland Western Ghats, farmland for sale Karnataka, Coffee Prince Mother Properties',
  alternates: {
    canonical: '/projects/coffee-prince/',
  },
  openGraph: {
    title: 'Coffee Prince — Managed Coffee Farmland Near Sakleshpur',
    description:
      'Review the proposed ownership and plantation management model, request current documents or book a site visit.',
    images: ['/images/Coffee-plantation.jpg'],
    url: '/projects/coffee-prince/',
  },
};

export default function CoffeePrincePage() {
  const faqSchema = createFAQPageSchema(coffeePrinceContent.faq);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.motherproperties.net' },
    { name: 'Projects', url: 'https://www.motherproperties.net/projects' },
    {
      name: 'Coffee Prince',
      url: 'https://www.motherproperties.net/projects/coffee-prince/',
    },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Sticky Enquiry Panel (desktop) */}
      <StickyEnquiryPanel />

      {/* Hero */}
      <div className="relative py-20 md:py-32 overflow-hidden bg-forest-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={coffeePrinceContent.hero.backgroundImage}
            alt="Coffee Prince managed farmland in the Western Ghats"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-28 h-28 bg-cream-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Image
              src="/images/coffee_prince_logo_gold_transparent_4000.png"
              alt="Coffee Prince Logo"
              width={112}
              height={112}
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {coffeePrinceContent.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            {coffeePrinceContent.hero.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {coffeePrinceContent.hero.badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>

          {/* Two primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href={coffeePrinceContent.hero.primaryCTA.href}
              variant="primary"
              size="lg"
              className="shadow-xl"
            >
              {coffeePrinceContent.hero.primaryCTA.text}
            </Button>
            <Button
              href={coffeePrinceContent.hero.secondaryCTA.href}
              variant="secondary"
              size="lg"
              className="shadow-xl"
            >
              {coffeePrinceContent.hero.secondaryCTA.text}
            </Button>
          </div>
        </div>
      </div>

      {/* At-a-Glance Facts Bar */}
      <AtAGlanceFacts facts={coffeePrinceContent.atAGlance} />

      {/* Project Snapshot */}
      <Section background="white">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6">
              {coffeePrinceContent.snapshot.title}
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {coffeePrinceContent.snapshot.intro}
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coffeePrinceContent.snapshot.blocks.map((block, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <div className="bg-cream-50 p-8 rounded-3xl border border-cream-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-display font-semibold text-forest-700 mb-4">
                  {block.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {block.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Ownership Comparison: Own / Managed / Planned */}
      <Section background="cream">
        <OwnershipComparison data={coffeePrinceContent.ownership} />
      </Section>

      {/* Documentation Process */}
      <Section background="white">
        <DocumentationChecklist steps={coffeePrinceContent.documentation} />
      </Section>

      {/* Director Angle */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal width="100%">
            <p className="text-2xl md:text-3xl font-display italic text-gray-800 mb-10 leading-relaxed">
              &ldquo;{coffeePrinceContent.directorAngle.summary}&rdquo;
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <Button
              href={coffeePrinceContent.directorAngle.cta.href}
              variant="primary"
              size="lg"
              className="shadow-xl"
            >
              {coffeePrinceContent.directorAngle.cta.text}
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* What is Managed Farmland */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {coffeePrinceContent.whyManagedFarmlands.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {coffeePrinceContent.whyManagedFarmlands.intro}
          </p>
        </div>
        <FeatureGrid
          features={coffeePrinceContent.whyManagedFarmlands.features}
          columns={4}
        />
        <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
          {coffeePrinceContent.whyManagedFarmlands.additionalInfo}
        </p>
      </Section>

      {/* Estate Highlights */}
      <Section background="green">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-wide">
              {coffeePrinceContent.estateHighlights.title}
            </h2>
          </Reveal>
        </div>
        <FeatureGrid
          features={coffeePrinceContent.estateHighlights.highlights}
          columns={3}
        />
      </Section>

      {/* Farming Model */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {coffeePrinceContent.farmingModel.title}
          </h2>
          <p className="text-xl text-coffee-600 font-medium">
            {coffeePrinceContent.farmingModel.subtitle}
          </p>
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          {coffeePrinceContent.farmingModel.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {coffeePrinceContent.farmingModel.crops.map((crop, index) => (
            <div
              key={index}
              className="bg-cream-50 p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {crop.name}
              </h3>
              <p className="text-gray-600">{crop.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-sm">
          {coffeePrinceContent.farmingModel.additionalInfo}
        </p>
        {coffeePrinceContent.farmingModel.disclaimer && (
          <p className="text-center text-gray-400 text-xs italic mt-4 max-w-3xl mx-auto">
            {coffeePrinceContent.farmingModel.disclaimer}
          </p>
        )}
      </Section>

      {/* Management Model */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
            Management Model
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What we manage, how we communicate and what owners are responsible
            for.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Activities table */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest-50 text-left">
                    <th className="px-6 py-3 font-semibold text-forest-700">
                      Activity
                    </th>
                    <th className="px-6 py-3 font-semibold text-forest-700">
                      Frequency
                    </th>
                    <th className="px-6 py-3 font-semibold text-forest-700">
                      Managed By
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {coffeePrinceContent.management.activities.map(
                    (activity, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-3 text-gray-800">
                          {activity.activity}
                        </td>
                        <td className="px-6 py-3 text-gray-600">
                          {activity.frequency}
                        </td>
                        <td className="px-6 py-3 text-gray-600">
                          {activity.managedBy}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              How We Keep You Updated
            </h3>
            <p className="text-gray-600">
              {coffeePrinceContent.management.updateMechanism}
            </p>
          </div>

          {/* Owner responsibilities + Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Owner Responsibilities
              </h3>
              <ul className="space-y-2">
                {coffeePrinceContent.management.ownerResponsibilities.map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-forest-500 mt-1">•</span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                What Is Not Included
              </h3>
              <ul className="space-y-2">
                {coffeePrinceContent.management.exclusions.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-gray-400 mt-1">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center">
            <strong>Fees:</strong> {coffeePrinceContent.management.fees}
          </p>
        </div>
      </Section>

      {/* Resort Model (Conceptual) */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {coffeePrinceContent.resortModel.title}
          </h2>
          <p className="text-xl text-coffee-600 font-medium">
            {coffeePrinceContent.resortModel.subtitle}
          </p>
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          {coffeePrinceContent.resortModel.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
          {coffeePrinceContent.resortModel.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-cream-50 p-4 rounded-xl"
            >
              <div className="w-6 h-6 bg-gold-500 rounded-full flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-3xl mx-auto">
          <p className="text-sm text-amber-800">
            ⚠️ {coffeePrinceContent.resortModel.disclaimer}
          </p>
        </div>
      </Section>

      {/* Project Phases */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Project Phases
          </h2>
        </div>
        <PhasesSection phases={coffeePrinceContent.phases} />
      </Section>

      {/* Layout & Amenities */}
      <Section background="green">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 tracking-wide">
              Layout & Amenities
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-white/80 italic font-light tracking-wider">
              {coffeePrinceContent.layoutAndAmenities.layoutNote}
            </p>
          </Reveal>
        </div>
        <AmenitiesGrid
          amenities={coffeePrinceContent.layoutAndAmenities.amenities}
          disclaimer={coffeePrinceContent.layoutAndAmenities.disclaimer}
        />
      </Section>

      {/* Quote */}
      <Section background="white">
        <QuoteCallout
          quote={coffeePrinceContent.quote.text}
          backgroundImage={coffeePrinceContent.quote.backgroundImage}
        />
      </Section>

      {/* Gallery */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Gallery
          </h2>
        </div>
        <ImageCarousel images={coffeePrinceContent.gallery} />
      </Section>

      {/* Catalogue Download */}
      <Section background="white" id="catalogue">
        <CatalogueDownload />
      </Section>

      {/* FAQ */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={coffeePrinceContent.faq} />
        </div>
      </Section>

      {/* Site Visit Booking */}
      <Section background="white" id="site-visit">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {coffeePrinceContent.siteVisit.title}
          </h2>
          <p className="text-xl text-coffee-600 font-medium mb-4">
            {coffeePrinceContent.siteVisit.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {coffeePrinceContent.siteVisit.description}
          </p>
        </div>

        {/* Site Visit Booking Form */}
        <SiteVisitBooking />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-cream-50 p-6 rounded-2xl text-center">
            <Phone className="w-8 h-8 text-forest-500 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">Call Us</p>
            {siteConfig.contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="block text-forest-600 hover:text-forest-700 font-medium"
              >
                {phone}
              </a>
            ))}
          </div>
          <div className="bg-cream-50 p-6 rounded-2xl text-center">
            <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">WhatsApp</p>
            <a
              href={getWhatsAppLink(
                siteConfig.contact.whatsapp.siteVisitMessage
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Message Us
            </a>
          </div>
          <div className="bg-cream-50 p-6 rounded-2xl text-center">
            <Mail className="w-8 h-8 text-forest-500 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-forest-600 hover:text-forest-700 font-medium"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
