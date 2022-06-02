import { useEffect, useState } from 'react';
import mainImg from '../assets/img/catalog-main/catalog-main__image-2.jpg'
import ProductBlock from './ProductBlock';


const Main = () => {
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
      <div className="wrapper">
         <div className="catalog-main">
            <div className="breadcrumbs">
               <div className="container">
                  <div className="breadcrumbs__inner">
                     <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__list-item">
                           <a className="_icon-home" href="index.html"></a>
                        </li>
                        <li className="breadcrumbs__list-item _icon-down">
                           <span href="#">Садовая техника</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <section className="catalog-main__image">
               <div className="container">
                  <div className="main-image _ibg">
                     <img src={mainImg} alt="Картинка" />
                  </div>
               </div>
            </section>
            <section className="catalog-main__filter">
               <div className="container">
                  <h1 className="catalog-main__filter-title">Садовая техника</h1>
                  <form>
                     <div className="filter-items">
                        <div className="filter-item">
                           <div className="filter-label">Самоходная</div>
                           <div className="select select_form">
                              <select name="form[]" className="form">
                                 <option value="1" defaultValue="selected">Есть</option>
                                 <option value="2">Нет</option>
                              </select>
                           </div>
                        </div>
                        <div className="filter-item">
                           <div className="filter-label">Мульчирование</div>
                           <div className="select select_form">
                              <select name="form[]" className="form">
                                 <option value="1" defaultValue="selected">Любой</option>
                                 <option value="2">Есть</option>
                                 <option value="3">Нет</option>
                              </select>
                           </div>
                        </div>
                        <div className="filter-item">
                           <div className="filter-label">Напряжение аккумулятора</div>
                           <div className="select select_form">
                              <select name="form[]" className="form">
                                 <option value="1" defaultValue="selected">Все</option>
                                 <option value="2">18 В</option>
                                 <option value="3">20 В</option>
                                 <option value="4">24 В</option>
                                 <option value="5">40 В</option>
                                 <option value="6">48 В</option>
                                 <option value="7">72 В</option>
                                 <option value="8">96 В</option>
                              </select>
                           </div>
                        </div>
                        <div className="filter-item">
                           <div className="filter-label">Объем травосборника (л)</div>
                           <div className="select select_form">
                              <select name="form[]" className="form">
                                 <option value="1" defaultValue="selected">Все</option>
                                 <option value="2">Менее 20</option>
                                 <option value="3">40.1 - 60</option>
                                 <option value="4">60.1 - и более</option>
                              </select>
                           </div>
                        </div>
                        <div className="filter-item">
                           <div className="filter-label">Мощность (Вт)</div>
                           <div className="select select_form">
                              <select name="form[]" className="form">
                                 <option value="1" defaultValue="selected">Все</option>
                                 <option value="2">Менее 500</option>
                                 <option value="3">500.01 - 1000</option>
                                 <option value="4">1000.01 - 1500</option>
                                 <option value="5">1500.01 - 2000</option>
                                 <option value="6">2000.01. и более</option>
                              </select>
                           </div>
                        </div>
                        <div className="filter-item">
                           <div className="filter-label">Вес (кг)</div>
                           <div className="select select_form">
                              <select name="form[]" className="form">
                                 <option value="1" defaultValue="selected">Все</option>
                                 <option value="2">Менее 10</option>
                                 <option value="3">10.01 - 15</option>
                                 <option value="4">15.01 - 25</option>
                                 <option value="5">25.01 - 35</option>
                                 <option value="6">35.01. и более</option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div className="filter-btn">
                        <button type="button">Сбросить</button>
                     </div>
                  </form>
               </div>
            </section>
            <section className="catalog-main__list">
               <div className="container">
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
         </div>
      </div>
   )
}

export default Main;