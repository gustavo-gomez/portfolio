import Image from "next/image";
import Header from "@/app/_sections/Header";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function Home() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <main className="">

        <Header/>
        <p className="text-white pt-24">stg example</p>

      </main>
    </NextThemesProvider>
  );
}
