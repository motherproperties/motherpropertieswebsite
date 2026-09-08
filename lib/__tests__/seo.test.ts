import { describe, it, expect } from 'vitest';
import {
  createOrganizationSchema,
  createRealEstateAgentSchema,
  createBreadcrumbSchema,
  createFAQPageSchema,
  getCanonicalUrl,
} from '../seo';
import { siteConfig } from '../siteConfig';

describe('seo module', () => {
  it('creates valid Organization schema', () => {
    const schema = createOrganizationSchema();
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Organization');
    expect(schema.name).toBe(siteConfig.brand.name);
    expect(schema.url).toBe('https://www.motherproperties.net');
    expect((schema.contactPoint as Record<string, unknown>).contactType).toBe('Sales');
  });

  it('creates valid RealEstateAgent schema', () => {
    const schema = createRealEstateAgentSchema();
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('RealEstateAgent');
    expect(schema.name).toBe(siteConfig.brand.name);
    expect(schema.telephone).toBe(siteConfig.contact.phones[0]);
  });

  it('creates valid BreadcrumbList schema', () => {
    const breadcrumbs = [
      { name: 'Home', url: 'https://www.motherproperties.net' },
      { name: 'Projects', url: 'https://www.motherproperties.net/projects' },
      { name: 'Coffee Prince', url: 'https://www.motherproperties.net/projects/coffee-prince/' },
    ];
    const schema = createBreadcrumbSchema(breadcrumbs);
    expect(schema['@type']).toBe('BreadcrumbList');
    const items = schema.itemListElement as Array<{ position: number; name: string }>;
    expect(items).toHaveLength(3);
    expect(items[0].position).toBe(1);
    expect(items[0].name).toBe('Home');
    expect(items[2].name).toBe('Coffee Prince');
  });

  it('creates valid FAQPage schema', () => {
    const faqs = [
      { question: 'What is the minimum plot size?', answer: 'Plots start from ~6,000 sq.ft.' },
      { question: 'Who manages the coffee plantation?', answer: 'Professional estate managers.' },
    ];
    const schema = createFAQPageSchema(faqs);
    expect(schema['@type']).toBe('FAQPage');
    const entities = schema.mainEntity as Array<{ '@type': string; name: string; acceptedAnswer: { text: string } }>;
    expect(entities).toHaveLength(2);
    expect(entities[0]['@type']).toBe('Question');
    expect(entities[0].name).toBe('What is the minimum plot size?');
    expect(entities[0].acceptedAnswer.text).toBe('Plots start from ~6,000 sq.ft.');
  });

  it('generates correct canonical URLs', () => {
    expect(getCanonicalUrl()).toBe('https://www.motherproperties.net');
    expect(getCanonicalUrl('/projects/coffee-prince/')).toBe('https://www.motherproperties.net/projects/coffee-prince/');
  });
});
