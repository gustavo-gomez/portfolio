import {useEffect} from 'react';
import './styles/App.css';
import {LANGUAGES_TEXT} from './util/Languages'
import Footer from "./Footer";
import {connect} from 'react-redux';
import {setLanguage} from "./actions/languageAction";
import ReactGA from 'react-ga';

const Portfolio = ({selectedLanguage, setLanguage}) => {

  useEffect(() => {
    ReactGA.pageview('Home')
  }, []);

  const changeLanguage = (language) => {
    ReactGA.event({
      category: 'LANGUAGE',
      action: `Change to ${language}`
    });
    setLanguage(language)
  }

  return (
    <div className="App">
      <div className={'panel'}>
      </div>
      {/*<div className={'panel right'}>*/}
      {/*</div>*/}
      <div className={'header-container'}>
        <span className={`language-option ${selectedLanguage === 'EN' ? 'selected-language' : ''}`} onClick={() => changeLanguage('EN')}>EN</span>
        <span className={`language-option ${selectedLanguage === 'ES' ? 'selected-language' : ''}`} onClick={() => changeLanguage('ES')}>ES</span>
      </div>
      <section className="info-section">
        <div className={'info-container'}>
          <div>{LANGUAGES_TEXT[selectedLanguage].info.intro}</div>
          <div className={'name'}>Gustavo Gomez</div>
          <div className={'personal-title'}>{LANGUAGES_TEXT[selectedLanguage].info.personalTitle}</div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

function mapStateToProps(state) {
  const {language} = state
  const selectedLanguage = language.selectedLanguage
  return {
    selectedLanguage
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => dispatch(setLanguage(language))
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)