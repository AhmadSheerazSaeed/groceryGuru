import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import authorizationStyle from "./Authorization.module.css";
import axios from "axios";
import { CustomerContext } from "../context/CustomerContext";

function Authorization() {
  const { setCustomerName, setCustomerId } = useContext(CustomerContext);

  // use this hook to navigate user to the main page after the successfull login
  const navigate = useNavigate();

  const handleAutorizarionForm = async (e) => {
    e.preventDefault();

    const customerLoginFormData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(customerLoginFormData);
    // console.log(userData);

    try {
      const loggedinUser = await axios.post(
        "/api/customers/customerlogin",
        userData
      );
      console.log("user", loggedinUser.data.customerToReturn._id);
      // setting customer name to display in the welcome message
      setCustomerName(loggedinUser.data.customerToReturn.firstName);
      setCustomerId(loggedinUser.data.customerToReturn._id);

      // setting local storage with the name of the person logged in
      // to use it in the welcome section in the page
      localStorage.setItem(
        "userData",
        JSON.stringify(loggedinUser.data.customerToReturn.firstName)
      );

      // navigate use to main page
      navigate("/");
    } catch (error) {
      console.log(error.toString());
    }
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
