import Rating from 'react-rating';

const FormRating = () => {
   return (
      <div className="form__rating">
         <Rating
            emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
            fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
         />
         <div className="rating__value">4.1</div>

      </div>
   )
}

export default FormRating