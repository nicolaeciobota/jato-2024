"use client";

import { useQuerySubscription } from "react-datocms/use-query-subscription";
import Section from "./Sections";
import {
  CollectionMetadata,
  PageModelSectionsField,
  PageQuery,
  PageQueryVariables,
  PostRecord,
  TalkRecord,
  SiteLocale,
  StageRecord,
  AwardRecord,
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
      talks={data.allTalks as TalkRecord[]}
      stages={data.allStages as StageRecord[]}
      postMeta={data._allPostsMeta as CollectionMetadata}
      talkMeta={data._allTalksMeta as CollectionMetadata}
      stageMeta={data._allStagesMeta as CollectionMetadata}
      awards={data.allAwards as AwardRecord[]}
      awardMeta={data._allAwardsMeta as CollectionMetadata}
      data={{
        __typename: undefined,
        talk: undefined,
      }}
    />
  );
}
