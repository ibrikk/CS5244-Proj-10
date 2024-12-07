import {
  BookItem,
  Customer,
  CustomerForm,
  LineItem,
  Order,
  OrderDetails,
} from "../Types";

export const OrderDetailsActionTypes = {
  UPDATE: "UPDATE",
  CLEAR: "CLEAR",
} as const;

export interface UpdateAction {
  type: typeof OrderDetailsActionTypes.UPDATE;
  payload: OrderDetails;
}

export interface ClearAction {
  type: typeof OrderDetailsActionTypes.CLEAR;
}

export type OrderDetailsAction = UpdateAction | ClearAction;

export const initialOrderDetailsState: OrderDetails = {
  order: {} as Order,
  customer: {} as Customer,
  books: [],
  lineItems: [],
};

export const orderDetailsReducer = (
  state: OrderDetails,
  action: OrderDetailsAction
): OrderDetails => {
  switch (action.type) {
    case OrderDetailsActionTypes.UPDATE:
      return action.payload;
    case OrderDetailsActionTypes.CLEAR:
      return initialOrderDetailsState;
    default:
      console.error(`Invalid action type: ${action}`);
      throw new Error(`Invalid action type: ${action}`);
  }
};
