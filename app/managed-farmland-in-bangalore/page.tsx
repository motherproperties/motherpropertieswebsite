import { ContentLandingPage } from '@/components/shared/ContentLandingPage';
import { bangaloreFarmlandPage, metadataFor } from '@/lib/contentPages';

export const metadata = metadataFor(bangaloreFarmlandPage);

export default function ManagedFarmlandBangalorePage() {
  return <ContentLandingPage {...bangaloreFarmlandPage} />;
}
