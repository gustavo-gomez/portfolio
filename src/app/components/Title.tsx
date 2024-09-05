import Image from "next/image";
import arrow from "@/app/assets/arrow_section.svg";

const Title = ({title}: { title: string }) => {
  return (
    <div className="flex w-full justify-center">
      <Image src={arrow} alt={'arrow-left'} className='rotate-180 h-auto w-[14px] md:w-[17px]' width={17} />
      <span
        className='font-light text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-l from-[#6357F6] to-[#E6606C] mx-2'
      >
        {title}
      </span>
      <Image src={arrow} alt={'arrow-right'} className='h-auto w-[14px] md:w-[17px]' width={17}/>
    </div>
  )
}

export default Title