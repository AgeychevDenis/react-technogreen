import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import ImgCart from '../assets/img/icons/shopping-cart.svg';
import ImgTrash from '../assets/img/icons/trash-o.svg';
import CartItem from './CartItem';
import { clearItems } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

const Cart = () => {
   const dispatch = useDispatch();
   const { items, totalPrice } = useSelector(state => state.cart);

   const totalCount = items.reduce((sum, item) => sum + item.count, 0);

   const onClickClear = () => {
      if (window.confirm('Отчистить корзину?')) {
         dispatch(clearItems())
      }
   }

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   if (!totalPrice) {
      return <CartEmpty />;
   }

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
                     <span onClick={onClickClear}>Очистить корзину</span>
                  </div>
               </div>
               <div className="cart__main">
                  {items.map((item) => (
                     <CartItem key={item.id} {...item} />
                  ))}
               </div>
               <div className="cart__bottom">
                  <p className="cart__total-item">
                     Итого: <span>{totalCount} шт.</span>
                  </p>
                  <p className="cart__total-price">
                     Сумма заказа: <span>{totalPrice} ₽</span>
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