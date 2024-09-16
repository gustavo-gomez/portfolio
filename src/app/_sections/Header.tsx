'use client'
import {Logo} from "@/app/assets/logo";
import Image from "next/image";
import sunSVG from "@/app/assets/sun.svg";
import moonSVG from "@/app/assets/moon.svg";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";
import {barlowCondensed, kanit} from "@/app/[locale]/fonts";
import {useTranslations} from 'next-intl';
import {GoogleAnalytics} from "@next/third-parties/google";

const navOptions = [
  {
    name: (t: any) => t('home'),
    id: 'home',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9"
          strokeWidth="2" strokeLinejoin="round"/>
        <path d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: (t: any) => t('about'),
    id: 'aboutMe',
    icon: (
      <svg width="23" height="23" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="32" cy="18.14" r="11.14" strokeWidth="5"/>
        <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"
              strokeWidth="5"/>
      </svg>
    )
  },
  {
    name: (t: any) => t('services'),
    id: 'services',
    icon: (
      <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" width="23" height="23"
           viewBox="0 0 32 32">

        <path className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
              strokeMiterlimit={10}
              d="M19,23v4c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v2"/>
        <line className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
              strokeMiterlimit={10} x1="5" y1="7" x2="19" y2="7"/>
        <line className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
              strokeMiterlimit={10} x1="5" y1="23" x2="19" y2="23"/>
        <line className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
              strokeMiterlimit={10} x1="11" y1="26" x2="13" y2="26"/>
        <polyline className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
                  strokeMiterlimit={10} points="14,12 11,15 14,18 "/>
        <polyline className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
                  strokeMiterlimit={10} points="24,12 27,15 24,18 "/>
        <line className="st0" fill='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'
              strokeMiterlimit={10} x1="21" y1="11" x2="17" y2="19"/>
      </svg>
    )
  },
  {
    name: (t: any) => t('projects'),
    id: 'projects',
    icon: (
      <svg width="23" height="23" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 10.32C22 9.25914 21.5786 8.24172 20.8284 7.49158C20.0783 6.74143 19.0609 6.32001 18 6.32001H6C4.93913 6.32001 3.92178 6.74143 3.17163 7.49158C2.42149 8.24172 2 9.25914 2 10.32"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 10.32C15.91 16.32 8.09 16.32 2 10.32" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path
          d="M21.9999 10.32L20.9999 18.32C20.8507 19.4088 20.3192 20.4089 19.5002 21.1417C18.6813 21.8745 17.6285 22.2922 16.5299 22.32H7.38989C6.29132 22.2922 5.23847 21.8745 4.41956 21.1417C3.60064 20.4089 3.0691 19.4088 2.91992 18.32L1.91992 10.32"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
          d="M8.00977 6.03998C8.00977 4.97911 8.43119 3.96169 9.18134 3.21155C9.93148 2.4614 10.9489 2.03998 12.0098 2.03998C13.0706 2.03998 14.0881 2.4614 14.8382 3.21155C15.5883 3.96169 16.0098 4.97911 16.0098 6.03998"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
]

const Header = () => {
  const {theme, setTheme} = useTheme()
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('header');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (3.5 * 16); // 5rem in pixels
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  const onScroll = () => {
    const scrollPosition = window.scrollY;
    let currentSection = '';
    const headerHeight = 8 * 16; // 4rem in pixels
    navOptions.forEach(option => {
      const element = document.getElementById(option.id);
      if (element) {
        const offsetTop = element.offsetTop - headerHeight;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = option.id;
        }
      }
    });
    setActiveSection(currentSection);
  }
  if (!mounted) return null;

  const icon = theme === 'dark' ? sunSVG : moonSVG;
  return (
    <header
      className="w-full h-14 flex items-center sm:justify-center px-5 fixed top-0 z-10 bg-light-bg-principal dark:bg-dark-bg-principal text-txt-secondary dark:text-white shadow-md">
      <div className="justify-between flex w-full sm:w-[90%] max-w-6xl">
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-PRCLXC250T"/>}
        <Logo/>
        <div className="flex">
          <nav
            className="flex p-1 md:p-0 justify-around md:justify-between items-center bottom-0 fixed md:static left-[0%] w-full bg-dark-bg-principal md:bg-inherit opacity-90 shadow-lg md:shadow-none shadow-[#212733]">
            {
              navOptions.map((option, index) => (
                <span
                  key={index}
                  onClick={() => handleScroll(option.id)}
                  className={`flex flex-col items-center text-base leading-5 text-center mr-0 md:mr-10 cursor-pointer ${activeSection === option.id ? 'text-light-primary font-bold' : 'text-white md:text-gray-800 md:dark:text-white'}`}
                >
                  <span
                    className={`md:hidden ${activeSection === option.id ? '[&>svg]:stroke-light-primary font-bold' : ' [&>svg]:stroke-white'}`}
                  >
                    {option?.icon}
                  </span>
                  <span
                    className={`text-sm md:text-lg ${barlowCondensed.className} md:${kanit.className}`}>{option.name(t)}
                  </span>
                </span>
              ))
            }
          </nav>
          <div className='flex cursor-pointer'>
            {
              <Image
                src={icon}
                alt={'theme-icon'}
                className='mx-1 w-[25px] h-auto'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} loading='eager'/>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
