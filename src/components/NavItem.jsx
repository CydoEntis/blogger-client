import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavItem({ className, text, to, onClick }) {
  const location = useLocation();
  const query = `/${location.search}`;

  return (
    <li className={className}>
      <NavLink
        className={`${
          query === to ? "underline font-semibold" : ""
        }  capitalize text-xl sm:text-2xl lg:text-lg hover:underline`}
        to={to}
        onClick={onClick}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default NavItem;
