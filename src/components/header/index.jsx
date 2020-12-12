import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../media/logo.png";

const Header = () => {
  const { pathname } = useLocation();

  const checkIsActive = (path) =>
    `nav-link-title${pathname === path ? " active" : ""}`;

  return (
    <div className="header-container">
      <div className="link-container">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to={"/"}>
          <h4 className={checkIsActive("/")}>HOME</h4>
        </Link>
        <Link to={"/about"}>
          <h4 className={checkIsActive("/about")}>ABOUT</h4>
        </Link>
        <Link to={"/my-work"}>
          <h4 className={checkIsActive("/my-work")}>MY WORK</h4>
        </Link>
        <Link to={"/prices"}>
          <h4 className={checkIsActive("/prices")}>PRICES</h4>
        </Link>
        <Link to={"/contact"}>
          <h4 className={checkIsActive("/contact")}>CONTACT</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
