const ProductBlock = ({ id, imageUrl, title, options, volume, size, width, price, priceInMounth }) => {

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
                     <span>Сравнить</span>
                  </label>
               </span>
               <div className="form__rating">
                  <div data-ajax="true" className="rating rating_set">
                     <div className="rating__body">
                        <div className="rating__active"></div>
                        <div className="rating__items">
                           <input type="radio" className="rating__item" value="1" name="rating" />
                           <input type="radio" className="rating__item" value="2" name="rating" />
                           <input type="radio" className="rating__item" value="3" name="rating" />
                           <input type="radio" className="rating__item" value="4" name="rating" />
                           <input type="radio" className="rating__item" value="5" name="rating" />
                        </div>
                     </div>
                     <div className="rating__value">4.1</div>
                  </div>
               </div>
            </div>
            <div className="product-item__inner">
               <div className="product-item__price _icon-clock">
                  {price} ₽
                  <span className="product-item__installments">от {priceInMounth} ₽/мес</span>
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