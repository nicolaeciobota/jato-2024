/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Footer from '@/components/Footer';
import 'node_modules/react-modal-video/css/modal-video.css';
import '@/styles/global.css';
import { draftMode } from 'next/headers';
import { SiteLocale } from '@/graphql/generated';
import getAvailableLocales from '@/app/i18n/settings';
import HeaderRenderer from '@/components/Header/HeaderRenderer';
import Script from 'next/script';

type Params = {
  children: React.ReactNode;
  params: Promise<{
    lng: SiteLocale;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const languages = await getAvailableLocales();
  return languages.map((language) => ({
    lng: language,
    slug: 'home'
  }));
}

export default async function RootLayout({
  children,
  params,
}: Params) {
  const { lng, slug } = await params;
  const { isEnabled } = draftMode();
  
  return (
    <>
      <HeaderRenderer lng={lng} isDraft={isEnabled} />
      {children}
      <Footer lng={lng} />
      {
        slug === 'home'
          ? <Script
            defer
            id="cookieyes"
            type="text/javascript"
            strategy='beforeInteractive'
            src="https://cdn-cookieyes.com/client_data/38dd9bcb9ab1dc9ac5706bcb/script.js"
          ></Script>
          : null
      }
    </>
  );
}
