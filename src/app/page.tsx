'use client'
import Image from "next/image";
import arrow from "@/app/assets/arrow_section.svg";

export default function Home() {

  return (
    <main className="bg-bg-primary text-txt-primary dark:bg-bg-dark dark:text-txt-primary-dark">
      <section id='home' className="text-white pt-24 h-screen ">
        <div className="flex flex-col sm:flex-row w-full justify-center pt-5 ">
          <Image
            src={'https://storage.googleapis.com/portafolio-assets/photo1.webp'}
            alt={'profile-photo'}
            width={300}
            height={300}
          />
          <div className='flex justify-center flex-col max-w-xl container gap-5 text-gray-800 dark:text-gray-300 '>
            <p className='text-3xl sm:text-5xl font-bold tracking-tight'>Hey, soy Gustavo</p>
            <p className='text-xl '>
              <strong className='font-bold bg-gradient-custom bg-clip-text text-transparent'>
                {"Ingeniero de Software. "}
              </strong>
              +10 años de experiencia en el desarrollo de software, especializado en el desarrollo
              <strong className='bg-gradient-custom bg-clip-text text-transparent'>{" web y mobile"}</strong>
            </p>
          </div>
        </div>
      </section>

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

    </main>
  );
}
