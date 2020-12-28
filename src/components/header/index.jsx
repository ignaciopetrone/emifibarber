import React, { useContext } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../media/logo.png";
import { isBrowser, isMobile } from "react-device-detect";
import PersistentDrawerLeft from "../drawer";
import LanguageContext from "../../utils/language-context";

const Header = () => {
  const { pathname } = useLocation();
  const { language } = useContext(LanguageContext);

  const getClassName = (path) => {
    if (isMobile) {
      return `link-title${pathname === path ? " is-active" : ""}`;
    } else {
      return `nav-link-title${pathname === path ? " active" : ""}`;
    }
  };

  const navLinks = [
    {
      title: "Home",
      path: `/${language}/`,
      classes: getClassName(`/${language}/`),
      icon: <i className="fas fa-home link-icon"></i>,
    },
    {
      title: "About",
      path: `/${language}/about`,
      classes: getClassName(`/${language}/about`),
      icon: <i className="fas fa-user link-icon"></i>,
    },
    {
      title: "My work",
      path: `/${language}/my-work`,
      classes: getClassName(`/${language}/my-work`),
      icon: <i className="fas fa-cut link-icon"></i>,
    },
    {
      title: "Prices",
      path: `/${language}/prices`,
      classes: getClassName(`/${language}/prices`),
      icon: <i className="fas fa-euro-sign link-icon"></i>,
    },
    {
      title: "Contact",
      path: `/${language}/contact`,
      classes: getClassName(`/${language}/contact`),
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
          <Link to={`/${language}/`}>
            <img className="desktop-logo" src={logo} alt="logo" />
          </Link>
          {navLinks.map(({ title, path, classes }) => (
            <Link to={path} key={path}>
              <h4 className={classes}>{title.toUpperCase()}</h4>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
