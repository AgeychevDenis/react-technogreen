import logo from '../assets/img/logo/logo-catalog.svg'

const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__wrapper menu-header">
               <div className="menu-header__logo">
                  <a className="menu-header__logo-img" href="#">
                     <img src={logo} alt="logo" />
                  </a>
                  <div className="menu-header__spoler">
                     <nav className="menu-header__body">
                        <button type="button" className="menu-header__ctg _icon-down">Каталог
                           <span></span>
                           <span></span>
                           <span></span>
                        </button>
                        <ul className="menu-header__list">
                           <li className="menu-header__item">
                              <a href="catalog-main_snowplow.html" className="menu-header__link">Снегоуборочная
                                 техника</a>
                           </li>
                           <li className="menu-header__item">
                              <a href="catalog-main_garden.html" className="menu-header__link">Садовая
                                 техника</a>
                           </li>
                           <li className="menu-header__item">
                              <a href="catalog-main_washing.html" className="menu-header__link">Мойки высокого
                                 давления</a>
                           </li>
                           <li className="menu-header__item">
                              <a href="catalog-main_powertools.html" className="menu-header__link">Электроинструменты</a>
                           </li>
                           <li className="menu-header__item">
                              <a href="catalog-main_сompressor.html" className="menu-header__link">Компрессоры</a>
                           </li>
                           <li className="menu-header__item">
                              <a href="catalog-main_accessories.html" className="menu-header__link">Аксессуары
                                 и запчасти</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <form data-da=".menu-header__list,768,6" className="menu-header__form">
                  <div className="menu-header__search">
                     <input type="text" name="menu-header" placeholder="Поиск товара"
                        className="menu-header__input" />
                  </div>
                  <button type="submit" className="menu-header__search-btn _icon-search"></button>
               </form>
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

export default Header