import { TalkRecord, SiteLocale, SpeakerRecord } from '@/graphql/generated';
import transformDate from '@/utils/transformDate';
import { Maybe } from 'graphql/jsutils/Maybe';
import Link from 'next/link';
import { Image as DatoImage } from 'react-datocms';

type TalkProps = {
  talkData: TalkRecord[];
  talkHeader: string;
  talkSubheader: Maybe<string>;
  speaker: SpeakerRecord[];
  locale: SiteLocale;
};

const MinimalistFeaturedTalksGrid = ({
  talkData,
  talkHeader,
  talkSubheader,
  speaker,
  locale,
}: TalkProps) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          {talkHeader}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
          {talkData.map((talk) => {
            return (
              <div key={talk.id} className="flex gap-4">
                {talk.seoTags?.image?.responsiveImage && (
                  <div className="relative h-56 w-56 flex-shrink-0 overflow-hidden rounded-lg object-cover">
                    <DatoImage
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 20%"
                      data={talk.seoTags?.image?.responsiveImage}
                    />
                  </div>
                )}

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <Link
                    href={'/' + locale + '/talks/' + talk.slug}
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    {talk.title}
                  </Link>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {transformDate(talk._publishedAt)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MinimalistFeaturedTalksGrid;
