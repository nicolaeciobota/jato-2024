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
      <div className="container">
        {
          data?.member?.iframeUrl
            ? <IFrame
              iframeUrl={data?.member?.iframeUrl || ''}
              btnText="Close Members"
            />
            : <div>Not found!</div>
            }
      </div>
    </section>
  );
};

export default Member;
