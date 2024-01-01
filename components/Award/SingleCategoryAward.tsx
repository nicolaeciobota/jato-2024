import { AwardRecord, CategoryAwardRecord, ResponsiveImage, SiteLocale } from "@/graphql/generated";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";

type Props = {
  categoryRecord: CategoryAwardRecord;
  locale: SiteLocale;
};

const SingleCategoryAward = ({ categoryRecord, locale }: Props) => {
  const { title, award } = categoryRecord;

  return (
    <>
      <div className="pb-16">
        <div className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
        </div>
        <div className="flex lg:flex-nowrap flex-wrap xl:gap-8 gap-6 lg:justify-between justify-center pt-16">
          <div className="lg:w-1/5 w-full">
            <div className="flex gap-3 items-center lg:justify-start justify-center">
              <h2 className="text-2xl font-semibold text-neutral-950">{title}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512" className="mt-2">
                <path opacity="1" fill="#1E3050" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
              </svg>
            </div>
          </div>
          <div className="lg:w-4/5 w-full flex flex-wrap gap-6 justify-end items-center">
            {
              award?.map((singleAward: AwardRecord, index: number) => {
                const { title, seoTags, jobTitle, slug } = singleAward;
                return (
                  <div key={index} className="lg:w-[31%] md:w-[48%] w-full overflow-hidden group rounded-3xl bg-neutral-100 cursor-pointer relative">
                    <Link href={"/" + locale + "/awards/" + slug}>
                      <DatoImage
                        className="h-96 w-full transition duration-500 group-hover:scale-105"

                        data={seoTags!.image!.responsiveImage as ResponsiveImage}
                      />
                      <div className="w-full h-full flex flex-col justify-end bg-gradient-to-t from-black to-black/0 p-6 absolute top-0 left-0">
                        <p className="text-base font-semibold text-white tracking-wide">{title}</p>
                        <p className="text-sm text-white mt-2">{jobTitle}</p>
                      </div>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategoryAward;
