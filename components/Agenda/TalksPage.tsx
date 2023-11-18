import PageIndicatorList from '@/components/Agenda/PageIndicatorList';
import SingleTalk from '@/components/Agenda/SingleTalk';
import { TalkRecord, TalksQuery, SiteLocale } from '@/graphql/generated';

type Props = {
  data: TalksQuery;
  lng: SiteLocale;
  page: number;
};

const TalksPage = ({ data, lng, page }: Props) => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.allTalks.map((talk) => (
            <div
              key={talk.id}
              className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleTalk talk={talk as TalkRecord} locale={lng} />
            </div>
          ))}
        </div>

        <div className=" -mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <a
                  href={
                    page - 1 === 1
                      ? `/${lng}/talks`
                      : `/${lng}/talks/page/${page - 1}`
                  }
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <PageIndicatorList
                lng={lng}
                postCount={data['_allTalksMeta'].count}
              />
              {page * 9 <= data['_allTalksMeta'].count && (
                <li className="mx-1">
                  <a
                    href={`/${lng}/talks/page/${page + 1}`}
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

export default TalksPage;
