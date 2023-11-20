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
      <div className="relative h-full overflow-hidden rounded-xl bg-white shadow-one dark:bg-dark">
        <Link
          href={"/" + locale + "/talks/" + slug}
          className="relative block h-[230px] w-full overflow-hidden"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {dateTags[0].eventDate}
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
        <Link
          href={"/" + locale + "/" + stage?.slug}
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
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={"/" + locale + "/talks/" + slug}
              className="mb-4 block h-16 text-xl text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {title}
            </Link>
          </h3>
          <p>{talk.description}</p>
          <p>{talk.start}</p>
          <p>{talk.end}</p>

          <div className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10" />
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
            <ul className="flex flex-wrap">
              {speaker.map(
                ({ id, name, title, slug, picture }: SpeakerRecord) => (
                  <li key={id} className="m-2 w-48">
                    <Link href={`/${locale}/talks/speaker/${slug}`}>
                      <div className="flex flex-col items-center">
                        <DatoImage
                          className="h-full w-full object-cover"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="50% 50%"
                          data={picture!.responsiveImage as ResponsiveImage}
                        />
                        <strong className="text-lg">{name}</strong>
                        <p className="text-sm">{title}</p>
                        <span className="text-blue-500">
                          View Speaker Profile
                        </span>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="inline-block">
        <div className="text-xs text-body-color">
          {transformDate(_publishedAt)}
        </div>
      </div>
    </>
  );
};

export default SingleTalk;
