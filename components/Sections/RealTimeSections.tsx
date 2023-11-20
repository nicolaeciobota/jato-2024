"use client";

import { useQuerySubscription } from "react-datocms/use-query-subscription";
import Section from "./Sections";
import {
  CollectionMetadata,
  PageModelSectionsField,
  PageQuery,
  PageQueryVariables,
  PostRecord,
  AwardRecord,
  TalkRecord,
  SiteLocale,
} from "@/graphql/generated";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export default function RealTimeSections({
  initialData,
  token,
  query,
  variables,
  locale,
}: {
  initialData: PageQuery;
  variables: PageQueryVariables;
  query: TypedDocumentNode<PageQuery, PageQueryVariables>;
  locale: SiteLocale;
  token: string;
}) {
  const { data } = useQuerySubscription({
    query,
    variables,
    token,
    initialData,
    preview: true,
  });

  if (!data || !data.page) return <></>;

  return (
    <Section
      locale={locale}
      sections={data.page.sections as Array<PageModelSectionsField>}
      posts={data.allPosts as PostRecord[]}
      awards={data.allAwards as AwardRecord[]}
      talks={data.allTalks as TalkRecord[]}
      postMeta={data._allPostsMeta as CollectionMetadata}
      awardMeta={data._allAwardsMeta as CollectionMetadata}
      talkMeta={data._allTalksMeta as CollectionMetadata}
    />
  );
}
