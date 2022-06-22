import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { setFilterId, setCurrentPage, selectFilter } from '../redux/slices/filterSlice';
import { fetchProducts, selectProductData } from '../redux/slices/productSlice';
import { useAppDispatch } from '../redux/store';

import Skeleton from '../components/ProductBlock/Skeleton';
import ProductBlock from '../components/ProductBlock';
import MainImg from '../components/MainImg';
import Filter from '../components/Filter'
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';


const Home: React.FC = () => {
   const dispatch = useAppDispatch();
   const isSearch = useRef(false);

   const { items, status } = useSelector(selectProductData);
   const { filterId, sort, currentPage, searchValue } = useSelector(selectFilter);

   const onChangeFilter = useCallback((arr: []) => {
      dispatch(setFilterId(arr))
   }, []);

   const onChangePage = (page: number) => {
      dispatch(setCurrentPage(page))
   }

   const getProducts = async () => {

      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sort.sortProperty.replace('-', '');
      const category = filterId.length > 0 ? `category=${filterId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      dispatch(
         fetchProducts({
            order,
            sortBy,
            category,
            search,
            currentPage: String(currentPage)
         })
      );
   }

   useEffect(() => {
      window.scrollTo(0, 0);

      if (!isSearch.current) {
         getProducts()
      }

      isSearch.current = false;

   }, [filterId, sort.sortProperty, searchValue, currentPage]);


   const arrAside = ['Товар со скидкой', 'Рассрочка', 'Выгодная цена'];

   const products = items.map((obj: any) => <ProductBlock key={obj.id} {...obj} />);
   const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

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
                        <span>Садовая техника</span>
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
                  {
                     status === 'error'
                        ? <div className='catalog-main__error-info'>
                           <h2>Произошла ошибка</h2>
                           <p>К сожалению не удалось получить данные. Попробуйте повторить попытку позже.</p>
                        </div>
                        : <div className="product-items">{status === 'loading' ? skeleton : products}</div>
                  }

               </div>
               <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
         </section>
      </>
   )
}

export default Home