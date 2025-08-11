import { getFallbackLocale } from "@/app/i18n/settings";
import Timeline from "@/components/Timeline";
import { SiteLocale } from "@/graphql/generated";
import { draftMode } from "next/headers";

type Params = {
  params: {
    lng: SiteLocale;
  };
};

const SocialFeedPage = async ({ params }: Params) => {
  const fallbackLng = await getFallbackLocale();
  const { lng } = params;
  const { isEnabled } = draftMode();

  return (
    <>
      {!isEnabled && (
        <section className="bg-primary bg-opacity-5 py-16 md:py-20 lg:py-28 min-h-[calc(100vh-280px)]">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                Social Feed
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Connect with the community and share your thoughts
              </p>
            </div>
            <Timeline />
          </div>
        </section>
      )}
    </>
  );
};

export default SocialFeedPage;
