'use client'
import { MemberQuery } from "@/graphql/generated";
import IframeResizer from 'iframe-resizer-react';

type MemberProps = {
  data: MemberQuery
};

const Member = ({
  data
}: MemberProps) => {

  return (
    <section
      id="socialfeed"
      className="bg-primary bg-opacity-5 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div>
          {
            data?.member?.iframeUrl
              ? <IframeResizer
                heightCalculationMethod="lowestElement"
                inPageLinks
                log
                src={data?.member?.iframeUrl}
                scrolling={true}
                style={{
                  minHeight: '100vh',
                  minWidth: '100%'
                }}
              />
              : null
          }
        </div>
      </div>
    </section>
  );
};

export default Member;
