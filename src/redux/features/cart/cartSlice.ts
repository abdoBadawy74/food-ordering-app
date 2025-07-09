import { Extra, Size } from "@/generated/prisma";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size?: Size; // Optional size for items that have sizes
  extras?: Extra[]; // Optional extras for items that have extras
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
