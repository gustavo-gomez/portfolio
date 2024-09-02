import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/_sections/Header";
import {ThemeProvider} from 'next-themes'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Gustavo Gomez | Software Engineer",
  description: "Desarrollo web y mobile",
  keywords: ["software engineer", "web development", "mobile development", 'programacion', 'ingeniero de software', 'desarrollo web', 'desarrollo mobile'],
  openGraph: {
    title: "Gustavo Gomez | Software Engineer",
    description: "Desarrollo personalizado de software web y mobile.",
    images: [
      {
        url: 'https://storage.googleapis.com/portafolio-assets/og-image.png',
      }
    ],
    url: 'https://stg.gustavogomez.dev/'
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Gomez | Software Engineer",
    description: "Desarrollo personalizado de software web y mobile.",
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

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${inter.className} font-sectionTitle`}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header/>
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
