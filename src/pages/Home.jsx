import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setFilterId } from '../redux/slices/filterSlice';
import Skeleton from '../components/ProductBlock/Skeleton';
import ProductBlock from '../components/ProductBlock';
import MainImg from '../components/MainImg';
import Filter from '../components/Filter'
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
   const dispatch = useDispatch();
   const { filterId, sort } = useSelector(state => state.filter);

   const { searchValue } = useContext(SearchContext);
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);

   const onChangeFilter = (id) => {
      dispatch(setFilterId(id))
   }

   useEffect(() => {
      setIsLoading(true);

      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sort.sortProperty.replace('-', '');
      const category = filterId.length > 0 ? `category=${filterId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      axios.get(
         `https://6292ab089d159855f08d06e8.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
         .then(res => {
            setItems(res.data)
            setIsLoading(false)
         })
   }, [filterId, sort.sortProperty, searchValue, currentPage])

   const arrAside = ['Товар со скидкой', 'Рассрочка', 'Выгодная цена'];

   const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
   const products = items.map(obj => {
      const { id, ...objMore } = obj;
      return <ProductBlock key={id} {...objMore} />
   })

   return (
      <>
         <div className="breadcrumbs">
            <div className="container">
               <div className="breadcrumbs__inner">
                  <ul className="breadcrumbs__list">
                     <li className="breadcrumbs__list-item">
                        <Link to="/" className="_icon-home"></Link>
                     </li>
                     <li className="breadcrumbs__list-item _icon-down">
                        <span href="#">Садовая техника</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <MainImg />
         <section className="catalog-main__filter">
            <div className="container">
               <form>
                  <Filter onClickFilter={onChangeFilter} />
                  <Sort />
               </form>
            </div >
         </section >
         <section className="catalog-main__list">
            <div className="container">
               <h1 className="catalog-main__filter-title">Садовая техника</h1>
               <div className="catalog-main__body">
                  <div className="aside">
                     <h4 className="aside__title">Акции</h4>
                     <div className="aside__box">
                        <ul className="aside__list">
                           {arrAside.map((item, i) => (
                              <li key={i} className="aside__item">
                                 <Link to="/">{item}</Link>
                              </li>
                           ))}
                        </ul>
                        <a className="aside__btn-link" href="#">Все акции</a>
                     </div>
                  </div>
                  <div className="product-items">
                     {
                        isLoading ? skeleton : products
                     }
                  </div>
               </div>
               <Pagination onChangePage={(number) => setCurrentPage(number)} />
            </div>
         </section>
      </>
   )
}

export default Home