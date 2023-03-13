import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componenets/Navbar/Navbar';
import Sidebar from './componenets/Sidebar/Sidebar';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter >
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
       <Navbar />
       <Sidebar />
      </div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
