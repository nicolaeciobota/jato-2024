import QuoteBlock from "@/components/Award/Award/StructuredTextBlocks/QuoteBlock";
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
import Highlighter from "@/components/Common/Highlighter";
import CTAAppBlock from "./StructuredTextBlocks/CTAAppBlock";
import GalleryBlock from "./StructuredTextBlocks/GalleryBlock";
import EmbededIframe from "@/components/IFrame/EmbededIframe";

type Props = {
  data: AwardQuery;
  lng: SiteLocale;
};

const Award = ({ data, lng }: Props) => {
  if (!data.award) notFound();

  return (
    <section className="pt-[100px] pb-20 bg-[#3553520d] dark:bg-dark-background">
      <div className="container">
        <div className="flex flex-wrap justify-center pb-5">
          <div className="w-full sm:px-4 lg:w-full">

            <div className="flex xl:flex-nowrap flex-wrap items-start md:flex-row md:items-center xl:w-auto lg:w-[260px] sm:w-[220px] w-[200px]">
              <Link
                href={`/${lng}/awards/acategory/${data.award.acategory?.slug}`}
                className="mb-5 xl:mr-10 flex items-center"
              >
                <div className="sm:mr-4 mr-1">
                  <div className="relative sm:h-10 h-8 sm:w-10 w-8 overflow-hidden rounded-full">
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
                  <h4 className="mb-1 sm:text-base text-sm font-medium text-body-color">
                    <span>{data.award.acategory?.name}</span>
                  </h4>
                  <p className="text-xs text-body-color">
                    {data.award.acategory?.bio}
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex md:flex-nowrap flex-wrap gap-4">
              <div className="md:w-1/2 w-full">
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
                        <Link
                          className="text-base font-medium leading-relaxed text-body-color underline sm:text-lg sm:leading-relaxed"
                          href={node.url}
                          key={key}
                          {...attributeObject}
                        >
                          {children}
                        </Link>
                      );
                    }),
                    renderNodeRule(isBlockquote, ({ children, key }) => {
                      return <QuoteBlock text={children} />;
                    }),
                  ]}
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-darktext sm:text-4xl sm:leading-tight">
                  {data.award.title}
                </h2>
                <p className="mb-3 text-sm font-bold leading-tight text-black dark:text-darktext sm:leading-tight">
                  {data.award.jobTitle}
                </p>
                <p className="mb-4 leading-tight text-black dark:text-darktext sm:leading-tight max-h-[200px] overflow-auto">
                  {data.award.bio}
                </p>
                <div className="mb-4 flex xl:items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="">
                    <Link
                      href={`/${lng}/awards/atag/${data.award.atags[0].slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {data.award.atags[0].atag}
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary bg-opacity-10 text-body-color duration-300 hover:bg-opacity-100 hover:text-white w-8 h-8 rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </div>
                  <div className="bg-primary bg-opacity-10 text-body-color duration-300 hover:bg-opacity-100 hover:text-white w-8 h-8 rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
          data?.award?.iframe
            ? <EmbededIframe iframeUrl={data?.award?.iframe || ''} iframeHeight={100} />
            : null
        }
      </div>
    </section>
  );
};

export default Award;
