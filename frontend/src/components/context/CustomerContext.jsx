import { createContext, useState } from "react";

const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const [customerName, setCustomerName] = useState("Guest");
  return (
    <CustomerContext.Provider value={{ customerName, setCustomerName }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerContextProvider };
