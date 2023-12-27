import transformDate from "@/utils/transformDate";
import { Image as DatoImage } from "react-datocms";
import SingleBlog from "@/components/Blog/SingleBlog";
import Link from "next/link";
import {
  StageQuery,
  StageRecord,
  ResponsiveImage,
  SiteLocale,
  TalkRecord,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import React from "react";
import SingleTalk from "@/components/Agenda/SingleTalk";
import LiveryPlayer from "@/components/LiveryPlayer";

type Props = {
  data: StageQuery;
  lng: SiteLocale;
};

const Stage = ({ data, lng }: Props) => {
  if (!data.stage) notFound();
  return (
    <section className="pt-40 pb-[120px] dark:bg-dark-background">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-darktext sm:text-4xl sm:leading-tight">
                {data.stage.name}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.stage.talk.map((talks) => (
            <div
              key={talks.id}
              className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleTalk talk={talks as TalkRecord} locale={lng} />
            </div>
          ))}
        </div>

        <div className=" -mx-4 flex flex-wrap"></div>
      </div>
      <div className="container">
        {data?.stage?.streamKey ? <LiveryPlayer streamId={data?.stage?.streamKey} /> : null}
      </div>
    </section>
  );
};

export default Stage;
