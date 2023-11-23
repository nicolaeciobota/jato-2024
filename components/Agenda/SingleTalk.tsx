import {
  ResponsiveImage,
  SiteLocale,
  SpeakerRecord,
  TalkRecord,
} from "@/graphql/generated";
import transformDate from "@/utils/transformDate";
import agendaTime from "@/utils/agendaTime";
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
        <h3>{`${agendaTime(start)} day`}</h3>
        <p>{`${agendaTime(start)} date`}</p>
        <p className="mb-2 text-xs text-gray-500">
          Start time: {`${agendaTime(start)} time`} - End time:{" "}
          {`${agendaTime(end)} time`}
        </p>
        <Link href={"/" + locale + "/talks/" + slug}>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
        </Link>
        <p className="mb-4 text-base">Description: {description}</p>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold">Speakers:</h4>
          <div className="flex flex-wrap items-center">
            {speaker.map(
              ({ id, name, title, slug, picture }: SpeakerRecord) => (
                <div key={id} className="mb-2 mr-4 flex items-center">
                  <Link href={`/${locale}/talks/speaker/${slug}`}>
                    <DatoImage
                      className="mr-2 h-10 w-10 rounded-full"
                      data={picture!.responsiveImage as ResponsiveImage}
                    />
                    <div>
                      <p className="text-xs font-medium">{name}</p>
                      <p className="text-xs text-gray-500">{title}</p>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
        <p className="text-xs text-gray-500">
          {transformDate(dateTags[0].eventDate)}
        </p>
        <Link href={`/${locale}/stage/${stage.slug}`}>{stage.name}</Link>
      </div>
    </>
  );
};

export default SingleTalk;
