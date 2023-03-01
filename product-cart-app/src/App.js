import Cart from './components/Cart';
import Input from './components/Input';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-16">
      <div className="productWrapper">
          <ProductList />
          <Input />
      </div>
      <Cart />
      </div>
    </div>
  );
}

export default App;
