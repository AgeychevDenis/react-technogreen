import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from "../store";
import { Sort } from "./filterSlice";

type Product = {
   id: number,
   imageUrl: string,
   title: string,
   options: number,
   volume: number,
   voltage: number,
   weight: number,
   price: string,
   priceInMonth: string,
   rating: number
}

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error'
}

interface ProductSliceState {
   items: Product[],
   status: Status;
}

export type SearchProductParams = {
   order: string,
   sortBy: string,
   category: string,
   search: string,
   currentPage: string
}

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>('items/fetchProductsStatus', async (params) => {
   const { order, sortBy, category, search, currentPage } = params;
   const { data } = await axios.get<Product[]>(
      `https://6292ab089d159855f08d06e8.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
   );
   return data;
});

const initialState: ProductSliceState = {
   items: [],
   status: Status.LOADING
}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      setItems(state, action: PayloadAction<Product[]>) {
         state.items = action.payload;
      }
   },

   extraReducers: (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
         state.status = Status.LOADING;
         state.items = [];
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
         state.items = action.payload;
         state.status = Status.SUCCESS;
      })
      builder.addCase(fetchProducts.rejected, (state) => {
         state.status = Status.ERROR;
         state.items = [];
      })
   }
});

export const selectProductData = (state: RootState) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;