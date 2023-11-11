import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import Post from "@/components/Blog/Post/Post";
import Award from "@/components/Award/Award/Award";
import RealTimePost from "@/components/Blog/RealTime/RealTimePost";
import RealTimeAward from "@/components/Award/RealTime/RealTimeAward";
import { AwardDocument, SiteLocale } from "@/graphql/generated";

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

const AwardsDetailsPage = async ({ params: { slug, lng } }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    AwardDocument,
    {
      slug,
      locale: lng,
      fallbackLocale: [fallbackLng],
    },
    isEnabled
  );

  if (!data.award) {
    notFound();
  }

  return (
    <>
      {!isEnabled && <Award data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeAward
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

export default AwardsDetailsPage;
