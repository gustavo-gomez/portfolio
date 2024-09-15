import Image from "next/image";
import {barlowCondensed} from "@/app/[locale]/fonts";
import {AboutMe} from "@/app/_sections/AboutMe";
import {Services} from "@/app/_sections/Services";
import {Projects} from "@/app/_sections/Projects";
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  return (
    <div className=" md:px-0 min-w-80">
      <section
        id='home'
        className="flex justify-center  bg-light-bg-principal dark:bg-dark-bg-principal h-[calc(100vh-7rem)] min-h-[600px] xs:min-h-[570px] sm:min-h-[700px] lg:min-h-[790px] lg2:min-h-[850px] max-h-[500px] sm:max-h-[700px] lg:max-h-[800px] xl:max-h-[800px]"
      >
        <div className="flex flex-col lg:flex-row w-full max-w-7xl relative h-full items-center md:items-baseline ">

          <div className='flex flex-col sm:max-w-lg sm:absolute left-8 top-10 xs:left-10 xs:top-10 sm:top-10 sm:left-28 md:top-32 lg:top-48 lg2:top-56 mt-16 md:mt-0 px-14 sm:px-2.5 md:px-0'>
            <p
              className={`${barlowCondensed.className} text-4xl sm:text-5xl lg:text-6xl lg2:text-7xl font-medium text-light-primary`}>
              {t('title')}
            </p>
            <p className='text-lg md:text-xl my-5 text-light-secondary dark:text-white'>{t('description')}</p>
          </div>

          <Image
            src={'/pc.webp'}
            alt={'home-image'}
            className='absolute right-0 bottom-0 max-w-screen-md w-[360px] xs:w-[390px] sm:w-[470px] md:w-[490px] lg:w-[540px] lg2:w-[680px] h-auto text-base md:text-2xl'
            // className='absolute right-0 bottom-0 max-w-screen-md text-base md:text-2xl'
            width={600}
            height={0}
            priority={true}
            fetchPriority='high'
            sizes='(max-width: 480px) 360px, (max-width: 640px) 390px, (max-width: 768px) 470px, (max-width: 976px) 490px, (max-width: 1200px) 540px, 680px'
          />
        </div>
      </section>

      <AboutMe/>
      <Services/>
      <Projects/>
    </div>
  );
}
