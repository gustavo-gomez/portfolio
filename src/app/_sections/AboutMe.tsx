import Title from "@/app/components/Title";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Icons from "@/app/components/Icons";
import {barlowCondensed} from "@/app/[locale]/fonts";
import React from "react";

export const AboutMe = () => {
  const t = useTranslations('about');

  return (
    <section id={'aboutMe'} className={'section bg-light-bg-secondary dark:bg-dark-bg-secondary'}>
      <Title title={t('title')} changeStyle/>
      <div className='flex flex-col pb-20'>
        <div className='flex flex-col lg:flex-row'>  {/* Row 1 */}
          <div className='flex flex-1 items-center justify-center'>
            <Image
              src={'https://storage.googleapis.com/portafolio-assets/profile_image.webp'}
              alt={'profile-photo'}
              className='flex w-[300px] lg:w-[320px] lg2:w-[350px] h-auto'
              width={400}
              height={300}
              // priority={true}
            />
          </div>
          <div className='flex flex-1 items-end min-h-[230px] flex-col justify-end'>
            <Icons/>
            <p
              className='text-light-primary lg:text-light-secondary text-base lg:text-lg bg-light-secondary lg:bg-white py-8 px-8 lg:pl-16 lg:pr-20 rounded-none lg:rounded-l-3xl !leading-8'
            >
              {t('description1')}
            </p>
          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-0'>  {/* Row 2 */}
          <div
            className={`${barlowCondensed.className} flex flex-[1.2] gap-6 text-light-secondary dark:text-light-primary justify-center items-end`}>
            <div className='flex flex-col justify-center w-36 h-32 number-box mb-0 lg:mb-10 shadow-xl'>
              <span className='ml-5 font-bold text-6xl '>12+</span>
              <span className='ml-5 text-lg'>{t('clients')}</span>
            </div>
            <div className='flex flex-col justify-center w-36 h-32 number-box shadow-xl'>
              <span className='ml-5 font-bold text-6xl'>6+</span>
              <span className='ml-5 text-lg'>{t('projects')}</span>
            </div>
          </div>
          <div className='flex flex-[1.8] items-start lg:h-[230px]'>
            <p
              className='text-primary-dark lg:text-white text-base lg:text-lg bg-white lg:bg-light-secondary py-8 lgpy-12 px-8 lg:pl-16 lg:pr-20 rounded-none lg:rounded-l-3xl !leading-8'
            >
              {t('description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
