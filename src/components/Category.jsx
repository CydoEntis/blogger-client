import React from "react";

function Category({ value, text, cat, onChange }) {
  return (
    <div className="flex items-center mr-5">
      <input
        type="radio"
        name="cat"
        checked={cat === value}
        value={value}
        id={value}
        onChange={onChange}
        className="w-5 h-5"
      />
      <label className="ml-2 text-lg " htmlFor={value}>
        {text}
      </label>
    </div>
  );
}

export default Category;
