import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryBookList";
import Footer from "./components/Footer";

import "./assets/css/global.css";
import "./App.css";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <Router
      basename="/IbrahimBookstoreReactTransact"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app-container">
        <Header isSignedIn={isSignedIn} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage toggleSignIn={toggleSignIn} />}
            />
            <Route
              path="/category/:categoryName"
              element={<CategoryPage toggleSignIn={toggleSignIn} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
