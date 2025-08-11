import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { AwardDocument, SiteLocale, StageDocument, StageSlugDocument } from "@/graphql/generated";
import Stage from "@/components/Stage/Stage/Stage";
import RealTimeStage from "@/components/Stage/RealTime/RealTimeStage";
import { getSlugs } from "@/ssg";

type Params = {
  params: Promise<{
    slug: string;
    lng: SiteLocale;
  }>;
};

export async function generateStaticParams() {
  const paths = await getSlugs(StageSlugDocument, 'allStages');
  return paths
}

const StageDetailsPage = async ({ params }: Params) => {
  const { slug, lng } = await params;
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    StageDocument,
    {
      slug,
      locale: lng,
      fallbackLocale: [fallbackLng],
    },
    isEnabled
  );

  if (!data.stage) {
    notFound();
  }

  return (
    <>
      {!isEnabled && <Stage data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeStage
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={AwardDocument}
          variables={{ slug, locale: lng, fallbackLocale: [fallbackLng] }}
        />
      )}
    </>
  );
};

export default StageDetailsPage;
