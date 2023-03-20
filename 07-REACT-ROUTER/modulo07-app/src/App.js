import './App.css';

//1- config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/Products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
