import { useState } from 'react';
import Select, { ActionMeta, OnChangeValue } from 'react-select';

import Sort from './Sort';
import data from './data.json'

const FilterBlock = ({ onClickFilter }) => {
   const handleChange = (newValue) => {
      onClickFilter(newValue.value);
   };


   return (
      <section className="catalog-main__filter">
         <div className="container">
            <form>
               <div className="filter-items">
                  {data.map((item, i) => (
                     <div key={i} className="filter-item">
                        <div className='filter-label'>
                           {item[0].title}
                        </div>
                        <div className="select">
                           <Select
                              onChange={handleChange}
                              defaultValue={item[0]}
                              options={item}
                              placeholder={'Выбрать...'}
                           />
                        </div>
                     </div>
                  ))}
               </div>
               <Sort />
            </form>
         </div >
      </section >
   )
}

export default FilterBlock