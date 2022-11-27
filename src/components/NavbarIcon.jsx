import React from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const NavbarIcon = ({ showNav, onClick }) => {
    return (
        <div
            className="p-3 border border-[#2E3A5E] rounded-md hover:border-[#3ACCFF] xl:hidden"
            onClick={onClick}
        >
            {!showNav && (
                <FaBars className="text-2xl text-[#2E3A5E] hover:text-[#3ACCFF]" />
            )}
            {showNav && (
                <IoCloseSharp className="text-2xl text-[#2E3A5E] hover:text-[#3ACCFF]" />
            )}
        </div>
    );
};

export default NavbarIcon;