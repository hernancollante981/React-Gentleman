import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  CartProduct: [],
  ShippingCost: 0,
  hidden: true,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {},
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
