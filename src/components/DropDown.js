import "./DropDown.css";
import { NavLink as RouterLink, Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import React, { useState } from "react";

function DropDown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                component={RouterLink}
                                to={item.path}
                                className={item.className}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DropDown;
