import React from "react";

import { Link } from "react-router-dom";

const AuthItem = ({ to, text, className }) => {
    return (
        <li className={className}>
            <Link className="text-white capitalize" to={to}>
                {text}
            </Link>
        </li>
    );
};

export default AuthItem;
