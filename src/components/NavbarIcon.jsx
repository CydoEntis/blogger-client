import React from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function NavbarIcon({ showNav, onClick }) {
  return (
    <button
      type="button"
      className="hover:border-[#3ACCFF] lg:hidden"
      onClick={onClick}
    >
      {!showNav && (
        <FaBars className="text-2xl text-[#2E3A5E] hover:text-[#3ACCFF]" />
      )}
      {showNav && (
        <IoCloseSharp className="text-2xl text-[#2E3A5E] hover:text-[#3ACCFF]" />
      )}
    </button>
  );
}

export default NavbarIcon;
