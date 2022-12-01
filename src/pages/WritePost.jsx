import axios from "axios";
import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import Category from "../components/Category";

const WritePost = () => {
    const state = useLocation().state;
    const navigate = useNavigate();
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
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="pt-[80px] lg:pt-[100px] p-3 lg:max-w-[850px] lg:mx-auto xl:max-w-[1000px] 2xl:max-w-[1240px]">
            <div className="w-full  mb-[100px]">
                <input
                    className="text-med-blue w-full py-1 text-xl xl:text-2xl focus:outline-none"
                    value={title}
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="editorContainer">
                    <ReactQuill
                        className="w-full h-[250px]"
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between lg:justify-start my-5">
                    <input
                        style={{ display: "none" }}
                        type="file"
                        name=""
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label
                        className=" text-white bg-med-blue px-3 py-2 rounded-md mb-2 cursor-pointer hover:brightness-75"
                        htmlFor="file"
                    >
                        Upload Image
                    </label>
                    <button
                        className=" text-white bg-med-blue px-3 py-2 rounded-md mb-2 lg:mx-3 cursor-pointer hover:brightness-75"
                        onClick={handleClick}
                    >
                        Publish
                    </button>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Category
                        cat={cat}
                        value="art"
                        text="Art"
                        onChange={(e) => setCat(e.target.value)}
                    />
                    <Category
                        cat={cat}
                        value="gaming"
                        text="Gaming"
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
