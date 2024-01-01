import PageIndicatorList from "@/components/Award/PageIndicatorList";
import { CategoryAwardRecord, CategoryAwardQuery, SiteLocale } from "@/graphql/generated";
import SingleCategoryAward from "./SingleCategoryAward";

type Props = {
  data: CategoryAwardQuery;
  lng: SiteLocale;
  page: number;
};

const CategoryAwardsPage = ({ data, lng, page }: Props) => {

  const categoryAwards = data?.allCategoryAwards as CategoryAwardRecord[];
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        {
          categoryAwards?.map((record: CategoryAwardRecord, index: number) => <SingleCategoryAward key={index} categoryRecord={record} locale={lng} />)
        }
        <div className=" -mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <a
                  href={
                    page - 1 === 1
                      ? `/${lng}/category-awards`
                      : `/${lng}/category-awards/page/${page - 1}`
                  }
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <PageIndicatorList
                lng={lng}
                awardCount={data?._allCategoryAwardsMeta?.count}
              />
              {page * 9 <= data?._allCategoryAwardsMeta?.count && (
                <li className="mx-1">
                  <a
                    href={`/${lng}/category-awards/page/${page + 1}`}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryAwardsPage;
