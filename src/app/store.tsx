import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../entities/cart/model/cartSlice";
import { productApi } from "../entities/product/api/productApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
