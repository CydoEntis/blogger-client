import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../components/BlogCard";

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
        <div className="p-3 pt-[80px] grid grid-cols gap-4 grid-cols-1 md:grid-cols-2 md:pt-[100px] xl:w-[1440px] xl:mx-auto xl:grid-cols-3 2xl:grid-cols-3">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Home;
