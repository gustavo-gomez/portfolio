'use client'
import Image from "next/image";

const Icons = () => {
  return (
    <div className='flex gap-4 '>
      <Image
        src='/linkedin.svg'
        alt='linkedin'
        onClick={() => window.open('https://www.linkedin.com/in/gustavo-gomezf/')}
        className='cursor-pointer hover:scale-110'
        width={35}
        height={35}
      />
      <Image
        src='/github.svg'
        alt='github'
        onClick={() => window.open('https://github.com/gustavo-gomez')}
        className='cursor-pointer hover:scale-110'
        width={35}
        height={35}
      />
    </div>
  )
}

export default Icons