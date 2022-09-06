import {useEffect} from 'react';
import {currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import {useTranslation} from "react-i18next";
import {BUCKET_IMAGES} from "../util/Languages";
import {useBreakpoint} from "../hooks/useBreakpoint";

const Home = () => {
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'
  const {t} = useTranslation("global");
  const {isXS} = useBreakpoint();

  useEffect(() => {
  }, []);

  let robotImage = "robot_"
  robotImage += (isXS) ? "mobile_" : "web_"
  robotImage += isDarkMode ? "dark" : "light"

  return (
    <section
      className={`home-container ${isDarkMode ? 'darkMode' : ''}`}
    >
      <span className="home-intro">
        <span>{t('home.intro')}</span>
        <br/>
        <span>{t('home.intro2')}</span>
      </span>
      <img
        src={`${BUCKET_IMAGES}/${robotImage}.gif`}
      />
    </section>
  );
}

export default Home
