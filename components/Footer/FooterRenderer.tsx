import Image from "next/image";
import Link from "next/link";
import SvgRenderer from "../Common/SvgRenderer";
import {
  ChangeLogRecord,
  FooterQuery,
  LegalPageRecord,
  SiteLocale,
} from "@/graphql/generated";
import { notFound } from "next/navigation";
import { primaryColor } from "@/app/i18n/settings";
import ReactMarkdown from "react-markdown";

type Props = {
  data: FooterQuery;
  lng: SiteLocale;
};

const Footer = ({ data, lng }: Props) => {
  return (
    <footer className="relative z-10 mx-auto flex w-full flex-col items-center justify-center bg-primary bg-opacity-5 pt-16 text-center md:text-start lg:pt-24">
      <div className="container w-full">
        <div className="flex w-full flex-col justify-between md:flex-row md:px-16">
          <div className="w-full">
            <div className="mx- mb-12 lg:mb-16">
              <Link href={"/" + lng + "/home"} className="mb-8 inline-block">
                {data.layout?.footerLogo && (
                  <Image
                    src={data.layout.footerLogo.url}
                    alt="logo"
                    className="w-full"
                    width={data.layout.footerLogo.width || 60}
                    height={data.layout.footerLogo.height || 60}
                  />
                )}
              </Link>
              <div className="mb-9 text-base font-medium leading-relaxed text-body-color">
                <ReactMarkdown>
                  {data.layout!.footerSubtitle || ""}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="flex w-full md:text-end">
            <div className="w-full">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Legal
                </h2>
                <ul>
                  {data.layout!.footerLinks.map((link) => {
                    const pageLink = link as LegalPageRecord; // The field has a "at least one" validation
                    return (
                      <li key={pageLink.id}>
                        <a
                          href={"/" + lng + "/legal/" + pageLink.slug}
                          className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                        >
                          {" "}
                          {pageLink.title}{" "}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
