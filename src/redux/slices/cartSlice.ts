import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
   id: number,
   imageUrl: string,
   title: string,
   options: number,
   volume: number,
   voltage: number,
   weight: number,
   price: number,
   count: number
}

interface CartSliceState {
   totalPrice: number,
   items: CartItem[]
}

const initialState: CartSliceState = {
   totalPrice: 0,
   items: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem(state, action: PayloadAction<CartItem>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id);

         if (findItem) {
            findItem.count++;
         } else {
            state.items.push({
               ...action.payload,
               count: 1
            });
         }
         state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum
         }, 0)
      },
      minusItem(state, action: PayloadAction<number>) {
         const findItem = state.items.find(obj => obj.id === action.payload);

         if (findItem) {
            findItem.count--;
            state.totalPrice -= findItem.price;
         }
      },
      removeItem(state, action: PayloadAction<number>) {
         const findItem = state.items.find(obj => obj.id === action.payload);
         state.items = state.items.filter(obj => obj.id !== action.payload);
         if (findItem) {
            state.totalPrice -= findItem.price * findItem.count;
         }
      },
      clearItems(state) {
         state.items = [];
         state.totalPrice = 0;
      }
   }
});

export const selectCart = (state: RootState) => state.cart;

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;