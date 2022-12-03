import React from "react";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ numOfPages, category }) => {
    const location = useLocation();
    const pageNumbers = [];

    let queryParams = location.search;
    console.log(queryParams);

    for (let i = 1; i <= numOfPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="w-full">
            <ul className="flex mt-3">
                {pageNumbers.map((pageNumber) => (
                    <li className="mr-3" key={pageNumber}>
                        {category && (
                            <NavLink
                                className={
                                    queryParams ===
                                    `?${category}&page=${pageNumber}`
                                        ? "px-5 py-3 bg-med-blue border-2 border-med-blue text-white"
                                        : "px-5 py-3 border-2 border-med-blue text-med-blue hover:bg-med-blue hover:text-white transition-all duration-300 ease-in-out"
                                }
                                to={`/?${category}&page=${pageNumber}`}
                            >
                                {pageNumber}
                            </NavLink>
                        )}
                        {!category && (
                            <NavLink
                                className={
                                    queryParams === `?page=${pageNumber}` ||
                                    (pageNumber === 1 && queryParams === "")
                                        ? "px-5 py-3 bg-med-blue border-2 border-med-blue text-white"
                                        : "px-5 py-3 border-2 border-med-blue text-med-blue hover:bg-med-blue hover:text-white transition-all duration-300 ease-in-out"
                                }
                                to={`/?page=${pageNumber}`}
                            >
                                {pageNumber}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;