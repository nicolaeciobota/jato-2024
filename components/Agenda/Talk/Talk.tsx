import ShareTalk from "@/components/Agenda/Talk/ShareTalk";
import DateTagButton from "@/components/Agenda/DateTagButton";
import QuoteBlock from "@/components/Agenda/Talk/StructuredTextBlocks/QuoteBlock";
import transformDate from "@/utils/transformDate";
import {
  isBlockquote,
  isHeading,
  isLink,
  isParagraph,
} from "datocms-structured-text-utils";
import {
  Image as DatoImage,
  StructuredText,
  renderNodeRule,
} from "react-datocms";
import NewsletterCTABlock from "@/components/Agenda/Talk/StructuredTextBlocks/NewsletterCTABlock";
import CTABlock from "@/components/Agenda/Talk/StructuredTextBlocks/CTABlock";
import DateIcon from "@/components/Agenda/svgs/DateIcon";
import SingleTalk from "@/components/Agenda/SingleTalk";
import Link from "next/link";
import {
  AppCtaRecord,
  CtaButtonWithImageRecord,
  ImageBlockRecord,
  NewsletterSubscriptionRecord,
  TalkQuery,
  SpeakerRecord,
  TalkRecord,
  ResponsiveImage,
  SiteLocale,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import React from "react";
import Highlighter from "@/components/Common/Highlighter";
import CTAAppBlock from "./StructuredTextBlocks/CTAAppBlock";
type Props = {
  data: TalkQuery;
  lng: SiteLocale;
  members: Array<SpeakerRecord>;
};

const Talk = ({ data, lng, members }: Props) => {
  if (!data.talk) notFound();
  const { title, speaker, _publishedAt, dateTags } = data.talk;
  return (
    <section className="mt-40 pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {title}
              </h2>
              <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  {members.map((member) => {
                    return (
                      <Link
                        key={member.slug}
                        href={`/${lng}/talk/speakers/${member.slug}`}
                        passHref
                      >
                        <a className="mb-5 mr-10 flex items-center">
                          <div className="mr-4">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                              <DatoImage
                                className="h-full w-full object-cover"
                                data={
                                  member.picture
                                    .responsiveImage as ResponsiveImage
                                }
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <h4 className="mb-1 text-base font-medium text-body-color">
                              <span>{member.name}</span>
                            </h4>
                            <p className="text-xs text-body-color">
                              {member.bio}
                            </p>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </div>

                <div className="mb-5 flex items-center">
                  <p className="mr-5 flex items-center text-base font-medium text-body-color">
                    {DateIcon}
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="mb-5">
                  <a
                    href={`/${lng}/talk/tag/${dateTags[0].slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                  >
                    {dateTags[0].eventDate}
                  </a>
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
