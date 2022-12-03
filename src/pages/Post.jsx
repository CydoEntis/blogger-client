import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import { getText } from "../util";

const Post = () => {
    const [post, setPost] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="py-[125px] px-3  md:max-w-[700px] md:mx-auto lg:max-w-[1024px]">
            <div className="content">
                <img
                    className="w-full h-full"
                    src={`http://localhost:8800/uploads/${post?.img}`}
                    alt=""
                />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                    <div className="flex items-center">
                        <h3 className="text-sm  text-med-blue mr-3 capitalize lg:text-xl">
                            {post.username}
                        </h3>
                        <p className=" text-sm italic text-stone-400 lg:text-xl">
                            posted {moment(post.date).fromNow()}
                        </p>
                    </div>
                </div>
                <h1 className=" text-med-blue text-[1.75rem] font-bold capitalize my-2 lg:text-[2.15rem]">
                    {post.title}
                </h1>
                <p className=" text-med-blue text-xl border-b-2 py-3 border-stone-100 lg:text-xl">
                    {getText(post.desc)}
                </p>
                {currentUser.username === post.username && (
                    <div className="flex my-3">
                        <Link
                            className="bg-med-blue hover:opacity-90 py-2 px-1 flex justify-center items-center  duration-300 ease-out transition-all"
                            to={`/write?edit=${post.id}`}
                            state={post}
                        >
                            <MdEdit className="mx-2 text-white text-xl" />
                        </Link>
                        <div
                            className="mx-2 text-white bg-red-500 text-xl hover:bg-red-600 py-2 px-1 flex justify-center items-center cursor-pointer duration-300 ease-out transition-all"
                            onClick={handleDelete}
                        >
                            <FaTrash
                                className="mx-2 text-white"
                                onClick={handleDelete}
                            />
                        </div>
                    </div>
                )}
            </div>
            {/* <Menu cat={post.cat} /> */}
        </div>
    );
};

export default Post;
