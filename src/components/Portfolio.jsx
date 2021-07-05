import {useEffect, useState} from 'react';
import '../scss/components/App.scss';
import Footer from "./Footer";
import ReactGA from 'react-ga';
import Home from './Home'
import Header from "./Header";
import { useHistory, useLocation} from "react-router-dom";



const Portfolio = (props) => {

  const history = useHistory();
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {

    ReactGA.pageview('Home')
  }, []);


  const setSelectedSection = (id) => {
    console.log('id: ', id)
    history.push(`/${id}`)
    setCurrentSection(id)
  }

  return (
    <div className="App">
      {/*<div className={'panel'}>*/}
      {/*</div>*/}
      {/*<div className={'panel right'}>*/}
      {/*</div>*/}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default Portfolio
