import React from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ className, text, to }) => {
    const location = useLocation();
    let query = "/" + location.search;

    return (
        <li className={className}>
            <NavLink
                className={`${
                    query === to ? "text-vivid-blue" : "text-med-blue"
                } font-fredoka  hover:text-vivid-blue`}
                to={to}
            >
                {text}
            </NavLink>
        </li>
    );
};

export default NavItem;
