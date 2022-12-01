import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import AuthItem from "./AuthItem";
import NavItem from "./NavItem";

const DesktopNav = ({ className, onLogout, currentUser }) => {
    return (
        <nav className={className}>
            <ul className="flex justify-around items-center">
                <NavItem text="art" to="/?cat=art" className="mr-3" />
                <NavItem text="gaming" to="/?cat=gaming" className="mr-3" />
                <NavItem
                    text="technology"
                    to="/?cat=technology"
                    className="mr-3"
                />
                <NavItem text="cinema" to="/?cat=cinema" className="mr-3" />
                <NavItem text="design" to="/?cat=design" className="mr-3" />
                <NavItem text="food" to="/?cat=food" className="mr-3" />
                {currentUser && (
                    <>
                        <p className=" text-med-blue capitalize text-xl mr-3">
                            Hello, {currentUser.username}
                        </p>
                        <Link
                            className="mr-3  text-white bg-vivid-blue py-3 px-5 rounded-md cursor-pointer hover:brightness-75"
                            to="/write"
                        >
                            New Post
                        </Link>
                        <button
                            className=" my-3 text-white py-3 px-5 rounded-md bg-med-blue cursor-pointer hover:brightness-75"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </>
                )}
                {!currentUser && (
                    <>
                        <AuthItem
                            text="login"
                            to="/login"
                            className="w-[50%] mx-auto my-3 py-3 px-5 rounded-md bg-med-blue mr-3"
                        />
                        <AuthItem
                            text="register"
                            to="/register"
                            className="w-[50%] mx-auto my-3 py-3 px-5  bg-med-blue rounded-md "
                        />
                    </>
                )}
            </ul>
        </nav>
    );
};

export default DesktopNav;
