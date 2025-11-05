import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getContentData } from "../../api/main";
import { LanguageContext } from "../../context/languageContext";
import "./styles.css";

const HeaderWithBackground = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showLangSelector, setShowLangSelector] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const { data: menuItems, isLoading } = useQuery({
    queryKey: ["menuItems", language],
    queryFn: async () => {
      const response = await getContentData(
        `/store/navigation-contents/?lang=${language}`
      );
      if (response.status === 200) return response.data;
    },
  });
  if (isLoading || !menuItems) return null;
  return (
    <div>
      <img src="bg.jpg" alt="" className="background-img" />
      <nav className="navigation-container">
        <header className="navigation-header">
          <GiHamburgerMenu
            className="burger-menu"
            onClick={() => setShowMenuItems((prev) => !prev)}
          />
          <img src="diamond.png" alt="" className="logo" />
          <div
            className={
              showMenuItems ? `right-section-nav nav-list` : `right-section-nav`
            }
          >
            <a href="/home" className="navigation-item">
              {" "}
              {menuItems.home}{" "}
            </a>
            <a href="/order" className="navigation-item">
              {" "}
              {menuItems.order}{" "}
            </a>
            <a href="/customers" className="navigation-item">
              {" "}
              {menuItems.our_customers}{" "}
            </a>
            <a href="/about" className="navigation-item">
              {" "}
              {menuItems.about_us}{" "}
            </a>
            <a href="/contact-us" className="navigation-item">
              {" "}
              {menuItems.contact_us}{" "}
            </a>
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
        </header>
      </nav>
    </div>
  );
};

export default HeaderWithBackground;
