import {useEffect, Fragment, Suspense, lazy} from 'react'
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
import { useHistory, useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


const About = lazy(() => import('./components/About'));

const App = () => {

  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    // console.log('LOCATION: ', location.pathname)
    console.log('win loc: ', window.location.href)
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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Portfolio/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route>
              <div>NOT FOUND</div>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  )
}

export default App;
