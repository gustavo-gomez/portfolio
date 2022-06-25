import {Fragment, lazy, Suspense, useEffect} from 'react'
import './scss/components/App.scss'
import Portfolio from './components/Portfolio'
import {useDispatch} from 'react-redux'
import ReactGA from 'react-ga'
import {changeDarkMode, changeLanguage} from './slices/generalSettingsSlice'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const About = lazy(() => import('./components/About'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))

const App = () => {

  const dispatch = useDispatch()
  // const location = useLocation()

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

  return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={ <Portfolio/>} />
            <Route path="/about" element={<About/>} />

            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
        </Suspense>
      </BrowserRouter>
  )
}

export default App
