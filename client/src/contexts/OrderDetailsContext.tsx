import React, { createContext, useReducer } from "react";
import {
  orderDetailsReducer,
  initialOrderDetailsState,
  OrderDetailsAction,
} from "../reducers/OrderDetailsReducer";
import { OrderDetails } from "../Types";

export const OrderDetailsContext = createContext<
  [OrderDetails, React.Dispatch<OrderDetailsAction>]
>([initialOrderDetailsState, () => null]);

OrderDetailsContext.displayName = "OrderDetailsContext";

interface OrderDetailsProviderProps {
  children: React.ReactNode;
}

export const OrderDetailsProvider: React.FC<OrderDetailsProviderProps> = ({
  children,
}) => {
  const [orderDetails, dispatchOrder] = useReducer(
    orderDetailsReducer,
    initialOrderDetailsState
  );

  return (
    <OrderDetailsContext.Provider value={[orderDetails, dispatchOrder]}>
      {children}
    </OrderDetailsContext.Provider>
  );
};
