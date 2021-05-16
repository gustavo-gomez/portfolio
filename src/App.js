import {useEffect} from 'react'
import './styles/App.css';
import store from './store'
import Portfolio from './Portfolio'
import {Provider} from 'react-redux';
import ReactGA from 'react-ga';

const App = () => {

  // useEffect(() => {
  //   if(process.env.NODE_ENV === 'production')
  //     ReactGA.initialize(process.env.REACT_APP_ANALYTICS_TRACKING_CODE);
  // }, []);

  return (
    <Provider store={store}>
      <Portfolio/>
    </Provider>)
}

export default App;