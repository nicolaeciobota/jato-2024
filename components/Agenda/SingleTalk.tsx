import {
  ResponsiveImage,
  SiteLocale,
  SpeakerRecord,
  TalkRecord,
} from "@/graphql/generated";
import transformDate from "@/utils/transformDate";
import { formatTime, getDayOfWeek } from "@/utils/eventHour";
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
  // Format start and end times
  const formattedStartTime = formatTime(start);
  const formattedEndTime = formatTime(end);
  // Get the day of the week from the eventDate
  const eventDayOfWeek = getDayOfWeek(dateTags[0].eventDate);

  return (
    <>
      <div className="rounded-md bg-white p-6 shadow-md">
        <p className="mb-2 text-xs text-gray-500">
          Start time: {formattedStartTime} - End time: {formattedEndTime}
        </p>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-base">{description}</p>
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
        <p className="text-xs text-gray-500">{eventDayOfWeek}</p>
      </div>
    </>
  );
};

export default SingleTalk;
