import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from './pages/Cart'
import NotFound from "./pages/NotFound";

import './sass/style.scss';

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </div>
  )
}

export default App;
