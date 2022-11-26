import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import Logo from "../img/logo.png";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="w-full h-[80px] flex flex-row justify-end items-center bg-stone-900 text-white">
            <div className="">
                {/* <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div> */}
                <div className="flex items-center">
                    <Link className="mx-3" to="/?cat=art">
                        <h6>Art</h6>
                    </Link>
                    <Link className="mx-3" to="/?cat=science">
                        <h6>Science</h6>
                    </Link>
                    <Link className="mx-3" to="/?cat=technology">
                        <h6>Technology</h6>
                    </Link>
                    <Link className="mx-3" to="/?cat=cinema">
                        <h6>Cinema</h6>
                    </Link>
                    <Link className="mx-3" to="/?cat=design">
                        <h6>Design</h6>
                    </Link>
                    <Link className="mx-3" to="/?cat=food">
                        <h6>Food</h6>
                    </Link>
                    <span className="mx-3">{currentUser?.username}</span>
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
