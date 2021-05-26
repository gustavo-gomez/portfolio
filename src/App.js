import {useEffect} from 'react'
import './styles/App.css';
import Portfolio from './Portfolio'
import {useDispatch} from 'react-redux';
import ReactGA from 'react-ga';
import {changeLanguage, changeDarkMode} from './slices/generalSettingsSlice'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onChangeDarkMode(e));

    // Google Analytics
    if (process.env.NODE_ENV === 'production')
      ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_CODE);

    // Setup dark mode for the first time
    onChangeDarkMode(window.matchMedia('(prefers-color-scheme: dark)'))

    // setup browser language
    dispatch(changeLanguage(navigator.language.toLowerCase().includes('es') ? 'ES' : 'EN'))

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
      localStorage.removeItem('lightMode');
    }
  }, []);

  const onChangeDarkMode = (e) => {
    dispatch(changeDarkMode(e.matches))
  }

  return (
    <Portfolio/>
  )
}

export default App;
