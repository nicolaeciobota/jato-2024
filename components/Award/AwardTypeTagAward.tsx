import { AwardTagQuery, SiteLocale, ResponsiveImage } from "@/graphql/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Image as DatoImage } from "react-datocms";

type Props = {
  data: AwardTagQuery;
  lng: SiteLocale;
};

const TagAwards = ({ data, lng }: Props) => {
  if (!data.atag) {
    notFound();
  }
  return (
    <section className="pb-[120px] pt-[120px] dark:bg-dark-background">
      <div className="container">
        <div className="pb-16">
          <div className="relative before:absolute after:absolute before:bg-neutral-950 dark:before:bg-primary after:bg-neutral-950/10 dark:after:bg-[#8a8f9c] before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
          </div>
          <div className="flex lg:flex-nowrap flex-wrap xl:gap-8 gap-6 lg:justify-between justify-center lg:pt-16 pt-12">
            <div className="lg:w-1/5 w-full">
              <div className="flex gap-3 items-center lg:justify-start justify-center">
                <h2 className="text-2xl font-semibold text-neutral-950 dark:text-darktext">{data?.atag?.atag}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 stroke-primary opacity-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>
              </div>
            </div>
            <div className="lg:w-4/5 w-full flex flex-wrap gap-6 justify-start items-center">
              {
                data.atag["_allReferencingAwards"]?.map((singleAward: any, index: number) => {
                  const { title = '', seoTags, jobTitle = '', slug = '', acategory = {} } = singleAward;
                  return (
                    <div key={index} className="lg:w-[31%] md:w-[48%] w-full overflow-hidden group rounded-3xl bg-neutral-100 cursor-pointer relative">
                      <Link href={"/" + lng + "/category-awards/" + acategory?.slug + `_${index}`}>
                        <DatoImage
                          className="h-[280px] object-cover w-full transition duration-500 group-hover:scale-105"
                          objectFit="cover"
                          data={seoTags!.image!.responsiveImage as ResponsiveImage}
                        />
                        <div className="w-full h-full flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6 absolute top-0 left-0">
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
      </div>
    </section>
  );
};

export default TagAwards;
