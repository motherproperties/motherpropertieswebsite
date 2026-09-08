import { ContentLandingPage } from '@/components/shared/ContentLandingPage';
import { consultancyPage, metadataFor } from '@/lib/contentPages';

export const metadata = metadataFor(consultancyPage);

export default function PropertyConsultantsBangalorePage() {
  return <ContentLandingPage {...consultancyPage} />;
}
