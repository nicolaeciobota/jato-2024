'use client'
import { MemberQuery } from "@/graphql/generated";
import IFrame from "../IFrame";

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
      <div className="container h-[44vh]">
        {
          data?.member?.iframeUrl
            ? <IFrame
              iframeUrl={data?.member?.iframeUrl || ''}
              iframeHeight={80}
              defaultOpen={true}
              button={
                <div>Circle Member</div>
              }
            />
            : <div>Not found!</div>
            }
      </div>
    </section>
  );
};

export default Member;
