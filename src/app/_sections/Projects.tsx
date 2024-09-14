import Title from "@/app/components/Title";
import {useTranslations} from "next-intl";

export const Projects = () => {
  const t = useTranslations('projects');
  return (
    <section id='projects' className="text-white section bg-light-bg-secondary dark:bg-bg-dark2">
      <Title title={t('title')}/>
    </section>
  )
}