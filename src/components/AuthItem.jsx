import React from "react";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AuthItem({ to, text, className }) {
  return (
    <Link className={className} to={to}>
      {text}
    </Link>
  );
}

export default AuthItem;
