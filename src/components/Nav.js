import "./Nav.css";
import { NavLink as RouterLink, Link } from "react-router-dom";
import logo from "../images/logo-ziya-black.svg";

function Nav() {
    return (
        <div className="NavContainer">
            <Link component={RouterLink} to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <div className="Item1">
                <button className="Button">Item 1</button>
                <ul>
                    <li>
                        <Link component={RouterLink} to="/uber">
                            Leistung 1
                        </Link>
                    </li>
                    <li>Subitem 2</li>
                </ul>
            </div>
            <Link component={RouterLink} to="/leistung" className="link">
                Leistung
            </Link>
            <Link component={RouterLink} to="/uber" className="link">
                Uber Uns
            </Link>
            <Link component={RouterLink} to="/kontakt" className="link">
                Kontakt
            </Link>
        </div>
    );
}

export default Nav;
