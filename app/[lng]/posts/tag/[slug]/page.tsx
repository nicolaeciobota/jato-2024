import { getFallbackLocale } from '@/app/i18n/settings';
import RealTimeTagPosts from '@/components/Blog/RealTime/RealTimeTagPosts';
import TagPosts from '@/components/Blog/TagPosts';
import { SiteLocale, TagDocument, TagsSlugDocument } from '@/graphql/generated';
import { getSlugs } from '@/ssg';
import queryDatoCMS from '@/utils/queryDatoCMS';
import { draftMode } from 'next/headers';

type Params = {
  params: Promise<{
    slug: string;
    lng: SiteLocale;
  }>;
};

export async function generateStaticParams() {
  const paths = await getSlugs(TagsSlugDocument, 'allTags');
  return paths
}

const TagPage = async ({ params }: Params) => {
  const { slug, lng } = await params;
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    TagDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      slug: slug,
    },
    isEnabled
  );

  return (
    <>
      {!isEnabled && <TagPosts data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeTagPosts
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ''}
          query={TagDocument}
          variables={{
            locale: lng,
            fallbackLocale: fallbackLng,
            slug: slug,
          }}
        />
      )}
    </>
  );
};

export default TagPage;
