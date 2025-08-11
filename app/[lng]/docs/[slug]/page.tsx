import { getFallbackLocale } from '@/app/i18n/settings';
import DocumentaitonPageRenderer from '@/components/Documentaiton/DocumentationPageRenderer';
import RealTimeDocumentationPage from '@/components/Documentaiton/RealTimeDocumentationPage';
import { DocumentationPageDocument, SiteLocale, DocumentationSlugDocument } from '@/graphql/generated';
import { getSlugs } from '@/ssg';
import queryDatoCMS from '@/utils/queryDatoCMS';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

type Params = {
  params: Promise<{
    slug: string;
    lng: SiteLocale;
  }>;
};

export async function generateStaticParams() {
  const paths = await getSlugs(DocumentationSlugDocument, 'allDocumentationPages');
  return paths
}

const DocumentaitonPage = async ({ params }: Params) => {
  const { slug, lng } = await params;
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = await draftMode();

  const data = await queryDatoCMS(
    DocumentationPageDocument,
    {
      slug,
      locale: lng,
      fallbackLocale: [fallbackLng],
    },
    isEnabled
  );

  if (!data || !data.documentationPage) notFound();

  return (
    <>
      {!isEnabled && <DocumentaitonPageRenderer data={data} />}
      {isEnabled && (
        <RealTimeDocumentationPage
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ''}
          query={DocumentationPageDocument}
          variables={{ slug, locale: lng, fallbackLocale: [fallbackLng] }}
        />
      )}
    </>
  );
};

export default DocumentaitonPage;
