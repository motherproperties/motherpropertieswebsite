import { ContentLandingPage } from '@/components/shared/ContentLandingPage';
import { metadataFor, nriPage } from '@/lib/contentPages';

export const metadata = metadataFor(nriPage);

export default function NriFarmlandOwnershipPage() {
  return <ContentLandingPage {...nriPage} />;
}
