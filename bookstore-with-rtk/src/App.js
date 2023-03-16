import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddBook />} />
        <Route path='/edit/:bookId' element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
