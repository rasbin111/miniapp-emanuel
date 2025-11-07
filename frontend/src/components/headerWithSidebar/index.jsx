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
import { FiAlertTriangle } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { TiExport } from "react-icons/ti";

const navigationItems = [
  { title: "Invoices", link: "/invoices", icon: <PiInvoice color="skyblue"/> },
  { title: "Customers", link: "/customers", icon: <FaUserCircle color="rgba(115, 178, 188, 1)"/> },
  { title: "My Business", link: "/my-business", icon: <FcBusiness color="rgba(166, 218, 210, 1)"/> },
  {
    title: "Invoice Journal",
    link: "/invoice-journal",
    icon: <PiInvoiceFill color="rgba(88, 128, 181, 1)"/>,
  },
  { title: "Price List", link: "/price-list", icon: <GiPriceTag color="rgba(110, 221, 226, 1)"/> },
  {
    title: "Multiple Invoicing",
    link: "/multiple-invoicing",
    icon: <PiInvoiceBold color="rgba(42, 211, 217, 1)"/>,
  },

  {
    title: "Unpaid Invoices",
    link: "/unpaid-invoices",
    icon: <FiAlertTriangle color="rgba(191, 92, 92, 1)"/>,
  },
    {
    title: "Offer",
    link: "/offer",
    icon: <BiSolidOffer color="skyblue"/>,
  },

    {
    title: "Inventory Control",
    link: "/inventory-control",
    icon: <MdOutlineInventory color="lightblue"/>,
    inActive: true,
  },

    {
    title: "Member Invoicing",
    link: "/member-invoicing",
    icon: <FaFileInvoice color="rgba(53, 205, 207, 1)"/>,
    inActive: true,
  },
    {
    title: "Import/Export",
    link: "/import-export",
    icon: <TiExport color="rgba(17, 153, 174, 1)"/>,
  },
  { title: "Log out", link: "/logout", icon: <BiLogOut color="red"/> },
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
                  className={item.inActive? "nav-item link-not-working": "nav-item"}
                >
                  <div className={location.pathname === item.link? "active-link": ""}> </div>
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
