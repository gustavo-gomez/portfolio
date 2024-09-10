import Title from "@/app/components/Title";
import {useTranslations} from 'next-intl';

export const AboutMe = () => {
  const t = useTranslations('about');
  return (
    <section id={'aboutMe'} className={'section bg-bg-secondary-light dark:bg-bg-dark2'}>
      <Title title={t('title')}/>
      <div className='flex mt-6 md:mt-[20vh] px-4 md:px-20 flex-col md:flex-row '>
        <div className='flex flex-col flex-1 text-base sm:text-xl gap-10 pr-0 md:pr-10 justify-center'>
          <p> {t('description1')}</p>
          <p> {t('description2')}</p>
        </div>
        <div className='flex justify-center flex-1'>
          <div className="grid grid-cols-2 gap-x-10 gap-y-14 justify-center mt-10 md:mt-0">
            <div
              className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-270 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">6+</span>
              <span className="text-xl">Proyectos</span>
            </div>
            <div
              className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-180 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">12+</span>
              <span className="text-xl">Clientes</span>
            </div>
            <div
              className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-180 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">12+</span>
              <span className="text-xl">Clientes</span>
            </div>
            <div
              className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-270 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">6+</span>
              <span className="text-xl">Proyectos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}