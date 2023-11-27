import {
  SpeakerRecord,
  ResponsiveImage,
  SiteLocale,
} from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  header: Maybe<string>;
  subheader: Maybe<string>;
  speakersSection: Array<SpeakerRecord>;
  lng: SiteLocale;
};

const CompactSpeaker = ({ header, subheader, speakersSection, lng }: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto mt-16 px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          {header}
        </h1>

        <div className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
          <ReactMarkdown>{subheader || ""}</ReactMarkdown>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {speakersSection.map((member) => {
            return (
              <Link
                href={`/${lng}/talks/speaker/${member.slug}`}
                key={member.id}
                className="group flex transform flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-primary/90"
              >
                <div className="relative h-80 w-80 overflow-hidden rounded-md object-cover ring-4 ring-gray-300">
                  <DatoImage
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 20%"
                    data={member.picture.responsiveImage as ResponsiveImage}
                  />
                </div>

                <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                  {member.name}
                </h1>

                <h3 className="mt-2 text-xl capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
                  {member.jobTitle}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompactSpeaker;
