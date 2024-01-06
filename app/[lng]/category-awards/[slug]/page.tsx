import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import RealTimeAward from "@/components/Award/RealTime/RealTimeAward";
import { AwardDocument, SingleCategoryAwardBySlugDocument, SiteLocale } from "@/graphql/generated";
import SingleCategoryAwards from "@/components/Award/Award/SingleCategoryAwards";

type Params = {
    params: any;
};

const CategoryAwardsDetailsPage = async ({ params }: Params) => {
    const { lng } = params;
    const fallbackLng = await getFallbackLocale();
    const { isEnabled } = draftMode();

    const slug = params.slug.split('_')[0];
    const data = await queryDatoCMS(
        SingleCategoryAwardBySlugDocument,
        {
            slug,
            locale: lng,
            fallbackLocale: [fallbackLng],
        },
        isEnabled
    );

    if (!data.categoryAward) {
        notFound();
    }

    return (
        <>
            {!isEnabled && <SingleCategoryAwards currentAward={params.slug.split('_')[1]} data={data} lng={lng} />}
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

export default CategoryAwardsDetailsPage;
