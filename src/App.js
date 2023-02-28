import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Register from './components/Register'
import Home from './components/Home'
import Cart from './components/Cart'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
