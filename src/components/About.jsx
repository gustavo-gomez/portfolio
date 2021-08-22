import {useEffect} from 'react';
import '../scss/components/about.scss';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import about from '../images/about_me.svg'
import Header from "./Header";

const About = () => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'

  useEffect(() => {
  }, []);

  return (
    <>
      <Header/>
      <div className={`about-section`}>
        <div className={`about-body ${isDarkMode ? 'darkMode' : ''}`}>
          <div className={'description-container'}>
            <h1>{LANGUAGES_TEXT[language].about.title}</h1>
            <pre>{LANGUAGES_TEXT[language].about.description}</pre>
          </div>
          <div className={'icons-container'}>
            <img src={about} alt={"about"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
