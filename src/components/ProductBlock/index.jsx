import { useState } from 'react'
import Rating from 'react-rating'
import IconStarEmpty from '../../assets/img/icons/star-empty.svg'
import IconStarFull from '../../assets/img/icons/star-full.svg'

const ProductBlock = ({ id, imageUrl, title, options, volume, size, width, price, priceInMonth, score }) => {
   const [counter, setCounter] = useState(score);

   return (
      <div key={id} className="product-item__wrapper product-item">
         <a className="product-item__link" href="#">
            <div className="product-item__image">
               <img className="product-item__img" src={imageUrl}
                  alt={title} />
               <p className="product-item__hover-text">посмотреть товар</p>
            </div>
            <h4 className="product-item__title">
               {title}
               <span> Техногрин </span>
               <b>[</b>
               <span> {options}</span> об/мин,
               <span> {volume}</span> л, от
               <span> {size[0]}</span> мм до
               <span> {size[1]}</span> мм, ширина
               <span> {width}</span> мм
               <b>]</b>
            </h4>
         </a>
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
                     onChange={(score) => setCounter(score)}
                  />
                  <div className="rating__value">{counter}</div>
               </div>
            </div>
            <div className="product-item__inner">
               <div className="product-item__price _icon-clock">
                  {String(price).replace(/(\d{2})(\d{3})/g, '$1 $2').trim()} ₽
                  <span className="product-item__installments">от {String(priceInMonth).replace(/(\d{1})(\d{2})/g, '$1 $2').trim()} ₽/мес</span>
               </div>
               <div className="product-item__buttons">
                  <button type="button" className="product-item__btn _icon-heart"></button>
                  <button type="button" className="product-item__btn _icon-shopping-cart"></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductBlock;