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
    <section className="mt-40 pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {data.talk.title}
              </h2>
              <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  <Link
                    href={`/${lng}/talks/speaker/${data.talk.speaker?.slug}`}
                    className="mb-5 mr-10 flex items-center"
                  >
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <DatoImage
                          className="h-full w-full object-cover"
                          data={
                            data.talk.speaker!.picture
                              .responsiveImage as ResponsiveImage
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-base font-medium text-body-color">
                        <span>{data.talk.speaker?.name}</span>
                      </h4>
                      <p className="text-xs text-body-color">
                        {data.talk.speaker?.bio}
                      </p>
                    </div>
                  </Link>
                  {data.talk._publishedAt && (
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        {DateIcon}
                        {transformDate(data.talk._publishedAt)}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-5">
                  <a
                    href={`/${lng}/talks/dates/${data.talk.dateTags[0].slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                  >
                    {data.talk.dateTags[0].eventDate}
                  </a>
                </div>
              </div>

              <div className="mt-16 items-center justify-between sm:flex">
                <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color">
                    Event Dates:
                  </h5>
                  <div className="flex items-center">
                    {data.talk.dateTags.map((eventDate) => {
                      return (
                        <DateTagButton
                          key={eventDate.id}
                          eventDate={eventDate.eventDate}
                          lng={lng}
                          slug={eventDate.slug}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="mb-5">
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
