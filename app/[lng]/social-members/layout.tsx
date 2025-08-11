import "@/styles/global.css";
import { draftMode } from "next/headers";
import { SiteLocale } from "@/graphql/generated";
import getAvailableLocales from "../../i18n/settings";

type Params = {
  children: React.ReactNode;
  params: Promise<{
    lng: SiteLocale;
  }>;
};

export async function generateStaticParams() {
  const languages = await getAvailableLocales();
  return languages.map((language) => ({
    lng: language
  }));
}

export default async function RootLayout({
  children,
  params,
}: Params) {
  const { lng } = await params;
  const { isEnabled } = await draftMode();
  return (
    <>
      {children}
    </>
  );
}
