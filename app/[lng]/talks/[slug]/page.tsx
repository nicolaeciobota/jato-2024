import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import Talk from "@/components/Agenda/Talk/Talk";
import RealTimeTalk from "@/components/Agenda/RealTime/RealTimeTalk";
import { PostDocument, SiteLocale } from "@/graphql/generated";

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

const TalkDetailsPage = async ({ params: { slug, lng } }: Params) => {
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
      {!isEnabled && <Talk data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeTalk
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={PostDocument}
          variables={{ slug, locale: lng, fallbackLocale: [fallbackLng] }}
        />
      )}
    </>
  );
};

export default TalkDetailsPage;
