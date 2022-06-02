import { useState } from "react";

const MenuHeader = () => {
   const [show, setShow] = useState(false);

   const menuList = ['Снегоуборочная техника', 'Садовая техника', 'Мойки высокого давления', 'Электроинструменты', 'Компрессоры', 'Аксессуары и запчасти'];

   if (show) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = '';
   }

   return (
      <div className="menu-header__spoiler">
         <nav className="menu-header__body">
            <button onClick={() => setShow(!show)} type="button" className={`menu-header__ctg _icon-down ${show ? '_active' : ''}`}>Каталог
               <span></span>
               <span></span>
               <span></span>
            </button>
            <ul className={`menu-header__list ${show ? '_active' : ''}`}>
               {menuList.map((item, i) => (
                  <li key={i} className="menu-header__item">
                     <a href="catalog-main_snowplow.html" className="menu-header__link">
                        {item}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   )
}

export default MenuHeader;