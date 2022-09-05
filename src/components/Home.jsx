import {useEffect} from 'react';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import robot_web from "../images/robot_web.gif"
import photo from '../images/photo.webp'
import Icon, {getSvg, ICON_TYPE} from "../util/Icon";
import {useTranslation, initReactI18next} from "react-i18next";


const Home = () => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'
  const {t} = useTranslation("global");

  useEffect(() => {
  }, []);

  return (
    <section
      className={`home-container ${isDarkMode ? 'darkMode' : ''}`}
      // style={{
      //   backgroundImage: `url(${robot_web})`
      // }}
    >
      <span className="home-intro">
        <span>{t('home.intro')}</span>
        <br/>
        <span>{t('home.intro2')}</span>
      </span>
      <img
        src={robot_web}
      />
    </section>
  );
}

export default Home
