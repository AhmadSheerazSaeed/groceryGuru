import React, { useContext } from "react";
import LogoIcon from "./logoandicon/LogoIcon";
import Navigation from "./navigation/Navigation";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import SearchBar from "./searchbar/SearchBar";
import headerStyles from "./Header.module.css";
import { CustomerContext } from "../context/CustomerContext";

function Header() {
  const { customerName } = useContext(CustomerContext);
  return (
    // I put div's around the components because without the div's i cannot
    // style the components and change the order of the components. Which are
    // necessary in mobile devices
    <div className={headerStyles.wrapper_header}>
      <div className={headerStyles.logoIcon}>
        <Link to={"/"}>
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
          <FaOpencart />
        </Link>

        <Link to="/signinandsignup">
          <FaUserTie />
        </Link>

        <div>Welcome {customerName}</div>
      </div>
    </div>
  );
}

export default Header;
