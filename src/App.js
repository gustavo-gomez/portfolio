import {lazy, Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactGA from 'react-ga'
import {changeDarkMode, changeLanguage, currentDarkMode} from './slices/generalSettingsSlice'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";


const Services = lazy(() => import('./components/Services'))
const Blog = lazy(() => import(/*webpackChunkName: "Blog"*/'./components/Blog'))
// const Blog = lazy(() => import('./components/Blog'))

const Projects = lazy(() => import('./components/Projects'))
const Home = lazy(() => import('./components/home/Home'))

const App = () => {

  const dispatch = useDispatch()
  // const location = useLocation()
  const themeColor = useSelector(currentDarkMode);
  const isDarkMode = themeColor === 'dark'

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onChangeDarkMode(e))

    // Google Analytics
    if (process.env.NODE_ENV === 'production')
      ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_CODE)

    // Setup dark mode for the first time
    onChangeDarkMode(window.matchMedia('(prefers-color-scheme: dark)'))

    // setup browser language
    dispatch(changeLanguage(navigator.language.toLowerCase().includes('es') ? 'ES' : 'EN'))

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      })
    }
  }, [])

  const onChangeDarkMode = (e) => {
    const themeName = e.matches ? 'dark' : 'light'
    dispatch(changeDarkMode(themeName))
  }

  const parent = (child) => {
    return (
      <div className={isDarkMode ? "darkMode" : ""}>
        <Header/>
        {child}
        <Footer/>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={parent(<Home/>)}/>
          <Route path="/services" element={parent(<Services/>)}/>
          <Route path="/blog" element={parent(<Blog/>)}/>
          <Route path="/projects" element={parent(<Projects/>)}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
