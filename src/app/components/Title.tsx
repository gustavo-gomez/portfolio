import {barlowCondensed} from "@/app/fonts";

const Title = ({title}: { title: string }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
           className='fill-primary-light dark:fill-primary-dark'>
        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
      </svg>
      <span
        className={`font-light text-4xl md:text-5xl gradient-title mx-2 ${barlowCondensed.className}`}
      >
        {title}
      </span>
      {/*<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" strokeWidth='3'*/}
      {/*     className='rotate-180 fill-primary-light dark:fill-primary-dark'>*/}
      {/*  <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>*/}
      {/*</svg>*/}
    </div>
  )
}

export default Title