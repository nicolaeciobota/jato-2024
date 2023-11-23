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
};

const Talk = ({ data, lng }: Props) => {
  if (!data.talk) notFound();
  const { title, speaker, _publishedAt, dateTags, start, end } = data.talk;
  // Assuming data.talk.speaker contains the array of speakers
  const members = (speaker as SpeakerRecord[]) || [];
  return (
    <section className="mt-40 pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {title}
              </h2>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {start}
                {end}
              </h2>
              <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  {members.map((member) => {
                    return (
                      <Link
                        key={member.slug}
                        href={`/${lng}/talks/speaker/${member.slug}`}
                        passHref
                      >
                        <div className="mb-5 mr-10 flex items-center">
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
                              {member.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div>
                  <StructuredText
                    data={data.talk.content as any}
                    renderNode={Highlighter}
                    renderBlock={({ record }: any) => {
                      switch (record.__typename) {
                        case "ImageBlockRecord":
                          const ImageBlockRecord = record as ImageBlockRecord;
                          return (
                            <div className="relative mb-16 mt-16 overflow-hidden rounded-md shadow-md xs:h-[300px] sm:h-[300px] md:h-[400px]">
                              <DatoImage
                                data={ImageBlockRecord.image.responsiveImage}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="50% 50%"
                              />
                            </div>
                          );
                        case "NewsletterSubscriptionRecord":
                          const NewsletterSubscriptionRecord =
                            record as NewsletterSubscriptionRecord;
                          return (
                            <NewsletterCTABlock
                              title={NewsletterSubscriptionRecord.title}
                              subtitle={NewsletterSubscriptionRecord.subtitle}
                              buttonLabel={
                                NewsletterSubscriptionRecord.buttonLabel
                              }
                            />
                          );
                        case "CtaButtonWithImageRecord":
                          const CtaButtonWithImageRecord =
                            record as CtaButtonWithImageRecord;
                          return (
                            <CTABlock
                              title={CtaButtonWithImageRecord.title}
                              subtitle={CtaButtonWithImageRecord.subtitle}
                              buttonLabel={CtaButtonWithImageRecord.buttonLabel}
                              image={CtaButtonWithImageRecord.image}
                            />
                          );
                        case "AppCtaRecord":
                          const appCtaRecord = record as AppCtaRecord;
                          return (
                            <CTAAppBlock
                              title={appCtaRecord.title}
                              text={appCtaRecord.text}
                              googleURL={appCtaRecord.googlePlayUrl}
                              appleURL={appCtaRecord.appstoreUrl}
                            />
                          );
                        default:
                          return null;
                      }
                    }}
                    renderLinkToRecord={({
                      record,
                      children,
                      transformedMeta,
                    }) => {
                      switch (record.__typename) {
                        case "PostRecord":
                          return (
                            <Link
                              {...transformedMeta}
                              href={`/${lng}/posts/${record.slug}`}
                              className="text-base font-medium leading-relaxed text-body-color underline sm:text-lg sm:leading-relaxed"
                            >
                              {children}
                            </Link>
                          );
                        default:
                          return null;
                      }
                    }}
                    renderInlineRecord={({ record }) => {
                      switch (record.__typename) {
                        case "PostRecord":
                          const PostRecord = record as TalkRecord;
                          return (
                            <Link
                              key={PostRecord.id}
                              href={`/${lng}/posts/${record.slug}`}
                              className="underline"
                            >
                              {PostRecord.title}
                            </Link>
                          );
                        default:
                          return null;
                      }
                    }}
                    customNodeRules={[
                      renderNodeRule(isHeading, ({ children, key }) => {
                        return (
                          <h3
                            className="mb-4 mt-9 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                            key={key}
                          >
                            {children}
                          </h3>
                        );
                      }),
                      renderNodeRule(isParagraph, ({ children, key }) => {
                        return (
                          <div
                            className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
                            key={key}
                          >
                            {children}
                          </div>
                        );
                      }),
                      renderNodeRule(isLink, ({ node, children, key }) => {
                        const attributeObject =
                          node.meta?.reduce((acc: any, { id, value }) => {
                            acc[id] = value;
                            return acc;
                          }, {}) || {};

                        return (
                          <a
                            className="text-base font-medium leading-relaxed text-body-color underline sm:text-lg sm:leading-relaxed"
                            href={node.url}
                            key={key}
                            {...attributeObject}
                          >
                            {children}
                          </a>
                        );
                      }),
                      renderNodeRule(isBlockquote, ({ children, key }) => {
                        return <QuoteBlock text={children} />;
                      }),
                    ]}
                  />
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
