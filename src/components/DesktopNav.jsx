import React from "react";
import NavItem from "./NavItem";

const DesktopNav = ({ className }) => {
    return (
        <nav className={className}>
            <ul className="flex md:w-[600px] justify-around items-center">
                <NavItem text="art" to="/?cat=art" className="py-3" />
                <NavItem text="science" to="/?cat=science" className="py-3" />
                <NavItem
                    text="technology"
                    to="/?cat=technology"
                    className="py-3"
                />
                <NavItem text="cinema" to="/?cat=cinema" className="py-3" />
                <NavItem text="design" to="/?cat=design" className="py-3" />
                <NavItem text="food" to="/?cat=food" className="py-3" />
            </ul>
        </nav>
    );
};

export default DesktopNav;
