import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentLandingPage } from '@/components/shared/ContentLandingPage';
import { metadataFor } from '@/lib/contentPages';
import { insightArticles, insightBySlug } from '@/lib/insights';

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.path.split('/').filter(Boolean).at(-1)!,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insightBySlug[slug];
  return article ? metadataFor(article) : {};
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightBySlug[slug];
  if (!article) notFound();
  return <ContentLandingPage {...article} />;
}
