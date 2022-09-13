import {useEffect} from 'react'
import {currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux'
import {useTranslation} from "react-i18next"
import {BUCKET_IMAGES} from "../util/Languages"
import {useBreakpoint} from "../hooks/useBreakpoint"
import arrow_section from "../images/arrow_section.svg"
import about_me_photo from "../images/about-me-photo.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Home = () => {
  const themeColor = useSelector(currentDarkMode)
  const isDarkMode = themeColor === 'dark'
  const {t} = useTranslation("global")
  const {isXS} = useBreakpoint()

  useEffect(() => {
  }, [])

  let robotImage = "robot_"
  robotImage += (isXS) ? "mobile_" : "web_"
  robotImage += isDarkMode ? "dark" : "light"

  return (
    <>
      <section
        className={"home-container"}
      >
      <span className="home-intro">
        <span>{t('home.intro')}</span>
        <br/>
        <span>{t('home.intro2')}</span>
      </span>
        <img
          src={`${BUCKET_IMAGES}/${robotImage}.gif`}
          alt="robot"
        />
      </section>

      <section
        className={"about-me-container"}
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
            {t('aboutMe.title')}
          </span>
          <img
            className="arrow-right"
            alt="arrow-right"
            src={arrow_section}
          />
        </div>

        <div className="about-me-row1">
          <div className="about-me-photo">
            <img
              src={about_me_photo}
              alt="about-me"
            />
          </div>
          <div className="about-me-info">
            <div className="about-social-icons">
              <a
                href="https://www.linkedin.com/in/gustavo-gomezf/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/gustavo-gomez"
                target="_blank"
              >
                <img
                  src={github}
                  alt="github"
                />
              </a>
            </div>
            <div
              className="about-me-description"
            >
              {t('aboutMe.description')}
            </div>
          </div>
        </div>

        <div className="about-me-row2">
          <div
            className="about-me-education"
          >

            <div
              className="about-me-education-title"
            >
              {t('aboutMe.education-title')}
            </div>
            <div
              className="about-me-education-description"
            >
              {t('aboutMe.education')}
            </div>
          </div>

          <div
            className="about-me-kpis"
          >
            <div
              className="box1"
            >
              <span className="about-me-number"> {t('aboutMe.projectsNum')}</span>
              <span className="about-me-text"> {t('aboutMe.projects')}</span>
            </div>
            <div
              className="box2"
            >
              <span className="about-me-number"> {t('aboutMe.clientsNum')}</span>
              <span className="about-me-text"> {t('aboutMe.clients')}</span>
            </div>
            {/*TODO: por definir*/}
            <div
              className="box3"
            >
              <span className="about-me-number"> {t('aboutMe.clientsNum')}</span>
              <span className="about-me-text"> {t('aboutMe.clients')}</span>
            </div>
            <div
              className="box4"
            >
              <span className="about-me-number"> {t('aboutMe.projectsNum')}</span>
              <span className="about-me-text"> {t('aboutMe.projects')}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
