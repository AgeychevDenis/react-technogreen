import React from 'react';
import Select from 'react-select';

const data = [
   {
      "self": [
         { value: 1, label: 'Есть' },
         { value: 2, label: 'Нет' }
      ],
      "mulching": [
         { value: 1, label: 'Любой' },
         { value: 2, label: 'Есть' },
         { value: 3, label: 'Нет' }
      ],
      "voltage": [
         { value: 1, label: 'Все' },
         { value: 2, label: '18 В' },
         { value: 3, label: '20 В' },
         { value: 4, label: '40 В' },
         { value: 5, label: '72 В' }
      ],
      "volume": [
         { value: 1, label: 'Все' },
         { value: 2, label: 'Менее 20' },
         { value: 3, label: '40.1 - 60' },
         { value: 4, label: '60.1 - и более' }
      ],
      "power": [
         { value: 1, label: 'Все' },
         { value: 2, label: 'Менее 500' },
         { value: 3, label: '500.01 - 1000' },
         { value: 4, label: '1000.01 - 1500' },
         { value: 5, label: '1500.01 - 2000' },
         { value: 6, label: '2000.01. и более' }
      ],
      "weight": [
         { value: 1, label: 'Все' },
         { value: 2, label: 'Менее 10' },
         { value: 3, label: '10.01 - 15' },
         { value: 4, label: '15.01 - 25' },
         { value: 5, label: '25.01 - 35' },
         { value: 6, label: '35.01. и более' }
      ]
   }
]

const FilterBlock = () => {
   console.log(data[0].self);

   return (
      <>
         <section className="catalog-main__filter">
            <div className="container">
               <form>
                  <div className="filter-items">
                     <div className="filter-item">
                        <div className="filter-label">Самоходная</div>
                        <div className="select">
                           <Select
                              options={data[0].self}
                           />
                        </div>
                     </div>
                     <div className="filter-item">
                        <div className="filter-label">Мульчирование</div>
                        <div className="select select_form">
                           <Select
                              options={data[0].mulching}
                           />
                        </div>
                     </div>
                     <div className="filter-item">
                        <div className="filter-label">Напряжение аккумулятора</div>
                        <div className="select select_form">
                           <Select
                              options={data[0].voltage}
                           />
                        </div>
                     </div>
                     <div className="filter-item">
                        <div className="filter-label">Объем травосборника (л)</div>
                        <div className="select select_form">
                           <Select
                              options={data[0].volume}
                           />
                        </div>
                     </div>
                     <div className="filter-item">
                        <div className="filter-label">Мощность (Вт)</div>
                        <div className="select select_form">
                           <Select
                              options={data[0].power}
                           />
                        </div>
                     </div>
                     <div className="filter-item">
                        <div className="filter-label">Вес (кг)</div>
                        <div className="select select_form">
                           <Select
                              options={data[0].weight}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="filter-btn">
                     <button type="button">Сбросить</button>
                  </div>
               </form>
            </div>
         </section>
      </>

   )
}

export default FilterBlock