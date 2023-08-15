import React, { useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../components/context/CartContext";
import stripePaymentPageCSS from "./stripePaymentPage.module.css";

const stripePromise = loadStripe(
  "pk_test_51NcvAMCcY2weikh25zZVDbHRacyPPj3QLsXuDsjHS5UMtmMXs5NVLVP4KzzshN9pNF6wYawWfdrBjuKV5FNR9k5R00nGebogFV"
);

function StripePaymentPage() {
  const { calculateCartTotalPrice } = useContext(CartContext);

  const options = {
    // passing the client secret obtained in step 3
    clientSecret:
      "pi_3NfSj5CcY2weikh21HKTnf39_secret_v19Dde0wqsUvyTJPUa195znvG",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  if (calculateCartTotalPrice() > 0) {
    return (
      <div>
        <p className={stripePaymentPageCSS.payableAmount}>
          {" "}
          Payable : {calculateCartTotalPrice().toFixed(2)}€
        </p>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    );
  } else {
    return <p className={stripePaymentPageCSS.mainHeading}>Nothing To Pay</p>;
  }
}

export default StripePaymentPage;
