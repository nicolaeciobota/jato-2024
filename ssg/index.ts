import { getFallbackLocale } from "@/app/i18n/settings";
import queryDatoCMS from "@/utils/queryDatoCMS";


export async function getSlugs(documentType: any, recordsType: string) {

    const fallbackLng = await getFallbackLocale();
    const data: any = await queryDatoCMS(
        documentType,
        {
            locale: fallbackLng,
            fallbackLocale: [fallbackLng],
        },
        false
    );

    return data[recordsType]?.map((record: any) => {
        return {
            slug: record?.slug,
            lng: fallbackLng,
        };
    });
}