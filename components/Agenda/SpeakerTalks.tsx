import { TalkRecord, SiteLocale, SpeakerQuery } from "@/graphql/generated";
import SingleTalk from "./SingleTalk";
import { Image as DatoImage } from "react-datocms";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

type Props = {
  data: SpeakerQuery;
  lng: SiteLocale;
};

const SpeakerTalks = ({ data, lng }: Props) => {
  if (!data.speaker) notFound();
  return (
    <section className="mt-16 flex w-full flex-col items-center justify-center py-[32px] dark:bg-dark-background">
      <section className="px-auto mx-auto mb-8 flex  w-full items-center justify-center bg-white px-2 dark:bg-gray-900">
        {" "}
        <div className="md:py-10 py-6">
          <div className="flex flex-col items-center justify-center gap-8  text-center md:flex-row md:text-start">
            <div className="relative aspect-square w-56 overflow-hidden rounded-xl drop-shadow-xl md:w-72 lg:w-96">
              <DatoImage
                className="h-full w-full object-cover"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                data={data.speaker.picture!.responsiveImage!}
              />
            </div>
            <div className="xl:mx-4 xl:w-1/2">
              <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-darktext lg:text-3xl">
                {data.speaker.name}
              </h1>{" "}
              <h2 className="text-2xl capitalize text-gray-800 dark:text-darktext lg:text-2xl">
                {data.speaker.jobTitle}
              </h2>
              <div className="mt-4 max-w-2xl text-gray-800 dark:text-darktext">
                <ReactMarkdown>{data.speaker.bio}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.speaker._allReferencingTalks.map((talk) => (
            <div
              key={talk.id}
              className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleTalk talk={talk as TalkRecord} locale={lng} />
            </div>
          ))}
        </div>

        <div className=" -mx-4 flex flex-wrap"></div>
      </div>
    </section>
  );
};

export default SpeakerTalks;
