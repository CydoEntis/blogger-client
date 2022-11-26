import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getText } from "../util";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const location = useLocation();

    const category = location.search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${category}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div className="">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img
                                src={`http://localhost:8800/uploads/${post?.img}`}
                                alt=""
                            />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
