import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CategoryProvider from "./contexts/CategoryContext";
import { CartProvider } from "./contexts/CartContext";
import { OrderDetailsProvider } from "./contexts/OrderDetailsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <OrderDetailsProvider>
    <CartProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </CartProvider>
  </OrderDetailsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
