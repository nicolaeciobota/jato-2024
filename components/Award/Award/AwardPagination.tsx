import { getFallbackLocale } from "@/app/i18n/settings";
import { SingleCategoryAwardByTitleDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/utils/queryDatoCMS";
import Link from "next/link";

type Props = {
    categoryTitle: string;
    lng: SiteLocale;
};

const AwardPagination = async ({ categoryTitle, lng }: Props) => {

    const fallbackLng = await getFallbackLocale();

    const data = await queryDatoCMS(
        SingleCategoryAwardByTitleDocument,
        {
            locale: lng,
            fallbackLocale: [fallbackLng],
            title: categoryTitle
        },
        false
    );

    return (
        <div className="w-full md:px-4 flex flex-wrap items-center md:justify-center sm:my-8 my-5 gap-3">
            <h5 className="text-sm font-medium text-body-color">
                Awards :
            </h5>
            <ul className="flex gap-3 flex-wrap items-center">

                {
                    data?.categoryAward?.award.map((award: any, index: number) => {
                        return (
                            <Link
                                href={`/${lng}/awards/${award.slug}`}
                                key={index}
                                className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-10 px-4 py-1 text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
                            >
                                {award.title}
                            </Link>
                        );
                    })
                }
            </ul>
        </div>

    );
}

export default AwardPagination;