import Title from "@/app/components/Title";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Icons from "@/app/components/Icons";
import {barlowCondensed} from "@/app/[locale]/fonts";

export const AboutMe = () => {
  const t = useTranslations('about');
  return (
    <section id={'aboutMe'} className={'section bg-light-bg-secondary dark:bg-bg-dark2'}>
      <Title title={t('title')}/>
      <div className='flex flex-col'>
        <div className='flex'>  {/* Row 1 */}
          <div className='flex flex-1 items-center justify-center'>
            <Image
              src={'https://storage.googleapis.com/portafolio-assets/profile_image.webp'}
              alt={'profile-photo'}
              className='flex w-[300px] lg:w-[320px] lg2:w-[350px] h-auto'
              // className='w-auto h-auto'
              // style={{ width: 'auto', height: 'auto' }}
              width={400}
              height={300}
              priority={true}
            />
          </div>
          <div className='flex flex-1 items-end min-h-[230px] flex-col justify-end'>
            <Icons/>
            <p
              className='text-light-secondary text-base lg:text-lg bg-white py-8 pl-16 pr-20 rounded-l-3xl !leading-8'
            >
              {t('description1')}
            </p>
          </div>
        </div>

        <div className='flex'>  {/* Row 2 */}
          <div className={`${barlowCondensed.className} flex flex-[1.2] gap-6 text-light-secondary justify-center items-end`}>
            <div className='flex flex-col justify-center  w-36 h-32 number-box mb-10'>
              <span className='ml-5 font-bold text-6xl'>12+</span>
              <span className='ml-5 text-lg'>Clientes</span>
            </div>
            <div className='flex flex-col justify-center  w-36 h-32 number-box'>
              <span className='ml-5 font-bold text-6xl'>6+</span>
              <span className='ml-5 text-lg'>Proyectos</span>
            </div>
          </div>
          <div className='flex flex-[1.8] items-start min-h-[230px]'>
            <p
              className='text-white text-base lg:text-lg bg-light-secondary py-16 pl-16 pr-20 rounded-l-3xl !leading-8'
            >
              {t('description1')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
