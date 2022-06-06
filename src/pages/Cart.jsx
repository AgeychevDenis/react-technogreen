import { Link } from 'react-router-dom';

import ImgCart from '../assets/img/icons/shopping-cart.svg';
import ImgTrash from '../assets/img/icons/trash-o.svg';
import ImgItem from '../assets/img/catalog-main/product__card-garden/card-1.jpg'

const Cart = () => {
   return (
      <div className="cart">
         <div className="container">
            <div className="cart__wrapper">
               <div className="cart__top">
                  <div className="cart__title">
                     <img src={ImgCart} alt="Корзина" />
                     <h2>Корзина</h2>
                  </div>
                  <div className="cart__clear">
                     <img src={ImgTrash} alt="Очистить корзину" />
                     <span>Очистить корзину</span>
                  </div>
               </div>
               <div className="cart__main">
                  <div className="cart-item">
                     <div className="cart-item__img">
                        <img src={ImgItem} alt="item" />
                     </div>
                     <div className="cart-item__discription">
                        <h4 className="cart-item__title">
                           Газонокосилка аккумуляторная ЕКА 36БЛ
                        </h4>
                        <p>2800 об/мин, 45 л, ширина 425 мм</p>
                     </div>
                     <div className="cart-item__counter">
                        <button className="cart-item__minus">–</button>
                        <span className="cart-item__num">4</span>
                        <button className="cart-item__plus">+</button>
                     </div>
                     <span className="cart-item__total">15999 ₽</span>
                     <button className='cart-item__delete'>&#10006;</button>
                  </div>
               </div>
               <div className="cart__bottom">
                  <p className="cart__total-item">
                     Итого: <span>4 товара</span>
                  </p>
                  <p className="cart__total-price">
                     Сумма заказа: <span>64999 ₽</span>
                  </p>
               </div>
               <div className="cart__buttons">
                  <Link to="/" className="cart__btn">Вернуться назад</Link>
                  <Link to="/cart" className="cart__btn btn-pay">Оплатить сейчас</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart