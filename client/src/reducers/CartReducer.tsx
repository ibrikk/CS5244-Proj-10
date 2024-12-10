import { BookItem, ShoppingCartItem } from "../Types";

import { Dispatch, ReducerAction } from "react";
//this interface represents the items(books) in our shopping cart

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
      const item = state.find((item) => item.book.bookId === action.id);
      if (item) {
        return state.map((item) =>
          item.book.bookId === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { book: action.item, quantity: 1 }];
    case CartTypes.REMOVE:
      const itemToRemove = state.find((item) => item.book.bookId === action.id);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return state.map((item) =>
          item.book.bookId === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return state.filter((item) => item.book.bookId !== action.id);
    case CartTypes.CLEAR:
      return [];
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};
