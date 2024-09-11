import Image from "next/image";
import {barlowCondensed} from "@/app/[locale]/fonts";
import {AboutMe} from "@/app/_sections/AboutMe";
import Icons from "@/app/components/Icons";
import {Services} from "@/app/_sections/Services";
import {Projects} from "@/app/_sections/Projects";
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

type Props = {
  params: {locale: string};
};

export default function Home({params: {locale}}: Props)  {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  return (
    <div className=" md:px-0 min-w-80">
      <section id='home' className="bg-bg-principal-light dark:bg-bg-dark flex h-screen">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-6 ">
          <Image
            src={'https://storage.googleapis.com/portafolio-assets/photo1.webp'}
            alt={'profile-photo'}
            // className='w-[200px] md:w-[300px] h-auto md:h-auto'
            // className='w-auto h-auto'
            // style={{ width: 'auto', height: 'auto' }}
            width={300}
            height={300}
            // loading='eager'
            priority={true}
          />
          <div className='flex justify-center flex-col max-w-xl mx-4 md:mx-0 '>
            <p>{process.env.NEXT_PUBLIC_ENV_PROD ? "prod" : "no prod"}</p>
            <p>{process.env.NEXT_PUBLIC_ENV_PROD}</p>
            <p
              className={`${barlowCondensed.className} text-xl md:text-3xl font-bold text-txt-secondary dark:text-white`}>{t('greeting')}</p>
            <p
              className={`${barlowCondensed.className} text-3xl md:text-5xl font-bold text-primary-light dark:text-primary-dark `}>
              {t('title')}
            </p>
            <p className='text-lg md:text-xl my-5'>
              {/*<strong className='font-bold bg-gradient-270 bg-clip-text text-transparent'>*/}
              {/*  {"Ingeniero de Software. "}*/}
              {/*</strong>*/}
              {t('description')}
              <strong
                className='text-primary-light dark:text-primary-dark font-bold opacity-90'>{" web y mobile"}</strong>
            </p>
            <Icons/>
          </div>
        </div>
      </section>

      <AboutMe/>
      <Services/>
      <Projects/>


    </div>
  );
}
