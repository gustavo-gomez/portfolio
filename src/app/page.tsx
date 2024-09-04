import Image from "next/image";
import {barlowCondensed} from "@/app/fonts";
import {AboutMe} from "@/app/_sections/AboutMe";
import Icons from "@/app/components/Icons";
import {Services} from "@/app/_sections/Services";

export default function Home() {

  return (
    <div className="bg-bg-secondary-light dark:bg-bg-dark md:px-0">
      <section id='home' className="flex text-white h-screen">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 ">
          <Image
            src={'https://storage.googleapis.com/portafolio-assets/photo1.webp'}
            alt={'profile-photo'}
            className='w-[200px] md:w-[300px] h-[220px] md:h-[300px]'
            width={300}
            height={300}
            loading='eager'
          />
          <div className='flex justify-center flex-col max-w-xl gap-5 mx-4 md:mx-0 '>
            <p className={`${barlowCondensed.className} text-3xl md:text-5xl font-bold`}>Hey, soy Gustavo</p>
            <p className='text-lg md:text-xl'>
              <strong className='font-bold bg-gradient-270 bg-clip-text text-transparent'>
                {"Ingeniero de Software. "}
              </strong>
              +10 años de experiencia en el desarrollo de software, especializado en el desarrollo
              <strong className='text-[#6357F6]'>{" web y mobile"}</strong>
            </p>
            <Icons/>
          </div>
        </div>
      </section>

      <AboutMe/>
      <Services/>


    </div>
  );
}
