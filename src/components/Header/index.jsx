import MenuHeader from './MenuHeader';
import logo from '../../assets/img//logo/logo-catalog.svg'
import { Link } from 'react-router-dom';
import Search from '../Search';
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/slices/cartSlice';

const Header = () => {
   const { items, totalPrice } = useSelector(selectCart);

   const totalCount = items.reduce((sum, item) => sum + item.count, 0);

   return (
      <header className="header">
         <div className="header__container">
            <div className="header__wrapper menu-header">
               <div className="menu-header__logo">
                  <Link to="/" className="menu-header__logo-img" href="#">
                     <img src={logo} alt="logo" />
                  </Link>
                  <MenuHeader />
               </div>
               <Search />
               <div className="menu-header__buttons">
                  <a className="menu-header__btn-link _icon-bar" href="#">Сравнить</a>
                  <a className="menu-header__btn-link _icon-heart" href="#">Избранное</a>
                  <Link className="menu-header__btn-link _icon-shopping-cart" to="/cart">{totalPrice <= 0 ? 'Корзина' : totalPrice} <span>{totalCount}</span> </Link>
                  <a className="menu-header__btn-link _icon-bell" href="#"></a>
               </div>
               <div className="menu-header__login">
                  <a href="login.html" className="menu-header__login-btn">
                     Войти
                  </a>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;