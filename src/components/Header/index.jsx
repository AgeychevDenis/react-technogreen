import MenuHeader from './MenuHeader';
import logo from '../../assets/img//logo/logo-catalog.svg'

const Header = () => {

   return (
      <header className="header">
         <div className="header__container">
            <div className="header__wrapper menu-header">
               <div className="menu-header__logo">
                  <a className="menu-header__logo-img" href="#">
                     <img src={logo} alt="logo" />
                  </a>
                  <MenuHeader />
               </div>
               {/* <form data-da=".menu-header__list,768,6" className="menu-header__form">
                  <div className="menu-header__search">
                     <input type="text" name="menu-header" placeholder="Поиск товара"
                        className="menu-header__input" />
                  </div>
                  <button type="submit" className="menu-header__search-btn _icon-search"></button>
               </form> */}
               <div className="menu-header__buttons">
                  <a className="menu-header__btn-link _icon-bar" href="#">Сравнить</a>
                  <a className="menu-header__btn-link _icon-heart" href="#">Избранное</a>
                  <a className="menu-header__btn-link _icon-shopping-cart" href="#"><span id="basket">0</span>Корзина</a>
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