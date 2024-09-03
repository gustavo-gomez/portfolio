'use client'
import Image from "next/image";
import arrow from "@/app/assets/arrow_section.svg";
import {barlowCondensed} from "@/app/fonts";
import {AboutMe} from "@/app/_sections/AboutMe";

export default function Home() {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/gustavo-gomezf/');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/gustavo-gomez');
  };
  return (
    <div className="bg-bg-primary dark:bg-bg-dark text-txt-primary dark:text-txt-primary-dark px-4 sm:px-0">
      <section id='home' className=" text-white pt-24 h-screen ">
        <div className="flex flex-col sm:flex-row w-full justify-center pt-5 items-center gap-6">
          <Image
            src={'https://storage.googleapis.com/portafolio-assets/photo1.webp'}
            alt={'profile-photo'}
            className='w-[200px] sm:w-[300px] h-[220px] sm:h-[300px]'
            width={300}
            height={300}
            loading='eager'
          />
          <div className='flex justify-center flex-col max-w-xl gap-5 text-gray-800 dark:text-gray-300 mx-4 sm:mx-0 '>
            <p className={`${barlowCondensed.className} text-3xl sm:text-5xl font-bold`}>Hey, soy Gustavo</p>
            <p className='text-lg sm:text-xl'>
              <strong className='font-bold bg-gradient-270 bg-clip-text text-transparent'>
                {"Ingeniero de Software. "}
              </strong>
              +10 años de experiencia en el desarrollo de software, especializado en el desarrollo
              <strong className='text-[#6357F6]'>{" web y mobile"}</strong>
            </p>
            <div className='flex gap-4 '>
              <Image
                src='/linkedin.svg'
                alt='linkedin'
                onClick={handleLinkedInClick}
                className='cursor-pointer hover:scale-110'
                width={35}
                height={35}
              />
              <Image
                src='/github.svg'
                alt='github'
                onClick={handleGitHubClick}
                className='cursor-pointer hover:scale-110'
                width={35}
                height={35}
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMe/>
      <section id='services' className="text-white pt-24 h-screen">
        <div className="flex w-full justify-center pt-5 ">
          <Image src={arrow} alt={'arrow-left'} className='rotate-180' width={20}/>
          <span
            className='font-light text-[56px] bg-clip-text text-transparent bg-gradient-to-l from-[#6357F6] to-[#E6606C] mx-2'
          >
            Servicios
          </span>
          <Image src={arrow} alt={'arrow-right'} width={20}/>
        </div>
      </section>

    </div>
  );
}
