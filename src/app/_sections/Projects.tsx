import Title from "@/app/components/Title";
import {useTranslations} from "next-intl";

export const Projects = () => {
  const t = useTranslations('projects');
  return (
    <section id='projects' className="text-white section bg-bg-secondary-light dark:bg-bg-dark2">
      <Title title={t('title')}/>
    </section>
  )
}