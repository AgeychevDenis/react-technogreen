import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from './pages/Cart'
import NotFound from "./pages/NotFound";

import './sass/style.scss'

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
