import '../scss/components/header.scss';
import {
  selectedLanguage,
  // changeLanguage,
  currentDarkMode,
  changeDarkMode,
} from '../slices/generalSettingsSlice'
// import ReactGA from 'react-ga';
import {useSelector, useDispatch} from 'react-redux';
import {LANGUAGES_TEXT} from "../util/Languages";
import Icon, {getSvg, ICON_TYPE} from "../util/Icon";
import {useHistory, useLocation} from "react-router-dom";
import MediaQuery from 'react-responsive'
import {useState} from "react";

const MobileHeader = ({language, isDarkMode, location, onClickNav, isMenuOpen, setIsMenuOpen}) => {
  return (
    <div className={`header-container-mobile ${isDarkMode ? 'darkMode' : ''}`}>
      <span
        id={'menu'}
        className={'menu-mobile-icon'}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        {getSvg(ICON_TYPE.MENU)}
      </span>
      <div className={`menu-options ${isMenuOpen ? 'opened' : ''}`}>
        {
          LANGUAGES_TEXT[language].sections.map(section => {
            return (
              <button
                id={section.id}
                className={`menu-item ${section.id === location.pathname ? 'active' : ''}`}
                onClick={() => onClickNav(section.id)}
              >
                {getSvg(section.icon, "menu-icon")}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}
const WebHeader = ({language, isDarkMode, onChangeLightMode, onClickNav, location}) => {
  return (
    <div className={`header-container ${isDarkMode ? 'darkMode' : ''}`}>
      <div className={'sections-container'}>
        {
          LANGUAGES_TEXT[language].sections.map(section => {
            return (
              <span
                key={section.id}
                onClick={() => onClickNav(section.id)}
                className={`section-title ${section.id === location.pathname ? 'selected-section' : ''}`}
              >
                {section.name}
              </span>
            )
          })
        }
      </div>
      <div className={'settings-container'}>
        <div className={'dark-mode-switch'}>
          <Icon
            iconType={isDarkMode ? ICON_TYPE.SUN : ICON_TYPE.MOON}
            onClick={onChangeLightMode}
            className={`light-dark-icon ${isDarkMode ? 'yellow' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

const Header = () => {

  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const isDarkMode = themeColor === 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const onChangeLanguage = (language) => {
  //   ReactGA.event({
  //     category: 'LANGUAGE',
  //     action: `Change to ${language}`
  //   });
  //   dispatch(changeLanguage(language))
  // }

  const onChangeLightMode = () => {
    dispatch(changeDarkMode(isDarkMode ? 'light' : 'dark'))
  }

  const onClickNav = (sectionId) => {
    history.push(sectionId);
  }

  return (
    <>
      <MediaQuery minWidth={850}>
        <WebHeader
          language={language}
          location={location}
          onChangeLightMode={onChangeLightMode}
          onClickNav={onClickNav}
          isDarkMode={isDarkMode}
        />
      </MediaQuery>
      <MediaQuery maxWidth={849}>
        <MobileHeader
          language={language}
          location={location}
          onClickNav={onClickNav}
          isDarkMode={isDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </MediaQuery>
    </>

  );
}

export default Header
