import {useEffect} from 'react'
import './styles/App.css';
import store from './store'
import Portfolio from './Portfolio'
import {Provider} from 'react-redux';
import ReactGA from 'react-ga';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-CP30XF5G1K');
  }, []);

  return (
    <Provider store={store}>
      <Portfolio/>
    </Provider>)
}

export default App;