'use client'
import {Logo} from "@/app/assets/logo";
import Image from "next/image";
import sunSVG from "@/app/assets/sun.svg";
import moonSVG from "@/app/assets/moon.svg";
import {useTheme} from "next-themes";

const navOptions = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Servicios',
    link: '/services'
  },
  {
    name: 'Portfolio',
    link: '/portfolio'
  },
  {
    name: 'Blog',
    link: '/blog'
  },
]

const Header = () => {
  const {theme, setTheme} = useTheme()

  return (
    <div
      className="w-full h-20 flex items-center justify-center px-5 fixed top-0 z-100 bg-white dark:bg-[#12203D] text-black dark:text-white">
      <div className="justify-between flex w-[90%]">
        <Logo/>
        <nav className="flex justify-between items-center">
          {
            navOptions.map((option, index) => (
              <a key={index} href={option.link} className='font-bold text-base leading-5 text-center mr-10 cursor-pointer'>{option.name}</a>
            ))
          }
        </nav>
        <div className='flex border-2 rounded-xl border-[#6b611f] cursor-pointer'>
          {
            theme === 'dark' ?
              <Image src={sunSVG} alt={'sun'} width={25} className='mx-1' onClick={() => setTheme('light')}/>
              : <Image src={moonSVG} alt={'moon'} width={25} className='mx-1' onClick={() => setTheme('dark')}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Header