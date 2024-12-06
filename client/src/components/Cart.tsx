import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircleX, ShoppingBasket } from "lucide-react";
import { CartContext } from "../contexts/CartContext";
import CheckoutPopup from "./CheckoutPopup";
import CartTable from "./CartTable";
import "../assets/css/Cart.css";
import ContinueShoppingButton from "./buttons/ContinueShoppingButton";
import ClearCartButton from "./buttons/ClearCartButton";
import { asDollarsAndCents, subtotal } from "../Util";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Items in Your Cart</h1>
      {cart.length !== 0 ? (
        <>
          <ClearCartButton onClick={() => dispatch({ type: "CLEAR" })} />
          <CartTable />
          <div className="total">
            Sub-total: {asDollarsAndCents(subtotal(cart))}
          </div>
          <div className="btn-container">
            <div>
              <ContinueShoppingButton onClick={() => navigate(-1)} />
            </div>
            <div className="checkout-button">
              <CheckoutPopup />
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="cart-empty">Your cart is empty 🛒</h2>
          <div className="continue-shopping-btn-empty">
            <ContinueShoppingButton onClick={() => navigate(-1)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
