import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { CategoryItem } from "../Types";

// Define action types
export const SET_CATEGORIES = "SET_CATEGORIES";

// Action interface
export interface SetCategoriesAction {
  type: typeof SET_CATEGORIES;
  payload: CategoryItem[];
}

type CategoryAction = SetCategoriesAction;

export const categoryReducer = (
  state: CategoryItem[],
  action: CategoryAction
) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const CategoryContext = createContext<{
  map(
    arg0: (
      category: CategoryItem,
      index: number
    ) => import("react/jsx-runtime").JSX.Element
  ): React.ReactNode;
  slice(arg0: number, arg1: number): unknown;
  categoryList: CategoryItem[];
  dispatch: React.Dispatch<CategoryAction>;
}>({
  categoryList: [],
  dispatch: () => {},
  map: function (
    arg0: (
      category: CategoryItem,
      index: number
    ) => import("react/jsx-runtime").JSX.Element
  ): React.ReactNode {
    throw new Error("Function not implemented.");
  },
  slice: function (arg0: number, arg1: number): unknown {
    throw new Error("Function not implemented.");
  },
});
