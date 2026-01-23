/**
 * Coffee Prince microsite - Complete Coffee Prince project page
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
import { coffeePrinceContent } from '@/lib/copy/coffeePrince';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Coffee Prince – Premium Managed Coffee Farmlands in Sakleshpur, Western Ghats',
  description:
    'Coffee Prince offers titled, curated managed coffee farmlands in Sakleshpur, Western Ghats. Investment-ready agricultural property with resort amenities. Premium farmland for sale near Bangalore.',
  keywords: 'coffee farmland, Sakleshpur, Western Ghats, managed farmland, agricultural investment, farmland for sale, coffee plantation, lifestyle property',
  openGraph: {
    title: 'Coffee Prince – Managed Coffee Farmlands in Western Ghats',
    description: 'Titled coffee farmlands with resort concept in Sakleshpur. Premium managed farmland investment.',
    images: ['/images/Coffee-plantation.jpg'],
  },
};

export default function CoffeePrincePage() {
  return (
    <>
      {/* Hero */}
      {/* Hero */}
      <div className="relative py-20 md:py-32 overflow-hidden bg-forest-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={coffeePrinceContent.hero.backgroundImage}
            alt="Coffee Prince Estate"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {coffeePrinceContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto">
            {coffeePrinceContent.hero.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {coffeePrinceContent.hero.badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="space-y-2 bg-black/30 backdrop-blur-sm rounded-2xl py-4 px-6 inline-block">
            {coffeePrinceContent.hero.taglines.map((tagline) => (
              <p key={tagline} className="text-lg md:text-xl font-semibold text-gold-400">
                {tagline}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Project Snapshot */}
      <Section background="white">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6">
              {coffeePrinceContent.snapshot.title}
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">{coffeePrinceContent.snapshot.intro}</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coffeePrinceContent.snapshot.blocks.map((block, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <div className="bg-cream-50 p-8 rounded-3xl border border-cream-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-display font-semibold text-forest-700 mb-4">{block.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{block.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Director Angle */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal width="100%">
            <p className="text-2xl md:text-3xl font-display italic text-gray-800 mb-10 leading-relaxed">
              "{coffeePrinceContent.directorAngle.summary}"
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <Button href={coffeePrinceContent.directorAngle.cta.href} variant="primary" size="lg" className="shadow-xl">
              {coffeePrinceContent.directorAngle.cta.text}
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Why Managed Farmlands */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {coffeePrinceContent.whyManagedFarmlands.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {coffeePrinceContent.whyManagedFarmlands.intro}
          </p>
        </div>
        <FeatureGrid features={coffeePrinceContent.whyManagedFarmlands.features} columns={4} />
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
        <FeatureGrid features={coffeePrinceContent.estateHighlights.highlights} columns={3} />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {coffeePrinceContent.farmingModel.crops.map((crop, index) => (
            <div key={index} className="bg-cream-50 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{crop.name}</h3>
              <p className="text-gray-600">{crop.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          {coffeePrinceContent.farmingModel.additionalInfo}
        </p>
      </Section>

      {/* Resort Model */}
      <Section background="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {coffeePrinceContent.resortModel.title}
          </h2>
          <p className="text-xl text-coffee-600 font-medium">{coffeePrinceContent.resortModel.subtitle}</p>
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          {coffeePrinceContent.resortModel.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
          {coffeePrinceContent.resortModel.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl">
              <div className="w-6 h-6 bg-gold-500 rounded-full flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic text-center">{coffeePrinceContent.resortModel.disclaimer}</p>
      </Section>

      {/* Project Phases */}
      <Section background="white">
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
            <p className="text-white/80 italic font-light tracking-wider">{coffeePrinceContent.layoutAndAmenities.layoutNote}</p>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Gallery</h2>
        </div>
        <ImageCarousel images={coffeePrinceContent.gallery} />
      </Section>

      {/* Catalogue Download */}
      <Section background="white">
        <CatalogueDownload />
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={coffeePrinceContent.faq} />
        </div>
      </Section>

      {/* Site Visit & Contact CTA */}
      <Section background="gradient" id="site-visit">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            {coffeePrinceContent.siteVisit.title}
          </h2>
          <p className="text-xl text-coffee-600 font-medium mb-4">{coffeePrinceContent.siteVisit.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{coffeePrinceContent.siteVisit.description}</p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl text-center">
            <Phone className="w-8 h-8 text-forest-500 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">Call Us</p>
            {siteConfig.contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="block text-forest-600 hover:text-forest-700 font-medium"
              >
                {phone}
              </a>
            ))}
          </div>
          <div className="bg-white p-6 rounded-2xl text-center">
            <Mail className="w-8 h-8 text-forest-500 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">Email Us</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-forest-600 hover:text-forest-700 font-medium"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center">
            <MapPin className="w-8 h-8 text-forest-500 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">Visit Us</p>
            <p className="text-sm text-gray-700">
              {siteConfig.contact.address.city}, {siteConfig.contact.address.pincode}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={coffeePrinceContent.siteVisit.cta.primary.href} variant="primary" size="lg">
            {coffeePrinceContent.siteVisit.cta.primary.text}
          </Button>
          <Button href={coffeePrinceContent.siteVisit.cta.whatsapp.href} variant="secondary" size="lg">
            {coffeePrinceContent.siteVisit.cta.whatsapp.text}
          </Button>
        </div>
      </Section>
    </>
  );
}
