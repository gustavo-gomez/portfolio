'use client'


export const AboutMe = () => {

  return (
    <section id={'aboutMe'} className={'flex mx-20 flex-col sm:flex-row'}>
      <div className='flex flex-col flex-1 text-lg sm:text-xl gap-10 pr-10 justify-center'>
        <p>
          Apasionado por la tecnología, y poder transformar ideas en software que brinde solución a un problema. Me
          gustan los retos y me considero una persona autodidacta que le gusta aprender y explorar nuevas cosas.
        </p>
        <p>
          Soy Ingeniero de Software, con más de 8 años de experiencia participando en el desarrollo de soluciones de
          software para diversas empresas en diferentes rubros
        </p>
      </div>
      <div className='flex justify-center flex-1'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14 justify-center">
          <div className="flex flex-col justify-center pl-8 rounded-xl bg-gradient-270 w-40 h-32">
            <span className="text-3xl"> 6+</span>
            <span className="text-xl">Proyectos</span>
          </div>
          <div className="flex flex-col justify-center pl-8 rounded-xl bg-gradient-180 w-40 h-32">
            <span className="text-3xl"> 12+</span>
            <span className="text-xl">Clientes</span>
          </div>
          <div className="flex flex-col justify-center pl-8 rounded-xl bg-gradient-180 w-40 h-32">
            <span className="text-3xl"> 12+</span>
            <span className="text-xl">Clientes</span>
          </div>
          <div className="flex flex-col justify-center pl-8 rounded-xl bg-gradient-270 w-40 h-32">
            <span className="text-3xl"> 6+</span>
            <span className="text-xl">Proyectos</span>
          </div>
        </div>
      </div>
    </section>
  )
}