import {
  CollectionMetadata,
  TalkRecord,
  SiteLocale,
} from "@/graphql/generated";
import PageIndicatorList from "./PageIndicatorList";
import SingleTalk from "./SingleTalk";
import DateTab from "./DateTab";

type Props = {
  data: TalkRecord[];
  lng: SiteLocale;
  talkMeta: CollectionMetadata;
};

const TalkGridRenderer = ({ data, lng, talkMeta }: Props) => {
  return (
    <section className="mt-4 pb-[120px] pt-[120px] dark:bg-dark-background">
      <div className="container ">
      <div className="-mx-4 flex h-full flex-col flex-wrap justify-between">
          {data.map((talk) => {
            return (
              <div
                key={talk.id}
                className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 "
              >
                <DateTab talk={talk as TalkRecord} locale={lng} />
              </div>
            );
          })}
        </div>
        <div className="-mx-4 flex h-full flex-wrap justify-between">
          {data.map((talk) => {
            return (
              <div
                key={talk.id}
                className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 "
              >
                <SingleTalk talk={talk as TalkRecord} locale={lng} />
              </div>
            );
          })}
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <PageIndicatorList lng={lng} talkCount={talkMeta.count} />
              {9 < talkMeta.count && (
                <li className="mx-1">
                  <a
                    href={`/${lng}/talks/page/2`}
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

export default TalkGridRenderer;
