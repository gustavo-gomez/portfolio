import './styles/App.css';
import store from './store'
import Portfolio from './Portfolio'
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Portfolio/>
    </Provider>)
}

export default App;