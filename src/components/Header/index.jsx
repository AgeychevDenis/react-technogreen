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