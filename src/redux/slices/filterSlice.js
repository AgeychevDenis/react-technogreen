import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   filterId: 0,
   sort: {
      name: 'сначала с лучшей оценкой',
      sortProperty: 'rating'
   }
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setFilterId(state, action) {
         state.filterId = action.payload;
      },
      setSort(state, action) {
         state.sort = action.payload;
      }
   }
})

export const { setFilterId, setSort } = filterSlice.actions;

export default filterSlice.reducer;