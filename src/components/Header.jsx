import '../scss/components/header.scss';
import {selectedLanguage, changeLanguage, currentDarkMode} from '../slices/generalSettingsSlice'
import ReactGA from 'react-ga';
import {useSelector, useDispatch} from 'react-redux';
import {LANGUAGES_TEXT} from "../util/Languages";

const Header = ({currentSection, setCurrentSection}) => {
  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'
  const dispatch = useDispatch();

  const onChangeLanguage = (language) => {
    ReactGA.event({
      category: 'LANGUAGE',
      action: `Change to ${language}`
    });
    dispatch(changeLanguage(language))
  }

  return (
    <div className={`header-container ${isDarkMode ? 'darkMode' : ''}`}>
      {/*<div className={'sections-container'}>*/}
      {/*  {*/}
      {/*    LANGUAGES_TEXT[language].sections.map(section => {*/}
      {/*      return (*/}
      {/*        <span*/}
      {/*          onClick={() => setCurrentSection(section.id)}*/}
      {/*          className={`section-title ${currentSection === section.id ? 'selected-section' : ''} `}>*/}
      {/*          {section.name}*/}
      {/*        </span>*/}
      {/*      )*/}
      {/*    })*/}
      {/*  }*/}
      {/*</div>*/}
      <div className={'language-container'}>
        <span
          className={`language-option ${language === 'EN' ? 'selected-language' : ''}`}
          onClick={() => onChangeLanguage('EN')}>
        EN
      </span>
        <span
          className={`language-option ${language === 'ES' ? 'selected-language' : ''}`}
          onClick={() => onChangeLanguage('ES')}>
        ES
      </span>
      </div>

    </div>
  );
}

export default Header
