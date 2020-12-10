import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../media/logo.png";

const Header = () => {
  const { pathname } = useLocation();

  const getClassName = (path) =>
    `nav-link-title${pathname === path ? "-active" : ""}`;

  return (
    <div className='header-container'>
      <div className='link-container'>
        <Link to={"/"}>
          <h4 className={getClassName("/")}>HOME</h4>
        </Link>
        <Link to={"/about"}>
          <h4 className={getClassName("/about")}>ABOUT</h4>
        </Link>
        <Link to={"/"}>
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <Link to={"/my-work"}>
          <h4 className={getClassName("/my-work")}>MY WORK</h4>
        </Link>
        <Link to={"/contact"}>
          <h4 className={getClassName("/contact")}>CONTACT</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
