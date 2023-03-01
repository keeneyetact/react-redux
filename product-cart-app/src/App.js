import Cart from './components/Cart';
import Input from './components/Input';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import store from './redux/store';
import './styles.css';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="py-16">
      <div className="productWrapper">
          <ProductList />
          <Input />
      </div>
      <Cart />
      </div>
    </Provider>
  );
}

export default App;
