import { useContext } from 'react';
import { useState } from 'react';
import { SearchContext } from '../App';
import iconClose from '../assets/img/icons/close.svg'

const Search = () => {
   const [show, setShow] = useState(false);

   const { searchValue, setSearchValue } = useContext(SearchContext);

   return (
      <form className={show ? "menu-header__form show" : "menu-header__form"}>
         <div className="menu-header__search">
            <span onClick={() => setShow(!show)} className='_icon-search'></span>
            <input
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               type="text"
               name="menu-header"
               placeholder="Поиск товара"
               className={show ? "menu-header__input show" : "menu-header__input"}
            />
         </div>
         {searchValue && (
            <button onClick={() => setSearchValue('')}>
               <img src={iconClose} alt="close" />
            </button>
         )}
      </form>
   )
}

export default Search;