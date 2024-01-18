import Sections from "@/components/Sections/Sections";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";
import RealTimeSections from "@/components/Sections/RealTimeSections";
import {
  CollectionMetadata,
  PageDocument,
  PageModelSectionsField,
  AwardRecord,
  PostRecord,
  TalkRecord,
  SiteLocale,
  StageRecord,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import { getFallbackLocale } from "@/app/i18n/settings";

type Params = {
  params: {
    lng: SiteLocale;
    slug: string;
  };
};

export default async function Home({ params: { lng, slug } }: Params) {
  const fallbackLng = await getFallbackLocale();
  const { isEnabled } = draftMode();

  const data = await queryDatoCMS(
    PageDocument,
    {
      locale: lng,
      fallbackLocale: [fallbackLng],
      slug,
    },
    isEnabled
  );

  if (!data?.page) notFound();
    
  return (
    <>
      {!isEnabled && (
        <Sections
          locale={lng}
          slug={slug}
          sections={data.page.sections as Array<PageModelSectionsField>}
          posts={data.allPosts as PostRecord[]}
          postMeta={data._allPostsMeta as CollectionMetadata}
          talks={data.allTalks as TalkRecord[]}
          talkMeta={data._allTalksMeta as CollectionMetadata}
          stages={data.allStages as StageRecord[]}
          stageMeta={data._allStagesMeta as CollectionMetadata}
          data={{
            __typename: undefined,
            talk: undefined,
          }}
        />
      )}
      {isEnabled && (
        <RealTimeSections
          initialData={data}
          locale={lng}
          token={process.env.DATOCMS_READONLY_API_TOKEN || ""}
          query={PageDocument}
          variables={{ locale: lng, fallbackLocale: [fallbackLng], slug }}
        />
      )}
    </>
  );
}
