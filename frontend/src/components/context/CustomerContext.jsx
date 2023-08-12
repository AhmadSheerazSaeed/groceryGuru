import { createContext, useState } from "react";

const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  /**
   * TODO: why not set the customer object in the context instead of 
   * setting customer fields 
   * i.e. const [customer, setCustomer] = useState();
   */
  const [customerName, setCustomerName] = useState("Guest");
  const [customerId, setCustomerId] = useState("");
  return (
    <CustomerContext.Provider
      value={{ customerName, setCustomerName, customerId, setCustomerId }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerContextProvider };
