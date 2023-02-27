import './style.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import store from './redux/store';

import { Provider } from 'react-redux';

function App() {
  return (
      <Provider store={store}>
        <div>
            <Navbar />  
            <Main />
        </div>
      </Provider>
  );
}

export default App;
