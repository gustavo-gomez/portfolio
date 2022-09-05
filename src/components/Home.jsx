import {useEffect} from 'react';
import {currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import {useTranslation} from "react-i18next";

// https://storage.googleapis.com/gustavogomez-bucket/shapes_services_light.gif
const Home = () => {
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
        src={"https://storage.googleapis.com/gustavogomez-bucket/robot_web_dark.gif"}
      />
    </section>
  );
}

export default Home
