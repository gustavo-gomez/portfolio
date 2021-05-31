import {useEffect, Fragment} from 'react'
import './scss/components/App.scss';
import Portfolio from './components/Portfolio'
import {useDispatch} from 'react-redux';
import ReactGA from 'react-ga';
import {changeLanguage, changeDarkMode} from './slices/generalSettingsSlice'
import './scss/components/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  const onChangeDarkMode = (e) => {
    const themeName = e.matches ? 'dark' : 'light'
    dispatch(changeDarkMode(themeName))
  }

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Portfolio/>
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route>
            <div>NOT FOUND</div>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
