import {
  AwardQuery,
  SiteLocale,
} from "@/graphql/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmbededIframe from "@/components/IFrame/EmbededIframe";
import StructuredTextSection from "./StructuredTextBlocks";

type Props = {
  data: AwardQuery;
  lng: SiteLocale;
};

const Award = ({ data, lng }: Props) => {
  if (!data.award) notFound();

  return (
    <section className="pt-[100px] pb-20 bg-[#F7F9FA] dark:bg-dark-background min-h-[calc(100vh-280px)]">
      <div className="container">
        <div className="flex flex-wrap justify-center pb-5">
          <div className="w-full sm:px-4 lg:w-full">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Link
                href={`/${lng}/awards/acategory/${data.award.acategory?.slug}`}
              >
                <div className='flex w-full justify-center items-center gap-2 sm:gap-4'>
                  <svg
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="none"
                    strokeWidth={'20'}
                    className="lg:h-10 sm:h-8 h-6 lg:w-10 sm:w-8 w-6 stroke-primary opacity-90">
                    <path
                      d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
                  </svg>
                  <h1 className="text-center xs:text-2xl leading-6 sm:leading-7 text-lg sm:text-xl font-semibold text-gray-800 dark:text-darktext lg:text-[33px]">
                    {data?.award.acategory?.name}
                  </h1>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-3 text-center">
              <h2 className="text-base sm:text-2xl md:text-3xl font-bold leading-tight text-black dark:text-darktext  sm:leading-tight">
                {data?.award?.title}
              </h2>
              <div className="w-4 sm:w-8 h-[2px] bg-black dark:bg-darktext"></div>
              <h2 className="text-base sm:text-2xl md:text-3xl font-bold leading-tight text-black dark:text-darktext  sm:leading-tight">
                {data?.award?.jobTitle}
              </h2>
            </div>
            <div className="flex flex-col md:items-start items-center justify-center sm:gap-8 gap-5 text-center md:flex-row md:text-start">
              <div className="xl:mx-4 w-full lg:max-w-[70%] xl:w-[60%]">
                <div className="relative !w-full overflow-hidden  drop-shadow-xl">
                  <StructuredTextSection data={data?.award?.content} lng={lng} />
                </div>
              <div className="mt-6 flex items-center justify-start flex-wrap dark:border-white dark:border-opacity-10 mx-auto">
                <div className="gap-2 md:gap-x-4 md:gap-y-3 flex items-center flex-wrap">
                  {
                    data?.allAtags?.map((atag) => {
                      return <Link
                        key={atag.id}
                        href={`/${lng}/awards/atag/${atag?.slug}`}
                        className={`inline-flex items-center min-w-[70px] sm:min-w-[103px] justify-center rounded-full border border-primary text-primary px-2 sm:px-4  py-1 sm:py-2 text-xs sm:text-sm transition-all duration-300 font-semibold hover:bg-primary hover:text-white ${atag.id === data.award?.atags?.[0].id ? 'bg-primary text-white border border-primary' : ''}`}
                      >
                        {atag.atag}
                      </Link>
                    })
                  }
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="block text-lg mt-1 mb-4 ml-0 mr-0 font-bold text-center text-gray-800 dark:text-darktext">
          {"Comments"}
        </h4>
        {
          data?.award?.iframe
            ? <EmbededIframe iframeUrl={data?.award?.iframe || ''} iframeHeight={100} />
            : null
        }
      </div>
    </section>
  );
};

export default Award;
