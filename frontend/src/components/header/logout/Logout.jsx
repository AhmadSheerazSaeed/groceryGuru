import React, { useContext } from "react";
import logoutStyle from "./Logout.module.css";
import { CustomerContext } from "../../context/CustomerContext";

function Logout() {
  const { customerName, setCustomerName } = useContext(CustomerContext);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setCustomerName("Guest");
  };

  return (
    <div onClick={handleLogout} className={logoutStyle.mainDiv}>
      Logout
    </div>
  );
}

export default Logout;
