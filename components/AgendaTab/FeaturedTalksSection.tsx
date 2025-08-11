"use client";
import { SiteLocale, TalkRecord } from "@/graphql/generated";
import SingleTalk from "../Agenda/SingleTalk";

type Props = {
  talks: TalkRecord[];
  lng: SiteLocale;
};

const FeaturedTalksSection = ({ talks, lng }: Props) => (
  <section className="mt-4 lg:py-[120px] md:py-24 py-20 dark:bg-dark-background min-h-[calc(100vh-280px)]">
    <div className="container">
      <div className="flex flex-wrap justify-center pt-8">
        {talks.length > 0 ? (
          talks.map((talk) => (
            <div
              key={talk.id}
              className="w-full sm:px-4 mb-10 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleTalk talk={talk} locale={lng} />
            </div>
          ))
        ) : (
          <div className="mt-[20%] text-2xl font-bold text-primary">
            <p>No featured talks found</p>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default FeaturedTalksSection; 