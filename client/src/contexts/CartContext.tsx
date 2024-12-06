import {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";
import { cartReducer, ShoppingCartItem } from "../reducers/CartReducer";

const initialCartState: ShoppingCartItem[] = [];

export const CartContext = createContext<{
  cart: ShoppingCartItem[];
  dispatch: Dispatch<any>;
}>({
  cart: initialCartState,
  dispatch: () => null,
});

CartContext.displayName = "CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      try {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        return (storedCart as ShoppingCartItem[]) || initialState;
      } catch (error) {
        console.error("Error parsing cart from localStorage", error);
        return initialState;
      }
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
