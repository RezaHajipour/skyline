import "./Navbar.css";
import { NavLink as RouterLink, Link } from "react-router-dom";
import logo from "../images/skyline-logo.png";
import React, { useState } from "react";
import DropDown from "./DropDown";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return (
        <div>
            <nav className="navbar">
                <Link component={RouterLink} to="/" className="navbar-logo">
                    <img src={logo} alt="logo" className="navbar-logo" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            component={RouterLink}
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            STARTSEITE
                        </Link>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            component={RouterLink}
                            to="/services"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            LEISTUNGEN
                            <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <DropDown />}
                    </li>
                    <li className="nav-item">
                        <Link
                            component={RouterLink}
                            to="/uber"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            ÜBER UNS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            component={RouterLink}
                            to="/kontakt"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            KONTAKT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

//  STARTSEITE LEISTUNGEN ÜBER UNS KONTAKT
//    <Link component={RouterLink} to="/leistungen">
//                         LEISTUNGEN
//                     </Link>
//                     <Link component={RouterLink} to="/uber">
//                         ÜBER UNS
//                     </Link>
//                     <Link component={RouterLink} to="/kontakt">
//                         KONTAKT
//                     </Link>
