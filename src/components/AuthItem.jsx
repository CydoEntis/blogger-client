import React from "react";

import { Link } from "react-router-dom";

const AuthItem = ({ to, text, className }) => {
    return (
        <Link className={className} to={to}>
            {text}
        </Link>
    );
};

export default AuthItem;
