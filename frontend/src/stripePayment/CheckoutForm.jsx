import React, { useContext, useEffect } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import checkoutFormCSS from "./checkoutForm.module.css";
import { RiCheckLine } from "react-icons/ri";
import { CartContext } from "../components/context/CartContext";

const CheckoutForm = () => {
  const { calculateCartTotalPrice, setCartItems } = useContext(CartContext);

  const handlePaymentBtn = () => {
    alert(`Payment of ${calculateCartTotalPrice()} € Has Been Made`);
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <form>
      <PaymentElement />

      <div className={checkoutFormCSS.wrapperBtn}>
        <Link
          to="/"
          className={checkoutFormCSS.checkoutBtn}
          onClick={handlePaymentBtn}
        >
          Pay {calculateCartTotalPrice()} €
        </Link>
      </div>
    </form>
  );
};

export default CheckoutForm;
