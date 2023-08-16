import React, { useState } from "react";
import { Link } from "react-router-dom";
import forgotPasswordStyles from "./ForgotPassword.module.css";

function ForgotPassword() {
  const handleSendBtn = () => {
    alert("Email has been sent to reset the password");
  };

  return (
    <div>
      <form className={forgotPasswordStyles.formInputs}>
        <h1>Forgot Password</h1>

        <input type="text" placeholder="Email" name="emailInput" />

        <div className={forgotPasswordStyles.btnDiv}>
          <Link
            onClick={handleSendBtn}
            className={forgotPasswordStyles.link}
            to="/signinandsignup"
          >
            Send
          </Link>

          <Link to="/signinandsignup" className={forgotPasswordStyles.link}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
