import { getFallbackLocale } from "@/app/i18n/settings";
import AwardCategory from "@/components/Award/AwardCategoryAwards";
import RealTimeAwardCategoryAwards from "@/components/Award/RealTime/RealTimeAwardCategoryAwards";
import { AwardCategoryDocument, AwardsCategorySlugDocument, SiteLocale } from "@/graphql/generated";
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
  const paths = await getSlugs(AwardsCategorySlugDocument, 'allAcategories');
  return paths
}

const ACategoryPage = async ({ params }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { lng, slug } = await params;
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    AwardCategoryDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      slug: slug,
    },
    isEnabled
  );

  if (!data.acategory) notFound();

  return (
    <>
      {!isEnabled && <AwardCategory data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeAwardCategoryAwards
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={AwardCategoryDocument}
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

export default ACategoryPage;
