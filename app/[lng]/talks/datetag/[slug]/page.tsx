import { getFallbackLocale } from "@/app/i18n/settings";
import RealTimeDateTagTalks from "@/components/Agenda/RealTime/RealTimeDateTagTalks";
import DateTagTalks from "@/components/Agenda/DateTagTalks";
import { SiteLocale, DatetagDocument } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

const DateTagPage = async ({ params }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { lng } = params;
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    DatetagDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      slug: params.slug,
    },
    isEnabled
  );

  return (
    <>
      {!isEnabled && <DateTagTalks data={data} lng={lng} />}
      {isEnabled && (
        <RealTimeDateTagTalks
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={DatetagDocument}
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

export default DateTagPage;
