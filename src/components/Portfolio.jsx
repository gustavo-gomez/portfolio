import {useEffect} from 'react';
import Footer from "./Footer";
import ReactGA from 'react-ga';
import Home from './Home'
import Header from "./Header";

const Portfolio = () => {

  useEffect(() => {

    ReactGA.pageview('Home')
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default Portfolio
