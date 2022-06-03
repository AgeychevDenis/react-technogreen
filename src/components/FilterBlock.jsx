import React from 'react'

const FilterBlock = () => {
   return (
      <section className="catalog-main__filter">
         <div className="container">
            <form>
               <div className="filter-items">
                  <div className="filter-item">
                     <div className="filter-label">Самоходная</div>
                     <div className="select select_form">
                        <select name="form[]" className="form">
                           <option value="1" defaultValue="selected">Есть</option>
                           <option value="2">Нет</option>
                        </select>
                     </div>
                  </div>
                  <div className="filter-item">
                     <div className="filter-label">Мульчирование</div>
                     <div className="select select_form">
                        <select name="form[]" className="form">
                           <option value="1" defaultValue="selected">Любой</option>
                           <option value="2">Есть</option>
                           <option value="3">Нет</option>
                        </select>
                     </div>
                  </div>
                  <div className="filter-item">
                     <div className="filter-label">Напряжение аккумулятора</div>
                     <div className="select select_form">
                        <select name="form[]" className="form">
                           <option value="1" defaultValue="selected">Все</option>
                           <option value="2">18 В</option>
                           <option value="3">20 В</option>
                           <option value="4">24 В</option>
                           <option value="5">40 В</option>
                           <option value="6">48 В</option>
                           <option value="7">72 В</option>
                           <option value="8">96 В</option>
                        </select>
                     </div>
                  </div>
                  <div className="filter-item">
                     <div className="filter-label">Объем травосборника (л)</div>
                     <div className="select select_form">
                        <select name="form[]" className="form">
                           <option value="1" defaultValue="selected">Все</option>
                           <option value="2">Менее 20</option>
                           <option value="3">40.1 - 60</option>
                           <option value="4">60.1 - и более</option>
                        </select>
                     </div>
                  </div>
                  <div className="filter-item">
                     <div className="filter-label">Мощность (Вт)</div>
                     <div className="select select_form">
                        <select name="form[]" className="form">
                           <option value="1" defaultValue="selected">Все</option>
                           <option value="2">Менее 500</option>
                           <option value="3">500.01 - 1000</option>
                           <option value="4">1000.01 - 1500</option>
                           <option value="5">1500.01 - 2000</option>
                           <option value="6">2000.01. и более</option>
                        </select>
                     </div>
                  </div>
                  <div className="filter-item">
                     <div className="filter-label">Вес (кг)</div>
                     <div className="select select_form">
                        <select name="form[]" className="form">
                           <option value="1" defaultValue="selected">Все</option>
                           <option value="2">Менее 10</option>
                           <option value="3">10.01 - 15</option>
                           <option value="4">15.01 - 25</option>
                           <option value="5">25.01 - 35</option>
                           <option value="6">35.01. и более</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div className="filter-btn">
                  <button type="button">Сбросить</button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default FilterBlock