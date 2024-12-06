import { BookItem } from "../Types";

import { Dispatch, ReducerAction } from "react";

//this interface represents the items(books) in our shopping cart
export interface ShoppingCartItem {
  id: number;
  items: BookItem;
  quantity: number;
}

export const CartTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
};

type AppActions = {
  id: number;
  type: "ADD" | "REMOVE" | "CLEAR";
  item: BookItem;
};

export const cartReducer = (
  state: ShoppingCartItem[],
  action: AppActions
): ShoppingCartItem[] => {
  switch (action.type) {
    case CartTypes.ADD:
      const item = state.find((item) => item.id === action.id);
      if (item) {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { id: action.id, items: action.item, quantity: 1 }];
    case CartTypes.REMOVE:
      const itemToRemove = state.find((item) => item.id === action.id);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return state.filter((item) => item.id !== action.id);
    case CartTypes.CLEAR:
      return [];
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};
