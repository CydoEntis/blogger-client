import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import Logo from "../img/logo.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav((prev) => !prev);
    };

    return (
        <>
            <div className="p-3 flex justify-between items-center">
                <div className="text-3xl">
                    <Link to="/">
                        <h3 className="font-fredoka text-med-blue">Bloggish</h3>
                    </Link>
                </div>
                {/* Mobile Nav */}
                <div
                    className="p-3 border border-[#2E3A5E] rounded-md hover:border-[#3ACCFF]"
                    onClick={handleClick}
                >
                    {!showNav && (
                        <FaBars className="text-2xl text-[#2E3A5E] hover:text-[#3ACCFF]" />
                    )}
                    {showNav && (
                        <IoCloseSharp className="text-2xl text-[#2E3A5E] hover:text-[#3ACCFF]" />
                    )}
                </div>

                {/* <div className="hidden md:flex items-center">
                <ul className="flex md:w-[600px] justify-around border  items-center">
                    <li className="">
                        <Link className=" hover:text-customBlue" to="/?cat=art">
                            Art
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className=" hover:text-customBlue"
                            to="/?cat=science"
                        >
                            Science
                        </Link>
                    </li>
                    <li className=" ">
                        <Link
                            className=" hover:text-customBlue"
                            to="/?cat=technology"
                        >
                            Technology
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className=" hover:text-customBlue"
                            to="/?cat=cinema"
                        >
                            Cinema
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className=" hover:text-customBlue"
                            to="/?cat=design"
                        >
                            Design
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            className=" hover:text-customBlue"
                            to="/?cat=food"
                        >
                            Food
                        </Link>
                    </li>
                </ul>

                <span className=" hover:text-customBlue">
                    {currentUser?.username}
                </span>
                {currentUser ? (
                    <button
                        className="mx-3 py-2 px-5 bg-red-500 hover:bg-red-600 rounded-xl shadow-md transition ease-in-out duration-300"
                        onClick={logout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link className="mx-3" to="/login">
                        Login
                    </Link>
                )}
                <Link
                    className="mx-3 py-2 px-5 bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-md transition ease-in-out duration-300"
                    to="/write"
                >
                    Write
                </Link>
            </div> */}
            </div>
            {showNav && <MobileNav onClick={handleClick} />}
        </>
    );
};

export default Navbar;
