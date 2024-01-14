import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shops: [],
};

export const NewShopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    addShop: (state, action) => {
      state.shops.push(action.payload);
    },
  },
});

export const { addShop } = NewShopSlice.actions;
export default NewShopSlice.reducer;
