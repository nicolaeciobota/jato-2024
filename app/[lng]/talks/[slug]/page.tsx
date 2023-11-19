import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import Talk from "@/components/Agenda/Talk/Talk";
import RealTimeTalk from "@/components/Agenda/RealTime/RealTimeTalk";
import {
  SpeakerRecord,
  PostDocument,
  SiteLocale,
  TalkDocument,
} from "@/graphql/generated";

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

  const { title, dateTags } = data.talk;
  const speakers = data.talk.speakers.map((speaker: SpeakerRecord) => ({
    id: speaker.id,
    name: speaker.name,
    title: speaker.title,
    picture: speaker.picture,
  }));

  return (
    <>
      {!isEnabled && <Talk speakers={speakers} data={data} lng={lng} />}
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
