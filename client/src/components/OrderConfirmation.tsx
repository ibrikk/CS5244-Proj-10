import { useNavigate } from "react-router-dom";
import "../assets/css/OrderConfirmation.css";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h2 className="order-conf-h2">Order Confirmed!</h2>
        <p className="order-conf-p">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <button onClick={() => navigate("/")} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
