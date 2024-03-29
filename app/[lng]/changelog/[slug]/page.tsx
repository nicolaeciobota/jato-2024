import Highlighter from '@/components/Common/Highlighter';
import {
  ChangeLogModelContentField,
  ChangeLogSlugDocument,
  ChangelogDocument,
  SiteLocale,
} from '@/graphql/generated';
import { getSlugs } from '@/ssg';
import queryDatoCMS from '@/utils/queryDatoCMS';
import transformDate from '@/utils/transformDate';
import { isHeading, isParagraph } from 'datocms-structured-text-utils';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';

type Params = {
  params: {
    slug: string;
    lng: SiteLocale;
  };
};

export async function generateStaticParams() {
  const paths = await getSlugs(ChangeLogSlugDocument, 'allChangeLogs');
  return paths
}

const ChangelogPage = async ({ params: { slug, lng } }: Params) => {
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    ChangelogDocument,
    {
      slug,
    },
    isEnabled
  );

  if (!data || !data.changeLog) notFound();

  return (
    <section className="py-32 text-gray-700 min-h-[calc(100vh-280px)]">
      <div className=" mx-auto flex flex-col items-center px-5 py-8 lg:px-24">
        <div>
          <div className="flex flex-wrap py-8 md:flex-nowrap">
            <div className="mb-6 flex flex-shrink-0 flex-col px-4 md:mb-0 md:w-64">
              <strong className="text-thin flex text-left text-3xl font-thin leading-none lg:text-4xl">
                {data.changeLog.versionName} <span className="text-sm"> </span>
              </strong>
              <span className="mt-1 text-xs font-normal leading-relaxed text-gray-700">
                {transformDate(data.changeLog.timeOfRelease)}
              </span>
            </div>
            <div className="prose prose-md md:flex-grow">
              <StructuredText
                data={
                  (data.changeLog.content as ChangeLogModelContentField).value
                }
                customNodeRules={[
                  renderNodeRule(isHeading, ({ children, key }) => {
                    return (
                      <h3
                        className="mb-2 mt-4 text-lg font-semibold leading-5"
                        key={key}
                      >
                        {children}
                      </h3>
                    );
                  }),
                  renderNodeRule(isParagraph, ({ children, key }) => {
                    return (
                      <div className="mb-4 text-sm text-body-color" key={key}>
                        {children}
                      </div>
                    );
                  }),
                ]}
                renderNode={Highlighter}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangelogPage;
