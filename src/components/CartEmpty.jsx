import icon from '../assets/img/icons/add_shopping.svg';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
   return (
      <div className="cart__add container">
         <h2>Корзина пуста &#128549;
         </h2>
         <p>
            Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском
         </p>
         <img src={icon} alt="Корзина пуста" />
         <Link to="/" className='cart__btn btn-pay' >Вернуться назад</Link>
      </div>
   )
}

export default CartEmpty;