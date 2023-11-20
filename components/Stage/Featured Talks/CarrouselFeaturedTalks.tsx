"use client";

import {
  SpeakerRecord,
  TalkRecord,
  SiteLocale,
  ResponsiveImage,
} from "@/graphql/generated";
import transformDate from "@/utils/transformDate";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import { useState } from "react";
import { Image as DatoImage } from "react-datocms";

type TalkProps = {
  talkData: TalkRecord[];
  talkHeader: string;
  talkSubheader: Maybe<string>;
  speaker: SpeakerRecord[];
  locale: SiteLocale;
};

const CarrouselFeaturedTalks = ({
  talkData,
  talkHeader,
  talkSubheader,
  speaker,
  locale,
}: TalkProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % talkData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? talkData.length - 1 : prevIndex - 1
    );
  };

  const currentReview = talkData[currentIndex];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          {talkHeader}
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          {currentReview.seoTags?.image?.responsiveImage && (
            <div className="relative h-72 w-full overflow-hidden rounded-xl object-cover lg:mx-6 lg:h-96 lg:w-1/2">
              <DatoImage
                layout="fill"
                objectFit="cover"
                objectPosition="50% 20%"
                data={currentReview.seoTags?.image?.responsiveImage}
              />
            </div>
          )}

          <div className="mt-6 lg:mx-6 lg:mt-0 lg:w-1/2">
            <p className="text-sm uppercase text-blue-500">
              {currentReview.dateTags[0].eventDate}
            </p>

            <a
              href="#"
              className="mt-4 block text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
            >
              {currentReview.title}
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {currentReview.seoTags?.description}
            </p>
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
            <div className="mt-8">
              <button
                onClick={handlePrev}
                title="left arrow"
                className="rounded-full border p-2 text-black transition-colors duration-300 hover:bg-primary/80 rtl:-scale-x-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                title="right arrow"
                className="rounded-full border p-2 text-black transition-colors duration-300 hover:bg-primary/80 rtl:-scale-x-100 md:mx-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrouselFeaturedTalks;
