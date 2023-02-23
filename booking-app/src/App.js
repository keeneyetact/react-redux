import { Provider } from 'react-redux'
import './styles.css'
import './App.css';
import Input from './components/Input';
import Data from './components/Data';
import store from './redux/store';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          {/* <!-- Header --> */}
          <Navbar />
          {/* <!-- Input Data --> */}
          <Input />
          {/* <!-- Preview Data --> */}
          <Data />
      </div>
    </Provider>
  );
}

export default App;
