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

type Props = {
  data: StageQuery;
  lng: SiteLocale;
};

const Post = ({ data, lng }: Props) => {
  if (!data.stage) notFound();
  return (
    <section className="mt-40 pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {data.stage.name}
              </h2>
              <p>{data.stage.streamKey}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
