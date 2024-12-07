import { useNavigate } from "react-router-dom";
import "../assets/css/OrderConfirmation.css";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { useContext } from "react";
import { OrderDetailsActionTypes } from "../reducers/OrderDetailsReducer";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, dispatchOrder] = useContext(OrderDetailsContext);
  console.log("orderDetails Finally!!", orderDetails);

  const handleClickConfirm = () => {
    dispatchOrder({
      type: OrderDetailsActionTypes.CLEAR,
    });
    navigate("/");
  };

  const orderDate = () => {
    let date = new Date(orderDetails.order.dateCreated);
    return date.toLocaleString();
  };
  const ccExpDate = (): Date => {
    return new Date(orderDetails.customer.ccExpDate);
  };

  function maskCreditCard(cardNumber: string, expDate: Date): string {
    const masked = cardNumber
      .slice(0, -4)
      .replace(/\d/g, "*")
      .replace(/(.{4})/g, "$1 "); // Add spaces every 4 digits
    const lastFour = cardNumber.slice(-4);

    const formattedExpDate = expDate.toLocaleString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
    return `${masked}${lastFour} (${formattedExpDate})`.trim();
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h2 className="order-conf-h2">Order Confirmed!</h2>
        <p className="order-conf-p">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <div className="confirmationView">
          <ul>
            <li>Confirmation #: {orderDetails?.order?.confirmationNumber}</li>
            <li>{orderDate()}</li>
          </ul>
          {/* <ConfirmationTable /> */}
          <ul>
            <li>
              <b>Name:</b> {orderDetails?.customer?.customerName}
            </li>
            <li>
              <b>Address:</b> {orderDetails?.customer?.address}
            </li>
            <li>
              <b>Email:</b> {orderDetails?.customer?.email}
            </li>
            <li>
              <b>Phone:</b> {orderDetails?.customer?.phone}
            </li>
            <li>
              <b>Credit Card:</b>{" "}
              {maskCreditCard(orderDetails?.customer?.ccNumber, ccExpDate())}
            </li>
          </ul>
          <div id="customerInfo"></div>
        </div>
        <button onClick={() => handleClickConfirm()} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
