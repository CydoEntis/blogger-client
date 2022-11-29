import React from "react";

import { Link } from "react-router-dom";

const AuthItem = ({ to, text, className }) => {
    return (
        <li className={className}>
            <Link
                className="text-white capitalize py-3 px-5 rounded-md bg-med-blue"
                to={to}
            >
                {text}
            </Link>
        </li>
    );
};

export default AuthItem;
