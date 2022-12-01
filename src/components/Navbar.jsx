import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setShowNav((prev) => !prev);
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="fixed z-40 w-full bg-white h-[100px]">
            <div className="w-full flex justify-between items-center p-3 xl:w-[1440px] xl:mx-auto">
                <div className="text-3xl">
                    <Link to="/">
                        <h3 className=" text-med-blue">Bloggish</h3>
                    </Link>
                </div>
                <NavbarIcon showNav={showNav} onClick={handleClick} />
                <DesktopNav
                    className="hidden lg:flex items-center"
                    onLogout={handleLogout}
                    currentUser={currentUser}
                />
                {showNav && (
                    <MobileNav
                        className="p-0 fixed top-[60px] z-50 bg-white w-[100%] rounded-b-lg"
                        onClick={handleClick}
                        onLogout={handleLogout}
                        currentUser={currentUser}
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
