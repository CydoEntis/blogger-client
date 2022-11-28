import React from "react";
import NavItem from "./NavItem";

const MobileNav = ({ className, onClick }) => {
    return (
        <nav className={className}>
            <ul className="text-center rounded-b-lg drop-shadow-md">
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
        </nav>
    );
};

export default MobileNav;
