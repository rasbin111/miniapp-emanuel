import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./styles.css";

const HeaderWithBackground = () => {
    const [showMenuItems, setShowMenuItems] = useState(false);
    const [showLangSelector, setShowLangSelector] = useState(false)
    return (
        <div>
            <img src="bg.jpg" alt="bg" className="background-img" />
            <nav className="navigation-container">
                <header className="navigation-header">
                    <GiHamburgerMenu className="burger-menu" onClick={() =>
                        setShowMenuItems(prev => !prev)
                    } />
                    <img src="diamond.png" alt="" className="logo" />
                    <div className={showMenuItems ? `right-section-nav nav-list` : `right-section-nav`}>
                        <a href="/home" className="navigation-item"> Home </a>
                        <a href="/order" className="navigation-item"> Order </a>
                        <a href="/customers" className="navigation-item"> Our Customers </a>
                        <a href="/about" className="navigation-item"> About Us </a>
                        <a href="/contact-us" className="navigation-item"> Contact Us </a>

                    </div>
                    <span className="lang-selector-container">
                        <div onClick={() =>
                            setShowLangSelector(prev => !prev)
                        } className="lang-selector lang-selector-item">
                            English
                            <img src="eng.png" className="lang-selector-img" />
                        </div>
                        {showLangSelector &&
                            <div className="language-dd-list">
                                <div className="lang-selector-item"> Svenska <img src="se.png" className="lang-selector-img" /></div>
                                <div className="lang-selector-item"> English <img src="eng.png" className="lang-selector-img" /></div>
                            </div>
                        }
                    </span>
                </header>
            </nav >
        </div>
    )
}

export default HeaderWithBackground