import React from "react";
import { Link } from "react-router-dom";
import authorizationStyle from "./Authorization.module.css";

function Authorization() {
  const handleAutorizarionForm = (e) => {
    e.preventDefault();

    const customerLoginFormData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(customerLoginFormData);
    console.log(userData);
  };

  return (
    <div>
      <form
        onSubmit={handleAutorizarionForm}
        className={authorizationStyle.formInputs}
      >
        <h1>Authorization</h1>

        <input
          className={authorizationStyle.email}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className={authorizationStyle.password}
          type="password"
          placeholder="Password"
          name="password"
        />

        <div className={authorizationStyle.btnDiv}>
          <button className={authorizationStyle.btnSubmit}>Send</button>
          <div>
            <Link className={authorizationStyle.linkStyle} to="/forgotPassword">
              Forgot your password?
            </Link>
            <Link className={authorizationStyle.linkStyle} to="/newcustomer">
              Don't have an account yet?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Authorization;
