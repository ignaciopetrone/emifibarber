import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../media/logo.png";
import { isBrowser, isMobile } from "react-device-detect";
import DrawerLeft from "../drawer";
import LanguageContext from "../../utils/language-context";
import LanguageSelector from "../language-selector";
import staticStrings from "../../utils/strings";
import "./styles.css";
import getClassByDevice from "../../utils/class-by-device";

const Header = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);

  const getClassName = (path) => {
    if (isMobile) {
      return `link-title${pathname === path ? " is-active" : ""}`;
    } else {
      return `nav-link-title${pathname === path ? " active" : ""}`;
    }
  };

  const navLinks = [
    {
      title: staticStrings.routes.home[language],
      path: `/${language}/`,
      classes: getClassName(`/${language}/`),
      icon: <i className="fas fa-home link-icon"></i>,
    },
    {
      title: staticStrings.routes.about[language],
      path: `/${language}/about`,
      classes: getClassName(`/${language}/about`),
      icon: <i className="fas fa-user link-icon"></i>,
    },
    {
      title: staticStrings.routes.myWork[language],
      path: `/${language}/my-work`,
      classes: getClassName(`/${language}/my-work`),
      icon: <i className="fas fa-cut link-icon"></i>,
    },
    {
      title: staticStrings.routes.prices[language],
      path: `/${language}/prices`,
      classes: getClassName(`/${language}/prices`),
      icon: <i className="fas fa-euro-sign link-icon"></i>,
    },
    {
      title: staticStrings.routes.contact[language],
      path: `/${language}/contact`,
      classes: getClassName(`/${language}/contact`),
      icon: <i className="fas fa-envelope link-icon"></i>,
    },
  ];

  return (
    <div
      className={`header-container header-container-${getClassByDevice(
        isMobile
      )}`}
    >
      {isMobile && (
        <DrawerLeft
          navLinks={navLinks}
          pathname={pathname}
          langRelated={{ language, setLanguage }}
          isMobile={isMobile}
        />
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
      <LanguageSelector langRelated={{ language, setLanguage }} />
    </div>
  );
};

export default Header;
