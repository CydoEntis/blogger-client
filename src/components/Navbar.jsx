import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavbarIcon from "./NavbarIcon";

function Navbar() {
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
    <div className="flex fixed z-50 w-full bg-white h-[100px]">
      <div className="w-full flex justify-between items-center  p-3 xl:w-[1440px] xl:mx-auto">
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
      </div>
      {showNav && (
        <MobileNav
          className="fixed top-[100px] z-50 bg-white w-full"
          onClick={handleClick}
          onLogout={handleLogout}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default Navbar;
