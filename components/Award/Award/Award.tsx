import ShareAward from "./ShareAward";
import TagAwardButton from "../AwardTypeTagButton";
import QuoteBlock from "@/components/Award/Award/StructuredTextBlocks/QuoteBlock";
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
import NewsletterCTABlock from "@/components/Award/Award/StructuredTextBlocks/NewsletterCTABlock";
import CTABlock from "@/components/Award/Award/StructuredTextBlocks/CTABlock";
import DateIcon from "@/components/Award/svgs/DateIcon";
import SingleAward from "../SingleAward";

import Link from "next/link";
import {
  AppCtaRecord,
  CtaButtonWithImageRecord,
  ImageBlockRecord,
  GalleryRecord,
  NewsletterSubscriptionRecord,
  AwardQuery,
  AwardRecord,
  ResponsiveImage,
  SiteLocale,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import Highlighter from "@/components/Common/Highlighter";
import CTAAppBlock from "./StructuredTextBlocks/CTAAppBlock";
import GalleryBlock from "./StructuredTextBlocks/GalleryBlock";
import IFrame from "@/components/IFrame";

type Props = {
  data: AwardQuery;
  lng: SiteLocale;
};

const Award = ({ data, lng }: Props) => {
  if (!data.award) notFound();
  return (
    <section className="pt-40 pb-[120px] dark:bg-dark-background">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-full">
            <div className="flex gap-4">
              <div className="w-1/2">
                <StructuredText
                  data={data.award.content as any}
                  renderNode={Highlighter}
                  renderBlock={({ record }: any) => {
                    switch (record.__typename) {
                      case "ImageBlockRecord":
                        const ImageBlockRecord = record as ImageBlockRecord;
                        return (
                          <div className="relative mb-16 mt-16 overflow-hidden rounded-md shadow-md sm:h-[300px] md:h-[400px]">
                            <DatoImage
                              data={ImageBlockRecord.image.responsiveImage}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="50% 50%"
                            />
                          </div>
                        );
                      case "GalleryRecord":
                        const galleryRecord = record as GalleryRecord;
                        return (
                          <GalleryBlock galleryRecords={[galleryRecord]} />
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
                      case "AwardRecord":
                        return (
                          <Link
                            {...transformedMeta}
                            href={`/${lng}/awards/${record.slug}`}
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
                      case "AwardRecord":
                        const AwardRecord = record as AwardRecord;
                        return (
                          <Link
                            key={AwardRecord.id}
                            href={`/${lng}/awards/${record.slug}`}
                            className="underline"
                          >
                            {AwardRecord.title}
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
              <div className="w-1/2">
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-darktext sm:text-4xl sm:leading-tight">
                  {data.award.title}
                </h2>
                <div className="mb-10 flex items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-col items-start md:flex-row md:items-center">
                    <Link
                      href={`/${lng}/awards/acategory/${data.award.acategory?.slug}`}
                      className="mb-5 mr-10 flex items-center"
                    >
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <DatoImage
                            className="h-full w-full object-cover"
                            data={
                              data.award.acategory?.picture
                                .responsiveImage as ResponsiveImage
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-body-color">
                          <span>{data.award.acategory?.name}</span>
                        </h4>
                        <p className="text-xs text-body-color">
                          {data.award.acategory?.bio}
                        </p>
                      </div>
                    </Link>
                    {data.award._publishedAt && (
                      <div className="mb-5 flex items-center">
                        <p className="mr-5 flex items-center text-base font-medium text-body-color">
                          {DateIcon}
                          {transformDate(data.award._publishedAt)}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <a
                      href={`/${lng}/awards/atag/${data.award.atags[0].slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {data.award.atags[0].atag}
                    </a>
                  </div>
                </div>
                <div className="mt-16 items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color">
                      Award Tags :
                    </h5>
                    <div className="flex items-center">
                      {data.award.atags.map((atag) => {
                        return (
                          <TagAwardButton
                            key={atag.id}
                            atag={atag.atag}
                            lng={lng}
                            slug={atag.slug}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Share this award :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <ShareAward />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <IFrame iframeUrl={data?.award?.iframe || ''} iframeHeight={80} shadowWidth={1075} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
