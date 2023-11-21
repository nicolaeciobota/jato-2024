import {
  ResponsiveImage,
  SiteLocale,
  SpeakerRecord,
  TalkRecord,
} from "@/graphql/generated";
import transformDate from "@/utils/transformDate";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import SpeakerTalks from "./SpeakerTalks";

type Props = {
  talk: TalkRecord; //
  locale: SiteLocale;
};

const SingleTalk = ({ talk, locale }: Props) => {
  const {
    title,
    seoTags,
    description,
    start,
    end,
    dateTags,
    speaker,
    stage,
    _publishedAt,
    slug,
  } = talk;

  return (
    <>
      <div className="rounded-md bg-white p-6 shadow-md">
        <p className="mb-2 text-xs text-gray-500">
          Start time: {start} - End time: {end}
        </p>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-base">{description}</p>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold">Speakers:</h4>
          <div className="mb-2 mr-4 flex items-center">
            {speaker.map(
              ({ id, name, title, slug, picture }: SpeakerRecord) => (
                <div key={id} className="mb-2 mr-4 flex items-center">
                  <Link href={`/${locale}/talks/speaker/${slug}`}>
                    <div className="flex flex-col items-center">
                      <DatoImage
                        className="mr-2 h-10 w-10 rounded-full"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        data={picture!.responsiveImage as ResponsiveImage}
                      />
                    </div>
                    <p className="text-xs font-medium">{name}</p>
                    <p className="text-xs text-gray-500">{title}</p>
                  </Link>
                </div>
              )
            )}
          </div>
          <div>
            {" "}
            <Link
              href={"/" + locale + "/stage/" + stage?.slug}
              className="relative block h-[230px] w-full overflow-hidden"
            >
              <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                {stage?.name}
              </span>
              <div className="relative h-full w-full overflow-hidden">
                <DatoImage
                  className="h-full w-full object-contain"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  data={seoTags!.image!.responsiveImage as ResponsiveImage}
                />
              </div>
            </Link>
          </div>
        </div>
        <p className="text-xs text-gray-500">{start}</p>
      </div>
    </>
  );
};

export default SingleTalk;
