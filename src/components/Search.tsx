import { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import debounce from 'lodash.debounce';
import { setSearchValue } from '../redux/slices/filterSlice';

import iconClose from '../assets/img/icons/close.svg'

const Search = () => {
   const dispatch = useDispatch();
   const [value, setValue] = useState('')
   const [show, setShow] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   const onClickClear = () => {
      dispatch(setSearchValue(''))
      setValue('');
      inputRef.current?.focus();
   }

   const updateSearchValue = useCallback(
      debounce((str) => {
         dispatch(setSearchValue(str))
      }, 350), []);

   const onChangeInput = (event: any) => {
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