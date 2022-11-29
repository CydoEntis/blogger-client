import React from "react";

const Category = ({ value, text, cat, onChange }) => {
    return (
        <div className="">
            <input
                type="radio"
                name="cat"
                checked={cat === value}
                value={value}
                id={value}
                onChange={onChange}
            />
            <label className="ml-2 font-fredoka" htmlFor={value}>
                {text}
            </label>
        </div>
    );
};

export default Category;
