import MenuHeader from './MenuHeader';
import logo from '../../assets/img//logo/logo-catalog.svg'
import { Link, useLocation } from 'react-router-dom';
import Search from '../Search';
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/slices/cartSlice';
import { useEffect, useRef } from 'react';

const Header = () => {
   const { items, totalPrice } = useSelector(selectCart);
   const location = useLocation();
   const isMounted = useRef(false)

   const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

   useEffect(() => {
      if (isMounted.current) {
         const json = JSON.stringify(items);
         localStorage.setItem('cart', json);
      }
      isMounted.current = true;
   }, [items])

   return (
      <header className="header">
         <div className="header__container">
            <div className="header__wrapper menu-header">
               <div className="menu-header__logo">
                  <Link to="/" className="menu-header__logo-img">
                     <img src={logo} alt="logo" />
                  </Link>
                  <MenuHeader />
               </div>
               {location.pathname !== '/cart' && <Search />}
               <div className="menu-header__buttons">
                  <Link className="menu-header__btn-link _icon-bar" to="404page">Сравнить</Link>
                  <Link className="menu-header__btn-link _icon-heart" to="404page">Избранное</Link>
                  <Link className="menu-header__btn-link _icon-shopping-cart" to="/cart">{totalPrice <= 0 ? 'Корзина' : totalPrice} <span>{totalCount}</span> </Link>
                  <Link className="menu-header__btn-link _icon-bell" to="404page"></Link>
               </div>
               <div className="menu-header__login">
                  <Link to="404page" className="menu-header__login-btn">
                     Войти
                  </Link>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;