import { ContentLandingPage } from '@/components/shared/ContentLandingPage';
import { metadataFor, sakleshpurFarmlandPage } from '@/lib/contentPages';

export const metadata = metadataFor(sakleshpurFarmlandPage);

export default function ManagedFarmlandSakleshpurPage() {
  return <ContentLandingPage {...sakleshpurFarmlandPage} />;
}
