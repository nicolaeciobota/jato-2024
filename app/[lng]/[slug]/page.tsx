import Sections from "@/components/Sections/Sections";
import queryDatoCMS from "@/utils/queryDatoCMS";
import { draftMode } from "next/headers";
import RealTimeSections from "@/components/Sections/RealTimeSections";
import {
  PageDocument,
  PageModelSectionsField,
  PageSlugDocument,
  SiteLocale,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import { getFallbackLocale } from "@/app/i18n/settings";
import { getSlugs } from "@/ssg";

type Params = {
  params: Promise<{
    lng: SiteLocale;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const paths = await getSlugs(PageSlugDocument, 'allPages');
  return paths
}

export default async function Home({ params }: Params) {
  const { lng, slug } = await params;
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
