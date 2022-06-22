import Select from 'react-select';
import data from './data.json';
import React from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate'

type FilterProps = {
   onClickFilter: Function,
}

const FilterBlock: React.FC<FilterProps> = ({ onClickFilter }) => {
   const handleChange = (newValue: any) => {
      onClickFilter(newValue.value);
   };

   useWhyDidYouUpdate('FilterBlock', onClickFilter)

   return (
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
   )
}

export default FilterBlock;