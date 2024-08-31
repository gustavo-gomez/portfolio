import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_sections/Header";
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Gomez | Software Engineer",
  description: "Desarrollo web y mobile",
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
        <Header />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
