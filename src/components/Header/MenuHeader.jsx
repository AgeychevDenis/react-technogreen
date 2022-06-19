import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

const MenuHeader = () => {
   const [show, setShow] = useState(false);
   const menuRef = useRef();

   const menuList = [
      { name: 'Снегоуборочная техника', link: 'page404' },
      { name: 'Садовая техника', link: '/' },
      { name: 'Мойки высокого давления', link: 'page404' },
      { name: 'Электроинструменты', link: 'page404' },
      { name: 'Компрессоры', link: 'page404' },
      { name: 'Аксессуары и запчасти', link: 'page404' }
   ];

   useEffect(() => {
      const handlClickOutside = (event) => {
         if (!event.path.includes(menuRef.current)) {
            setShow(false);
         }
      }

      document.body.addEventListener('click', handlClickOutside);

      return () => document.body.removeEventListener('click', handlClickOutside);
   }, []);

   return (
      <div ref={menuRef} className="menu-header__spoiler">
         <nav className="menu-header__body">
            <button onClick={() => setShow(!show)} type="button" className={`menu-header__ctg _icon-down ${show ? '_active' : ''}`}>Каталог
               <span></span>
               <span></span>
               <span></span>
            </button>
            <ul className={`menu-header__list ${show ? '_active' : ''}`}>
               {menuList.map((obj, i) => (
                  <li key={i} className="menu-header__item">
                     <Link onClick={() => setShow(!show)} to={`${obj.link}`} className="menu-header__link">
                        {obj.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   )
}

export default MenuHeader;