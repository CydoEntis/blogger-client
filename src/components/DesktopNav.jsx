import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import AuthItem from "./AuthItem";
import NavItem from "./NavItem";

const DesktopNav = ({ className, onLogout, currentUser }) => {
    return (
        <nav className={className}>
            <ul className="flex justify-around items-center">
                <NavItem text="art" to="/?cat=art&page=1" className="mr-3" />
                <NavItem
                    text="gaming"
                    to="/?cat=gaming&page=1"
                    className="mr-3"
                />
                <NavItem
                    text="technology"
                    to="/?cat=technology&page=1"
                    className="mr-3"
                />
                <NavItem
                    text="cinema"
                    to="/?cat=cinema&page=1"
                    className="mr-3"
                />
                <NavItem
                    text="design"
                    to="/?cat=design&page=1"
                    className="mr-3"
                />
                <NavItem text="food" to="/?cat=food&page=1" className="mr-3" />
                {currentUser && (
                    <>
                        <p className=" text-med-blue capitalize text-xl mr-3">
                            Hello, {currentUser.username}
                        </p>
                        <Link
                            className="mr-3 font-bold text-med-blue bg-white border-2 border-med-blue py-3 px-5 rounded-md cursor-pointer hover:text-white hover:bg-med-blue tansition duration-300 ease-out"
                            to="/write"
                        >
                            New Post
                        </Link>
                        <button
                            className=" my-3 text-white border-2 border-med-blue font-bold py-3 px-5 rounded-md bg-med-blue cursor-pointer hover:text-med-blue hover:bg-white tansition duration-300 ease-out"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </>
                )}
                {!currentUser && (
                    <>
                        <AuthItem
                            text="Login"
                            to="/login"
                            className="mr-3  my-3 text-white border-2 border-med-blue font-bold py-3 px-5 rounded-md bg-med-blue cursor-pointer hover:text-med-blue hover:bg-white tansition duration-300 ease-out"
                        />
                        <AuthItem
                            text="Register"
                            to="/register"
                            className=" my-3 text-white border-2 border-med-blue font-bold py-3 px-5 rounded-md bg-med-blue cursor-pointer hover:text-med-blue hover:bg-white tansition duration-300 ease-out"
                        />
                    </>
                )}
            </ul>
        </nav>
    );
};

export default DesktopNav;
