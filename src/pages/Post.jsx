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
        <div className="p-3 pt-[80px] md:pt-[100px] md:max-w-[700px] md:mx-auto">
            <div className="content">
                <img
                    className="rounded-md"
                    src={`http://localhost:8800/uploads/${post?.img}`}
                    alt=""
                />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                    <div className="flex items-center">
                        <h3 className="text-sm font-fredoka text-med-blue mr-3 capitalize">
                            {post.username}
                        </h3>
                        <p className="font-fredoka text-sm italic text-stone-400">
                            posted {moment(post.date).fromNow()}
                        </p>
                    </div>
                </div>
                <h1 className="font-fredoka text-med-blue text-2xl capitalize my-2">
                    {post.title}
                </h1>
                <p className="font-fredoka text-med-blue text-md border-b-2 py-3 border-stone-100">
                    {getText(post.desc)}
                </p>
                {currentUser.username === post.username && (
                    <div className="flex my-3">
                        <Link
                            className="bg-vivid-blue hover:bg-cyan-600 py-2 px-1 rounded-md flex justify-center items-center"
                            to={`/write?edit=${post.id}`}
                            state={post}
                        >
                            <MdEdit className="mx-2 text-white text-xl" />
                        </Link>
                        <div
                            className="mx-2 text-white bg-red-500 text-xl rounded-md hover:bg-red-600 py-2 px-1 rounded-md flex justify-center items-center"
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
            <Menu cat={post.cat} />
        </div>
    );
};

export default Post;
