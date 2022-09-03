import {useEffect} from 'react';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import photo from '../images/photo.webp'
import Icon, {getSvg, ICON_TYPE} from "../util/Icon";

const Home = () => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'

  useEffect(() => {
  }, []);

  return (
    <section className={`info-section ${isDarkMode ? 'darkMode' : ''}`}>
      <div className={'left-section-container'}>
        <div className={'greeting'}>
          {LANGUAGES_TEXT[language].info.intro}
          <span className={'name'}> Gustavo</span>
        </div>
        <pre className={'personal-title'}>{LANGUAGES_TEXT[language].info.personalTitle}</pre>
        <div className={'message'}>
          {LANGUAGES_TEXT[language].info.message}
        </div>
        <div className={'icons-container'}>
          <Icon
            iconType={ICON_TYPE.LINKEDIN}
            link={'https://www.linkedin.com/in/luis-gustavo-gomez-fasanando-b523158b/'}
            className={'social-icons hover'}
          />
          <Icon
            iconType={ICON_TYPE.WHATSAPP}
            link={'https://wa.me/51945248578?text=Hola%20Gustavo!'}
            className={'social-icons hover'}
          />
          <Icon
            iconType={ICON_TYPE.GITHUB}
            link={'https://github.com/gustavo-gomez'}
            className={'social-icons hover'}
          />
          <Icon
            iconType={ICON_TYPE.STACKOVERFLOW}
            link={'https://stackoverflow.com/users/5759160/gustavo-g%c3%b3mez-fasanando'}
            className={'social-icons hover'}
          />
        </div>
      </div>
      <div className={'right-section-container'}>
        <img className={'photo'} src={photo} alt='profile'/>
      </div>

    </section>
  );
}

export default Home
