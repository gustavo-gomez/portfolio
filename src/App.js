import {useState} from 'react'
import './App.css';
import Icon, {ICON_TYPE} from './Icon';
import {LANGUAGES_TEXT} from './Languages'

const App = () => {

  const [language, setLanguage] = useState('EN')
console.log(LANGUAGES_TEXT[language])
  return (
    <div className="App">
      <div className={'panel'}>
      </div>
      <section className="info-section">
        <div className={'info-container'}>
          <div>{LANGUAGES_TEXT[language].info.intro}</div>
          <div className={'name'}>Gustavo Gomez</div>
          <div className={'personal-title'}>{LANGUAGES_TEXT[language].info.personalTitle}</div>
        </div>
      </section>
      <div className={'panel right'}>
      </div>
      <div className={'footer'}>
        <Icon
          iconType={ICON_TYPE.LINKEDIN}
          link={'https://www.linkedin.com/in/luis-gustavo-gomez-fasanando-b523158b/'}
        />
        <Icon
          iconType={ICON_TYPE.TELEGRAM}
          link={'https://wa.me/51945248578?text=Hola%20Gustavo!'}
        />
        <Icon
          iconType={ICON_TYPE.GITHUB}
          link={'https://github.com/gustavo-gomez'}
        />
        <Icon
          iconType={ICON_TYPE.STACKOVERFLOW}
          link={'https://stackoverflow.com/users/5759160/gustavo-g%c3%b3mez-fasanando'}
        />
      </div>
    </div>
  );
}

export default App;
