import { useNavigate } from "react-router-dom";
import "../assets/css/OrderConfirmation.css";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { useContext } from "react";
import { OrderDetailsActionTypes } from "../reducers/OrderDetailsReducer";
import ConfirmationTable from "./ConfirmationTable";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, dispatchOrder] = useContext(OrderDetailsContext);

  const handleClickConfirm = () => {
    dispatchOrder({
      type: OrderDetailsActionTypes.CLEAR,
    });
    navigate("/");
  };

  const orderDate = () => {
    const date = new Date(orderDetails.order.dateCreated);
    return date.toLocaleString();
  };

  const ccExpDate = (): Date => {
    return new Date(orderDetails.customer.ccExpDate);
  };

  const maskCreditCard = (cardNumber: string, expDate: Date): string => {
    const masked = cardNumber
      ?.slice(0, -4)
      ?.replace(/\d/g, "*")
      ?.replace(/(.{4})/g, "$1 ");
    const lastFour = cardNumber?.slice(-4);

    const formattedExpDate = expDate?.toLocaleString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
    return `${masked}${lastFour} (${formattedExpDate})`.trim();
  };

  return (
    <div className="confirmation-page">
      <h2 className="order-conf-h2">Order Confirmed!</h2>
      <p className="order-conf-p">
        Thank you for your purchase. Your order has been successfully placed.
      </p>
      <div className="confirmation-details">
        <div className="transaction-details">
          <h3>Transaction Details</h3>
          <ul>
            <li>
              <strong>Confirmation #:</strong>{" "}
              {orderDetails?.order?.confirmationNumber}
            </li>
            <li>
              <strong>Date:</strong> {orderDate()}
            </li>
          </ul>
        </div>
        <div className="customer-details">
          <h3>Customer Information</h3>
          <ul>
            <li>
              <strong>Name:</strong> {orderDetails?.customer?.customerName}
            </li>
            <li>
              <strong>Email:</strong> {orderDetails?.customer?.email}
            </li>
            <li>
              <strong>Address:</strong> {orderDetails?.customer?.address}
            </li>
            <li>
              <strong>Phone:</strong> {orderDetails?.customer?.phone}
            </li>
            <li>
              <strong>Payment:</strong>{" "}
              {maskCreditCard(orderDetails?.customer?.ccNumber, ccExpDate())}
            </li>
          </ul>
        </div>
        <ConfirmationTable />
        <div className="summary">
          <h3>Summary</h3>
          <p>
            <strong>Surcharge:</strong> $3.50
          </p>
          <p>
            <strong>Total:</strong> $123.50
          </p>
        </div>
      </div>
      <button onClick={handleClickConfirm} className="confirm-button">
        Return to Home
      </button>
    </div>
  );
};

export default OrderConfirmation;
