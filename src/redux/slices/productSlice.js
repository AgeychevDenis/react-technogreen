import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk('items/fetchProductsStatus', async (params) => {
   const { order, sortBy, category, search, currentPage } = params;
   const { data } = await axios.get(
      `https://6292ab089d159855f08d06e8.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
   );
   return data;
}
)

const initialState = {
   items: [],
   status: 'loading',
}


const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      setItems(state, action) {
         state.items = action.payload;
      }
   },
   extraReducers: {
      [fetchProducts.pending]: (state) => {
         state.status = 'loading';
         state.items = [];
      },
      [fetchProducts.fulfilled]: (state, action) => {
         state.items = action.payload;
         state.status = 'success';
      },
      [fetchProducts.rejected]: (state) => {
         state.status = 'error';
         state.items = [];
      }
   }
})

export const { setItems } = productSlice.actions;

export default productSlice.reducer;