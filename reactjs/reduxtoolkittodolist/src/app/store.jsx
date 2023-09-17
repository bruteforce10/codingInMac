import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
