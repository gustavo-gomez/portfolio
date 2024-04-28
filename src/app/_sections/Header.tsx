import {Logo} from "@/app/assets/logo";

const Header = () => {

  return (
    <div className="w-full h-20 flex items-center justify-center px-5 fixed top-0 z-100 bg-white text-black">
      <div className="justify-between flex w-[90%]">
        <Logo/>
        <nav className="flex justify-between items-center">
          <a className='font-bold text-base leading-5 text-center mr-10 cursor-pointer ' href="/">Home</a>
          <a className='font-bold text-base leading-5 text-center mr-10 cursor-pointer' href="/services">Servicios</a>
          <a className='font-bold text-base leading-5 text-center mr-10 cursor-pointer' href="/portfolio">Portfolio</a>
          <a className='font-bold text-base leading-5 text-center mr-10 cursor-pointer' href="/blog">Blog</a>
          {/*      <li>*/}
          {/*        <a href="/portfolio">Portfolio</a>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <a href="/blog">Blog</a>*/}
          {/*      </li>*/}
        </nav>
        {/*  <div className="header__toggle">*/}
        {/*    <i className="bx bx-menu"></i>*/}
        {/*  </div>*/}
      </div>
    </div>
  )

}

export default Header