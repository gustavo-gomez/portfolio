import Title from "@/app/components/Title";
import {useTranslations} from "next-intl";

export const Services = () => {
  const t = useTranslations('services');

  const services = [
    {
      id: 'consulting',
      icon: <></>,
      title: t('consulting.title'),
      description: t('consulting.description')
    },
    {
      id: 'web',
      icon: <></>,
      title: t('web.title'),
      description: t('web.description')
    },
    {
      id: 'mobile',
      icon: <></>,
      title: t('mobile.title'),
      description: t('mobile.description')
    }
  ]

  return (
    <section id='services' className="text-white section bg-light-bg-principal dark:bg-dark-bg-principal">
      <Title title={t('title')}/>
      <div className='flex w-full gap-10 lg:gap-20 mt-14 sm:mt-24 lg2:mt-36 justify-center flex-col md:flex-row items-center'>
        {
          services.map(service => (
            <div
              key={service.id}
              className='flex flex-col bg-white shadow-lg hover:shadow-2xl items-center w-2/3 h-56 sm:w-1/3 sm:h-56 md:w-1/4 md:h-52 rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px]'
            >
              <div
                className='w-14 h-14 bg-light-primary self-start rounded-tr-[25px] rounded-br-[23px] rounded-bl-[28px]'
              >
                {service.icon}
              </div>
              <span className='text-2xl lg:text-3xl font-normal text-light-primary text-center'>{service.title}</span>
              <p className='text-base lg:text-lg font-normal text-light-secondary mt-5 px-4'>{service.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}