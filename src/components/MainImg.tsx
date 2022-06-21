import mainImg from '../assets/img/catalog-main/catalog-main__image-2.jpg';

const MainImg = () => {
   return (
      <section className="catalog-main__image">
         <div className="container">
            <div className="main-image _ibg">
               <img src={mainImg} alt="Картинка" />
            </div>
         </div>
      </section>
   )
}

export default MainImg;