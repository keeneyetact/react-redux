import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
    
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog/:blogId' element={<Blog />} />
          </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
