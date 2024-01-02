import { getFallbackLocale } from "@/app/i18n/settings";
import RealTimeCategoryAwardsPage from "@/components/Award/RealTime/RealTimeCategoryAwardsPage";
import { CategoryAwardDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import CategoryAwardsPage from "@/components/Award/CategoryAwardsPage";

type Params = {
  params: {
    page: number;
    lng: SiteLocale;
  };
};

const Awards = async ({ params }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { lng } = params;
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    CategoryAwardDocument,
    {
      locale: lng,
      fallbackLocale: fallbackLng,
      skip: (params.page - 1) * 9,
    },
    isEnabled
  );

  if (!data.allCategoryAwards.length) {
    notFound();
  }

  return (
    <>
      {!isEnabled && <CategoryAwardsPage data={data} lng={lng} page={params.page} />}
      {isEnabled && (
        <RealTimeCategoryAwardsPage
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={CategoryAwardDocument}
          variables={{
            locale: lng,
            fallbackLocale: fallbackLng,
            skip: (params.page - 1) * 9,
          }}
          page={params.page}
        />
      )}
    </>
  );
};

export default Awards;
