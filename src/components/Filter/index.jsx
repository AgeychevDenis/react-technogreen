import Select from 'react-select';
import data from './data.json';

const FilterBlock = ({ onClickFilter }) => {
   const handleChange = (newValue) => {
      onClickFilter(newValue.value);
   };

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

export default FilterBlock