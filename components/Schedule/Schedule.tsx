import {
  SiteLocale,
  SpeakerRecord,
  StageRecord,
  ResponsiveImage,
  TalkRecord,
} from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  header: Maybe<string>;
  subheader: Maybe<string>;
  members: Array<SpeakerRecord>;
  stages: StageRecord;
  talks: TalkRecord;
  lng: SiteLocale;
};

const ExpandedSchedule = ({
  header,
  subheader,
  talks,
  members,
  stages,
  lng,
}: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          {header}
        </h1>

        <div className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
          <ReactMarkdown>{subheader || ""}</ReactMarkdown>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-8 md:text-start xl:mt-16 xl:grid-cols-2">
          <h1 className="mb-4 text-left text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            {talks.title}
          </h1>

          <div className="mx-auto my-6 max-w-2xl text-left text-gray-500 dark:text-gray-300">
            <ReactMarkdown>{talks.description || ""}</ReactMarkdown>
          </div>
          {members.map((member) => {
            return (
              <Link
                href={`/${lng}/speakers/speaker/${member.slug}`}
                key={member.id}
                className=" group transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-primary/90 hover:opacity-95 dark:border-gray-700 dark:hover:border-transparent"
              >
                <div className="flex flex-col items-center sm:-mx-4 sm:flex-row">
                  <div className="relative z-50 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full object-cover ring-4 ring-gray-300 sm:mx-4">
                    <DatoImage
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 20%"
                      data={member.picture?.responsiveImage as ResponsiveImage}
                    />
                  </div>

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white md:text-2xl">
                      {member.name}
                    </h1>

                    <p className="mt-2 capitalize text-gray-500 group-hover:text-white">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="-mx-2 mt-4 flex">
                  <div
                    className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                    aria-label="Reddit"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          href={`/${lng}/${stages.slug}`}
          className="mt-3 inline-flex items-center text-black hover:text-blue-600 dark:text-white"
        >
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ExpandedSchedule;
