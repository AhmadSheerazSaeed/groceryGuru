import { createContext, useState } from "react";

const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  /**
   * TODO: why not set the customer object in the context instead of 
   * setting individual customer fields 
   * i.e. const [customer, setCustomer] = useState();
   */
  const [customerName, setCustomerName] = useState("Guest");
  //check if customerId is on localStorage and then set the state 
  const initialCustomerId = localStorage.getItem("customerId") || "";
  const [customerId, setCustomerId] = useState(initialCustomerId);
  return (
    <CustomerContext.Provider
      value={{ customerName, setCustomerName, customerId, setCustomerId }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerContextProvider };
