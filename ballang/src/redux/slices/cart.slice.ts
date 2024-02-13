import { CartItem } from "@/types/CartItem.type";
import { Cloth } from "@/types/Cloth.type";
import { createSlice } from "@reduxjs/toolkit";

type CartStore = {
  items: CartItem[];
};

const initialState: CartStore = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: { type: string; payload: Cloth }) {
      const newCartItem: CartItem = {
        id: "",
        count: 1,
        cloth: action.payload,
      };
      state.items.push(newCartItem);
    },
    removeItem() {},
    clearItems(state) {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, clearItems } = cartSlice.actions;
