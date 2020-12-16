import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../media/logo.png";
import { isBrowser, isMobile } from "react-device-detect";
import PersistentDrawerLeft from "../drawer";

const Header = () => {
  const { pathname } = useLocation();

  const getClassName = (path) =>
    `nav-link-title${pathname === path ? " active" : ""}`;
  console.log(isBrowser, isMobile);

  const navLinks = [
    {
      title: "Home",
      path: "/",
      icon: <i className="fas fa-home link-icon"></i>,
    },
    {
      title: "About",
      path: "/about",
      icon: <i className="fas fa-user link-icon"></i>,
    },
    {
      title: "My work",
      path: "/my-work",
      icon: <i className="fas fa-cut link-icon"></i>,
    },
    {
      title: "Prices",
      path: "/prices",
      icon: <i className="fas fa-euro-sign link-icon"></i>,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <i className="fas fa-envelope link-icon"></i>,
    },
  ];

  return (
    <div className="header-container">
      {isMobile && (
        <PersistentDrawerLeft navLinks={navLinks} pathname={pathname} />
      )}
      {/* <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link> */}
      {isBrowser && (
        <div className="link-container">
          <Link to={"/"}>
            <h4 className={getClassName("/")}>HOME</h4>
          </Link>
          <Link to={"/about"}>
            <h4 className={getClassName("/about")}>ABOUT</h4>
          </Link>
          <Link to={"/my-work"}>
            <h4 className={getClassName("/my-work")}>MY WORK</h4>
          </Link>
          <Link to={"/prices"}>
            <h4 className={getClassName("/prices")}>PRICES</h4>
          </Link>
          <Link to={"/contact"}>
            <h4 className={getClassName("/contact")}>CONTACT</h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
