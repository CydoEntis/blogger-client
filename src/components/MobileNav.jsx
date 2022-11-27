import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const MobileNav = ({ isMobile, onClick }) => {
    return (
        <div className="absolute top-[80px] z-50 bg-white w-full border-t-[1px] border-med-blue rounded-b-lg">
            <ul className="text-center md:w-[600px] rounded-b-lg drop-shadow-md">
                <NavItem
                    text="art"
                    to="/?cat=art"
                    className="py-3"
                    onClick={onClick}
                />
                <NavItem
                    text="science"
                    to="/?cat=science"
                    className="py-3"
                    onClick={onClick}
                />
                <NavItem
                    text="technology"
                    to="/?cat=technology"
                    className="py-3"
                />
                <NavItem
                    text="cinema"
                    to="/?cat=cinema"
                    className="py-3"
                    onClick={onClick}
                />
                <NavItem
                    text="design"
                    to="/?cat=design"
                    className="py-3"
                    onClick={onClick}
                />
                <NavItem
                    text="food"
                    to="/?cat=food"
                    className="py-3"
                    onClick={onClick}
                />
            </ul>
        </div>
    );
};

export default MobileNav;
