import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import newCustomerStyle from "./NewCustomer.module.css";
import axios from "axios";
import { CustomerContext } from "../context/CustomerContext";

function NewCustomer() {
  const { setCustomerName } = useContext(CustomerContext);
  // use this hook to navigate user to the main page after the successfull login
  const navigate = useNavigate();

  const handleNewCustomer = async (e) => {
    e.preventDefault();

    const newCustomerFormData = new FormData(e.currentTarget);
    const newCustomerData = Object.fromEntries(newCustomerFormData);

    //console.log(newCustomerData);
    try {
      await axios.post("/api/customers/createcustomer", newCustomerData);
      console.log(newCustomerData);

      // setting customer name to display in the welcome message
      setCustomerName(newCustomerData.firstName);

      // setting local storage with the name of the person logged in
      // to use it in the welcome section in the page
      localStorage.setItem(
        "userData",
        JSON.stringify(newCustomerData.firstName)
      );

      // navigate use to main page
      navigate("/");
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div className={newCustomerStyle.wrapperNewCustomer}>
      <form onSubmit={handleNewCustomer}>
        <h1>Registration</h1>
        <input type="text" placeholder="First Name" name="firstName" />
        <input type="text" placeholder="Last Name" name="lastName" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default NewCustomer;
