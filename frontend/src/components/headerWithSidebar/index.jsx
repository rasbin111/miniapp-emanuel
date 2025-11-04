import { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiInvoice, PiInvoiceBold, PiInvoiceFill } from "react-icons/pi";
import { FcBusiness } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";
import { LanguageContext } from "../../context/languageContext";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import "./styles.css";
import { NavLink, Outlet, useLocation } from "react-router";

const navigationItems = [
  { title: "Invoices", link: "/invoices", icon: <PiInvoice /> },
  { title: "Customers", link: "/customers", icon: <FaUserCircle /> },
  { title: "My Business", link: "/my-business", icon: <FcBusiness /> },
  {
    title: "Invoice Journal",
    link: "/invoice-journal",
    icon: <PiInvoiceFill />,
  },
  { title: "Price List", link: "/price-list", icon: <GiPriceTag /> },
  {
    title: "Multiple Invoicing",
    link: "/multiple-invoicing",
    icon: <PiInvoiceBold />,
  },
  { title: "Log out", link: "/logout", icon: <BiLogOut /> },
];

const HeaderWithSidebar = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const [showLangSelector, setShowLangSelector] = useState(false);
  const location = useLocation();

  return (
    <div className="main-content">
      <div>
        <div className="heading-container">
          <div className="heading-left-section">
            <div className="user-box">
              <div className="dashboard-icon-container">
                <img src="/face.png" alt="Icon" className="dashboard-icon" />
              </div>
              <div className="user-info">
                <span>John Andre</span>
                <span>Staford As</span>
              </div>
            </div>
            <GiHamburgerMenu
              className="sidebar-burger-menu"
              onClick={() => setShowMenuItems((prev) => !prev)}
            />
          </div>
          <span className="lang-selector-container">
            <div
              onClick={() => setShowLangSelector((prev) => !prev)}
              className="lang-selector lang-selector-item"
            >
              {language === "eng" ? "English" : "Svenska"}
              <img
                src={language === "eng" ? "eng.png" : "se.png"}
                className="lang-selector-img"
              />
            </div>
            {showLangSelector && (
              <div className="language-dd-list">
                <div
                  className="lang-selector-item"
                  onClick={() => {
                    setShowLangSelector(false);
                    setLanguage("swe");
                  }}
                >
                  {" "}
                  Svenska <img src="se.png" className="lang-selector-img" />
                </div>
                <div
                  className="lang-selector-item"
                  onClick={() => {
                    setShowLangSelector(false);
                    setLanguage("eng");
                  }}
                >
                  {" "}
                  English <img src="eng.png" className="lang-selector-img" />
                </div>
              </div>
            )}
          </span>
        </div>
        <div className="sidebar-main">
          <div
            className={
              showMenuItems
                ? "sidebar-menu-box sidebar-menu-list"
                : "sidebar-menu-box"
            }
          >
            <h2> Menu </h2>
            <nav
              className={
                showMenuItems
                  ? "sidebar-navigation-items sidebar-nav-list"
                  : "sidebar-navigation-items"
              }
            >
              {navigationItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={
                    location.pathname === item.link
                      ? "nav-item active-nav-item"
                      : "nav-item"
                  }
                >
                  {location.pathname === item.link? <div> </div>: ""}
                  {item.icon}
                  <span className="title">{item.title}</span>
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSidebar;
