import { getFallbackLocale } from "@/app/i18n/settings";
import RealTimeTagPosts from "@/components/Blog/RealTime/RealTimeTagPosts";
import TagPosts from "@/components/Blog/TagPosts";
import TagAwards from "@/components/Award/AwardTypeTagAward";
import RealTimeTagAwards from "@/components/Award/RealTime/RealTimeTagAward";
import { AwardTagDocument, SiteLocale, TagDocument } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

const TagAwardsPage = async ({ params }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { lng } = params;
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    AwardTagDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      slug: params.slug,
    },
    isEnabled
  );

  return (
    <>
      {!isEnabled && <TagAwards data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeTagAwards
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={AwardTagDocument}
          variables={{
            locale: lng,
            fallbackLocale: fallbackLng,
            slug: params.slug,
          }}
        />
      )}
    </>
  );
};

export default TagAwardsPage;
