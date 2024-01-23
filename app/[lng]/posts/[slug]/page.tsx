import { getFallbackLocale } from '@/app/i18n/settings';
import queryDatoCMS from '@/utils/queryDatoCMS';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Post from '@/components/Blog/Post/Post';
import RealTimePost from '@/components/Blog/RealTime/RealTimePost';
import { PostDocument, PostsSlugDocument, SiteLocale } from '@/graphql/generated';
import { getSlugs } from '@/ssg';

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

export async function generateStaticParams() {
  const paths = await getSlugs(PostsSlugDocument, 'allPosts');
  return paths
}

const BlogDetailsPage = async ({ params: { slug, lng } }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    PostDocument,
    {
      slug,
      locale: lng,
      fallbackLocale: [fallbackLng],
    },
    isEnabled
  );

  if (!data.post) {
    notFound();
  }

  return (
    <>
      {!isEnabled && <Post data={data} lng={lng} />}
      {isEnabled && (
        <RealTimePost
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ''}
          query={PostDocument}
          variables={{ slug, locale: lng, fallbackLocale: [fallbackLng] }}
        />
      )}
    </>
  );
};

export default BlogDetailsPage;
