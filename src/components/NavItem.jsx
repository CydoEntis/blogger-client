import React from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ className, text, to, onClick }) => {
    const location = useLocation();
    let query = "/" + location.search;

    return (
        <li className={className}>
            <NavLink
                className={`${
                    query === to ? "text-vivid-blue" : "text-med-blue"
                } font-fredoka capitalize text-xl sm:text-2xl lg:text-lg hover:text-vivid-blue`}
                to={to}
                onClick={onClick}
            >
                {text}
            </NavLink>
        </li>
    );
};

export default NavItem;
