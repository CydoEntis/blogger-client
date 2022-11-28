import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import Logo from "../img/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav((prev) => !prev);
    };

    return (
        <>
            <div className="relative flex justify-between items-center p-3">
                <div className="text-3xl">
                    <Link to="/">
                        <h3 className="font-fredoka text-med-blue">Bloggish</h3>
                    </Link>
                </div>
                {/* Mobile Nav */}

                <NavbarIcon showNav={showNav} onClick={handleClick} />
                <DesktopNav className="hidden lg:flex items-center" />
                {showNav && (
                    <MobileNav
                        className="p-0 fixed top-[60px] z-50 bg-white w-[100%] rounded-b-lg"
                        onClick={handleClick}
                    />
                )}
            </div>
        </>
    );
};

export default Navbar;
