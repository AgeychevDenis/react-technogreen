import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum SortPropertyEnum {
   RATING_DESC = 'rating',
   RATING_ASC = '-rating',
   TITLE_DESC = 'title',
   PRICE_DESC = 'price',
   PRICE_ASC = '-price'
}

export type Sort = {
   name: string,
   sortProperty: SortPropertyEnum;
}

export interface FilterSliceState {
   searchValue: string,
   filterId: [],
   currentPage: number,
   sort: Sort
}

const initialState: FilterSliceState = {
   searchValue: '',
   filterId: [],
   currentPage: 1,
   sort: { name: 'сначала недорогие', sortProperty: SortPropertyEnum.PRICE_ASC }
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setSearchValue(state, action: PayloadAction<string>) {
         state.searchValue = action.payload;
      },
      setFilterId(state, action: PayloadAction<[]>) {
         state.filterId = action.payload;
      },
      setSort(state, action: PayloadAction<Sort>) {
         state.sort = action.payload;
      },
      setCurrentPage(state, action: PayloadAction<number>) {
         state.currentPage = action.payload;
      },
      setFilters(state, action: PayloadAction<FilterSliceState>) {
         state.sort = action.payload.sort;
         state.currentPage = Number(action.payload.currentPage);
         state.filterId = action.payload.filterId;
      },
   }
});

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;

export const { setFilterId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;