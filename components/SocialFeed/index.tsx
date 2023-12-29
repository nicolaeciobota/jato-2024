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
        <div>
          {
           data?.socialFeed?.iframe
              ? <IFrame iframeUrl={data?.socialFeed?.iframe} iframeHeight={100} />
              : null
          }
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
