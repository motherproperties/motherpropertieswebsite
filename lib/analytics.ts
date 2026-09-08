export type ConversionEvent =
  | 'contact_submitted'
  | 'buyer_guide_requested'
  | 'catalogue_downloaded'
  | 'site_visit_requested';

export function trackConversion(name: ConversionEvent): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('mother-properties:conversion', { detail: { name } }));
  }
}
