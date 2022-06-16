import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   searchValue: '',
   filterId: 0,
   currentPage: 1,
   sort: {
      name: 'сначала с лучшей оценкой', sortProperty: 'rating'
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
      },
      setCurrentPage(state, action) {
         state.currentPage = action.payload;
      },
      setFilters(state, action) {
         state.sort = action.payload.sort;
         state.currentPage = Number(action.payload.currentPage);
         state.filterId = Number(action.payload.filterId);
      },
   }
})

export const { setFilterId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;