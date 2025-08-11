import { getFallbackLocale } from "@/app/i18n/settings";
import AgendaTab from "@/components/AgendaTab";
import { SiteLocale, AgendaTabDocument } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";

type Params = {
  params: Promise<{
    page: number;
    lng: SiteLocale;
  }>;
};

const Page = async ({ params }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { lng } = await params;
  const { isEnabled } = await draftMode();

  const data = await queryDatoCMS(
    AgendaTabDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      first: 9
    },
    isEnabled
  );

  return (
    <>
      {!isEnabled && <AgendaTab data={data} lng={lng}/>}
    </>
  );
};

export default Page;
