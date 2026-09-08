'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';

type Consent = 'granted' | 'denied' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const storageKey = 'mother-properties-analytics-consent';

export function ConsentAnalytics() {
  const pathname = usePathname();
  const measurementId = siteConfig.analytics.ga4MeasurementId;
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = localStorage.getItem(storageKey);
      setConsent(stored === 'granted' || stored === 'denied' ? stored : null);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (consent !== 'granted' || !measurementId) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    if (!document.querySelector(`script[data-mp-ga="${measurementId}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      script.dataset.mpGa = measurementId;
      document.head.appendChild(script);
    }
  }, [consent, measurementId]);

  useEffect(() => {
    if (consent === 'granted' && measurementId && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [consent, measurementId, pathname]);

  useEffect(() => {
    if (consent !== 'granted' || !measurementId) return;
    const conversionHandler = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: string }>).detail;
      if (detail?.name) window.gtag?.('event', detail.name);
    };
    const clickHandler = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest('a');
      const href = anchor?.getAttribute('href') || '';
      if (href.startsWith('tel:')) window.gtag?.('event', 'phone_click');
      else if (href.includes('wa.me/')) window.gtag?.('event', 'whatsapp_click');
      else if (href.toLowerCase().includes('.pdf')) window.gtag?.('event', 'asset_download');
    };
    window.addEventListener('mother-properties:conversion', conversionHandler);
    document.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('mother-properties:conversion', conversionHandler);
      document.removeEventListener('click', clickHandler);
    };
  }, [consent, measurementId]);

  const choose = (choice: Exclude<Consent, null>) => {
    localStorage.setItem(storageKey, choice);
    window.gtag?.('consent', 'update', {
      analytics_storage: choice === 'granted' ? 'granted' : 'denied',
    });
    if (choice === 'denied') {
      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0]?.trim();
        if (name === '_ga' || name?.startsWith('_ga_')) {
          document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
        }
      });
    }
    setConsent(choice);
  };

  if (!ready) return null;

  return (
    <>
      {consent === null && (
        <aside
          aria-label="Analytics preference"
          className="fixed bottom-16 left-3 right-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl lg:bottom-5"
        >
          <p className="font-semibold text-gray-900">Optional website measurement</p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            With your permission, anonymous page and conversion events help us understand which guides and enquiry paths are useful. Marketing or analytics scripts do not load before you accept.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose('granted')} className="rounded-lg bg-forest-700 px-4 py-2 text-sm font-semibold text-white">
              Allow analytics
            </button>
            <button type="button" onClick={() => choose('denied')} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800">
              Use essential only
            </button>
            <a href="/privacy/" className="self-center text-sm font-medium text-forest-700 hover:underline">Privacy details</a>
          </div>
        </aside>
      )}
      {consent !== null && (
        <button
          type="button"
          onClick={() => setConsent(null)}
          className="fixed bottom-16 left-3 z-40 rounded-lg bg-white/95 px-3 py-2 text-xs font-medium text-gray-700 shadow-md ring-1 ring-gray-200 lg:bottom-3"
        >
          Privacy settings
        </button>
      )}
    </>
  );
}
