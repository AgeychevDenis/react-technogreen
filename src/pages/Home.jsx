import { useEffect, useState } from 'react';
import ProductBlock from '../components/ProductBlock';
import MainImg from '../components/MainImg';
import { Link } from 'react-router-dom';

const Home = () => {
   const [items, setItems] = useState([])

   useEffect(() => {
      fetch('https://6292ab089d159855f08d06e8.mockapi.io/items')
         .then((res) => {
            return res.json();
         })
         .then((arr) => {
            setItems(arr)
         })
   }, [])

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
         <section className="catalog-main__list">
            <div className="container">
               <h1 className="catalog-main__filter-title">Садовая техника</h1>
               <div className="catalog-main__body">
                  <div className="aside">
                     <h4 className="aside__title">Акции</h4>
                     <div className="aside__box">
                        <ul className="aside__list">
                           <li className="aside__item">
                              <a href="#">Товар со скидкой</a>
                           </li>
                           <li className="aside__item">
                              <a href="#">Рассрочка</a>
                           </li>
                           <li className="aside__item">
                              <a href="#">Выгодная цена</a>
                           </li>
                        </ul>
                        <a className="aside__btn-link" href="#">Все акции</a>
                     </div>
                  </div>
                  <div className="product-items">
                     {items.map(obj => {
                        const { id, ...objMore } = obj;

                        return <ProductBlock key={id} {...objMore} />
                     })}
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