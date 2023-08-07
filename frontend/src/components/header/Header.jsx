import React, { useContext } from "react";
import LogoIcon from "./logoandicon/LogoIcon";
import Navigation from "./navigation/Navigation";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import SearchBar from "./searchbar/SearchBar";
import headerStyles from "./Header.module.css";
import { CustomerContext } from "../context/CustomerContext";
import { CartContext } from "../context/CartContext";
import Logout from "./logout/Logout";

function Header() {
  const { customerName, setCustomerName } = useContext(CustomerContext);
const {cartItems} =  useContext(CartContext)
  {
    /*checking that customer already saved in the localStorage*/
  }
  const storedUserName = localStorage.getItem("userData");
  const savedUserName = JSON.parse(storedUserName);
  if (savedUserName) {
    setCustomerName(savedUserName);
  }

  return (
    // I put div's around the components because without the div's i cannot
    // style the components and change the order of the components. Which are
    // necessary in mobile devices
    <div className={headerStyles.wrapper_header}>
      <div className={headerStyles.logoIcon}>
        <Link className={headerStyles.link} to={"/"}>
          <LogoIcon />
        </Link>
      </div>

      <div className={headerStyles.navigation}>
        <Navigation />
      </div>

      <div className={headerStyles.searchBar}>
        <SearchBar />
      </div>

      <div className={headerStyles.wrapper_signIn_cart}>
        <Link to="/cart">
          <>
            <FaOpencart style={{ color: "black" }} />
            <sup>{cartItems.length}</sup>
          </>
        </Link>
        <Link to="/signinandsignup">
          <FaUserTie style={{ color: "black" }} />
        </Link>

        <div>Welcome {customerName}</div>
        <div>{customerName !== "Guest" ? <Logout /> : ""}</div>
      </div>
    </div>
  );
}

export default Header;
