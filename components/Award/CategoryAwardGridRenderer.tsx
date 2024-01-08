import {
  CollectionMetadata,
  SiteLocale,
  CategoryAwardRecord,
} from "@/graphql/generated";
import PageIndicatorList from "./PageIndicatorList";
import SingleCategoryAward from "./SingleCategoryAward";
import Link from "next/link";

type Props = {
  data: CategoryAwardRecord[];
  lng: SiteLocale;
  awardMeta: CollectionMetadata;
};

const CategoryAwardGridRenderer = ({ data, lng, awardMeta }: Props) => {

  return (
    <section className="mt-4 lg:py-[120px] py-20 dark:bg-dark-background">
      <div className="container">

        {
          data?.map((record: CategoryAwardRecord, index) => <SingleCategoryAward key={index} categoryRecord={record} locale={lng} />)
        }

        <div className=" -mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <PageIndicatorList lng={lng} awardCount={awardMeta.count} />
              {9 < awardMeta.count && (
                <li className="mx-1">
                  <Link
                    href={`/${lng}/category-awards/page/2`}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryAwardGridRenderer;
