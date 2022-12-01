import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import HeadBlogPost from "../components/HeadBlogPost";

const Home = () => {
    const [newestPost, setNewestPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const location = useLocation();

    const category = location.search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${category}`);
                let firstPost = res.data.shift();
                setNewestPost(firstPost);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [category]);

    console.log(newestPost);
    console.log(posts);

    return (
        <div className="mx-auto pt-[120px] w-[1240px]">
            <HeadBlogPost post={newestPost} />
            <div className="flex flex-wrap justify-between">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Home;
