import { useState } from 'react';
import { Link } from 'react-router-dom';

import ImgCheck from '../assets/img/icons/check.svg'
import Imglogo from '../assets/img/logo/logo-catalog.svg';

const Footer = () => {
   const screenWidth = window.screen.width <= 1000;

   const [showContacts, setShowContacts] = useState(screenWidth ? false : true);
   const [showHelp, setShowHelp] = useState(screenWidth ? false : true);

   const menuList = [
      { name: 'Как оформить заказ', link: 'page404' },
      { name: 'Способы оплаты', link: 'page404' },
      { name: 'Обмен, возврат, гарантия', link: 'page404' },
      { name: 'Статусы заказов', link: 'page404' },
      { name: 'Доставка', link: 'page404' }
   ];

   const menuLinks = [
      { className: '_icon-youtube', link: 'https://www.youtube.com/' },
      { className: '_icon-vk', link: 'https://vk.com/' },
      { className: '_icon-instagram', link: 'https://instagram.com' },
      { className: '_icon-facebook', link: 'https://facebook.com' }
   ];

   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__top">
               <div className="footer__rows">
                  <div className="footer__column">
                     <Link to="/" className="column__logo">
                        <img src={Imglogo} alt="logo" />
                     </Link>
                     <div className="column__insta">
                        <p>Наш хэштег в Instagram <br />
                           <Link to="page404">#technogreen</Link>
                           <span> Грамотный выбор – залог эффективности работы</span>
                        </p>
                     </div>
                  </div>
                  <div className="footer__column">
                     <div className="column__contacts">
                        <h3 onClick={() => setShowContacts(!showContacts)} className={showContacts ? 'contact__title _active' : 'contact__title'}>
                           Контакты
                        </h3>
                        {showContacts ?
                           <ul className="contact__list">
                              <li className="contact__item">
                                 Адрес:
                                 <p>Москва, ул.Краснопролетарская, 36</p>
                              </li>
                              <li className="contact__item">
                                 Электронная почта:
                                 <p>technogreen@gmail.com</p>
                              </li>
                              <li className="contact__item">
                                 Режим работы:
                                 <p>Без выходных с 11:00 до 20:00</p>
                              </li>
                           </ul>
                           : null
                        }
                     </div>
                  </div>
                  <div className="footer__column">
                     <div className="column__help">
                        <h3 onClick={() => setShowHelp(!showHelp)} className={showHelp ? 'contact__title _active' : 'contact__title'}>
                           Помощь
                        </h3>
                        {showHelp ?
                           <ul className="column__help-list">
                              {menuList.map((obj, i) => (
                                 <li key={i} className="column__help-item">
                                    <Link to={`${obj.link}`}>{obj.name}</Link>
                                 </li>
                              ))}
                           </ul>
                           : null
                        }
                     </div>
                  </div>
                  <div className="footer__column">
                     <div className="column__send">
                        <form>
                           <h4 className="column__send-lable">
                              Подпишитесь на нашу рассылку
                           </h4>
                           <input autoComplete="off" type="text" name="form[]" data-value="Ваш e-mail"
                              className="column__send-input" />
                           <button type="submit" className="column__send-btn">
                              Подписаться
                              <img className="column__send-check" src={ImgCheck} alt="ok" />
                           </button>
                        </form>
                     </div>
                  </div>
                  <div className="footer__column">
                     <div className="contact__social">
                        Давайте дружить
                        <ul>
                           {menuLinks.map((obj, i) => (
                              <li key={i} className="social__item">
                                 <a className={obj.className} target="_blank" href={obj.link}></a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <div className="footer__column">
                     <div className="column__help-phone">
                        <Link className="column__help-tel" to="tel:+79008008020">+7 900 800 80 20</Link>
                        <Link className="column__help-link _popup-link" to="page404">Перезвоните мне</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <p>2021 © ТехноГрин. Все права защищены</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer;