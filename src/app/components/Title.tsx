import Image from "next/image";
import arrow from "@/app/assets/arrow_section.svg";

const Title = ({title}: { title: string }) => {
  return (
    <div className="flex w-full justify-center pt-6 ">
      <Image src={arrow} alt={'arrow-left'} className='rotate-180' width={17}/>
      <span
        className='font-light text-5xl bg-clip-text text-transparent bg-gradient-to-l from-[#6357F6] to-[#E6606C] mx-2'
      >
        {title}
      </span>
      <Image src={arrow} alt={'arrow-right'} width={17}/>
    </div>
  )
}

export default Title