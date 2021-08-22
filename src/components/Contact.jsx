import {useEffect} from 'react';
import '../scss/components/contact.scss';
import {LANGUAGES_TEXT} from '../util/Languages'
import {selectedLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import {useSelector} from 'react-redux';
import Icon, {ICON_TYPE} from "../util/Icon";
import Header from "./Header";
import contact from '../images/contact2.jpeg'

const Contact = () => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'

  useEffect(() => {
    document.body.style.backgroundImage = `url(${contact})`
    document.body.classList.add(`contact-background`)

    return () => {
      document.body.style.backgroundImage = `none`
      document.body.classList.remove('contact-background')

    }
  }, []);

  if (isDarkMode)
    document.body.classList.add('dark-mode-background')
  else
    document.body.classList.remove('dark-mode-background')

  return (
    <>
      <Header/>
      <div className={`contact-section`}>
        <div className={`contact-body ${isDarkMode ? 'darkMode' : ''}`}>
          <div className={'icons-container'}>
            <Icon
              iconType={ICON_TYPE.LINKEDIN}
              link={'https://www.linkedin.com/in/luis-gustavo-gomez-fasanando-b523158b/'}
              className={'contact-icon'}
            />
            <Icon
              iconType={ICON_TYPE.WHATSAPP}
              link={'https://wa.me/51945248578?text=Hola%20Gustavo!'}
              className={'contact-icon'}
            />
            <Icon
              iconType={ICON_TYPE.EMAIL}
              link={`mailto:contacto@gustavogomez.dev?subject=${LANGUAGES_TEXT[language].contact.mailSubject}`}
              className={'contact-icon'}
            />
          </div>
          <div className={'description-container'}>
            <h1>{LANGUAGES_TEXT[language].contact.title}</h1>
            <p>{LANGUAGES_TEXT[language].contact.subTitle}</p>
            <p>{LANGUAGES_TEXT[language].contact.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact