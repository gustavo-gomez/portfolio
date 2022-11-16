import { useTranslation } from "react-i18next"
import arrow_section from "../../images/arrow_section.svg"
import service1 from "../../images/service1.svg"
import service2 from "../../images/service2.svg"
import service3 from "../../images/service3.svg"

const Services = () => {

  const { t } = useTranslation("global")


  return (
    <section
      className="services-container"
    >
      <div
        className="section-title"
      >
        <img
          className="arrow-left"
          alt="arrow-left"
          src={arrow_section}
        />
        <span
          className="about-me-title"
        >
            {t('services.title')}
          </span>
        <img
          className="arrow-right"
          alt="arrow-right"
          src={arrow_section}
        />
      </div>

      <div
        className="services"
      >

        <div
          className="service"
        >
          <img
            src={service1}
            alt="service1"
          />
        </div>

        <div
          className="service"
        >
          <img
            src={service2}
            alt="service2"
          />
        </div>

        <div
          className="service"
        >
          <img
            src={service3}
            alt="service3"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
