import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const MobileNav = ({ isMobile }) => {
    return (
        <div className="absolute top-[80px] z-50 bg-white w-full border-t-[1px] border-med-blue">
            <ul className="text-center md:w-[600px]">
                <NavItem text="art" to="/?cat=art" className="py-3" />
                <NavItem text="science" to="/?cat=science" />
                <NavItem text="technology" to="/?cat=technology" />
                <NavItem text="cinema" to="/?cat=cinema" />
                <NavItem text="design" to="/?cat=design" />
                <NavItem text="food" to="/?cat=food" />
            </ul>
        </div>
    );
};

export default MobileNav;
