import { getFallbackLocale } from "@/app/i18n/settings";
import SpeakerTalks from "@/components/Agenda/SpeakerTalks";
import RealTimeSpeakerTalks from "@/components/Agenda/RealTime/RealTimeSpeakerTalks";
import { SpeakerDocument, SiteLocale, SpeakerSlugDocument } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getSlugs } from "@/ssg";

type Params = {
  params: Promise<{
    slug: string;
    lng: SiteLocale;
  }>;
};

export async function generateStaticParams() {
  const paths = await getSlugs(SpeakerSlugDocument, 'allSpeakers');
  return paths
}

const SpeakerPage = async ({ params }: Params) => {
  const { slug, lng } = await params;
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = await draftMode();

  const data = await queryDatoCMS(
    SpeakerDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      slug: slug,
    },
    isEnabled
  );

  if (!data.speaker) notFound();

  return (
    <>
      {!isEnabled && <SpeakerTalks data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeSpeakerTalks
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={SpeakerDocument}
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

export default SpeakerPage;
