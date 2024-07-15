import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  loading: true,
};
const url = "https://course-api.com/react-useReducer-cart-project";
export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []; // we can return new state as well
      // return {...state, cartItems: []}
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.loading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.loading = false;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
