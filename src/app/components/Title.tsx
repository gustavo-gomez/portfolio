import {barlowCondensed} from "@/app/[locale]/fonts";

const Title = ({title}: { title: string }) => {
  return (
    <div className="flex justify-center items-center bg-light-secondary h-10 md:h-16 px-3 rounded-b-[20px] ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
           className='fill-light-primary dark:fill-primary-dark w-[20px] lg2:w-[30px] h-[20px] lg2:h-[30px]'>
        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
      </svg>
      <span
        className={`font-normal tracking-[0.09em] text-white text-3xl lg2:text-5xl gradient-title mx-2 ${barlowCondensed.className}`}
      >
        {title}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"
           className='rotate-180 fill-light-primary dark:fill-primary-dark w-[20px] lg2:w-[30px] h-[20px] lg2:h-[30px]'>
        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
      </svg>
    </div>
  )
}

export default Title