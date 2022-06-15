import iconClose from '../assets/img/icons/close.svg'

const Search = ({ searchValue, setSearchValue }) => {
   return (
      <form className="menu-header__form">
         <div className="menu-header__search _icon-search">
            <input
               value={searchValue}
               onChange={(event) => setSearchValue(event.target.value)}
               type="text"
               name="menu-header"
               placeholder="Поиск товара"
               className="menu-header__input"
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