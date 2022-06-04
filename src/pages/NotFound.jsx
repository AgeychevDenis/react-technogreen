import { Link } from 'react-router-dom';

import NotFoundBlock from '../components/NotFoundBlock'

const NotFound = () => {
   return (
      <>
         <NotFoundBlock />
         <Link to="/" className="error-page__btn-error">Главная страница</Link>
      </>
   )
}

export default NotFound;