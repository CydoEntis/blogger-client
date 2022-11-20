import React from "react";

const Category = ({ value, text, onChange }) => {
    return (
        <div className="cat">
            <input
                type="radio"
                name="cat"
                value={value}
                id={value}
                onChange={onChange}
            />
            <label htmlFor={value}>{text}</label>
        </div>
    );
};

export default Category;
