import { Link } from 'react-router-dom';

import NotFoundBlock from '../components/NotFoundBlock'

const NotFound = () => {
   return (
      <div className='error-page'>
         <NotFoundBlock />
         <Link to="/" className="error-page__btn-error">Главная страница</Link>
      </div>
   )
}

export default NotFound;