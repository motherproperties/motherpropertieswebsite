import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.motherproperties.net';
  const routes: Array<[
    string,
    MetadataRoute.Sitemap[number]['changeFrequency'],
    number,
  ]> = [
    ['/', 'monthly', 1],
    ['/about/', 'monthly', 0.8],
    ['/projects/', 'weekly', 0.9],
    ['/projects/coffee-prince/', 'weekly', 1],
    ['/projects/coffee-prince/facts/', 'monthly', 0.8],
    ['/managed-farmland/', 'monthly', 0.8],
    ['/managed-farmland-in-bangalore/', 'monthly', 0.8],
    ['/managed-farmland-in-sakleshpur/', 'monthly', 0.8],
    ['/property-consultants-in-bangalore/', 'monthly', 0.8],
    ['/nri-farmland-ownership/', 'monthly', 0.7],
    ['/insights/', 'weekly', 0.8],
    ['/insights/farmland-due-diligence-karnataka/', 'monthly', 0.7],
    ['/insights/how-managed-farmland-works/', 'monthly', 0.7],
    ['/insights/coffee-plantation-ownership-management/', 'monthly', 0.7],
    ['/site-visit/', 'monthly', 0.9],
    ['/buyer-guide/', 'monthly', 0.8],
    ['/contact/', 'monthly', 0.7],
    ['/media/', 'monthly', 0.5],
    ['/privacy/', 'yearly', 0.3],
    ['/terms/', 'yearly', 0.3],
    ['/disclaimer/', 'yearly', 0.3],
  ];

  return routes.map(([route, changeFrequency, priority]) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
