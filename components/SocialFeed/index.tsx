'use client'
import { SocialFeedQuery } from "@/graphql/generated";
import IframeResizer from 'iframe-resizer-react'
import LiveryPlayer from "../LiveryPlayer";

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
              ? <IframeResizer
                heightCalculationMethod="lowestElement"
                inPageLinks
                log
                src={data?.socialFeed?.iframe}
                scrolling={true}
                style={{
                  minHeight:'100vh',
                  minWidth: '100%'
                }}
              />
              : null
          }
        </div>
      </div>
      <LiveryPlayer streamId="5ddb98f5e4b0937e6a4507f2"/>
    </section>
  );
};

export default SocialFeed;
