import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import ImgCart from '../assets/img/icons/shopping-cart.svg';
import ImgTrash from '../assets/img/icons/trash-o.svg';
import CartItem from './CartItem';

const Cart = () => {
   const dispatch = useDispatch();
   const items = useSelector(state => state.cart.items);

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
                  {items.map((item) => (
                     <CartItem key={item.id} {...item} />
                  ))}
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