import { getFallbackLocale } from "@/app/i18n/settings";
import Member from "@/components/Member";
import { SiteLocale, MemberDocument } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";

type Params = {
  params: Promise<{
    page: number;
    lng: SiteLocale;
  }>;
};

const MemberPage = async ({ params }: Params) => {
  const { page, lng } = await params;
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    MemberDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      skip: (page - 1) * 9,
    },
    isEnabled
  );

  return (
    <>
      {!isEnabled && <Member data={data} lng={lng} />}
    </>
  );
};

export default MemberPage;
