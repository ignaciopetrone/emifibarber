import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../media/logo.png";
import { isBrowser, isMobile } from "react-device-detect";
import PersistentDrawerLeft from "../drawer";

const Header = () => {
  const { pathname } = useLocation();

  const getClassName = (path) => {
    if (isMobile) {
      return `link-title${pathname === path ? " is-active" : ""}`;
    } else {
      return `nav-link-title${pathname === path ? " active" : ""}`;
    }
  };

  console.log(isMobile);

  const navLinks = [
    {
      title: "Home",
      path: "/",
      classes: getClassName("/"),
      icon: <i className="fas fa-home link-icon"></i>,
    },
    {
      title: "About",
      path: "/about",
      classes: getClassName("/about"),
      icon: <i className="fas fa-user link-icon"></i>,
    },
    {
      title: "My work",
      path: "/my-work",
      classes: getClassName("/my-work"),
      icon: <i className="fas fa-cut link-icon"></i>,
    },
    {
      title: "Prices",
      path: "/prices",
      classes: getClassName("/prices"),
      icon: <i className="fas fa-euro-sign link-icon"></i>,
    },
    {
      title: "Contact",
      path: "/contact",
      classes: getClassName("/contact"),
      icon: <i className="fas fa-envelope link-icon"></i>,
    },
  ];

  return (
    <div className="header-container">
      {isMobile && (
        <PersistentDrawerLeft navLinks={navLinks} pathname={pathname} />
      )}
      {isBrowser && (
        <div className="link-container">
          <Link to={"/"}>
            <img className="desktop-logo" src={logo} alt="logo" />
          </Link>
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
