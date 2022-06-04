import './NotFoundBlock.scss'

const NotFoundBlock = () => {
   return (
      <div className="error-page" style={{ 'textAlign': 'center' }}>
         <h1>404</h1>
         <span>Страница не найдена</span>
         <p>Мы сожалеем, но страница на которую Вы пытались перейти не существует. Пожалуйста вернитесь на предыдущую страницу или воспользуйтесь меню сайта</p>
      </div>
   )
}

export default NotFoundBlock;