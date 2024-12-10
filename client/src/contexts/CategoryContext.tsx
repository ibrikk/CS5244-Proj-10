import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useReducer,
} from "react";
import axios from "axios";
import { CategoryItem } from "../Types";
import {
  categoryReducer,
  SetCategoriesAction,
  SET_CATEGORIES,
} from "../reducers/CategoryReducer";

export const CategoryContext = createContext<
  [CategoryItem[], React.Dispatch<SetCategoriesAction>]
>([[], () => null]);

CategoryContext.displayName = "CategoryContext";

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [categoryList, dispatch] = useReducer(categoryReducer, []);

  useEffect(() => {
    axios
      .get(
        // "http://webdev.cs.vt.edu:8080/IbrahimBookstoreReactTransact/api/categories"
        "http://localhost:8080/IbrahimBookstoreReactTransact/api/categories"
      )
      .then((result) =>
        dispatch({ type: SET_CATEGORIES, payload: result.data })
      )
      .catch(console.error);
  }, []);

  return (
    <CategoryContext.Provider value={[categoryList, dispatch]}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
