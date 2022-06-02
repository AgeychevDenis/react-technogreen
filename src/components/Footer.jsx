import logoFooter from '../assets/img/logo/logo.svg'

const Footer = () => {
   return (
      <div class="footer">
         <div class="container">
            <div class="footer__top">
               <div class="footer__rows">
                  <div class="footer__column column-footer__order">
                     <a data-da=".footer__rows,1000,0" href="#" class="column__logo">
                        <img src={logoFooter} alt="logo" />
                     </a>
                     <div class="column__insta">
                        <p>Наш хэштег в Instagram
                           <a href="#">#technogreen</a>
                           <span>Грамотный выбор – залог эффективности работы</span>
                        </p>
                     </div>
                     <div class="column__send">
                        <form>
                           <h4 class="column__send-lable">
                              Подпишитесь на нашу рассылку
                           </h4>
                           <input autocomplete="off" type="text" name="form[]" data-value="Ваш e-mail"
                              class="column__send-input" />
                           <button type="submit" class="column__send-btn">
                              Подписаться
                              <img class="column__send-check" src="img/icons/check.svg" alt="ok" />
                           </button>
                        </form>
                     </div>
                  </div>
                  <div data-spollers="1000,max" class="footer__column">
                     <div class="column__contacts">
                        <h3 data-spoller class="contact__title">
                           Контакты
                        </h3>
                        <ul class="contact__list">
                           <li class="contact__item">
                              Адрес:
                              <p>Москва, ул.Краснопролетарская, 36</p>
                           </li>
                           <li class="contact__item">
                              Электронная почта:
                              <p>technogreen@gmail.com</p>
                           </li>
                           <li class="contact__item">
                              Режим работы:
                              <p>Без выходных с 11:00 до 20:00</p>
                           </li>
                        </ul>
                        <div data-da=".column-footer__order,1000,3" class="contact__social">
                           Давайте дружить
                           <ul>
                              <li class="social__item">
                                 <a class="_icon-youtube" href="#"></a>
                              </li>
                              <li class="social__item">
                                 <a class="_icon-vk" href="#"></a>
                              </li>
                              <li class="social__item">
                                 <a class="_icon-instagram" href="#"></a>
                              </li>
                              <li class="social__item">
                                 <a class="_icon-facebook" href="#"></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div data-spollers="1000,max" class="footer__column">
                     <div class="column__help">
                        <h3 data-spoller class="contact__title">
                           Помощь
                        </h3>
                        <ul class="column__help-list">
                           <li class="column__help-item">
                              <a href="#">Как оформить заказ</a>
                           </li>
                           <li class="column__help-item">
                              <a href="#">Способы оплаты</a>
                           </li>
                           <li class="column__help-item">
                              <a href="#">Обмен, возврат, гарантия</a>
                           </li>
                           <li class="column__help-item">
                              <a href="#">Статусы заказов</a>
                           </li>
                           <li class="column__help-item">
                              <a href="#">Доставка</a>
                           </li>
                        </ul>
                        <div data-da=".column-footer__order,1000,5" class="column__help-phone">
                           <a class="column__help-tel" href="tel:+79008008020">+7 900 800 80 20</a>
                           <a class="column__help-link _popup-link" href="#callback">Перезвоните мне</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="footer__bottom">
               <p>2021 © ТехноГрин. Все права защищены</p>
            </div>
         </div>
      </div>
   )
}

export default Footer;