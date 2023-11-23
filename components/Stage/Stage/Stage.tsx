import ShareStage from "@/components/Stage/Stage/ShareStage";
import QuoteBlock from "@/components/Stage/Stage/StructuredTextBlocks/QuoteBlock";
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
import Link from "next/link";
import {
  StageQuery,
  StageRecord,
  StreamPlayerRecord,
  ResponsiveImage,
  SiteLocale,
  TalkRecord,
  SpeakerRecord,
  TalkQuery,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import React from "react";
import Highlighter from "@/components/Common/Highlighter";
import CTAAppBlock from "./StructuredTextBlocks/CTAAppBlock";
import SingleTalk from "@/components/Agenda/SingleTalk";

type Props = {
  data: StageQuery;
  lng: SiteLocale;
};

const Stage = ({ data, lng }: Props) => {
  if (!data.stage) notFound();
  return (
    <section className="mt-40 pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {data.stage.name}
              </h2>
              <StructuredText
                data={data.stage.content as any}
                renderNode={Highlighter}
                renderLinkToRecord={({ record, children, transformedMeta }) => {
                  switch (record.__typename) {
                    case "StageRecord":
                      return (
                        <Link
                          {...transformedMeta}
                          href={`/${lng}/stage/${record.slug}`}
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
                    case "StageRecord":
                      const StageRecord = record as StageRecord;
                      return (
                        <Link
                          key={StageRecord.id}
                          href={`/${lng}/stage/${record.slug}`}
                          className="underline"
                        >
                          {StageRecord.name}
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

            <div className="mb-5">
              <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                Share this stage :
              </h5>
              <div className="flex items-center sm:justify-end">
                <ShareStage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.stage._allReferencingTalks.map((talk) => (
            <div
              key={talk.id}
              className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleTalk talk={talk as TalkRecord} locale={lng} />
            </div>
          ))}
        </div>

        <div className=" -mx-4 flex flex-wrap"></div>
      </div>
    </section>
  );
};

export default Stage;
