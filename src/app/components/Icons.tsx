'use client'
import {sendGAEvent} from '@next/third-parties/google'
import {useTranslations} from "next-intl";

const Icons = () => {
  const t = useTranslations('about');
  return (
    <div className='w-full flex gap-4 mb-4 lg:mb-10 lg:justify-center pl-6 lg:pl-0 lg:mr-0 items-center'>
      {t('moreAboutMe')}
      <svg width="35" height="35" viewBox="0 0 48 48" fill="none"
           onClick={() => {
             sendGAEvent('event', 'linkedin')
             window.open('https://www.linkedin.com/in/gustavo-gomezf/')
           }}
           className='cursor-pointer hover:scale-110'
           xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" className='fill-light-primary '/>
        <g clipPath="url(#clip0_226_3750)">
          <path d="M19.85 20.6899H16.29V32.1499H19.85V20.6899Z" fill="white"/>
          <path
            d="M18.07 19.13C16.92 19.13 16 18.2 16 17.06C16 15.92 16.92 15 18.07 15C19.22 15 20.13 15.92 20.13 17.06C20.13 18.2 19.21 19.12 18.07 19.12V19.13Z"
            fill="white"/>
          <path
            d="M33.1801 32.14H29.6201V26.57C29.6201 25.24 29.6001 23.53 27.7701 23.53C25.9401 23.53 25.6401 24.98 25.6401 26.47V32.13H22.0901V20.69H25.5001V22.26H25.5501C26.0201 21.36 27.1901 20.41 28.9201 20.41C32.5201 20.41 33.1901 22.78 33.1901 25.87V32.16L33.1801 32.14Z"
            fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_226_3750">
            <rect width="17.18" height="17.14" fill="white" transform="translate(16 15)"/>
          </clipPath>
        </defs>
      </svg>

      <svg width="35" height="35" viewBox="0 0 48 48"
           onClick={() => {
             sendGAEvent('event', 'github')
             window.open('https://github.com/gustavo-gomez')
           }}
           fill="none" className='cursor-pointer hover:scale-110' xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_226_3756)">
          <path
            d="M24 0C10.8179 0 0 10.8179 0 24C0 35.2489 7.89331 45.4673 18.375 48V40.0598C17.3364 40.2872 16.3806 40.2938 15.3234 39.9822C13.905 39.5636 12.7526 38.6188 11.8971 37.1781C11.3518 36.2582 10.3854 35.2606 9.3772 35.3339L9.13 32.5323C11.3101 32.3456 13.196 33.8606 14.3156 35.7415C14.8129 36.5779 15.3853 37.0682 16.1199 37.285C16.83 37.4941 17.5924 37.3938 18.4808 37.08C18.7039 35.3013 19.5187 34.6355 20.1343 33.698V33.6965C13.8831 32.7642 11.3917 29.4478 10.403 26.8301C9.09265 23.3544 9.79578 19.0122 12.1128 16.2682C12.1578 16.2147 12.2391 16.0748 12.2076 15.9771C11.1453 12.7679 12.4398 10.1133 12.4874 9.83167C13.7135 10.1942 13.9127 9.46692 17.8132 11.8367L18.4874 12.2417C18.7694 12.4098 18.6808 12.3138 18.9628 12.2926C20.5913 11.8502 22.3081 11.606 23.9996 11.584C25.704 11.606 27.4098 11.8502 29.1057 12.3105L29.324 12.3325C29.3049 12.3296 29.3833 12.3186 29.5148 12.2402C34.3872 9.28894 34.2122 10.2535 35.5188 9.82874C35.566 10.1107 36.8434 12.8086 35.7924 15.9771C35.6506 16.4136 40.0166 20.4115 37.5967 26.829C36.6079 29.4478 34.1169 32.7642 27.8657 33.6965V33.698C28.667 34.9193 29.6298 35.569 29.6246 38.0885V48C40.1067 45.4673 47.9996 35.2489 47.9996 24C48 10.8179 37.1821 0 24 0V0Z"
            className='fill-light-primary '/>
        </g>
        <defs>
          <clipPath id="clip0_226_3756">
            <rect width="48" height="48" fill="white"/>
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}

export default Icons