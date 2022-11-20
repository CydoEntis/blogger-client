import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Category from "../components/Category";

const AddPost = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState("");

    return (
        <div className="add">
            <div className="content">
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="editorContainer">
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input
                        style={{ display: "none" }}
                        type="file"
                        name=""
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label className="file" htmlFor="file">
                        Upload Image
                    </label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>

                    <Category
                        value="art"
                        text="Art"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        value="science"
                        text="Science"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        value="technology"
                        text="Technology"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        value="cinema"
                        text="Cinema"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        value="design"
                        text="Design"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        value="food"
                        text="Food"
                        onChange={(e) => setCat(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddPost;
