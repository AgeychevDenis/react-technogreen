import mainImg from '../assets/img/catalog-main/catalog-main__image-2.jpg'
import productImg from '../assets/img/catalog-main/product__card-garden/card-1.jpg'

const Main = () => {
   return (
      <body>
         <div class="wrapper">
            <div class="catalog-main">
               <div class="breadcrumbs">
                  <div class="container">
                     <div class="breadcrumbs__inner">
                        <ul class="breadcrumbs__list">
                           <li class="breadcrumbs__list-item">
                              <a class="_icon-home" href="index.html"></a>
                           </li>
                           <li class="breadcrumbs__list-item _icon-down">
                              <span href="#">Садовая техника</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <section class="catalog-main__image">
                  <div class="container">
                     <div class="main-image _ibg">
                        <img src={mainImg} alt="Картинка" />
                     </div>
                  </div>
               </section>
               <section class="catalog-main__filter">
                  <div class="container">
                     <h1 class="catalog-main__filter-title">Садовая техника</h1>
                     <form>
                        <div class="filter-items">
                           <div class="filter-item">
                              <div class="filter-label">Самоходная</div>
                              <div class="select select_form">
                                 <select name="form[]" class="form">
                                    <option value="1" selected="selected">Есть</option>
                                    <option value="2">Нет</option>
                                 </select>
                              </div>
                           </div>
                           <div class="filter-item">
                              <div class="filter-label">Мульчирование</div>
                              <div class="select select_form">
                                 <select name="form[]" class="form">
                                    <option value="1" selected="selected">Любой</option>
                                    <option value="2">Есть</option>
                                    <option value="3">Нет</option>
                                 </select>
                              </div>
                           </div>
                           <div class="filter-item">
                              <div class="filter-label">Напряжение аккумулятора</div>
                              <div class="select select_form">
                                 <select name="form[]" class="form">
                                    <option value="1" selected="selected">Все</option>
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
                           <div class="filter-item">
                              <div class="filter-label">Объем травосборника (л)</div>
                              <div class="select select_form">
                                 <select name="form[]" class="form">
                                    <option value="1" selected="selected">Все</option>
                                    <option value="2">Менее 20</option>
                                    <option value="3">40.1 - 60</option>
                                    <option value="4">60.1 - и более</option>
                                 </select>
                              </div>
                           </div>
                           <div class="filter-item">
                              <div class="filter-label">Мощность (Вт)</div>
                              <div class="select select_form">
                                 <select name="form[]" class="form">
                                    <option value="1" selected="selected">Все</option>
                                    <option value="2">Менее 500</option>
                                    <option value="3">500.01 - 1000</option>
                                    <option value="4">1000.01 - 1500</option>
                                    <option value="5">1500.01 - 2000</option>
                                    <option value="6">2000.01. и более</option>
                                 </select>
                              </div>
                           </div>
                           <div class="filter-item">
                              <div class="filter-label">Вес (кг)</div>
                              <div class="select select_form">
                                 <select name="form[]" class="form">
                                    <option value="1" selected="selected">Все</option>
                                    <option value="2">Менее 10</option>
                                    <option value="3">10.01 - 15</option>
                                    <option value="4">15.01 - 25</option>
                                    <option value="5">25.01 - 35</option>
                                    <option value="6">35.01. и более</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="filter-btn">
                           <button type="button">Сбросить</button>
                        </div>
                     </form>
                  </div>
               </section>
               <section class="catalog-main__list">
                  <div class="container">
                     <div class="catalog-main__body">
                        <div class="aside">
                           <h4 class="aside__title">Акции</h4>
                           <div class="aside__box">
                              <ul class="aside__list">
                                 <li class="aside__item">
                                    <a href="#">Товар со скидкой</a>
                                 </li>
                                 <li class="aside__item">
                                    <a href="#">Рассрочка</a>
                                 </li>
                                 <li class="aside__item">
                                    <a href="#">Выгодная цена</a>
                                 </li>
                              </ul>
                              <a class="aside__btn-link" href="#">Все акции</a>
                           </div>
                        </div>
                        <div class="product-items">
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная ЕКА 36БЛ
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>2800</span> об/мин,
                                    <span>45</span> л, от
                                    <span>25</span> мм до
                                    <span>65</span> мм, ширина
                                    <span>425</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">4.1</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       7 799 ₽
                                       <span class="product-item__installments">от 759 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная G40LV40
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    без АКБ
                                    <span>3600</span> об/мин,
                                    <span>40</span> л, от
                                    <span>32</span> мм до
                                    <span>85</span> мм, ширина
                                    <span>350</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">4.7</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       11 699 ₽
                                       <span class="product-item__installments">от 1 349 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная MaxPower 32/36V P4B
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>3800</span> об/мин,
                                    <span>30</span> л, от
                                    <span>20</span> мм до
                                    <span>60</span> мм, ширина
                                    <span>320</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">0</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       14 999 ₽
                                       <span class="product-item__installments">от 1 462 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная DLM 4141Li
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>3300</span> об/мин,
                                    <span>40</span> л, от
                                    <span>25</span> мм до
                                    <span>75</span> мм, ширина
                                    <span>400</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">3.9</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       15 999 ₽
                                       <span class="product-item__installments">от 1 560 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная ЕКА 36БЛ
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>3200</span> об/мин,
                                    <span>35</span> л, от
                                    <span>40</span> мм до
                                    <span>80</span> мм, ширина
                                    <span>360</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">5</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       16 999 ₽
                                       <span class="product-item__installments">от 1 657 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная Moweo 42.5 Li 119
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>3400</span> об/мин,
                                    <span>65</span> л, от
                                    <span>420</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">4.8</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       19 799 ₽
                                       <span class="product-item__installments">от 1 730 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная DLM382C
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>3700</span> об/мин,
                                    <span>40</span> л, от
                                    <span>25</span> мм до
                                    <span>75</span> мм, ширина
                                    <span>380</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">0</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       20 799 ₽
                                       <span class="product-item__installments">от 2 078 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная PXC GE-CM
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>3800</span> об/мин,
                                    <span>40</span> л, от
                                    <span>25</span> мм до
                                    <span>75</span> мм, ширина
                                    <span>360</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">4.7</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       20 999 ₽
                                       <span class="product-item__installments">от 2 105 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="product-item__wrapper product-item">
                              <a class="product-item__link" href="#">
                                 <div class="product-item__image">
                                    <img class="product-item__img" src={productImg}
                                       alt="Снегоуборщик электрический" />
                                    <p class="product-item__hover-text">посмотреть товар</p>
                                 </div>
                                 <h4 class="product-item__title">
                                    Газонокосилка аккумуляторная G40LRTT3
                                    <span>Техногрин</span>
                                    <b>[</b>
                                    <span>5000</span> об/мин,
                                    <span>60</span> л, от
                                    <span>35</span> мм до
                                    <span>85</span> мм, ширина
                                    <span>490</span> мм
                                    <b>]</b>
                                 </h4>
                              </a>
                              <div class="product-item__box">
                                 <div class="product-item__inner">
                                    <span class="compare-checkbox checkbox">
                                       <label class="checkbox__lable">
                                          <input class="checkbox__compare" type="checkbox" name="" id="" />
                                          <span>Сравнить</span>
                                       </label>
                                    </span>
                                    <div class="form__rating">
                                       <div data-ajax="true" class="rating rating_set">
                                          <div class="rating__body">
                                             <div class="rating__active"></div>
                                             <div class="rating__items">
                                                <input type="radio" class="rating__item" value="1" name="rating" />
                                                <input type="radio" class="rating__item" value="2" name="rating" />
                                                <input type="radio" class="rating__item" value="3" name="rating" />
                                                <input type="radio" class="rating__item" value="4" name="rating" />
                                                <input type="radio" class="rating__item" value="5" name="rating" />
                                             </div>
                                          </div>
                                          <div class="rating__value">0</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="product-item__inner">
                                    <div class="product-item__price _icon-clock">
                                       33 999 ₽
                                       <span class="product-item__installments">от 3 314 ₽/мес</span>
                                    </div>
                                    <div class="product-item__buttons">
                                       <button type="button" class="product-item__btn _icon-heart"></button>
                                       <button type="button" class="product-item__btn _icon-shopping-cart"></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="pagination">
                              <ul class="pagination__list">
                                 <li class="pagination__item _active">
                                    <a href="#">1</a>
                                 </li>
                                 <li class="pagination__item">
                                    <a href="#">2</a>
                                 </li>
                                 <li class="pagination__item">
                                    <a href="#">3</a>
                                 </li>
                                 <li class="pagination__item">
                                    <a href="#">4</a>
                                 </li>
                                 <li class="pagination__item">
                                    <a href="#">5</a>
                                 </li>
                                 <li class="pagination__item">
                                    <span>...</span>
                                 </li>
                                 <li class="pagination__item">
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
      </body>
   )
}

export default Main;