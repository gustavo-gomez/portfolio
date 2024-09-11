import React, {ReactNode} from "react";
import {barlow} from "./fonts";
import "./globals.css";
import Header from "@/app/_sections/Header";
import {ThemeProvider} from 'next-themes'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {routing} from "@/i18n/routing";
import { GoogleAnalytics } from '@next/third-parties/google'

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
                                         params: {locale}
                                       }: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description'),
    keywords: ["software engineer", "web development", "mobile development", 'programacion', 'ingeniero de software', 'desarrollo web', 'desarrollo mobile'],
    openGraph: {
      title: t('title'),
      description: t('OPdescription'),
      images: [
        {
          url: 'https://storage.googleapis.com/portafolio-assets/og-image.png',
        }
      ],
      url: 'https://stg.gustavogomez.dev/'
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('OPdescription'),
      images: [
        {
          url: 'https://storage.googleapis.com/portafolio-assets/og-image.png',
        },
      ],
    },
    applicationName: 'Gustavo Gomez Portfolio',
    robots: 'index, follow',
    icons: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'icon',
      },
      {
        url: '/logo192.png',
        sizes: '192x192',
        type: 'icon',
      },
      {
        url: '/logo512.png',
        sizes: '512x512',
        type: 'icon',
      },
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'apple-touch-icon',
      }
    ],
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function AppLayout({
                                          children,
                                          params: {locale}
                                        }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
    <body className={`${barlow.className}`}>
    <GoogleAnalytics gaId="G-PRCLXC250T" />
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextIntlClientProvider messages={messages}>
        <Header/>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
