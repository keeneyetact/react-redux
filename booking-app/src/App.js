import './styles.css'
import './App.css';
import Input from './components/Input';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <body>

<header id="header">
  <div class="container">
    <img src="./img/lws-logo.svg" alt="logo" class="logo" />
    <div class="flex items-center">
      <a class="text-white min-w-[50px] font-medium" href="#">Home</a>
      <button class="log-btn btn">Login</button>
    </div>
  </div>
</header>


<section>
  {/* <!-- Input Data --> */}
  <Input />

  {/* <!-- Preview Data --> */}
  <Data />
</section>

</body>
    </div>
  );
}

export default App;
