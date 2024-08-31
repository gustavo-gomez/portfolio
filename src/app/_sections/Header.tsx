'use client'
import {Logo} from "@/app/assets/logo";
import Image from "next/image";
import sunSVG from "@/app/assets/sun.svg";
import moonSVG from "@/app/assets/moon.svg";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

const navOptions = [
  {
    name: 'Home',
    id: 'home'
  },
  {
    name: 'Servicios',
    id: 'services'
  },
  // {
  //   name: 'Portfolio',
  //   link: '/portfolio'
  // },
]

const Header = () => {
  const {theme, setTheme} = useTheme()
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);


  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  const onScroll = () => {
    const scrollPosition = window.scrollY;
    let currentSection = '';
    navOptions.forEach(option => {
      const element = document.getElementById(option.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = option.id;
        }
      }
    });
    setActiveSection(currentSection);
  }

  return (
    <header
      className="w-full h-20 flex items-center sm:justify-center px-1 sm:px-5 fixed top-0 z-10 bg-bg-primary dark:bg-bg-dark text-txt-primary dark:text-txt-primary-dark shadow-md">
      <div className="justify-between flex w-full sm:w-[90%]">
        <Logo/>
        <div className="flex">
          <nav className="flex justify-between items-center">
            {
              navOptions.map((option, index) => (
                <span
                  key={index}
                  onClick={() => handleScroll(option.id)}
                  className={` text-base leading-5 text-center mr-10 cursor-pointer ${activeSection === option.id ? 'text-[#1B75BC] font-bold' : ''}`}
                >
                   {option.name}
                </span>
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
    </header>
  )
}

export default Header