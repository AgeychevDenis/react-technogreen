import { useState } from 'react';
import Rating from 'react-rating';

import IconStarFull from '../../assets/img/icons/star-full.svg';
import IconStarEmpty from '../../assets/img/icons/star-empty.svg';

type RatingIconProps = {
   rating: number
}


const RatingIcon = ({ rating }: RatingIconProps): JSX.Element => {

   const [counter, setCounter] = useState<number>(rating);
   return (
      <div className="form__rating">
         {/*
            // @ts-ignore */}
         
         <Rating
            emptySymbol={<img src={IconStarEmpty} className="icon" />}
            fullSymbol={<img src={IconStarFull} className="icon" />}
            initialRating={counter}
            onChange={(rating) => setCounter(rating)}
         />
         <div className="rating__value">{counter}</div>
      </div>
   );
}

export default RatingIcon;