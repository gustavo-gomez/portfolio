import {changeDarkMode, currentDarkMode, selectedLanguage,} from '../slices/generalSettingsSlice'
// import ReactGA from 'react-ga';
import {useDispatch, useSelector} from 'react-redux';
import {LANGUAGES_TEXT} from "../util/Languages";
import Icon, {ICON_TYPE} from "../util/Icon";
import {useLocation, useNavigate} from "react-router-dom";
import Logo from "../common/logo";

const Header = () => {

  const language = useSelector(selectedLanguage);
  const themeColor = useSelector(currentDarkMode);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isDarkMode = themeColor === 'dark'

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
    navigate(sectionId);
  }

  return (
    <>
      <div className={`header ${isDarkMode ? 'darkMode' : ''}`}>
        <div className='header-body'>
          <Logo/>
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
            <div className={'dark-mode-switch'}>
              <Icon
                iconType={isDarkMode ? ICON_TYPE.SUN : ICON_TYPE.MOON}
                onClick={onChangeLightMode}
                className={`light-dark-icon ${isDarkMode ? 'yellow' : ''}`}
              />
            </div>
            <input id="menu-toggle" type="checkbox"/>
            <label className='hamburger-menu' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
          </div>
        </div>
      </div>
    </>

  );
}

export default Header
