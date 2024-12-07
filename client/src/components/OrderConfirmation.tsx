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

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h2 className="order-conf-h2">Order Confirmed!</h2>
        <p className="order-conf-p">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <button onClick={() => handleClickConfirm()} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
