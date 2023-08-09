import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { CustomerContextProvider } from "./components/context/CustomerContext.jsx";
import { CartProvider } from "./components/context/CartContext.jsx";
import { SearchProductContextProvider } from "./components/context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <CustomerContextProvider>
    <SearchProductContextProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProductContextProvider>
  </CustomerContextProvider>

  //</React.StrictMode>,
);
