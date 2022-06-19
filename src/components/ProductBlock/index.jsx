import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import Rating from 'react-rating';

import IconStarFull from '../../assets/img/icons/star-full.svg';
import IconStarEmpty from '../../assets/img/icons/star-empty.svg';

const ProductBlock = ({ id, imageUrl, title, options, volume, voltage, weight, price, priceInMonth, rating }) => {
   const dispatch = useDispatch();
   const [counter, setCounter] = useState(rating);

   const onClickAdd = () => {
      const item = {
         id,
         title,
         price,
         imageUrl
      };
      dispatch(addItem(item))
   }

   const priceChange = (str) => String(str).replace(/(\d{2})(\d{3})/g, '$1 $2').trim();

   return (
      <div key={id} className="product-item__wrapper product-item">
         <Link className="product-item__link" to="page404">
            <div className="product-item__image">
               <img className="product-item__img" src={imageUrl}
                  alt={title} />
               <p className="product-item__hover-text">посмотреть товар</p>
            </div>
            <h4 className="product-item__title">
               Газонокосилка аккумуляторная
               <span> {title} </span>
               Техногрин
               <b> [</b>
               <span>{options}</span> об/мин,
               <span> {voltage}</span> В,
               <span> {volume}</span> л, вес
               <span> {weight}</span> кг
               <b>]</b>
            </h4>
         </Link>
         <div className="product-item__box">
            <div className="product-item__inner">
               <span className="compare-checkbox checkbox">
                  <label className="checkbox__lable">
                     <input className="checkbox__compare" type="checkbox" name="" id="" />
                     <div className="checkbox__compare-div"></div>
                     <span> Сравнить</span>
                  </label>
               </span>
               <div className="form__rating">
                  <Rating
                     emptySymbol={<img src={IconStarEmpty} className="icon" />}
                     fullSymbol={<img src={IconStarFull} className="icon" />}
                     initialRating={counter}
                     onChange={(rating) => setCounter(rating)}
                  />
                  <div className="rating__value">{counter}</div>
               </div>
            </div>
            <div className="product-item__inner">
               <div className="product-item__price _icon-clock">
                  {priceChange(price)} ₽
                  <span className="product-item__installments">от {priceChange(priceInMonth)} ₽/мес</span>
               </div>
               <div className="product-item__buttons">
                  <button type="button" className="product-item__btn _icon-heart"></button>
                  <button onClick={onClickAdd} type="button" className="product-item__btn _icon-shopping-cart"></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductBlock;