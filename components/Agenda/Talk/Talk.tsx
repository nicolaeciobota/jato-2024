import ShareTalk from "@/components/Agenda/Talk/ShareTalk";
import DateTagButton from "@/components/Agenda/DateTagButton";
import transformDate from "@/utils/transformDate";
import { Image as DatoImage } from "react-datocms";
import DateIcon from "@/components/Agenda/svgs/DateIcon";
import SingleTalk from "@/components/Agenda/SingleTalk";
import Link from "next/link";
import {
  SpeakerRecord,
  TalkRecord,
  ResponsiveImage,
  SiteLocale,
  TalkQuery,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  data: TalkQuery;
  lng: SiteLocale;
};

const Talk = ({ data, lng }: Props) => {
  if (!data.talk) notFound();
  return (
    <section className="mt-8 pb-8 sm:mt-16 sm:pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {data.talk.title}
              </h2>
              <p className="mb-4 text-sm sm:text-base">
                {data.talk.description}
              </p>
              <p className="mb-4 text-sm">{data.talk.start}</p>
              <p className="mb-6 text-sm">{data.talk.end}</p>

              <div className="mb-8 flex flex-col items-start border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 sm:mb-10 sm:flex-row sm:items-center">
                {data.talk._publishedAt && (
                  <div className="flex items-center">
                    <p className="mr-5 flex items-center text-sm font-medium text-body-color">
                      {DateIcon}
                      {transformDate(data.talk._publishedAt)}
                    </p>
                  </div>
                )}

                <div className="mt-4 sm:mt-0">
                  <a
                    href={`/${lng}/talks/dates/${data.talk.dateTags[0].slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                  >
                    {data.talk.dateTags[0].eventDate}
                  </a>
                </div>
              </div>

              <div className="mb-8 flex flex-col items-start justify-between sm:mb-16 sm:flex-row sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h5 className="mb-3 text-sm font-medium text-body-color">
                    Event Dates:
                  </h5>
                  <div className="flex items-center space-x-2">
                    {data.talk.dateTags.map((eventDate) => (
                      <DateTagButton
                        key={eventDate.id}
                        dateTag={eventDate.eventDate}
                        lng={lng}
                        slug={eventDate.slug}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                    Share this talk:
                  </h5>
                  <div className="flex items-center sm:justify-end">
                    <ShareTalk />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talk;
