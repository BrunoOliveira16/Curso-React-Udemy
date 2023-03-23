import './App.css';

//1- config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        { /* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/Products/:id' element={<Product />} />
          {/* 6 - nested route */}
          <Route path='/Products/:id/info' element={<Info />} />
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
