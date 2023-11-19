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
  SpeakerQuery,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  data: TalkQuery;
  lng: SiteLocale;
  speakers: Array<SpeakerRecord>;
};

const Talk = ({ data, lng, speakers }: Props) => {
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
                  <ul className="flex flex-wrap">
                    {speakers.map(
                      ({ id, name, title, slug, picture }: SpeakerRecord) => (
                        <li key={id} className="m-2 w-48">
                          <Link href={`/${lng}/talks/speakers/${slug}`}>
                            <div className="flex flex-col items-center">
                              <DatoImage
                                className="h-full w-full object-cover"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="50% 50%"
                                data={
                                  picture!.responsiveImage as ResponsiveImage
                                }
                              />
                              <strong className="text-lg">{name}</strong>
                              <p className="text-sm">{title}</p>
                              <span className="text-blue-500">
                                View Speaker Profile
                              </span>
                            </div>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>

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
                          dateTag={eventDate.eventDate}
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
