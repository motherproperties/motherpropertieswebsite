import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import nextConfig from '../../next.config';
import { insightArticles } from '../insights';
import { siteConfig } from '../siteConfig';

describe('public content architecture', () => {
  it('publishes the approved search and trust routes only once', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls).toContain('https://www.motherproperties.net/projects/coffee-prince/');
    expect(urls).toContain('https://www.motherproperties.net/managed-farmland-in-bangalore/');
    expect(urls).toContain('https://www.motherproperties.net/insights/farmland-due-diligence-karnataka/');
    expect(urls.some((url) => url.includes('upcoming-1'))).toBe(false);
    expect(urls.some((url) => url.includes('/admin/'))).toBe(false);
    expect(urls.some((url) => url.includes('/coffeeprince/'))).toBe(false);
  });

  it('keeps insights reviewable and conversion-connected', () => {
    expect(insightArticles.length).toBeGreaterThanOrEqual(3);
    for (const article of insightArticles) {
      expect(article.reviewedDate).toMatch(/2026/);
      expect(article.sections.length).toBeGreaterThanOrEqual(3);
      expect(article.relatedLinks?.length).toBeGreaterThan(0);
      expect(article.article).toBe(true);
    }
  });

  it('uses only the canonical project route in navigation', () => {
    const serialized = JSON.stringify(siteConfig.navigation);
    expect(serialized).toContain('/projects/coffee-prince/');
    expect(serialized).not.toContain('/coffeeprince');
  });

  it('permanently redirects the legacy project slug', async () => {
    const redirects = await nextConfig.redirects?.();
    expect(redirects).toContainEqual({
      source: '/coffeeprince',
      destination: '/projects/coffee-prince/',
      permanent: true,
    });
  });
});
