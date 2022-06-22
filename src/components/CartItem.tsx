import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem, CartItem } from "../redux/slices/cartSlice";

type CartItemProps = {
   id: number,
   imageUrl: string,
   title: string,
   options: number,
   volume: number,
   voltage: number,
   weight: number,
   price: number,
   count: number
}

const CartItemBlock: React.FC<CartItemProps> = ({ id, title, price, count, imageUrl, options, volume, weight, voltage }) => {
   const dispatch = useDispatch();

   const onClickPlus = () => {
      dispatch(addItem({
         id
      } as CartItem
      ))
   }

   const onClickMinus = () => {
      dispatch(minusItem(id)
      )
   }

   const onClickRemove = () => {
      if (window.confirm('Ты уверен что хочешь удалить товар?')) {
         dispatch(removeItem(id))
      }
   }


   return (
      <div className="cart-item">
         <div className="cart-item__img">
            <img src={imageUrl} alt="item" />
         </div>
         <div className="cart-item__discription">
            <h4 className="cart-item__title">
               Газонокосилка аккумуляторная {title}
            </h4>
            <p>{options} об/мин, {voltage} В, {volume} л, {weight} кг</p>
         </div>
         <div className="cart-item__counter">
            <button onClick={onClickMinus} className="cart-item__minus">–</button>
            <span className="cart-item__num">{count}</span>
            <button onClick={onClickPlus} className="cart-item__plus">+</button>
         </div>
         <span className="cart-item__total">{price * count} ₽</span>
         <button onClick={onClickRemove} className='cart-item__delete'>&#10006;</button>
      </div>
   )
}

export default CartItemBlock;