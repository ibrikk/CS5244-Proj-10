import { useNavigate } from "react-router-dom";
import "../assets/css/OrderConfirmation.css";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { useContext } from "react";
import { OrderDetailsActionTypes } from "../reducers/OrderDetailsReducer";
import ConfirmationTable from "./ConfirmationTable";
import { asDollarsAndCents, VATAX } from "../Util";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, dispatchOrder] = useContext(OrderDetailsContext);
  let totalPrice: number = 0;

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

  const calctotalPrice = () => {
    for (let i = 0; i < orderDetails.books.length; i++) {
      totalPrice +=
        orderDetails.books[i].price * orderDetails.lineItems[i].quantity;
    }
    return totalPrice;
  };

  totalPrice = calctotalPrice();

  return (
    <>
      {orderDetails?.books.length === 0 ? null : (
        <div className="confirmation-page">
          <h2 className="order-conf-h2">Order Confirmed!</h2>
          <p className="order-conf-p">
            Thank you for your purchase. Your order has been successfully
            placed.
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
                  <strong>Payment:</strong>{" "}
                  {maskCreditCard(
                    orderDetails?.customer?.ccNumber,
                    ccExpDate()
                  )}
                </li>
              </ul>
            </div>
            <ConfirmationTable totalPrice={totalPrice} />
            <div className="summary">
              <h3>Summary</h3>
              <p>
                <strong>Surcharge:</strong>{" "}
                {asDollarsAndCents((totalPrice * VATAX) / 100)}
              </p>
              <p>
                <strong>Total:</strong>{" "}
                {asDollarsAndCents((totalPrice * VATAX) / 100 + totalPrice)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderConfirmation;
