import Footer from '@/components/Footer';
import 'node_modules/react-modal-video/css/modal-video.css';
import '@/styles/global.css';
import { draftMode } from 'next/headers';
import { SiteLocale } from '@/graphql/generated';
import HeaderRenderer from '@/components/Header/HeaderRenderer';
import getAvailableLocales from '@/app/i18n/settings';

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
  const { isEnabled } = draftMode();

  return (
    <>
      <HeaderRenderer lng={lng} isDraft={isEnabled} />
      {children}
      <Footer lng={lng} />
    </>
  );
}
