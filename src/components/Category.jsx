import React from "react";

const Category = ({ value, text, cat, onChange }) => {
    return (
        <div className="cat">
            <input
                type="radio"
                name="cat"
                checked={cat === value}
                value={value}
                id={value}
                onChange={onChange}
            />
            <label htmlFor={value}>{text}</label>
        </div>
    );
};

export default Category;
