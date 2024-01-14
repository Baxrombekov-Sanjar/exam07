import { configureStore } from "@reduxjs/toolkit";
import NewShopSlice from "../features/NewShop/NewShopSlice";

export const store = configureStore({
  reducer: {
    shops: NewShopSlice,
  },
});
