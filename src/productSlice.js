import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [],
    error: "",
  },
  reducers: {
    getProductsFetch: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsFetch, getProductsSuccess, getProductsFailure } =
  productSlice.actions;

export default productSlice.reducer;
