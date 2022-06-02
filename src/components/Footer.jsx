import logo from '../assets/img/logo/logo-catalog.svg'

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="footer__top">
               <div className="footer__rows">
                  <div className="footer__column column-footer__order">
                     <a data-da=".footer__rows,1000,0" href="#" className="column__logo">
                        <img src={logo} alt="logo" />
                     </a>
                     <div className="column__insta">
                        <p>Наш хэштег в Instagram <br />
                           <a href="#">#technogreen</a>
                           <span> Грамотный выбор – залог эффективности работы</span>
                        </p>
                     </div>
                     <div className="column__send">
                        <form>
                           <h4 className="column__send-lable">
                              Подпишитесь на нашу рассылку
                           </h4>
                           <input autoComplete="off" type="text" name="form[]" data-value="Ваш e-mail"
                              className="column__send-input" />
                           <button type="submit" className="column__send-btn">
                              Подписаться
                              <img className="column__send-check" src="img/icons/check.svg" alt="ok" />
                           </button>
                        </form>
                     </div>
                  </div>
                  <div data-spollers="1000,max" className="footer__column">
                     <div className="column__contacts">
                        <h3 data-spoller className="contact__title">
                           Контакты
                        </h3>
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
                        <div data-da=".column-footer__order,1000,3" className="contact__social">
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
                  </div>
                  <div data-spollers="1000,max" className="footer__column">
                     <div className="column__help">
                        <h3 data-spoller className="contact__title">
                           Помощь
                        </h3>
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
                        <div data-da=".column-footer__order,1000,5" className="column__help-phone">
                           <a className="column__help-tel" href="tel:+79008008020">+7 900 800 80 20</a>
                           <a className="column__help-link _popup-link" href="#callback">Перезвоните мне</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <p>2021 © ТехноГрин. Все права защищены</p>
            </div>
         </div>
      </div>
   )
}

export default Footer;