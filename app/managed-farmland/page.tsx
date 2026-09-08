import { ContentLandingPage } from '@/components/shared/ContentLandingPage';
import { managedFarmlandPage, metadataFor } from '@/lib/contentPages';

export const metadata = metadataFor(managedFarmlandPage);

export default function ManagedFarmlandPage() {
  return <ContentLandingPage {...managedFarmlandPage} />;
}
