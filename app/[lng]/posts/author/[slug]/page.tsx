import { getFallbackLocale } from "@/app/i18n/settings";
import AuthorPosts from "@/components/Blog/AuthorPosts";
import RealTimeAuthorPosts from "@/components/Blog/RealTime/RealTimeAuthorPosts";
import { AuthorDocument, AuthorsSlugDocument, SiteLocale } from "@/graphql/generated";
import { getSlugs } from "@/ssg";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    slug: string;
    lng: SiteLocale;
  }>;
};

export async function generateStaticParams() {
  const paths = await getSlugs(AuthorsSlugDocument, 'allAuthors');
  return paths
}

const AuthorPage = async ({ params }: Params) => {
  const { slug, lng } = await params;
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = await draftMode();

  const data = await queryDatoCMS(
    AuthorDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      slug: slug,
    },
    isEnabled
  );

  if (!data.author) notFound();

  return (
    <>
      {!isEnabled && <AuthorPosts data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeAuthorPosts
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={AuthorDocument}
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

export default AuthorPage;
