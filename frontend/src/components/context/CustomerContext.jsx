import { createContext, useState } from "react";

const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  // just to check, delete it later
  const [customerName, setCustomerName] = useState("Guest");
  return (
    <CustomerContext.Provider value={{ customerName, setCustomerName }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerContextProvider };
