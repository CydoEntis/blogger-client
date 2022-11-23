import React, { useState, useEffect } from "react";
import axios from "axios";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

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
        <div className="post">
            <div className="content">
                <img
                    src={`http://localhost:8800/uploads/${post?.img}`}
                    alt=""
                />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=${post.id}`} state={post}>
                                <img src={Edit} alt="" />
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
            </div>
            <Menu cat={post.cat} />
        </div>
    );
};

export default Post;
