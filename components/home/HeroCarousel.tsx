import { Button } from '@/components/ui/Button';
import type { HeroSlide } from '@/lib/types';

interface HeroCarouselProps {
  slides: HeroSlide[];
}

/**
 * A single, server-rendered proposition hero.
 *
 * The former rotating carousel delayed the largest contentful paint and made
 * the primary offer change without visitor intent. Keeping the public
 * component name avoids churn in page composition while serving the first,
 * conversion-focused proposition immediately.
 */
export function HeroCarousel({ slides }: HeroCarouselProps) {
  const slide = slides[0];
  if (!slide) return null;

  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden bg-forest-900 md:min-h-[700px]"
      aria-labelledby="home-hero-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[url('/images/coffee-prince-hero-desktop.webp')] bg-cover bg-center md:block"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold-200">
            Coffee Prince · Sakleshpur region
          </p>
          <h1
            id="home-hero-title"
            className="text-5xl font-serif font-medium leading-tight text-white md:text-7xl lg:text-8xl"
          >
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light leading-8 text-cream-50 md:text-3xl md:leading-10">
            {slide.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={slide.primaryCTA.href} variant="primary" size="lg" className="justify-center shadow-xl ring-2 ring-forest-400/50">
              {slide.primaryCTA.text}
            </Button>
            {slide.secondaryCTA && (
              <Button href={slide.secondaryCTA.href} variant="outline" size="lg" className="justify-center border-white bg-black/20 text-white shadow-xl hover:bg-white hover:text-forest-900">
                {slide.secondaryCTA.text}
              </Button>
            )}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-cream-100/80">
            Project figures, inventory, ownership records and management terms must be confirmed against current documents before purchase.
          </p>
        </div>
      </div>
    </section>
  );
}
