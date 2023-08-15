import React, { useContext } from "react";
import logoutStyle from "./Logout.module.css";
import { CustomerContext } from "../../context/CustomerContext";

function Logout() {
  const { customerName, setCustomerName } = useContext(CustomerContext);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("customerId")
    setCustomerName("Guest");
    window.location.reload(); // Reload the page after logout
  };

  return (
    <div onClick={handleLogout} className={logoutStyle.mainDiv}>
      Logout
    </div>
  );
}

export default Logout;
