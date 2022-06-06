import { useState } from 'react';
import { Link } from 'react-router-dom';

import ImgCheck from '../assets/img/icons/check.svg'
import Imglogo from '../assets/img/logo/logo-catalog.svg';

const Footer = () => {
   const screenWidth = window.screen.width <= 1000;

   const [showContacts, setShowContacts] = useState(screenWidth ? false : true);
   const [showHelp, setShowHelp] = useState(screenWidth ? false : true);

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
                           <a href="#">#technogreen</a>
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
                              <li className="column__help-item">
                                 <a href="#">Как оформить заказ</a>
                              </li>
                              <li className="column__help-item">
                                 <a href="#">Способы оплаты</a>
                              </li>
                              <li className="column__help-item">
                                 <a href="#">Обмен, возврат, гарантия</a>
                              </li>
                              <li className="column__help-item">
                                 <a href="#">Статусы заказов</a>
                              </li>
                              <li className="column__help-item">
                                 <a href="#">Доставка</a>
                              </li>
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
                           <li className="social__item">
                              <a className="_icon-youtube" href="#"></a>
                           </li>
                           <li className="social__item">
                              <a className="_icon-vk" href="#"></a>
                           </li>
                           <li className="social__item">
                              <a className="_icon-instagram" href="#"></a>
                           </li>
                           <li className="social__item">
                              <a className="_icon-facebook" href="#"></a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer__column">
                     <div className="column__help-phone">
                        <a className="column__help-tel" href="tel:+79008008020">+7 900 800 80 20</a>
                        <a className="column__help-link _popup-link" href="#callback">Перезвоните мне</a>
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