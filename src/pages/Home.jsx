import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Skeleton from '../components/ProductBlock/Skeleton';
import ProductBlock from '../components/ProductBlock';
import MainImg from '../components/MainImg';
import Filter from '../components/Filter'
import Sort from '../components/Sort';

const Home = () => {
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [filterId, setFilterId] = useState(0);
   const [sortType, setSortType] = useState({
      name: 'сначала с лучшей оценкой',
      sortProperty: 'rating'
   });

   useEffect(() => {
      setIsLoading(true);

      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.sortProperty.replace('-', '');
      const category = filterId > 0 ? `category=${filterId}` : '';

      axios.get(
         `https://6292ab089d159855f08d06e8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
      )
         .then(res => {
            setItems(res.data)
            setIsLoading(false)
         })
   }, [filterId, sortType])

   const arrAside = ['Товар со скидкой', 'Рассрочка', 'Выгодная цена']

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
                  <Filter onClickFilter={(i) => setFilterId(i)} />
                  <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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
                        isLoading
                           ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                           : items.map(obj => {
                              const { id, ...objMore } = obj;
                              return <ProductBlock key={id} {...objMore} />
                           })
                     }
                     <div className="pagination">
                        <ul className="pagination__list">
                           <li className="pagination__item _active">
                              <a href="#">1</a>
                           </li>
                           <li className="pagination__item">
                              <a href="#">2</a>
                           </li>
                           <li className="pagination__item">
                              <a href="#">3</a>
                           </li>
                           <li className="pagination__item">
                              <a href="#">4</a>
                           </li>
                           <li className="pagination__item">
                              <a href="#">5</a>
                           </li>
                           <li className="pagination__item">
                              <span>...</span>
                           </li>
                           <li className="pagination__item">
                              <a href="#">8</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Home