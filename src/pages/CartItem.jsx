const CartItem = ({ id, title, price, count, imageUrl }) => {
   return (
      <div className="cart-item">
         <div className="cart-item__img">
            <img src={imageUrl} alt="item" />
         </div>
         <div className="cart-item__discription">
            <h4 className="cart-item__title">
               Газонокосилка аккумуляторная {title}
            </h4>
            <p>2800 об/мин, 45 л, ширина 425 мм</p>
         </div>
         <div className="cart-item__counter">
            <button className="cart-item__minus">–</button>
            <span className="cart-item__num">{count}</span>
            <button className="cart-item__plus">+</button>
         </div>
         <span className="cart-item__total">{price * count} ₽</span>
         <button className='cart-item__delete'>&#10006;</button>
      </div>
   )
}

export default CartItem;