import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import "../assets/css/CheckoutPopUp.css";
import { Barcode } from "lucide-react";
import {
  CustomerForm,
  OrderDetails,
  ServerErrorResponse,
  months,
  years,
} from "../Types";
import {
  asDollarsAndCents,
  calculateTotalQuantity,
  isCreditCard,
  isMobilePhone,
  isvalidEmail,
  subtotal,
  VATAX,
} from "../Util";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { OrderDetailsActionTypes } from "../reducers/OrderDetailsReducer";

const CheckoutPopup: React.FC = () => {
  const now = new Date();
  const nowYear = now.getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCheckout = () => setIsOpen(!isOpen);

  const { cart, dispatch } = useContext(CartContext);

  const [formData, setFormData] = useState<CustomerForm>({
    name: "",
    address: "",
    phone: "",
    email: "",
    ccNumber: "",
    ccExpiryMonth: 0,
    ccExpiryYear: 0,
  });

  // useEffect(() => {
  //   console.log("Updated formData: ", formData);
  // }, [formData]);

  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ccNumberError, setCcNumberError] = useState("");

  enum CheckoutStatus {
    Pending = "PENDING",
    Error = "ERROR",
    OK = "OK",
  }

  const [checkoutStatus, setCheckOutStatus] = useState<CheckoutStatus | "">("");
  const [, dispatchOrder] = useContext(OrderDetailsContext);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "ccExpiryMonth" || name === "ccExpiryYear"
        ? parseInt(value, 10)
        : value;
    validateField(name, parsedValue.toString());
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (value.trim() === "") {
          setNameError("Name is required!");
        } else if (value.length < 4 || value.length > 45) {
          setNameError("Name must be at least 4 characters long!");
        } else {
          setNameError("");
        }
        break;
      case "email":
        if (value.trim() === "") {
          setEmailError("Email is required!");
        } else if (!isvalidEmail(value)) {
          setEmailError("Invalid email address!");
        } else {
          setEmailError("");
        }
        break;
      case "address":
        if (value.trim() === "") {
          setAddressError("Address is required!");
        } else if (value.length < 4) {
          setAddressError("Address must be at least 4 characters long!");
        } else {
          setAddressError("");
        }
        break;
      case "phone":
        if (value.trim() === "") {
          setPhoneError("Phone number is required!");
        } else if (!isMobilePhone(value)) {
          setPhoneError("Phone number not valid!");
        } else {
          setPhoneError("");
        }
        break;
      case "ccNumber":
        if (value.trim() === "") {
          setCcNumberError("Credit card number is required!");
        } else if (!isCreditCard(value)) {
          setCcNumberError("Card number is not valid!");
        } else {
          setCcNumberError("");
        }
        break;
      // "ccExpiryMonth" validation is done server-side
      default:
        break;
    }
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key as keyof CustomerForm] as string);
      if (
        (formData[key as keyof CustomerForm] as string).length === 0 ||
        (key === "name" && nameError) ||
        (key === "address" && addressError) ||
        (key === "phone" && phoneError) ||
        (key === "email" && emailError) ||
        (key === "ccNumber" && ccNumberError)
      ) {
        isValid = false;
      }
    });
    return isValid;
  };

  const submitOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setCheckOutStatus(CheckoutStatus.Pending);
      console.log("Form submitted:", formData);
      try {
        const orders = await placeOrder(formData);
        if (orders) {
          setCheckOutStatus(CheckoutStatus.OK);
          dispatchOrder({
            type: OrderDetailsActionTypes.UPDATE,
            payload: orders,
          });
          navigate("/confirmation");
        } else {
          setCheckOutStatus(CheckoutStatus.Error);
          console.log("Error placing order");
        }
      } catch (error) {
        setCheckOutStatus(CheckoutStatus.Error);
        console.error("Error during checkout:", error);
      }
    } else {
      setCheckOutStatus(CheckoutStatus.Error);
      console.log("Form has errors");
    }
  };

  const placeOrder = async (customerForm: CustomerForm) => {
    const order = { customerForm: customerForm, cart: { itemArray: cart } };

    const orders = JSON.stringify(order);
    console.log("orders", orders);
    const url = "api/orders";
    const orderDetails: OrderDetails = await axios
      .post(url, orders, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({ type: "CLEAR" });
        console.log("Order placed successfully", response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
    console.log("order deatils: ", orderDetails);
    return orderDetails;
  };

  return (
    <div>
      <button onClick={toggleCheckout} className="open-checkout-btn">
        Checkout &nbsp; <Barcode />
      </button>

      {isOpen && <div className="overlay" onClick={toggleCheckout}></div>}

      <div className={`checkout-panel ${isOpen ? "open" : ""}`}>
        <div className="checkout-header">
          <h2>Checkout</h2>
          <button
            onClick={toggleCheckout}
            className="close-btn"
            aria-label="Close checkout"
          >
            &times;
          </button>
        </div>

        {checkoutStatus === CheckoutStatus.Pending ? (
          <div className="order-processing">
            <Spinner />
            <p className="processing-text">
              Processing your order<span className="dot-animation">...</span>
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => submitOrder(e)}
            method="post"
            className="checkout-form"
          >
            <div className="form-group">
              <label htmlFor="name" className="field-title">
                Full Name
              </label>
              <input
                id="fname"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <> {nameError && <div className="error"> {nameError}</div>}</>

            <div className="form-group">
              <label htmlFor="address" className="field-title">
                Address
              </label>
              <input
                id="faddress"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <> {addressError && <div className="error"> {addressError}</div>}</>

            <div className="form-group">
              <label htmlFor="phone" className="field-title">
                Phone
              </label>
              <input
                id="fphone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <> {phoneError && <div className="error"> {phoneError}</div>}</>

            <div className="form-group">
              <label htmlFor="email" className="field-title">
                Email
              </label>
              <input
                id="femail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <> {emailError && <div className="error"> {emailError}</div>}</>

            <div className="form-group">
              <label htmlFor="ccNumber" className="field-title">
                Credit Card
              </label>
              <input
                id="ccNumber"
                type="text"
                name="ccNumber"
                value={formData.ccNumber}
                onChange={handleInputChange}
              />
            </div>
            <>
              {" "}
              {ccNumberError && <div className="error"> {ccNumberError}</div>}
            </>

            <div className="month-year">
              <div className="form-group">
                <label htmlFor="ccExpiryMonth" className="field-title">
                  Expiry Month
                </label>
                <select
                  className="checkout-select"
                  id="ccExpiryMonth"
                  name="ccExpiryMonth"
                  value={formData.ccExpiryMonth || ""}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Month
                  </option>
                  {months.map((month, index) => (
                    <option key={index + 1} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="ccExpiryYear" className="field-title">
                  Expiry Year
                </label>
                <select
                  className="checkout-select"
                  id="ccExpiryYear"
                  name="ccExpiryYear"
                  value={formData.ccExpiryYear || ""}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={nowYear + year}>
                      {nowYear + year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="total-border">
              <div className="total-container">
                <div className="items-b4tax-price">
                  <span>Items ({calculateTotalQuantity(cart)}): &nbsp;</span>
                  <span>{asDollarsAndCents(subtotal(cart))}</span>
                </div>
                <div className="surcharge">
                  <span>Surcharge: &nbsp;</span>
                  <span>
                    {asDollarsAndCents((subtotal(cart) * VATAX) / 100)}
                  </span>
                </div>
                <div className="total-text-price">
                  <span>Total: &nbsp;</span>
                  <span>
                    {asDollarsAndCents(
                      subtotal(cart) + (subtotal(cart) * VATAX) / 100
                    )}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Complete Purchase
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPopup;
