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
              ? <IFrame
                iframeUrl={data?.socialFeed?.iframe || ''}
                iframeHeight={85}
              />
              : <div>Not found!</div>
          }

        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
