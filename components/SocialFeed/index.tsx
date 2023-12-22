'use client'
import { SocialFeedQuery } from "@/graphql/generated";
import IFrame from "../IFrame";

type SocialFeedProps = {
  data: SocialFeedQuery
};

const SocialFeed = ({
  data
}: SocialFeedProps) => {

  return (
    <section
      id="socialfeed"
      className="bg-primary bg-opacity-5 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {
            data?.socialFeed?.iframe ? <IFrame iframeUrl={data?.socialFeed?.iframe} /> : null
          }
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
