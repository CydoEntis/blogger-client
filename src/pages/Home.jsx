import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import HeadBlogPost from "../components/HeadBlogPost";
import Pagination from "../components/Pagination";

const Home = () => {
    const [newestPost, setNewestPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const [error, setError] = useState(false);
    const [searchParams] = useSearchParams();
    let category = "";
    let params = searchParams.toString();
    if (params.includes("cat")) {
        category = params.substring(params.indexOf("/"), params.indexOf("&"));
    }

    let endpoint = `/posts/?${searchParams}`;

    console.log("Search Params: ", searchParams);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(endpoint);
                if (res.data.data.length === 0) {
                    setError(true);
                } else {
                    setError(false);
                    let firstPost = res.data.data.shift();
                    setNewestPost(firstPost);
                    setPosts(res.data.data);
                    setNumOfPages(res.data.numOfPages);
                }
            } catch (err) {
                setError(true);
                // console.log(err);
            }
        };
        fetchData();
    }, [endpoint]);

    return (
        <div className="relative mx-auto py-[120px] p-3 w-full lg:w-[1024px] xl:w-[1240px]">
            {error && <p>No posts found</p>}
            {!error && (
                <>
                    <HeadBlogPost post={newestPost} />
                    <div className="flex flex-col justify-center md:flex-row md:flex-wrap">
                        {posts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                className="bg-white m-1 md:min-w-[300px] md:max-w-[350px] lg:min-w-[490px] xl:min-w-[395px] "
                            />
                        ))}
                    </div>
                    {numOfPages > 1 && (
                        <Pagination
                            numOfPages={numOfPages}
                            category={category}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Home;
