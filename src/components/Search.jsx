import { useState, useRef, useContext, useCallback } from 'react';
import { SearchContext } from '../App';
import debounce from 'lodash.debounce';

import iconClose from '../assets/img/icons/close.svg'

const Search = () => {
   const [value, setValue] = useState('')
   const [show, setShow] = useState(false);
   const { setSearchValue } = useContext(SearchContext);
   const inputRef = useRef();

   const onClickClear = () => {
      setSearchValue('');
      setValue('');
      inputRef.current.focus();
   }

   const updateSearchValue = useCallback(
      debounce((str) => {
         setSearchValue(str);
      }, 350), []);

   const onChangeInput = (event) => {
      setValue(event.target.value);
      updateSearchValue(event.target.value);
   }

   return (
      <form className={show ? "menu-header__form show" : "menu-header__form"}>
         <div className="menu-header__search">
            <span onClick={() => setShow(!show)} className='_icon-search'></span>
            <input
               ref={inputRef}
               value={value}
               onChange={onChangeInput}
               type="text"
               name="menu-header"
               placeholder="Поиск товара"
               className={show ? "menu-header__input show" : "menu-header__input"}
            />
         </div>
         {value && (
            <button onClick={onClickClear}>
               <img src={iconClose} alt="close" />
            </button>
         )}
      </form>
   )
}

export default Search;