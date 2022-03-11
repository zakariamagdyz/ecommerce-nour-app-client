import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";
import cartSlice from "./cart/slice";

export const store = configureStore({
  reducer: { user: userSlice, cart: cartSlice },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
