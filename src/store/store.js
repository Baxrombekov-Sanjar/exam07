import { configureStore } from "@reduxjs/toolkit";
import NewShopSlice from "../features/NewShop/NewShopSlice";
import DarkModeSlice from "../features/DarkMode/DarkModeSlice";

export const store = configureStore({
  reducer: {
    shops: NewShopSlice,
    darkMode: DarkModeSlice,
  },
});
