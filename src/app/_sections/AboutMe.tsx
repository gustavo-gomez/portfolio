import Title from "@/app/components/Title";

export const AboutMe = () => {

  return (
    <section id={'aboutMe'}
             className={'flex flex-col section bg-bg-secondary-light dark:bg-bg-dark2'}>
      <Title title={'Sobre mi'}/>
      <div className='flex mt-6 md:mt-[20vh] px-4 md:px-20 flex-col md:flex-row '>
        <div className='flex flex-col flex-1 text-base sm:text-xl gap-10 pr-0 md:pr-10 justify-center'>
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
          <div className="grid grid-cols-2 gap-x-10 gap-y-14 justify-center mt-10 md:mt-0">
            <div className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-270 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">6+</span>
              <span className="text-xl">Proyectos</span>
            </div>
            <div className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-180 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">12+</span>
              <span className="text-xl">Clientes</span>
            </div>
            <div className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-180 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">12+</span>
              <span className="text-xl">Clientes</span>
            </div>
            <div className="flex flex-col justify-center pl-4 md:pl-8 rounded-xl bg-gradient-270 w-32 md:w-40 h-28 md:h-32">
              <span className="text-2xl md:text-3xl">6+</span>
              <span className="text-xl">Proyectos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}