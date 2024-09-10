import Title from "@/app/components/Title";
import {useTranslations} from "next-intl";

export const Services = () => {
  const t = useTranslations('services');
  return (
    <section id='services' className="text-white section bg-bg-principal-light dark:bg-bg-dark">
      <Title title={t('title')}/>
    </section>
  )
}