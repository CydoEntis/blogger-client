import React, { useContext } from "react";
import AuthItem from "./AuthItem";
import NavItem from "./NavItem";

import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const MobileNav = ({ className, onClick, onLogout, currentUser }) => {
    return (
        <nav className={className}>
            <ul className="text-center">
                <NavItem
                    text="art"
                    to="/?cat=art"
                    className="py-3 sm:text-2xl"
                    onClick={onClick}
                />
                <NavItem
                    text="gaming"
                    to="/?cat=gaming"
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
                    className="py-3 mb-5"
                    onClick={onClick}
                />
                {currentUser && (
                    <>
                        <p className=" text-med-blue capitalize text-xl">
                            Hello, {currentUser.username}
                        </p>
                        <div className="flex flex-col p-5">
                            <Link
                                className=" font-bold text-med-blue bg-white border-2 border-med-blue py-3 px-5 rounded-md cursor-pointer hover:text-white hover:bg-med-blue tansition duration-300 ease-out"
                                to="/write"
                            >
                                New Post
                            </Link>
                            <button
                                className=" my-3 text-white py-3 px-5 rounded-md bg-med-blue"
                                onClick={onLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </>
                )}
                {!currentUser && (
                    <>
                        <AuthItem
                            text="login"
                            to="/login"
                            className="w-[50%] mx-auto my-3 py-3 px-5 rounded-md bg-med-blue"
                        />
                        <AuthItem
                            text="register"
                            to="/register"
                            className="w-[50%] mx-auto my-3 py-3 px-5  bg-med-blue rounded-md"
                        />
                    </>
                )}
            </ul>
        </nav>
    );
};

export default MobileNav;
