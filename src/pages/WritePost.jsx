import axios from "axios";
import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";

const WritePost = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            console.log(file);
            const res = await axios.post("/upload", formData);

            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const imageUrl = await upload();

        try {
            state
                ? await axios.put(`/posts/${state.id}`, {
                      title,
                      desc: value,
                      cat,
                      img: file ? imageUrl : "",
                  })
                : await axios.post(`/posts/`, {
                      title,
                      desc: value,
                      cat,
                      img: file ? imageUrl : "",
                      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                  });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="add">
            <div className="content">
                <input
                    value={title}
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
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>

                    <Category
                        cat={cat}
                        value="art"
                        text="Art"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        cat={cat}
                        value="science"
                        text="Science"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        cat={cat}
                        value="technology"
                        text="Technology"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        cat={cat}
                        value="cinema"
                        text="Cinema"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        cat={cat}
                        value="design"
                        text="Design"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        cat={cat}
                        value="food"
                        text="Food"
                        onChange={(e) => setCat(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default WritePost;
