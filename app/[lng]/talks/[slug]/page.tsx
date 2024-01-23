import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import Talk from "@/components/Agenda/Talk/Talk";
import RealTimeTalk from "@/components/Agenda/RealTime/RealTimeTalk";
import { SiteLocale, TalkDocument, TalkSlugDocument } from "@/graphql/generated";
import { getSlugs } from "@/ssg";

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

export async function generateStaticParams() {
  const paths = await getSlugs(TalkSlugDocument, 'allTalks');
  return paths
}

const TalkDetailsPage = async ({ params: { slug, lng } }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    TalkDocument,
    {
      slug,
      locale: lng,
      fallbackLocale: [fallbackLng],
    },
    isEnabled
  );

  if (!data.talk) {
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
          query={TalkDocument}
          variables={{ slug, locale: lng, fallbackLocale: [fallbackLng] }}
        />
      )}
    </>
  );
};

export default TalkDetailsPage;
