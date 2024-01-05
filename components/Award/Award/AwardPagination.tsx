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
        <div className="mb-10 w-full">
            <ul className="mx-0">
                {
                    data?.categoryAward?.award.map((award: any, index: number) => {
                        return (
                            <Link
                                href={`/${lng}/awards/${award.slug}`}
                                key={index}
                                className="mb-3 mr-3 inline-flex items-center justify-center rounded-md bg-primary bg-opacity-10 px-4 py-2 text-body-color duration-300 hover:bg-opacity-100 hover:text-white"
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