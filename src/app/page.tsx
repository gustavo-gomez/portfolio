import Header from "@/app/_sections/Header";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Image from "next/image";
import arrow from "@/app/assets/arrow_section.svg";

export default function Home() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <main className="">

        <Header/>
        <section className="text-white pt-24">
          <div className="flex w-full justify-center pt-5">
            <Image src={arrow} alt={'arrow-left'} className='rotate-180' width={20}/>
            <span
              className='font-sectionTitle font-light text-[56px] bg-clip-text text-transparent bg-gradient-to-l from-[#6357F6] to-[#E6606C] mx-2'
            >
              About me
            </span>
            <Image src={arrow} alt={'arrow-right'} width={20}/>
          </div>
        </section>

      </main>
    </NextThemesProvider>
  );
}
