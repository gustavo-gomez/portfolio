import React, {ReactNode} from "react";
import {barlow} from "./fonts";
import "./globals.css";
import Header from "@/app/_sections/Header";
import {ThemeProvider} from 'next-themes'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {routing} from "@/i18n/routing";
import Head from "next/head";
// import {GoogleAnalytics} from "@next/third-parties/google";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
                                         params: {locale}
                                       }: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'metadata'});
  if (process.env?.SERVICE_ENV !== 'PROD') {
    return {
      title: t('title'),
      description: t('description'),
    }
  } else
    return {
      title: t('title'),
      description: t('description'),
      keywords: locale === 'es' ? ["Gustavo Gomez",
        "programador web Lima",
        "programador web Perú",
        "programador móvil Lima",
        "programador móvil Perú",
        "ingeniero de software",
        "desarrollador web",
        "desarrollador móvil",
        "programador",
        "programación web",
        "desarrollo de software",
        "desarrollo de software lima",
        "desarrollo web",
        "desarrollo móvil",
        "tecnología",
        "soluciones tecnológicas",
        "consultoría tecnológica",
        "aplicaciones móviles",
        "sitios web",
        "freelance",
        "proyectos tecnológicos",
        "innovación tecnológica"] : [
        "Gustavo Gomez",
        "software engineer",
        "web developer",
        "mobile developer",
        "programmer",
        "web development",
        "software development",
        "web design",
        "mobile development",
        "technology",
        "tech solutions",
        "tech consulting",
        "mobile apps",
        "websites",
        "freelance",
        "tech projects",
        "tech innovation",
        "Lima",
        "Peru"
      ],
      openGraph: {
        title: t('title'),
        description: t('OPdescription'),
        images: [
          {
            url: 'https://storage.googleapis.com/portafolio-assets/og-image.png',
          }
        ],
        url: 'https://gustavogomez.dev/'
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
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRCLXC250T"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PRCLXC250T');
          `
      }} />

    </Head>
    <body className={`${barlow.className}`}>
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
