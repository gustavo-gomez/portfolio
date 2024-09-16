import Title from "@/app/components/Title";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {barlowCondensed} from "@/app/[locale]/fonts";

export const Projects = () => {
  const t = useTranslations('projects');

  const projects = [
    {
      id: 'agn',
      title: t('agn.title'),
      description: t('agn.description'),
      image: 'https://storage.googleapis.com/portafolio-assets/agn_mobile.webp',
    },
    {
      id: 'lexsport',
      title: t('lexsport.title'),
      description: t('lexsport.description'),
      image: 'https://storage.googleapis.com/portafolio-assets/lex_mobile.webp',
    }
  ]

  return (
    <section id='projects' className="text-white section bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <Title title={t('title')} changeStyle/>
      <div
        className='flex flex-col flex-wrap lg:flex-row  gap-12 mt-14 mb-20 mx-7 justify-center items-center lg:items-baseline '>
        {
          projects.map(project => (
            <div key={project.id}
                 className='flex flex-col w-full lg:basis-1/2 rounded-2xl shadow-2xl dark:bg-white max-w-[500px] lg:max-w-[550px] '>
              <div className='w-full h-96 relative'>
                <Image src={project.image} alt={project.id} className='w-full h-auto' fill objectFit='cover'/>
              </div>
              <div className='flex flex-col px-5 mb-5'>
                <h3
                  className={'text-2xl font-medium text-light-primary ' + barlowCondensed.className}>{project.title}</h3>
                <p className='text-base text-light-secondary mt-5'>{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}