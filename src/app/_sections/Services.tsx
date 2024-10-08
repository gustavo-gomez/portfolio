import Title from "@/app/components/Title";
import {useTranslations} from "next-intl";

export const Services = () => {
  const t = useTranslations('services');

  const services = [
    {
      id: 'web',
      icon: <svg width="33" height="33" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.0682 0H0.931818C0.41 0 0 0.41 0 0.931818V27.9545H41V0.931818C41 0.41 40.59 0 40.0682 0Z"
              fill="white"/>
        <path
          d="M0 32.6137C0 33.1355 0.41 33.5455 0.931818 33.5455H40.0682C40.59 33.5455 41 33.1355 41 32.6137V29.8182H0V32.6137Z"
          fill="white"/>
        <path
          d="M28.8862 39.1363H24.2271V35.4091H16.7725V39.1363H12.1135C11.5916 39.1363 11.1816 39.5463 11.1816 40.0681C11.1816 40.59 11.5916 41 12.1135 41H28.8862C29.408 41 29.818 40.59 29.818 40.0681C29.818 39.5463 29.408 39.1363 28.8862 39.1363Z"
          fill="white"/>
      </svg>
      ,
      title: t('web.title'),
      description: t('web.description')
    },
    {
      id: 'mobile',
      icon: <svg width="28" height="40" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.41657 44H22.9166C26.1432 44 28.8199 41.5983 29.2599 38.5H0.0732422C0.513242 41.5983 3.18991 44 6.41657 44ZM13.7499 40.3333H15.5832C16.0966 40.3333 16.4999 40.7367 16.4999 41.25C16.4999 41.7633 16.0966 42.1667 15.5832 42.1667H13.7499C13.2366 42.1667 12.8332 41.7633 12.8332 41.25C12.8332 40.7367 13.2366 40.3333 13.7499 40.3333Z"
          fill="white"/>
        <path
          d="M22.9166 0H6.41657C3.18991 0 0.513242 2.40167 0.0732422 5.5H29.2599C28.8199 2.40167 26.1432 0 22.9166 0ZM21.0832 3.66667C20.6066 3.66667 20.1666 3.28167 20.1666 2.75C20.1666 2.27333 20.5332 1.83333 21.0832 1.83333C21.6332 1.83333 21.9999 2.27333 21.9999 2.75C21.9999 3.26333 21.5782 3.66667 21.0832 3.66667Z"
          fill="white"/>
        <path d="M29.3333 7.33337H0V36.6667H29.3333V7.33337Z" fill="white"/>
      </svg>
      ,
      title: t('mobile.title'),
      description: t('mobile.description')
    },
    {
      id: 'consulting',
      icon: <svg width="35" height="34" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.3478 26.9044H22.7304C22.5043 26.9044 22.2957 27.0087 22.1565 27.2L19.5304 30.9913C14.9043 28.8 11.2 25.0957 9.00869 20.4696L12.8 17.8435C12.9913 17.7218 13.0957 17.4957 13.0957 17.2696V9.6522C13.0957 9.26959 12.7826 8.95654 12.4 8.95654H0.695652C0.313043 8.95654 0 9.26959 0 9.6522C0 27.5131 12.487 40 30.3478 40C30.7304 40 31.0435 39.687 31.0435 39.3044V27.5826C31.0435 27.2 30.7304 26.887 30.3478 26.887V26.9044Z"
          fill="white"/>
        <path
          d="M28.2784 0C21.8088 0 16.5566 5.26957 16.5566 11.7217C16.5566 13.7565 17.0957 15.7565 18.1218 17.5304L15.287 22.4C15.1305 22.6435 15.1653 22.9739 15.3566 23.1826C15.4957 23.3391 15.687 23.4261 15.8957 23.4261C15.9653 23.4261 16.0523 23.4261 16.1218 23.3913L21.7218 21.3913C23.6697 22.7304 25.9479 23.4261 28.3131 23.4261C34.7827 23.4261 40.0349 18.1565 40.0349 11.7043C40.0349 5.25217 34.7305 0 28.2784 0ZM23.8262 4.74783C21.4262 6.27826 20.0001 8.88696 20.0001 11.7217C20.0001 12.1043 19.687 12.4174 19.3044 12.4174C18.9218 12.4174 18.6088 12.1043 18.6088 11.7217C18.6088 8.41739 20.2784 5.37391 23.061 3.58261C23.3914 3.37391 23.8088 3.47826 24.0175 3.7913C24.2262 4.12174 24.1218 4.53913 23.8088 4.74783H23.8262ZM28.2784 16.5391C27.8957 16.5391 27.5827 16.2261 27.5827 15.8435C27.5827 15.4609 27.8957 15.1478 28.2784 15.1478C28.661 15.1478 28.974 15.4609 28.974 15.8435C28.974 16.2261 28.661 16.5391 28.2784 16.5391ZM29.9305 12.1391L29.461 12.4522C29.1653 12.6609 28.974 13.0087 28.974 13.3739V13.7913C28.974 14.1739 28.661 14.487 28.2784 14.487C27.8957 14.487 27.5827 14.1739 27.5827 13.7913V13.3739C27.5827 12.5391 28.0001 11.7739 28.6957 11.3043L29.1653 10.9913C29.461 10.7826 29.6523 10.4348 29.6523 10.0696C29.6523 9.46087 29.1479 8.95652 28.5392 8.95652H28.0001C27.3914 8.95652 26.887 9.46087 26.887 10.0696C26.887 10.4522 26.574 10.7652 26.1914 10.7652C25.8088 10.7652 25.4957 10.4522 25.4957 10.0696C25.4957 8.69565 26.6088 7.58261 27.9827 7.58261H28.5218C29.8957 7.58261 31.0088 8.69565 31.0088 10.0696C31.0088 10.9043 30.5914 11.6696 29.8957 12.1391H29.9305Z"
          fill="white"/>
      </svg>
      ,
      title: t('consulting.title'),
      description: t('consulting.description')
    }
  ]

  return (
    <section id='services' className="text-white section bg-light-bg-principal dark:bg-dark-bg-principal">
      <Title title={t('title')}/>
      <div
        className='flex w-full gap-10 lg:gap-20 mt-14 md:mt-24 justify-center flex-col md:flex-row items-center pb-16 md:pb-0'>
        {
          services.map(service => (
            <div
              key={service.id}
              className='flex flex-col bg-white dark:bg-dark-bg-principal custom-shadow-light dark:custom-shadow-dark items-center w-[270px] h-[257px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]'
            >
              <div
                className='w-[90px] h-[85px] bg-light-primary self-start rounded-tr-[36px] rounded-br-[36px] rounded-bl-[36px] flex items-center justify-center'
              >
                {service.icon}
              </div>
              <span className='text-2xl lg:text-3xl font-normal text-light-primary text-center'>{service.title}</span>
              <p
                className='text-base lg:text-lg font-normal text-light-secondary dark:text-white mt-5 px-4'>{service.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}