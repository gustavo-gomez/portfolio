import {useEffect} from 'react';
import './styles/App.css';
import {LANGUAGES_TEXT} from './util/Languages'
import Footer from "./Footer";
import {selectedLanguage, changeLanguage, currentDarkMode} from './slices/generalSettingsSlice'
import ReactGA from 'react-ga';
import { useSelector, useDispatch } from 'react-redux';

const Portfolio = () => {
  const language = useSelector(selectedLanguage);
  const isDarkMode = useSelector(currentDarkMode);
  const dispatch = useDispatch();

console.log('PORTFOLIO isDarkMode: ', isDarkMode)

  useEffect(() => {
    ReactGA.pageview('Home')
  }, []);

  const onChangeLanguage = (language) => {
    ReactGA.event({
      category: 'LANGUAGE',
      action: `Change to ${language}`
    });
    dispatch(changeLanguage(language))
  }

  return (
    <div className="App">
      <div className={'panel'}>
      </div>
      {/*<div className={'panel right'}>*/}
      {/*</div>*/}
      <div className={'header-container'}>
        <span className={`language-option ${language === 'EN' ? 'selected-language' : ''}`} onClick={() => onChangeLanguage('EN')}>EN</span>
        <span className={`language-option ${language === 'ES' ? 'selected-language' : ''}`} onClick={() => onChangeLanguage('ES')}>ES</span>
      </div>
      <section className="info-section">
        <div className={'info-container'}>
          <div>{LANGUAGES_TEXT[language].info.intro}</div>
          <div className={'name'}>Gustavo Gomez</div>
          <div className={'personal-title'}>{LANGUAGES_TEXT[language].info.personalTitle}</div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Portfolio
