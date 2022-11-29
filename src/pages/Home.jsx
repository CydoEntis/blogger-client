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
        <div className="p-3 pt-[80px] lg:pt-[100px] grid grid-cols-1 gap-7 place-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post) => (
                <div className="rounded-xl relative bg-zinc-600 " key={post.id}>
                    <div className="w-full mix-blend-overlay">
                        <img
                            className="rounded-xl"
                            src={`http://localhost:8800/uploads/${post?.img}`}
                            alt=""
                        />
                    </div>
                    <div className="absolute bottom-0 py-2 ml-3 text-white font-fredoka">
                        <Link className="link" to={`/post/${post.id}`}>
                            <h1 className="font-fredoka capitalize text-2xl">
                                {post.title}
                            </h1>
                        </Link>
                        <p className="text-xl">{getText(post.desc) + "..."}</p>
                        <Link
                            className="font-fredoka py-1 px-3 rounded-md bg-med-blue text-lg hover:bg-white hover:text-med-blue transition-all ease-in-out duration-300"
                            to={`/post/${post.id}`}
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
